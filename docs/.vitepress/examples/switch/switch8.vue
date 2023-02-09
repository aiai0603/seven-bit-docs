<template>
  <sb-switch v-model:checked="checked">
    <template #checked> ON </template>
    <template #unchecked> OFF </template>
  </sb-switch>

  <sb-switch v-model:checked="checked" type="round">
    <template #checked> ON </template>
    <template #unchecked> OFF </template>
  </sb-switch>

  <sb-switch v-model:checked="checked" type="line">
    <template #checked> ON </template>
    <template #unchecked> OFF </template>
  </sb-switch>
</template>


<script lang="ts" setup>
import { ref } from 'vue';
const checked = ref(false);
</script>

<style scoped>
.sb-switch {
  margin-right: 20px;
}
</style>