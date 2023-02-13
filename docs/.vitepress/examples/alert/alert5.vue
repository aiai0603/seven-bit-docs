<template>
  <div class="box">
    <div class="sb-row">
      <div class="sb-col">
        <sb-alert v-model:visible="visible1" @click="handleClose(visible1)" closable>
          <template #close-element>
            ABCD
          </template>
          This is an info alert.
        </sb-alert>
      </div>
      <div class="sb-col">
        <sb-alert v-model:visible="visible2" @click="handleClose(visible2)" closable>
          <template #close-element>
            Close
          </template>
          This is an info alert.
        </sb-alert>
      </div>
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
.sb-row {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
}

.sb-col {
  box-sizing: border-box;
  flex: 0 0 50%;
  width: 50%;
  padding: 10px 20px;
}
</style>