# 抽屉 Drawer
触发命令后，从屏幕一侧滑出的抽屉式的面板。

## 基本用法
点击触发按钮抽屉从右侧滑出，点击遮罩区关闭。

:::code drawer/drawer1.vue
:::

## 抽屉位置
自定义位置，设置 `palcement` 取值则抽屉从相应的位置滑出。

:::code drawer/drawer2.vue
:::

## 自定义节点
通过设置 `header`、`footer`为`false`、`hideCancel`为`true` 来控制显示或隐藏。

:::code drawer/drawer3.vue
:::

## 嵌套抽屉
在抽屉内打开新的抽屉。

:::code drawer/drawer4.vue
:::

## API

###  `<modal>` Props
| 参数名                | 描述                                               | 类型                                                | 默认值     |
| :-------------------- | :------------------------------------------------- | :-------------------------------------------------- | :--------- |
| visible **(v-model)** | 对话框是否可见                                     | `boolean`                                           | `false`    |
| placement             | 抽屉放置的位置                                     | `'top' | 'right' | 'bottom' | 'left'`                                   | `right`   |
| top                   | 对话框的距离顶部的高度，居中显示开启的情况下不生效 | `number \| 'center'`                                 | `-`        |
| title                 | 标题                                               | `string`                                            | `-`        |
| mask                  | 是否显示遮罩层                                     | `boolean`                                | `true` |
| mask-closable         | 点击遮罩层是否可以关闭                              | `boolean`                                          | `true`        |
| closable              | 是否展示关闭按钮                                 | 
`boolean`                               | `true`   |
| ok-text               | 确认按钮的内容                                     | `string`                                           | `-`     |
| cancel-text           | 取消按钮的内容                                   | `string`                                           | `-`    |
| okButtonProps         | 确认按钮的Props                                   | `object`                                           | `-`    |
| cancelButtonProps     | 取消按钮的Props                                   | `boolean`                                           | `-`     |
| width                 | 抽屉的宽度（仅在placement为right,left时可用）         | `number \| string`                                            | `250`     |
| height                | 抽屉的高度（仅在placement为top,bottom时可用）         | `number \| string`                                            | `250`     |
| drawerStyle           | 抽屉的样式                | `CSSProperties`                                            | `-`        |
| on-before-ok         | 触发 ok 事件前的回调函数。如果返回 false 则不会触发后续事件，也可使用 done 进行异步关闭。    | `( done: (closed: boolean) => void) => void \| boolean \| Promise<void \| boolean>`                                           | `-`        |
| on-before-cancel     | 触发 cancel 事件前的回调函数。如果返回 false 则不会触发后续事件 | 
`( done: (closed: boolean) => void) => void \| boolean \| Promise<void \| boolean>`                                            | `-`        |
| header                | 是否展示头部部分                                   | `boolean`                                           | `true`     |
| footer                | 是否展示底部部分                                   | `boolean`                                           | `true`     |
| hide-cancel           | 是否隐藏取消按钮                                   | `boolean`                                           | `false`     |

### `<drawer>` Events
| 事件名       | 描述                         | 参数 |
| :----------- | :--------------------------- | :--- |
| ok           | 点击确定按钮时触发           | -    |
| cancel       | 点击取消、关闭按钮时触发     | -    |
| open         | 对话框打开后（动画结束）触发 | -    |
| close        | 对话框关闭后（动画结束）触发 | -    |
| before-open  | 对话框打开前触发             | -    |
| before-close | 对话框关闭前触发             | -    |

### `<drawer>` Slots
| 插槽名  | 描述       | 参数 |
| :------ | :--------- | :--- |
| header  | 页眉       | `-`  |
| title   | 标题       | `-`  |
| footer  | 页脚       | `-`  |

### DrawerConfig
| 参数名          | 描述                                               | 类型                                                | 默认值     |
| :-------------- | :------------------------------------------------- | :-------------------------------------------------- | :--------- |
| placement       | 抽屉放置的位置                   | `'top' | 'right' | 'bottom' | 'left'`                                 | `right`    |
| title           | 标题                                               | `RenderContent`                         | `-`        |
| content         | 内容                                               | `RenderContent`                          | `-`       |
| mask            | 是否显示遮罩层                                      | `boolean`                                | `true`    |
| maskClosable    | 点击遮罩层是否可以关闭                               | 
`boolean`                                | `true`    |
| closable        | 是否展示关闭按钮                                  | `boolean`                                           | `true`    |
| okText          | 确认按钮的内容                                    | `string`                                           | `-`    |
| cancelText      | 取消按钮的内容                                     | `string`                                            | `-`     |
| okButtonProps         | 确认按钮的Props                                   | `ButtonProps`                                           | `-`    |
| cancelButtonProps     | 取消按钮的Props                                   | `ButtonProps`                                           | `-`     |
| width                 | 抽屉的宽度（仅在placement为right,left时可用）         | `number \| string`                                            | `250`     |
| height                | 抽屉的高度（仅在placement为top,bottom时可用）         | `number \| string`                                            | `250`     |
| drawerStyle           | 抽屉的样式                | `CSSProperties`                                            | `-`        |
| onOk                  | 点击确定按钮时触发         | `() => void`                                            | `-`        |
| onCancel              | 点击取消、关闭按钮时触发    | `() => void`                                            | `-`        |
| onBeforeOk            | 触发 ok 事件前的回调函数。如果返回 false 则不会触发后续事件，也可使用 done 进行异步关闭。   | `( done: (closed: boolean) => void ) => void \| boolean \| Promise<void \| boolean>`                                            | `-`        |
| onBeforeCancel        | 触发 cancel 事件前的回调函数。如果返回 false 则不会触发后续事件。   | `() => boolean`                                            | `-`        |
| onOpen                | 抽屉打开后（动画结束）触发         | 
`() => void`                                        | `-`        |
| onClose               | 抽屉关闭后（动画结束）触发         | 
`() => void`                                        | `-`        |
| onBeforeOpen          | 抽屉打开前触发           | 
`() => void`                                        | `-`        |
| onBeforeClose         | 抽屉关闭前触发           | 
`() => void`                                        | `-`        |
| header                | 是否展示头部部分                                   | `boolean`                                           | `true`     |
| footer                | 是否展示底部部分                                   | `boolean`                                           | `true`     |
| hide-cancel           | 是否隐藏取消按钮                                   | `boolean`                                           | `false`     |

### DrawerReturn
| 参数名  | 描述           | 类型                                   | 默认值 |
| :------ | :------------- | :------------------------------------- | :----- |
| close   | 关闭抽屉      | `() => void` | `-`    |

### DrawerMethod
| 参数名  | 描述           | 类型                                   | 默认值 |
| :------ | :------------- | :------------------------------------- | :----- |
| open    | 打开抽屉      | `(config: DrawerConfig, appContext?: AppContext) => DrawerReturn` | `-`    |
