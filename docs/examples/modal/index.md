# Modal 对话框
在当前页面打开一个浮层，承载相关操作。

## 基本用法
对话框的基本用法。

:::code modal/modal1.vue
:::


## 消息提示
有 `info`，`success`，`warning`，`error` 四种类型的消息提示，仅提供一个确认按钮用于关闭消息提示对话框。

::: warning 💡 友情提示
消息默认会固定开启 simple 和 hideCancel，不可以取消再次设置。
:::

:::code modal/modal2.vue
:::

## 对话框的宽度
设置 `width="auto"` 可以让对话框自适应宽度。

:::code modal/modal3.vue
:::

## 定制按钮文字
设置 `okText` 与 `cancelText` 可以自定义按钮文字。

:::code modal/modal4.vue
:::

## 可拖动
开启 `draggable` 属性，允许用户拖动对话框。

:::code modal/modal5.vue
:::

## 全屏
开启 `fullscreen` 属性，可以让对话框占满整个容器。

:::code modal/modal6.vue
:::

## API

###  `<modal>` Props
| 参数名                | 描述                                               | 类型                                                | 默认值     |
| :-------------------- | :------------------------------------------------- | :-------------------------------------------------- | :--------- |
| visible **(v-model)** | 对话框是否可见                                     | `boolean`                                           | `false`    |
| width                 | 对话框的宽度（单位px）                             | `number \| string`                                   | `520`      |
| top                   | 对话框的距离顶部的高度，居中显示开启的情况下不生效 | `number \| 'center'`                                 | `-`        |
| mask                  | 是否显示遮罩层                                     | `boolean`                                           | `true`     |
| title                 | 标题                                               | `string`                                            | `-`        |
| title-align           | 标题的水平对齐方向                                 | `'start' \| 'center'`                                | `'center'` |
| content               | 对话框内容                                         | `string`                                            | `-`        |
| icon-type             | 标题前的图标类型                                   | `'none' \| 'info' \| 'success' \| 'warning' \| 'error'` | `'none'`   |
| mask-closable         | 是否点击遮罩层可以关闭对话框                       | `boolean`                                           | `true`     |
| hide-cancel           | 是否隐藏取消按钮                                   | `boolean`                                           | `false`    |
| simple                | 是否开启简单模式                                   | `boolean`                                           | `false`    |
| closable              | 是否显示关闭按钮                                   | `boolean`                                           | `true`     |
| ok-text               | 确认按钮的内容                                     | `string`                                            | `'确定'`     |
| cancel-text           | 取消按钮的内容                                     | `string`                                            | `'取消'`     |
| ok-button-props       | 确认按钮的Props，见 `Button` 的相关配置            | `object`                                            | `-`        |
| cancel-button-props   | 取消按钮的Props，见 `Button` 的相关配置            | `object`                                            | `-`        |
| footer                | 是否展示页脚部分                                   | `boolean`                                           | `true`     |
| mask-class            | 遮罩层的类名                                       | `string`                                            | `-`        |
| modal-class           | 对话框的类名                                       | `string`                                            | `-`        |
| draggable             | 是否支持拖动                                       | `boolean`                                           | `false`    |
| fullscreen            | 是否开启全屏                                       | `boolean`                                           | `false`    |

### `<modal>` Events
| 事件名       | 描述                         | 参数 |
| :----------- | :--------------------------- | :--- |
| ok           | 点击确定按钮时触发           | -    |
| cancel       | 点击取消、关闭按钮时触发     | -    |
| open         | 对话框打开后（动画结束）触发 | -    |
| close        | 对话框关闭后（动画结束）触发 | -    |
| before-open  | 对话框打开前触发             | -    |
| before-close | 对话框关闭前触发             | -    |

### `<modal>` Slots
| 插槽名  | 描述       | 参数 |
| :------ | :--------- | :--- |
| title   | 标题       | `-`  |
| content | 对话框内容 | `-`  |
| icon    | 关闭按钮   | `-`  |

### `<modal>` 全局方法
Modal提供的全局方法，可以通过以下三种方法使用：
1. 通过 `this.$modal` 调用
```vue
// main.js
import { createApp } from 'vue';
import App from './app.vue';
import { sbModal } from 'seven-bit-ui';

const app = createApp(App);
app.use(sbModal);
app.mount('#app');

// 组件内
<script>
export default {
  methods: {
    fn() {
      this.$info({ ... });
    }
  }
}
</script>
```

2. 在 **Composition API** 中，通过如下方式调用
```js
 getCurrentInstance().appContext.config.globalProperties.$modal 
```
3. 导入 Modal，通过 Modal 本身调用
```vue
<script>
import { sbModal } from 'seven-bit-ui';
export default {
  methods: {
    show() {
      sbModal.$error({ ... });
    }
  }
};
</script>
```

### ModalConfig
| 参数名          | 描述                                               | 类型                                                | 默认值     |
| :-------------- | :------------------------------------------------- | :-------------------------------------------------- | :--------- |
| top             | 对话框的距离顶部的高度，居中显示开启的情况下不生效 | `number | 'center'`                                 | `-`        |
| title           | 标题                                               | `string`                                            | `-`        |
| title-align     | 标题的水平对齐方向                                 | `'start' | 'center'`                                | `'center'` |
| content         | 对话框内容                                         | `string`                                            | `-`        |
| icon-type       | 标题前的图标类型                                   | `'none' | 'info' | 'success' | 'warning' | 'error'` | `'none'`   |
| hide-cancel     | 是否隐藏取消按钮                                   | `boolean`                                           | `false`    |
| simple          | 是否开启简单模式                                   | `boolean`                                           | `false`    |
| ok-text         | 确认按钮的内容                                     | `string`                                            | `确定`     |
| ok-button-props | 确认按钮的Props，见 `Button` 的相关配置            | `object`                                            | `-`        |
| onOk            | 点击确定按钮的回调函数                             | `() => void`                                        | `-`        |
| onOpen          | 对话框打开后（动画结束）触发                       | `() => void`                                        | `-`        |
| onClose         | 对话框关闭后（动画结束）触发                       | `() => void`                                        | `-`        |
| onBeforeOpen    | 对话框打开前触发                                   | `() => void`                                        | `-`        |

### ModalMethod
| 参数名  | 描述           | 类型                                   | 默认值 |
| :------ | :------------- | :------------------------------------- | :----- |
| info    | 打开信息对话框 | `(config: ModalConfig) => ModalReturn` | `-`    |
| success | 打开成功对话框 | `(config: ModalConfig) => ModalReturn` | `-`    |
| warning | 打开警告对话框 | `(config: ModalConfig) => ModalReturn` | `-`    |
| error   | 打开错误对话框 | `(config: ModalConfig) => ModalReturn` | `-`    |