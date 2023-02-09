<template>
  <sb-switch v-model:checked="checked" />
  <sb-switch v-model:checked="checked" size="small" />
</template>

<script setup>
import { ref } from 'vue';
const checked = ref(false);
</script>

<style scoped>
.sb-switch {
  margin-right: 20px;
}
</style>