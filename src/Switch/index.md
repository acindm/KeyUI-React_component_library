
# Switch 开关
两种状态选择切换。

## 使用场景
- 我们提供了 7 种按钮。
- 禁用：行动点不可用的时候，一般需要文案解释。

## 默认用法
最基本的使用方法。
<code src="./demo/base.tsx"></code>

## 禁用状态
通过`disabled`开启禁用。
<code src="./demo/disabled.tsx"></code>

## 按钮大小设置
右侧为默认大小，通过`small` 切换到小开关
<code src="./demo/size.tsx"></code>

## 按钮与字体和图标
`checkedChildren` 自定义选中内容，`unCheckedChildren` 自定义未选中内容。
<code src="./demo/font.tsx"></code>


## API
| Name              | Description  | Type            | Default |
| ----------------- | ------------ | --------------- | ------- |
| className         | 自定义类名   | `string`        | `--`    |
| style             | 自定义样式   | `CSSProperties` | `--`    |
| disabled          | 禁用         | `boolean`       | `false` |
| small             | 小型按钮     | `boolean`       | `false` |
| defaultChecked    | 默认选中     | `boolean`       | `false` |
| checkedChildren   | 选中 文字     | `ReactNode`     | `--`    |
| unCheckedChildren | 未选中 文字   | `ReactNode`     | `--`    |
| handleChange      | 改变回调函数 | `Function`      | `--`    |
