<template>
  <div class="box">
    <sb-card :style="{ width: '220px' }" title="sb-card" bordered>
      <template #extra>
        <a-link>More</a-link>
      </template>
      Seven-Bit-UI 连接轻盈体验 更快开发和构建项目产品，适用于 Vue 项目的组件库
    </sb-card>

    <sb-card :style="{ width: '220px' }" title="sb-card" hoverable bordered>
      <template #extra>
        <a-link>More</a-link>
      </template>
      Seven-Bit-UI 连接轻盈体验 更快开发和构建项目产品，适用于 Vue 项目的组件库
    </sb-card>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.box {
  display: flex;
  justify-content: space-between;
}
.sb-card {
  margin: 10px;
}
</style>
