# 图标 Icon

这里内置了大量图标提供用户使用。

## 基本用法

通过 `name` 配置图标的名称即可使用

### 通用图标
:::code icon/icon1.vue
:::

### 圆形图标
:::code icon/icon2.vue
:::

### 实心图标
:::code icon/icon3.vue
:::

## 图标旋转

通过 `spin` 字段可以配置图标默认自动旋转

:::code icon/icon4.vue
:::

## API

### `<back-top>` Props

| 参数名 | 描述             | 类型    | 默认值 |
| :----- | :--------------- | :------ | :----- |
| name   | 图标名称         | String  | -      |
| spin   | 是否开启图标旋转 | Boolean | false  |
