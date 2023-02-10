<template>
  <sb-switch disabled v-model:checked="checked"  @change="diasbled"></sb-switch>
  <sb-switch disabled v-model:checked="checked1" size="small"  @change="diasbled"></sb-switch>
  <sb-switch disabled v-model:checked="checked" type="round"  @change="diasbled"></sb-switch>
  <sb-switch disabled v-model:checked="checked1" type="round" size="small"  @change="diasbled"></sb-switch>
  <sb-switch disabled v-model:checked="checked" type="line"  @change="diasbled"></sb-switch>
  <sb-switch disabled v-model:checked="checked1" type="line" size="small"  @change="diasbled"></sb-switch>
</template>

<script setup>
import { ref } from 'vue';
const diasbled = console.log;
const checked = ref(true);
const checked1 = ref(false);
</script>

<style scoped>
.sb-switch {
  margin-right: 20px;
}
</style>