<template>
  <div class="box">
    <sb-modal 
      v-model:visible="visible"
      width="auto"
      content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum dolorum, et unde expedita natus amet sapiente, nam hic reprehenderit commodi, dicta alias adipisci quisquam error!"
    >
    </sb-modal>
    <sb-button @click="showModal">Open Modal</sb-button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);
const showModal = function () {
  visible.value = true;
};
</script>