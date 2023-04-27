# ArkUI-X接口SDK说明仓

## 介绍
ArkUI-X 接口SDK由两部分组成，一是OpenHarmony接口(@ohos和ArkUI控件)，二是ArkUI-X独有接口（独立于OpenHarmony平台）。如果OpenHarmony接口具备跨平台能力，会在[OpenHarmony接口仓](https://gitee.com/openharmony/interface_sdk-js)进行@crossplatform标注，OpenHarmony接口跨平台实现的动态库和权限要求会配置在本仓。

## 目录结构

```
interface_sdk
├── engine                          // 配置ArkUI-X开发框架独有接口和基础控件与API。
│   ├── ets
│   │   └── @arkui-x.bridge.d.ts
│   └── apiConfig.json
├── plugins                         // 配置OpenHarmony接口（控件和API）跨平台实现的动态库和权限要求。
│   ├── api                         // @ohos接口
│   │   └── apiConfig.json
│   └── component                   // ArkUI控件
│       └── apiConfig.json
├── sdkConfig.json                  // 增量d.ts路径和接口前缀配置
└── arkui-x.json                    // SDK集成管理配置
```
> 说明：
> apiConfig.json用于配置OpenHarmony接口模块名称、实现动态库、权限要求等。
>

## 相关仓
[OpenHarmony API仓](https://gitee.com/openharmony/interface_sdk-js)

[ArkUI-X API仓](https://gitee.com/arkui-x/interface_sdk)