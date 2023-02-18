# 警告提示 Alert
向用户显示警告的信息时，通过警告提示，展现需要关注的信息。

## 基本用法
展现需要关注的信息，适用于简短的警告提示。

:::code alert/alert1.vue
:::


## 提示类型
有 `info`，`success`，`warning`，`error` 四种类型的消息提示。

:::code alert/alert2.vue
:::

## 提示标题
通过设置 `title` 可以给警告提示添加标题。

:::code alert/alert3.vue
:::

## 可关闭
通过设置 `closable`，可开启关闭按钮。

:::code alert/alert4.vue
:::

## 自定义关闭元素
指定 `close-element` slot，自定义关闭元素。

:::code alert/alert5.vue
:::

## 隐藏图标
通过设置 `:show-icon="false"` 来隐藏图标。

:::code alert/alert6.vue
:::

## 操作项
通过 `#action` 插槽自定义操作按钮。

:::code alert/alert7.vue
:::

## 顶部公告
通过设置 `banner`，可将警告提示作为顶部公告使用（去除边框和圆角）。

:::code alert/alert8.vue
:::

## API

###  `<alert>` Props
| 参数名                | 描述                                               | 类型                                                | 默认值     |
| :-------------------- | :------------------------------------------------- | :-------------------------------------------------- | :--------- |
| type                  | 警告提示的类型。            | `info` | `success` | `warning` | `error` | `normal`                                             | `info`    |
| show-icon             | 是否展示图标                | `boolean`                               | `true`      |
| closable               | 是否展示关闭按钮            | `boolean`                               | `false`        |
| title                  | 警告提示的标题              |`string`                                           | `-`     |
| banner                 | 是否作为顶部公告使用（去除边框和圆角）                    | `boolean`                                            | `false`        |

### `<modal>` Events
| 事件名       | 描述                         | 参数 |
| :----------- | :--------------------------- | :--- |
| close        | 点击关闭按钮时触发           | ev: `MouseEvent`  |
| after-close  | 关闭动画结束后触发           | -    |

### `<alert>` Slots
| 插槽名  | 描述       | 参数 |
| :------ | :--------- | :--- |
| icon    | 图标       | `-`  |
| title   | 标题       | `-`  |
| action  | 操作项     | `-`  |
| close-element  | 关闭元素     | `-`  |
