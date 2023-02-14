<template>
  <div class="input-demo">
      <sb-input v-model="tel" placeholder="请输入内容" style="width: 200px;">
      <template #prepend>
          http://
      </template>
      </sb-input>
      <sb-input v-model="text" placeholder="请输入内容" style="width: 200px;">
      <template #append>
          .com
      </template>
      </sb-input>
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