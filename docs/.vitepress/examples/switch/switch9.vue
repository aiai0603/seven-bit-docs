<template>
  <sb-switch v-model:checked="checked">
    <template #checked-icon>
      <sb-icon name="check"></sb-icon>
    </template>
    <template #unchecked-icon>
      <sb-icon name="close"></sb-icon>
    </template>
  </sb-switch>

  <sb-switch v-model:checked="checked" type="round">
    <template #checked-icon>
      <sb-icon name="check"></sb-icon>
    </template>
    <template #unchecked-icon>
      <sb-icon name="close"></sb-icon>
    </template>
  </sb-switch>

  <sb-switch v-model:checked="checked" type="line">
    <template #checked-icon>
      <sb-icon name="check"></sb-icon>
    </template>
    <template #unchecked-icon>
      <sb-icon name="close"></sb-icon>
    </template>
  </sb-switch>
</template>


<script lang="ts" setup>
import { ref } from "vue";
const checked = ref(false);
</script>

<style scoped>
.sb-switch {
  margin-right: 20px;
}
</style>