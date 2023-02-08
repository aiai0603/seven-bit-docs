<template>
  <div class="box">
    <sb-progress width="50%" :percent="percent" size="small" />
    <sb-progress width="50%" :percent="percent" size="medium" />
    <sb-progress width="50%" :percent="percent" size="large" />
    <br />
    <sb-button @click="percent += 10">+10</sb-button>
    <sb-button style="margin-left: 10px" @click="percent -= 10">-10</sb-button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
let percent = ref(10);
let status = ref('warning');
</script>