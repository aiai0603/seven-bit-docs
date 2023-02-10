# 开关 Switch
互斥性的操作控件，用户可打开或关闭某个功能。

## 基本用法
开关的基本用法。

:::code switch/switch1.vue
:::

## 开关类型
开关分为 `circle` - 圆形（默认）、`round` - 圆角、`line` - 线性三种类型。

:::code switch/switch2.vue
:::

## 开关尺寸
开关分为 `small`、`medium` 两种尺寸。

:::code switch/switch3.vue
:::

## 禁用状态
禁用开关。

:::code switch/switch4.vue
:::
::: tip ⭐️ 温馨提示
开关处于禁用状态时不可点击
:::
## 自定义开关的颜色
通过 `checked-color` 和 `unchecked-color` 可以自定义开关的颜色。

:::code switch/switch5.vue
:::

## 切换拦截
设置 beforeChange 函数，函数的返回值将用于判断是否阻止切换。

:::code switch/switch6.vue
:::

::: tip ⭐️ 温馨提示
可以打开控制台查看具体效果哦
:::

## 加载中状态
通过设置 loading 使开关处于加载中状态，此时开关不可点击。

:::code switch/switch7.vue
:::


## 自定义文案
自定义开关的打开/关闭状态的文字。

:::code switch/switch8.vue
:::

## 自定义图标
自定义开关按钮上显示的图标。

:::code switch/switch9.vue
:::

## API
### `<switch>` Props
| 参数名                | 描述                                                         | 类型                                                         | 默认值     |
| :-------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :--------- |
| checked **(v-model)** | 绑定值                                                       | `boolean`                                                    | `-`        |
| disabled              | 是否禁用                                                     | `boolean`                                                    | `false`    |
| loading               | 是否为加载中状态                                             | `boolean`                                                    | `false`    |
| type                  | 开关的类型                                                   | `'circle' \| 'round' \| 'line'`                                | `'circle'` |
| size                  | 开关的大小                                                   | `'small' \| 'medium'`                                         | `'medium'` |
| checked-color         | 选中时的开关颜色                                             | `string`                                                     | `-`        |
| unchecked-color       | 未选中时的开关颜色                                           | `string`                                                     | `-`        |
| before-change         | switch 状态改变前的钩子， 返回 false 或者返回 Promise 且被 reject 则停止切换。 | `( newValue: string ) => Promise<boolean \| void> \| boolean \| void` | `-`        |

### `<switch>` Events

| 事件名 | 描述         | 参数                                           |
| :----- | :----------- | :--------------------------------------------- |
| change | 值改变时触发 | value: `boolean` |

### `<switch>` Slots

| 插槽名         | 描述                                                      | 参数 |
| :------------- | :-------------------------------------------------------- | :--- |
| checked-icon   | 打开状态时，按钮上的图标                                  | -    |
| unchecked-icon | 关闭状态时，按钮上的图标                                  | -    |
| checked        | 打开状态时的文案（`type='line'`和`size='small'`时不生效） | -    |
| unchecked      | 关闭状态时的文案（`type='line'`和`size='small'`时不生效） | -    |