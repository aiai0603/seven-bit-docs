<template>
  <div class="box">
    <sb-progress width="50%" :percent="percent" status="normal" />
    <sb-progress width="50%" :percent="percent" status="success" />
    <sb-progress width="50%" :percent="percent" status="warning" />
    <sb-progress width="50%" :percent="percent" status="danger" />
    <div class="list">
      <sb-progress type="circle" :width="60" :percent="percent" status="normal" />
      <sb-progress type="circle" :width="60" :percent="percent" status="success" />
      <sb-progress type="circle" :width="60" :percent="percent" status="warning" />
      <sb-progress type="circle" :width="60" :percent="percent" status="danger" />
    </div>
    <sb-button @click="percent += 10">+10</sb-button>
    <sb-button style="margin-left: 10px" @click="percent -= 10">-10</sb-button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
let percent = ref(10);
let status = ref('warning');
</script>

<style scoped>
.list {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 20px 0;
}

.list > *:not(:first-child) {
  margin-left: 10px;
}
</style>