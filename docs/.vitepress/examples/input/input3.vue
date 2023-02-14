<template>
  <div class="input-demo">
    <sb-input v-model="tel" size="mini" placeholder="请输入内容"></sb-input>
    <div style="height: 10px;"></div>
    <sb-input v-model="tel" size="medium" placeholder="请输入内容"></sb-input>
    <div style="height: 10px;"></div>
    <sb-input v-model="tel" size="small" placeholder="请输入内容"></sb-input>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  const tel = ref("");
</script>
<style lang="less">
.input-demo {
  width: 200px;
}
</style>