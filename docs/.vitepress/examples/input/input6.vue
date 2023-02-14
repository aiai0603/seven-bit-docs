<template>
  <div class="input-demo">
    <sb-input v-model="tel" show-password="true" placeholder="请输入内容"></sb-input>
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