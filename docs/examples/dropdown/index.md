# DropDown 下拉菜单

页面上的命令过多时，可将备选命令收纳到向下展开的浮层容器中。

## 基本用法

基础下拉菜单。你也可以配置 `disabled` 属性来禁用他。

:::code dropdown/dropdown1.vue
:::

## 触发方式

你可以通过 `trigger` 指定触发方式。触发方式有 `hover`, `click`, `contextmenu` 三种。你也可以使用 `handleShowMenu` 和 `handleCloseMenu` 两个方法来展开/收起下拉菜单

:::code dropdown/dropdown2.vue
:::

## 下拉框高度

配置 `maxHeight` 属性可以限定展开显示的下来框的最大高度。

:::code dropdown/dropdown3.vue
:::

## 选择项和点击事件

菜单项的值通过配置 `value` 属性设定，绑定 `handleItemClick` 事件可以接收被点击的属性。
:::code dropdown/dropdown4.vue
:::

## 关闭下拉框

默认点击菜单项后关闭下拉菜单，通过配置 `autoClose` 属性可以设定下拉框在项目点击之后是不是关闭

:::code dropdown/dropdown5.vue
:::

## 菜单分组

通过 `drop-down-menu` 组件，可以下拉菜单的菜单项分为几个组。

:::code dropdown/dropdown6.vue
:::

## 菜单项配置

在菜单项 `drop-down-item` 组件，你可以配置 `disabled` 属性使某一项禁用，或者配置 `divided` 属性让某一项与其上方的项目分隔

:::code dropdown/dropdown7.vue
:::

## API

### `<drop-down>` Props

| 参数名    | 描述                 | 类型                                | 默认值 |
| :-------- | :------------------- | :---------------------------------- | :----- |
| disabled  | 是否禁用             | Boolean                             | false  |
| autoClose | 是否点击菜单项后关闭 | Boolean                             | true   |
| maxHeight | 展开的最大高度       | Number                              | false  |
| trigger   | 展开的触发方式       | 'hover' \| 'click' \| 'contextmenu' | click  |

### `<drop-down>` Events

| 事件名          | 描述                 | 参数   |
| :-------------- | :------------------- | :----- |
| handleItemClick | 选中一个菜单项时触发 | String |

### `<drop-down>` Slots

| 插槽名   | 描述                 | 参数 |
| :------- | :------------------- | :--- |
| title    | 菜单的显示内容       | -    |
| dropdown | 菜单的下拉框中的内容 | -    |

### `<drop-down>` 全局方法

| 方法名          | 描述         | 参数 |
| :-------------- | :----------- | :--- |
| handleShowMenu  | 展开下拉菜单 | -    |
| handleCloseMenu | 关闭下拉菜单 | -    |

### `<drop-down-menu>` Props

| 参数名 | 描述         | 类型   | 默认值 |
| :----- | :----------- | :----- | :----- |
| title  | 菜单组的标题 | String | -      |

### `<drop-down-menu>` Slots

| 插槽名  | 描述         | 参数 |
| :------ | :----------- | :--- |
| default | 菜单组的内容 | -    |

### `<drop-down-item>` Props

| 参数名   | 描述                 | 类型    | 默认值 |
| :------- | :------------------- | :------ | :----- |
| disabled | 是否禁用             | Boolean | false  |
| value    | 菜单项的唯一标识     | String  | -      |
| divided  | 是否和上方使用分割线 | Boolean | false  |

### `<menu-item>` Slots

| 插槽名  | 描述         | 参数 |
| :------ | :----------- | :--- |
| default | 菜单项的内容 | -    |
