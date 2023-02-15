# 输入框 Input
这是一个基本数据录入组件，也是一个表单组件，并在原生控件基础上进行了功能扩展，可以组合使用

## 基本用法
input的基本用法，通过v-model实现双向数据绑定

:::code input/input1.vue
:::

## 禁用状态
禁用输入框

:::code input/input2.vue
:::

## 尺寸属性
输入框尺寸类型包括`mini`, `small`, `medium`, 默认为`medium`大小

:::code input/input3.vue
:::

## 基本属性
继承了原生的input的`type`属性，比如`button`, `radio`, `submit`, `text`等

:::code input/input4.vue
:::

## 可清空属性
设置`clearable`属性, 通过sb-input的值是否为空以及是否鼠标是否移入来判断是否需要显示可清空图标。

:::code input/input5.vue
:::

## 密码框
设置`show-password`属性可以得到一个可切换显示隐藏的密码框。

:::code input/input6.vue
:::

## 可自适应高度文本域
通过设置`autosize`属性来开启自适应高度，同时`autosize`也可以传对象形式来指定最小`minRows`和最大行高`maxRows`

:::code input/input7.vue
:::

## 复合型输入框
通过`slot`插槽来对输入框进行前置输入设置和后置输入设置。

:::code input/input8.vue
:::


## API

### `<Input>` Props
| 参数名                | 描述                                                         | 类型                                                         | 默认值     |
| :-------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :--------- |
| modelValue **(v-model)** | 双向数据绑定值                                                       | `String | Number`                                                     | `-`        |
| disabled              | 是否禁用                                                     | `boolean`                                                    | `false`    |
| size               | 输入框的大小                                             | `'mini' \| 'medium' \| 'small'`                                                    | `medium`    |
| type                  | 输入框的的基本属性                                                   | `'button' \| 'radio' \| 'submit' \| ...`                                | `'text'` |
| clearable                  | 是否可以清空输入框内容                                                   | `boolean`                                         | `'false'` |
| show-password         | 输入框的内容是否为密码形式                                             | `boolean`                                                     | `false        |
| autosize | 可自适应高度输入框                                   | `Object`                                       | `-`   |

### `<Input>` Events

| 事件名            | 描述                   | 参数            |
| :---------------- | :--------------------- | :-------------- |
| change            | 输入框中的值改变时触发 | value: `string` |
| update:modelValue | 更新双向数据绑定的值   | value: `string` |

### `<Input>` Slots

| 插槽名  | 描述                         | 参数 |
| :------ | :--------------------------- | :--- |
| prepend | 复合插入槽，输入框的前缀内容 | -    |
| append  | 复合插入槽，输入框的后缀内容 | -    |

