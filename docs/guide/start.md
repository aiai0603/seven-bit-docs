# 快速上手

跟随以下的步骤，快速上手组件库的使用。


## Vue 版本
**vue >= 3.2.0**
::: warning 💡 友情提示
由于 Vue3 不再支持 IE 浏览器环境，seven-bit-ui 也不再支持 IE 浏览器环境。
:::

## 安装
```shell
# npm
$ npm install seven-bit-ui -S

# yarn
$ yarn add seven-bit-ui -S

# pnpm 
$ pnpm add seven-bit-ui -S
```

## 完整引入
```js
import { createApp } from 'vue'
import sbui from 'seven-bit-ui';
import App from './App.vue';

const app = createApp(App);
app.use(sbui);
app.mount('#app');
```
::: danger ❌ 注意
seven-bit-ui 不需要单独导入全局样式
:::

## 按需加载
可以使用手动导入的方式按需加载组件，组件库已经默认支持 Tree Shaking。
```vue
<template>
  <sb-button>按钮</sb-button>
</template>

<script setup>
  import { sbButton } from 'seven-bit-ui';
</script>
```

## 浏览器兼容性
| [![Edge](https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/08095282566ac4e0fd98f89aed934b65.png~tplv-uwbnlip3yd-png.png)](http://godban.github.io/browsers-support-badges/) Edge | [![Firefox](https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/40ad73571879dd8d9fd3fd524e0e45a4.png~tplv-uwbnlip3yd-png.png)](http://godban.github.io/browsers-support-badges/) Firefox | [![Chrome](https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/4f59d35f6d6837b042c8badd95871b1d.png~tplv-uwbnlip3yd-png.png)](http://godban.github.io/browsers-support-badges/) Chrome | [![Safari](https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/eee2667f837a9c2ed531805850bf43ec.png~tplv-uwbnlip3yd-png.png)](http://godban.github.io/browsers-support-badges/) Safari | [![Opera](https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3240334d3967dd263c8f4cdd2d93c525.png~tplv-uwbnlip3yd-png.png)](http://godban.github.io/browsers-support-badges/) Opera |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| ≥ 79                                                         | ≥ 78                                                         | ≥ 64                                                         | ≥ 12                                                         | ≥ 53                                                         |