#!/usr/bin/env node
/*
 * Copyright (c) 2021-2026 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Transform a declaration file (global.d.ts / featureability.d.ts) the same way
 * build_declarations_file.js does for the OH SDK ets-loader/declarations:
 *   - Remove all import declarations
 *   - Remove export modifiers
 *   - Swap variable name↔type when name contains type
 *   - Optionally prepend license header
 *
 * Since ArkUI-X SDK does not include ets-loader, these transformed files are
 * packaged into ets/component/ instead.
 */

const fs = require('fs');
const path = require('path');
// typescript is in interface/sdk-js/build-tools/node_modules (not alongside
// this script). Resolve it relative to __dirname so node finds it regardless
// of cwd.
const ts = require(path.resolve(__dirname, '../../sdk-js/build-tools/node_modules/typescript'));

const LICENSE = `/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */`;

function isVariable(node) {
  if (ts.isVariableStatement(node) && node.declarationList && node.declarationList.declarations &&
    node.declarationList.declarations.length && ts.isVariableDeclaration(node.declarationList.declarations[0]) &&
    node.declarationList.declarations[0].name && node.declarationList.declarations[0].type) {
    return true;
  }
  return false;
}

// Copied from build_declarations_file.js (developtools/ace_ets2bundle/compiler/)
function processsFile(content, fileName, isGlobal) {
  let sourceFile = ts.createSourceFile(fileName, content, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  const newStatements = [];
  if (sourceFile.statements && sourceFile.statements.length) {
    if (isGlobal) {
      sourceFile.statements.forEach((node) => {
        if (!ts.isImportDeclaration(node)) {
          let modifiers = ts.canHaveModifiers(node) ? ts.getModifiers(node) : undefined;
          if (modifiers && modifiers.length && modifiers[0].kind === ts.SyntaxKind.ExportKeyword) {
            modifiers.splice(0, 1);
          }
          if (isVariable(node)) {
            const name = node.declarationList.declarations[0].name.getText();
            const type = node.declarationList.declarations[0].type.getText();
            if (name.indexOf(type) !== -1) {
              const declarationNode = ts.factory.updateVariableDeclaration(node.declarationList.declarations[0],
                ts.factory.createIdentifier(type), node.declarationList.declarations[0].exclamationToken,
                node.declarationList.declarations[0].type, node.declarationList.declarations[0].initializer);
              node.declarationList = ts.factory.updateVariableDeclarationList(node.declarationList, [declarationNode]);
            }
          }
          newStatements.push(node);
        }
      });
    } else {
      sourceFile.statements.forEach((node) => {
        newStatements.push(node);
      });
    }
  }
  sourceFile = ts.factory.updateSourceFile(sourceFile, newStatements);
  const printer = ts.createPrinter({ removeComments: false, newLine: ts.NewLineKind.LineFeed });
  const result = printer.printNode(ts.EmitHint.Unspecified, sourceFile, sourceFile);
  return result;
}

// Parse args: --input <file> --output <file> [--add-license]
const args = process.argv.slice(2);
let input = null;
let output = null;
let addLicense = false;
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--input' && i + 1 < args.length) input = args[++i];
  else if (args[i] === '--output' && i + 1 < args.length) output = args[++i];
  else if (args[i] === '--add-license') addLicense = true;
}

if (!input || !output) {
  console.error('Usage: transform_declarations.js --input <file> --output <file> [--add-license]');
  process.exit(1);
}

let content = fs.readFileSync(input, 'utf8');
content = processsFile(content, input, true);
if (addLicense) {
  content = LICENSE + '\n\n' + content;
}
fs.writeFileSync(output, content);
