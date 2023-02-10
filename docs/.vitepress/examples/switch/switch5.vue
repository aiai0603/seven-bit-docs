<template>
  <sb-switch v-model:checked="checked" checked-color="rgb(245, 63, 63)" unchecked-color="#14c9C9" />
</template>

<script setup>
import { ref } from 'vue';
const checked = ref(false);
</script>