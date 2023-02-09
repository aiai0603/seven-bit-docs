<template>
  <sb-switch v-model:checked="checked" />
  <sb-switch v-model:checked="checked" type="round" />
  <sb-switch v-model:checked="checked" type="line" />
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