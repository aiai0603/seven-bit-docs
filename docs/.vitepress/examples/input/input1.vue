<template>
  <div>
    <sb-input v-model="tel" placeholder="请输入内容">ss</sb-input>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  const tel = ref("");
</script>