---
title: Toast 全局通知
nav:
  title: 组件
  path: /src
group:
  title: 反馈型组件
---
# Toast 全局通知

## 使用场景
用户点击触发。


## 默认用法
弹窗时长默认3s，可自行定义。
弹窗类型如下四种：
<code src="./demo/base.tsx"></code>


## API
| Name              | Description   | Type            | Default |
| ----------------- | ------------  | --------------- | ------- |
| className         | 自定义类名      | `string`        | `--`    |
| content           | 对象类型传参时的内容 | `string`   | `--`  |
| type              | Message类型    | `"info"   "success"  "warning"   "error"`       | `--` |
