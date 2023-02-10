---
layout: home

title: Seven-Bit-UI
titleTemplate: 起始页

hero:
  name: Seven-Bit-UI
  text: 连接轻盈体验
  tagline: 更快开发和构建项目产品，适用于 Vue 项目的组件库
  image:
    src: /logo.svg
    alt: logo
  actions:
    - theme: brand
      text: 开始使用
      link: /guide/start
    - theme: alt
      text: 在 Github 上查看
      link: https://github.com/aiai0603/seven-bit-ui

features:
  - icon: 🎉
    link: guide/details#开发语言-框架
    linkText: 了解更多
    title: 简单介绍
    details: 基于 vite 打包和 TypeScript 开发的 Vue3 组件库，支持现代常见浏览器，可使用 npm 安装
  - icon: 🛠️
    title: 组件开发
    details: 虽然业界已经有非常多知名组件库，但实际工作中各团队通常也会应设计规范要求，自行开发属于团队内部的基础
  - icon: 👑
    link: guide/start
    linkText: 了解更多
    title: 特性
    details: 开箱即用的高质量 Vue 组件，提炼自企业级中后台产品的交互语言和视觉风格，直接支持按需引入无需配置任何插件
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme';
import members from './.vitepress/utils/member.js';

</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Seven 团队人员介绍
    </template>
    <template #lead>
      Seven-Bit-UI 的开发是由 Seven 团队开发，团队成员介绍如下
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>