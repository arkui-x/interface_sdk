#!/bin/bash
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
set -e
echo "copy system resources"

if [ "$1" == "" ] || [ "$2" == "" ]; then
    exit 1
fi

unzip -o -q -d $2 $1

cp -R "$2/assets/entry/resources" $2
cp -R "$2/assets/entry/resources.index" $2
rm -rf "$2/config.json"

rm -rf "$2/assets"