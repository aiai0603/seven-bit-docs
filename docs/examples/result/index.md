# 结果页 Result
用于反馈一系列操作任务的处理结果，当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用。

## 基本用法
展示结果状态。

::: code result/result1.vue
:::

## 成功状态
展示成功状态。

::: code result/result2.vue
:::

## 警告状态
展示警告状态。

::: code result/result3.vue
:::

## 错误状态
展示错误状态。

::: code result/result4.vue
:::

## 完整功能
完整功能。

::: code result/result5.vue
:::

## API
### `<result>` Props
| 参数名    | 描述             | 类型                                       | 默认值   |
| :-------- | :--------------- | :----------------------------------------- | :------- |
| status    | 结果页显示的状态 | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'` |
| title     | 标题内容         | `string`                                   | `-`      |
| subtitle  | 子标题内容       | `string`                                   | `-`      |
| iconClass | 图标的类名       | `string`                                   | `-`      |

### `<result>` Slots
| 插槽名 | 描述   | 参数 |
| :----- | :----- | :--- |
| icon   | 图标   | -    |
| extra  | 操作区 | -    |