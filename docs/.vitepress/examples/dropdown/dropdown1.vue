<template>
  <div class="box">
    <sb-drop-down style="margin-right:20px">
      <template #title> 点击展开 </template>
      <template #dropdown>
        <sb-drop-down-item value="1">菜单1</sb-drop-down-item>
        <sb-drop-down-item value="2">菜单2</sb-drop-down-item>
        <sb-drop-down-item value="3">菜单3</sb-drop-down-item>
      </template>
    </sb-drop-down>
    <sb-drop-down disabled>
      <template #title> 禁止展开 </template>
      <template #dropdown>
        <sb-drop-down-item value="1">菜单1</sb-drop-down-item>
        <sb-drop-down-item value="2">菜单2</sb-drop-down-item>
        <sb-drop-down-item value="3">菜单3</sb-drop-down-item>
      </template>
    </sb-drop-down>
  </div>
</template>
