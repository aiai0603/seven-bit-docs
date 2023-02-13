<template>
  <div class="box">
    <div class="sb-alert-space-vertical" style="width: 100%;">
      <sb-alert v-model:visible="visible1" @click="handleClose(visible1)"  closable style="margin-bottom: 24px;">
        This is an info alert.
        <template #action>
          <sb-button size="small" type="primary">Detail</sb-button>
        </template>
      </sb-alert>
      <sb-alert  v-model:visible="visible2" @click="handleClose(visible2)"  title="Example" closable>
        This is an info alert.
        <template #action>
          <sb-button size="small" type="primary">Detail</sb-button>
        </template>
      </sb-alert>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const visible1 = ref(true)
const visible2 = ref(true)
const handleClose = (visible: any) => {
  visible.value = false;
}
</script>

<style scoped>
.sb-alert-space-vertical {
  display: inline-flex;
  flex-direction: column;
}
</style>
