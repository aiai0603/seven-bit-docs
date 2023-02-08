<template>
  <div class="box">
    <sb-modal 
      v-model:visible="visible"
      :draggable="true"
    >
    </sb-modal>
    <sb-button @click="showModal">Open Draggable Modal</sb-button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);
const showModal = function () {
  visible.value = true;
};
</script>