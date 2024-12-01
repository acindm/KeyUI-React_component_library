---
title: DragList 拖拽列表
nav:
  title: 组件
  path: /src
group:
  title: 数据型组件

---
# DragList 拖拽列表

## 使用场景
用于需要用户重新排列、调整顺序或对列表项进行交互操作的场景。


## 默认用法
<code src="./demo/drag.tsx"></code>


## API
| Name              | Description   | Type            | Default |
| ----------------- | ------------  | --------------- | ------- |
| onChange         | 拖拽后触发。参数分别为：新数组、拖拽元素 index、目标位置元素    | `Function`        | `(newVal: ReactElement[], fromIndex: number, toIndex: number) => {}`    |
| onDragEnd           | 对应原生 onDragEnd 回调      | `Function`       | `() => {}`  |