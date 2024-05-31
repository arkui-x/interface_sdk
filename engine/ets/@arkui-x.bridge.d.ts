/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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

import { AsyncCallback } from '@ohos.base';

/**
 * This module provides the capability to manage ArkUI-X bridge mechanism
 * @crossplatform
 * @since 10
 */
declare namespace Bridge {
    /**
     * Bridge data type definition.
     * @crossplatform
     * @since 10
     */
    type S = number | boolean | string | null | ArrayBuffer;
    /**
     * Bridge data type definition.
     * @crossplatform
     * @since 10
     */
    type T = S | Array<number> | Array<boolean> | Array<string>;
    /**
     * Bridge data type definition.
     * @crossplatform
     * @since 10
     */
    type Message = T | Record<string, T>;
    /**
     * Bridge data type definition.
     * @crossplatform
     * @since 10
     */
    type Parameter = Message;
    /**
     * Bridge data type definition.
     * @crossplatform
     * @since 10
     */
    type Response = Message;
    /**
     * Bridge data type definition.
     * @crossplatform
     * @since 10
     */
    type ResultValue = T | Map<string, T>;

    /**
     * Data transmission encoding type.
     * @crossplatform
     * @since 10
     */
    export enum BridgeType {
        /**
         * Json encoding mode, default.
         * @crossplatform
         * @since 10
         */
        JSON_TYPE = 0,
        
        /**
         * Binary stream encoding.
         * @crossplatform
         * @since 10
         */
        BINARY_TYPE = 1
    }

    /**
     * Creates the bridge and returns the bridge object.
     *
     * @param { string } bridgeName - Unique bridge name.
     * @returns { BridgeObject } Bridge object.
     * @crossplatform
     * @since 10
     */
    function createBridge(bridgeName: string): BridgeObject;

    /**
     * Creates the bridge and returns the bridge object.
     *
     * @param { string } bridgeName - Unique bridge name.
     * @param { BridgeType } type - BridgeType
     * @returns { BridgeObject } Bridge object.
     * @crossplatform
     * @since 10
     */
    function createBridge(bridgeName: string, type: BridgeType): BridgeObject;

    /**
     * Method or event interface.
     * @crossplatform
     * @since 10
     */
    export interface MethodData {
        /**
         * Method or event name.
         * @type {string}
         * @crossplatform
         * @since 10
        */
        name: string;

        /**
         * ResultValue the js-side method return value
         * @type { Method }
         * @crossplatform
         * @since 10
         */
        method: (...parameters: Array<Parameter>) => ResultValue;
    }

    /**
     * Method or event BridgeObject interface.
     * @crossplatform
     * @since 10
     */
    export interface BridgeObject {
        /**
         * Returns the bridge name provided when created by createPluginBridge.
         * @type { string }
         * @crossplatform
         * @since 10
         */
        bridgeName: string;

        /**
         * Invoke platform-side methods.
         * @param { string } methodName - The name of the called platform side method.
         * @param { Array<Parameter> } parameters - Platform method parameters to be called.
         * @returns { Promise<ResultValue> } Returns the platform-side method return value.
         * @crossplatform
         * @since 10
         */
        callMethod(methodName: string, ...parameters: Array<Parameter>): Promise<ResultValue>;

        /**
         * Register JS side methods for platform side calls.
         * @param { MethodData } method - Method for platform side invocation.
         * @param { AsyncCallback<void> } callback - The name of the called platform side method.
         * @crossplatform
         * @since 10
         */
        registerMethod(method: MethodData, callback: AsyncCallback<void>): void;
        /**
         * Register JS side methods for platform side calls.
         * @param { MethodData } method - Method for platform side invocation.
         * @returns { Promise<void> } the promise returned by the function.
         * @crossplatform
         * @since 10
         */
        registerMethod(method: MethodData): Promise<void>;

        /**
         * UnRegister JS side event.
         * @param { string } methodName - The name of JS side event.
         * @param { AsyncCallback<void> } callback - The name of the called platform side method.
         * @crossplatform
         * @since 10
         */
        unRegisterMethod(methodName: string, callback: AsyncCallback<void>): void;
        /**
         * UnRegister JS side event.
         * @param { string } methodName - The name of JS side event.
         * @returns { Promise<void> } the promise returned by the function.
         * @crossplatform
         * @since 10
         */
        unRegisterMethod(methodName: string): Promise<void>;

        /**
         * JS sends messages to the platform side.
         * @param { Message } message - The message sent by the JS side.
         * @param { AsyncCallback<Response> } callback - The name of the called platform side method.
         * @crossplatform
         * @since 10
         */
        sendMessage(message: Message, callback: AsyncCallback<Response>): void;
        /**
         * JS sends messages to the platform side.
         * @param { Message } message - The message sent by the JS side.
         * @returns { Promise<Response> } The promise returned by the function.
         * @crossplatform
         * @since 10
         */
        sendMessage(message: Message): Promise<Response>;

        /**
         * Receive messages from the platform.
         * @param { Method } callback The message sent by the platform side.
         * @crossplatform
         * @since 10
         */
        setMessageListener(callback: (message: Message) => Response);

        /**
         * Register a callback for platform side calls and call platform side functions.
         * @param { string } methodName - The name of the called platform side method.
         * @param { Method } method - Functions defined on the JS side for platform side calls.
         * @param { Array<Parameter> } parameters - Platform method parameters to be called.
         * @returns { Promise<ResultValue> } Returns the platform-side method return value.
         * @crossplatform
         * @since 11
         */
        callMethodWithCallback(methodName: string, method: (...parameters: Array<Parameter>) => ResultValue,
        ...parameters: Array<Parameter>): Promise<ResultValue>;
    }
}
export default Bridge;
