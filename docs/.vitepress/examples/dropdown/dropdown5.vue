<template>
  <div class="box">
    <sb-drop-down @handleItemClick="test" :autoClose="false">
      <template #title> 选中不关闭 </template>
      <template #dropdown>
        <sb-drop-down-item value="1">菜单1</sb-drop-down-item>
        <sb-drop-down-item value="2">菜单2</sb-drop-down-item>
        <sb-drop-down-item value="3">菜单3</sb-drop-down-item>
      </template>
    </sb-drop-down>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const value = ref("3");
const test = (clickValue: any) => {
  value.value = clickValue;
};
</script>

