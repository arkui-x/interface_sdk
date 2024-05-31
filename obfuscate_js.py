#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Copyright (c) 2023 Huawei Device Co., Ltd.
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
import sys
import subprocess

def main():
    parser = argparse.ArgumentParser(
        description='execute npm run command to rollup the js code')
    parser.add_argument('--npm', help='Specify the path of npm', type=str,required=True)
    parser.add_argument('--prefix', help='Specify the directory containing the package.json file', type=str, required=True)
    parser.add_argument('--output', help='The target product path after packaging', type=str, required=True)
    args = parser.parse_args()
    
    errcode = subprocess.call([args.npm, 'install', '--prefix='+args.prefix])  #npm install
    if(errcode != 0):
        raise ValueError('npm install for ace tools is failed')
    errcode = subprocess.call([args.npm, 'run', 'build', '--prefix='+args.prefix, args.output]) #npm run build
    if(errcode != 0):
        raise ValueError('npm build for ace tools is failed')

if __name__ == '__main__':
    sys.exit(main())
