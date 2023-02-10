# 面包屑 BreadCrumb

面包屑是辅助导航模式，用于识别页面在层次结构内的位置，并根据需要向上返回。
`sb-bread` 是包裹整个面包屑的组件
`sb-bread-item` 是面包屑的每一项

## 基本用法

适用于广泛基本用法。

:::code breadcrumb/breadcrumb1.vue
:::

## 自定义分割符

分隔方式分为图标分隔及文字分隔两种方式，可根据不同场景使用。使用 `separator` 和 `separatorIcon` 配置分割符，前者传入文字，后者传入图标 Name ，`separatorIcon` 的优先级更高
::: warning 💡 说明
separatorIcon 传入的图标 name ，必须包含在 Icon 组件中，如果要自定义其他图标请自行编写 slot 内容
:::

:::code breadcrumb/breadcrumb2.vue
:::

## 设置链接

在 `sb-bread-item` 设置 `href` 可以设置面包屑的导航位置，你也可以将导航绑定在 slot 的元素中

:::code breadcrumb/breadcrumb3.vue
:::

## API

### `<bread>` Props

| 参数名        | 描述             | 类型   | 默认值 |
| :------------ | :--------------- | :----- | :----- |
| separator     | 自定义的分隔符   | String | '\/'   |
| separatorIcon | 自定义的分隔图标 | String | -      |

### `<bread>` Slots

| 插槽名  | 描述           | 参数 |
| :------ | :------------- | :--- |
| default | 面包屑的子项目 | -    |

### `<bread-item>` Props

| 参数名  | 描述                 | 类型   | 默认值 |
| :----- | :------------------- | :----- | :----- |
| href   | 面包屑的导航链接 | String | -      |

### `<bread-item>` Slots

| 插槽名  | 描述             | 参数 |
| :------ | :--------------- | :--- |
| default | 面包屑容器的内容 | -    |
