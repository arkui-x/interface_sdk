/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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

import { CommonMethod } from './CommonMethod';

/**
 * Defines PlatformView.
 *
 * @interface PlatformViewInterface
 * @crossplatform
 * @since 14
 */
interface PlatformViewInterface {
  /**
   * Constructor parameters
   *
   * @param { string } id of the PlatformView.
   * @returns { PlatformViewAttribute }
   * @crossplatform
   * @since 14
   */
  (id: string): PlatformViewAttribute;
}

/**
 * Defines PlatformViewAttribute.
 *
 * @extends CommonMethod
 * @crossplatform
 * @since 14
 */
export declare class PlatformViewAttribute extends CommonMethod<PlatformViewAttribute> {
}

/**
 * Defines PlatformView Component.
 *
 * @crossplatform
 * @since 14
 */
declare const PlatformView: PlatformViewInterface;


/**
 * Defines PlatformView Component instance.
 *
 * @crossplatform
 * @since 14
 */
declare const PlatformViewInstance: PlatformViewAttribute;

export default PlatformView