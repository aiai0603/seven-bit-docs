# Menu 菜单

收纳、排列并展示一系列选项的列表。

## 水平菜单

设置 `mode` 为 `horizontal` 时，使用水平菜单，你可以通过 `icon` 插槽配置你需要的图标等信息

:::code menu/menu1.vue
:::

## 禁用项目

设置 `disabled` 属性可以禁用某些菜单项

:::code menu/menu2.vue
:::

## 菜单项的值与点击事件

菜单项的值通过配置 `value` 属性设定，绑定 `handleItemClick` 事件可以接收被点击的属性，你可以指定 `defaultKey` 来配置默认选中的菜单项

:::code menu/menu3.vue
:::

## 侧边栏菜单

设置 `mode` 为 `vertical` 时，使用侧边栏菜单。

:::code menu/menu4.vue
:::

## 多级子菜单

通过使用 `sub-menu` 侧边栏菜单拥有多级子菜单嵌套，每个 `sub-menu` 需要一个唯一的 `key` 进行标识，也可以配置子菜单是不是默认打开

:::code menu/menu5.vue
:::

## 收起菜单

侧边栏菜单提供了 `handleOpenMenu` 和 `handleCloseMenu` 两个方法来展开/收起侧边栏菜单

:::code menu/menu6.vue
:::

## API

### `<menu>` Props

| 参数名     | 描述             | 类型                       | 默认值     |
| :--------- | :--------------- | :------------------------- | :--------- |
| mode       | 菜单的模式       | 'horizontal' \| 'vertical' | horizontal |
| defaultKey | 默认激活的菜单项 | String                     | -          |

### `<menu>` Events

| 事件名          | 描述                 | 参数 |
| :-------------- | :------------------- | :--- |
| handleItemClick | 选中一个菜单项时触发 | String    |

### `<menu>` Slots

| 插槽名  | 描述       | 参数 |
| :------ | :--------- | :--- |
| default | 菜单的内容 | `-`  |

### `<menu>` 全局方法

| 方法名          | 描述           | 参数 |
| :-------------- | :------------- | :--- |
| handleOpenMenu  | 展开侧边栏菜单 | -    |
| handleCloseMenu | 关闭侧边栏菜单 | -    |

### `<sub-menu>` Props

| 参数名      | 描述           | 类型    | 默认值 |
| :---------- | :------------- | :------ | :----- |
| defaultOpen | 是否默认打开   | Boolean | false  |
| keys        | 菜单的唯一标识 | String  | -      |

### `<sub-menu>` Slots

| 插槽名  | 描述                 | 参数 |
| :------ | :------------------- | :--- |
| title   | 多级菜单的标题       | `-`  |
| default | 多级菜单子菜单的内容 | `-`  |

### `<menu-item>` Props

| 参数名   | 描述             | 类型    | 默认值 |
| :------- | :--------------- | :------ | :----- |
| disabled | 是否禁用         | Boolean | false  |
| value    | 菜单项的唯一标识 | String  | -      |

### `<menu-item>` Slots

| 插槽名  | 描述         | 参数 |
| :------ | :----------- | :--- |
| icon    | 菜单项的图标 | `-`  |
| default | 菜单项的内容 | `-`  |
