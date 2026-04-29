#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Copyright (c) 2026 Huawei Device Co., Ltd.
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import argparse
import json
import re
from pathlib import Path


SYMBOL_REGEX = re.compile(
    r'(?<![A-Za-z0-9_.-])sys\.symbol\.[A-Za-z0-9_.-]+(?![A-Za-z0-9_.-])'
)
FALLBACK_MODULE = 'engine/arkui'
SCAN_DIRS = [
    Path('foundation/arkui/ace_engine/advanced_ui_component'),
    Path('foundation/arkui/ace_engine/frameworks/core/components_ng'),
]


def normalize_token(value: str) -> str:
    return ''.join(ch.lower() for ch in value if ch.isalnum())


def collect_modules(search_dir: Path):
    modules = []
    seen = set()

    for config_path in sorted(search_dir.rglob('apiConfig.json')):
        try:
            with config_path.open('r', encoding='utf-8') as f:
                data = json.load(f)
        except (json.JSONDecodeError, OSError) as exc:
            print(f'[WARN] Skip invalid json: {config_path} ({exc})')
            continue

        if not isinstance(data, list):
            continue

        for item in data:
            if not isinstance(item, dict):
                continue
            module = item.get('module')
            if isinstance(module, str) and module not in seen:
                seen.add(module)
                modules.append(module)

    return modules


def find_repo_root(search_dir: Path):
    current = search_dir
    while current != current.parent:
        if (current / 'foundation').exists() and (current / 'interface').exists():
            return current
        current = current.parent
    return search_dir


def extract_file_symbols(file_path: Path):
    try:
        raw = file_path.read_bytes()
    except OSError:
        return set()

    try:
        text = raw.decode('utf-8')
    except UnicodeDecodeError:
        # Keep undecodable bytes via surrogate escapes to avoid silently
        # dropping content that could affect symbol matching.
        text = raw.decode('utf-8', errors='surrogateescape')

    return set(SYMBOL_REGEX.findall(text))


def build_module_index(modules):
    index = []
    for module in modules:
        suffix = module.split('.')[-1].split('/')[-1]
        token = normalize_token(suffix)
        if token:
            index.append({'module': module, 'token': token})
    return index


def pick_module_for_file(file_path: Path, module_index):
    rel_posix = file_path.as_posix().lower()
    rel_norm = normalize_token(rel_posix)
    path_parts = [normalize_token(part) for part in file_path.parts]

    candidates = module_index
    if 'advanced_ui_component' in rel_posix:
        candidates = [item for item in module_index if item['module'].startswith('ohos.arkui.advanced.')]

    exact_matches = []
    for item in candidates:
        token = item['token']
        if len(token) >= 4 and token in path_parts:
            exact_matches.append(item)
    if exact_matches:
        exact_matches.sort(key=lambda x: len(x['token']), reverse=True)
        return exact_matches[0]['module']

    fuzzy_matches = []
    for item in candidates:
        token = item['token']
        if len(token) >= 4 and token in rel_norm:
            fuzzy_matches.append(item)
    if fuzzy_matches:
        fuzzy_matches.sort(key=lambda x: len(x['token']), reverse=True)
        return fuzzy_matches[0]['module']

    return FALLBACK_MODULE


def collect_symbols(search_dir: Path, modules):
    repo_root = find_repo_root(search_dir)
    module_index = build_module_index(modules)
    symbol_map = {module: set() for module in modules}

    for relative_dir in SCAN_DIRS:
        scan_dir = repo_root / relative_dir
        if not scan_dir.exists():
            print(f'[WARN] Skip missing dir: {scan_dir}')
            continue

        for file_path in scan_dir.rglob('*'):
            if not file_path.is_file():
                continue
            symbols = extract_file_symbols(file_path)
            if not symbols:
                continue

            module = pick_module_for_file(file_path.relative_to(repo_root), module_index)
            if module not in symbol_map:
                module = FALLBACK_MODULE
            symbol_map[module].update(symbols)

    return symbol_map


def build_output(modules, symbol_map):
    output = []
    for module in modules:
        symbols = sorted(symbol_map.get(module, set()))
        if not symbols:
            continue
        output.append({
            'module': module,
            'symbol': symbols,
        })
    return output


def main():
    parser = argparse.ArgumentParser(
        description='Generate engine/extras/apiSymbolConfig.json from all apiConfig.json files.'
    )
    parser.add_argument(
        '--search-dir',
        default='.',
        help='Directory to recursively search for apiConfig.json. Default: current directory.',
    )
    parser.add_argument(
        '--output-file',
        default='',
        help='Output file path. Default: <search-dir>/engine/extras/symbol/apiSymbolConfig.json',
    )
    args = parser.parse_args()

    search_dir = Path(args.search_dir).resolve()
    if args.output_file:
        output_file = Path(args.output_file).resolve()
        output_dir = output_file.parent
    else:
        output_dir = search_dir / 'engine' / 'extras' / 'symbol'
        output_file = output_dir / 'apiSymbolConfig.json'

    modules = collect_modules(search_dir)
    if FALLBACK_MODULE not in modules:
        modules.insert(0, FALLBACK_MODULE)

    symbol_map = collect_symbols(search_dir, modules)
    output_data = build_output(modules, symbol_map)

    output_dir.mkdir(parents=True, exist_ok=True)
    with output_file.open('w', encoding='utf-8') as f:
        json.dump(output_data, f, ensure_ascii=False, indent=2)
        f.write('\n')

    print(f'Generated: {output_file}')
    print(f'Module count: {len(modules)}')


if __name__ == '__main__':
    main()
