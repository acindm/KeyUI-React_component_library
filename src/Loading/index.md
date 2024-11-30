---
title: Loading 加载
nav:
  title: 组件
  path: /src
group:
  title: 基础组件
---
# Loading 加载
网页处于加载过程时显示的动画。

## 使用场景
加载过程中显示的动画。或在等待加载的位置提供一个占位图。


## 常见加载图标
最基础的加载图标，直接在标签内设置大小与颜色（默认图标颜色为黑色）。
<code src="./demo/circle.tsx"></code>


## 骨架屏
适用于整个网页的加载，相比传统加载图标，视觉效果和用户体验更好。
具体用法见下方API调用。
<code src="./demo/skeleton.tsx"></code>


## API
| Name              | Description   | Type            | Default |
| ----------------- | ------------  | --------------- | ------- |
| className         | 自定义类名    | `string`        | `--`    |
| loading           | 加载状态      | `boolean`       | `true`  |
| title             | 显示标题      | `boolean`       | `false` |
| avatar            | 显示头像      | `boolean`       | `false` |
| row               | 自定义行数    | `number`        | `4`     |
| width             | 自定义宽度    | `(string  number)[]` | `100%`  |
| size              | 头像尺寸      | `number`        | `40`    |
