# 进度条 Progress
给予用户当前系统执行中任务运行状态的反馈，多用于运行一段时间的场景，有效减轻用户在等待中产生的焦虑感。

## 基本用法
简单的进度条。

:::code progress/progress1.vue
:::

## 进度条状态
通过 `status` 指定进度条状态

:::code progress/progress2.vue
:::

## 环形进度条
设置 `type="circle"` 将会展示环形进度条。

:::code progress/progress3.vue
:::

## 进度条大小
通过 size 设置进度条的大小。

:::code progress/progress4.vue
:::

## 渐变进度条
`color` 传入数组时， 会作为 `linear-gradient` 的属性值设置渐变色，数组格式如下所示：
```js
interface LinearGradient {
  offset: Percent,
  color: RGB | HEX
}
const color: LinearGradient[]= [......];
```

:::code progress/progress5.vue
:::

## 自定义进度条的颜色
可以 通过 `color` 设置进度条的颜色，通过 `trackColor` 设置剩余进度条的颜色。

:::code progress/progress6.vue
:::
