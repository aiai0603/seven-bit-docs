<template>
  <div class="box">
      <sb-drawer :width="340" :header="false" :visible="visible" @ok="handleOk" @cancel="handleCancel">
          <template #title>
            Title
          </template>
          <template #body>You can customize modal body text by the current situation. This modal will be closed immediately once you press the OK button.</template>
      </sb-drawer>
      <sb-button @click="handleClick">Open Drawer</sb-button>
  </div>


</template>

<script lang="ts" setup>
import { ref } from 'vue';
const visible = ref(false)

const handleClick = () => {
  visible.value = true;
};
const handleOk = () => {
  visible.value = false;
};
const handleCancel = () => {
  visible.value = false;
}
</script>