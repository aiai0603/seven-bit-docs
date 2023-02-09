# 头像 Avatar

## 基本用法

头像的基础使用。如果头像是文字的话，会自动调节字体大小，来适应头像框。

:::code avatar/avatar1.vue
:::

## 大小和形状

通过设置 size 字段，可以调节头像的大小，默认大小为 40px。设置 shape 字段，可以设置头像是圆形 (circle) 还是正方形 (square)。

:::code avatar/avatar2.vue
:::

## 交互按钮

可以通过 trigger-icon trigger-type 来定制交互按钮，类型有 mask (遮罩) 和 button (按钮) 两种。
:::code avatar/avatar3.vue
:::

## 自定义头像路径

自定义头像图片路径

:::code avatar/avatar4.vue
:::





## API



### `<avatar>` Props

| 参数名       | 描述                                                         | 类型                  | 默认值     | 版本 |
| :----------- | :----------------------------------------------------------- | :-------------------- | :--------- | :--- |
| shape        | 头像的形状，有圆形(circle)和正方形(square)两种               | `'circle' | 'square'` | `'circle'` |      |
| image-url    | 自定义头像图片地址，如果传入该属性，会默认渲染img标签        | `string`              | `-`        |      |
| size         | 头像的尺寸大小，单位是 `px`。未填写时使用样式中的大小 `40px` | `number`              | 40         |      |
| trigger-type | 可点击的头像交互类型                                         | `'mask' | 'button'`   | `'button'` |      |
| style        | 自定义样式                                                   | CSSProperties         | `-`        |      |

### `<avatar>` Events



| 事件名 | 描述         | 参数             |
| :----- | :----------- | :--------------- |
| click  | 点击回调     | ev: `MouseEvent` |
| error  | 图片加载错误 | -                |
| load   | 图片加载成功 | -                |

### `<avatar>` Slots

| 插槽名       | 描述                 | 参数 |
| :----------- | :------------------- | :--- |
| trigger-icon | 可点击的头像交互图标 | -    |
