# 卡片 Card

将信息分类后分标题、详情等区域聚合展现，一般作为简洁介绍或者信息的大盘和入口。

## 基本用法

常规的内容容器，可承载文字、列表、图片、段落，常用于模块划分和内容概览。

:::code card/card1.vue
:::

## 鼠标悬浮样式

指定 hoverable 来为卡片添加鼠标悬浮样式
:::code card/card2.vue
:::

## 无边框卡片

设置 bordered 为 false 来使用无边框卡片。
:::code card/card3.vue
:::

## 简洁卡片

卡片可以只有内容区域。
:::code card/card4.vue
:::

## 内部卡片

卡片中可以嵌套其他卡片组件。

:::code card/card5.vue
:::

# 支持更多内容配置

slot 可以用于展示其他内容。





## API

### `<card>` Props

| 参数名       | 描述               | 类型                 | 默认值     |
| :----------- | :----------------- | :------------------- | :--------- |
| bordered     | 是否有边框         | `boolean`            | `true`     |
| loading      | 是否为加载中       | `boolean`            | `false`    |
| hoverable    | 是否可悬浮         | `boolean`            | `false`    |
| size         | 卡片尺寸           | `'medium' | 'small'` | `'medium'` |
| header-style | 自定义标题区域样式 | `object`             | `-`        |
| body-style   | 内容区域自定义样式 | `object`             | `-`        |
| title        | 卡片标题           | `string`             | `-`        |
| style        | 卡片样式           | `object`             | `-`        |

### `<card>` Slots

| 插槽名 | 描述                 | 参数 |
| :----- | :------------------- | :--- |
| cover  | 卡片封面             | -    |
| extra  | 卡片右上角的操作区域 | -    |



