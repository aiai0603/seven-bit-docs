<template>
  <div class="box">
    <sb-drop-down trigger="click" style="margin-right:20px">
      <template #title> 点击展开 </template>
      <template #dropdown>
        <sb-drop-down-item value="1">菜单1</sb-drop-down-item>
        <sb-drop-down-item value="2">菜单2</sb-drop-down-item>
        <sb-drop-down-item value="3">菜单3</sb-drop-down-item>
      </template>
    </sb-drop-down>
    <sb-drop-down trigger="contextmenu" style="margin-right:20px">
      <template #title> 右键展开 </template>
      <template #dropdown>
        <sb-drop-down-item value="1">菜单1</sb-drop-down-item>
        <sb-drop-down-item value="2">菜单2</sb-drop-down-item>
        <sb-drop-down-item value="3">菜单3</sb-drop-down-item>
      </template>
    </sb-drop-down>
    <sb-drop-down trigger="click" ref="me" style="margin-right:20px">
      <template #title> 事件展开 </template>
      <template #dropdown>
        <sb-drop-down-item value="1">菜单1</sb-drop-down-item>
        <sb-drop-down-item value="2">菜单2</sb-drop-down-item>
        <sb-drop-down-item value="3">菜单3</sb-drop-down-item>
      </template>
    </sb-drop-down>
    <sb-button @click="testopen" style="margin-right:20px">点击展开</sb-button>
    <sb-button @click="testclose">点击关闭</sb-button>
    
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const me = ref(null);
const testopen = () => {
  me.value && (me.value as any).handleShowMenu();
};
const testclose = () => {
  me.value && (me.value as any).handleCloseMenu();
};
</script>
