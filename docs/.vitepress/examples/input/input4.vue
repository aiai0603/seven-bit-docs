<template>
  <div class="input-demo">
    <sb-input v-model="tel" type="button"></sb-input>
    <sb-input v-model="tel" type="checkbox"></sb-input>
    <sb-input v-model="tel" type="radio"></sb-input>
    <div style="height: 10px;"></div>
    <sb-input v-model="tel" type="image"></sb-input>
    <sb-input v-model="tel" type="file"></sb-input>
    <div style="height: 10px;"></div>
    <sb-input v-model="tel" type="submit"></sb-input>
    <sb-input v-model="tel" type="reset"></sb-input>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  const tel = ref("");
</script>
<style lang="less">
.input-demo {
  width: 200px;
}
</style>