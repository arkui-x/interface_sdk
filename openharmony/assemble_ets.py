#!/usr/bin/env python
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

"""Assemble the openharmony/ets SDK directory from the 4 OH SDK dynamic ets
components (api, arkts, component, kits) produced at ohos_dynamic/.

The 4 component directories are merged into a single ets/ directory, matching
the OH OS SDK ets package layout expected under arkui-x/openharmony/ets.
"""

import argparse
import os
import shutil
import sys


def copy_component(src, dest_root):
    """Copy a component directory into dest_root, preserving its basename."""
    if not os.path.isdir(src):
        return
    name = os.path.basename(os.path.normpath(src))
    dest = os.path.join(dest_root, name)
    shutil.copytree(src, dest, dirs_exist_ok=True)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--api', required=True)
    parser.add_argument('--arkts', required=True)
    parser.add_argument('--component', required=True)
    parser.add_argument('--kits', required=True)
    parser.add_argument('--output', required=True)
    args = parser.parse_args()

    os.makedirs(args.output, exist_ok=True)
    copy_component(args.api, args.output)
    copy_component(args.arkts, args.output)
    copy_component(args.component, args.output)
    copy_component(args.kits, args.output)


if __name__ == '__main__':
    sys.exit(main())
