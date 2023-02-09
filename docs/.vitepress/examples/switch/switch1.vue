<template>
  <sb-switch v-model:checked="checked" />
</template>

<script setup>
import { ref } from 'vue';
const checked = ref(false);
</script>
