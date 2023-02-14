<template>
  <div class="input-demo">
    <sb-input v-model="tel" type="textarea" :autosize="{ minRows: 2 }" placeholder="请输入内容" style="width: 150px;"></sb-input>
  </div>
  <div class="input-demo">
    <sb-input v-model="text" type="textarea" :autosize="{ maxRows: 2 }" placeholder="请输入内容" style="width: 150px;"></sb-input>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  const tel = ref("");
  const text = ref("");
</script>
<style lang="less">
.input-demo {
  width: 200px;
}
</style>