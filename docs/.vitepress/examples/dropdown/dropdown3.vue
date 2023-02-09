<template>
  <div class="box">
    <sb-drop-down :maxHeight="50">
      <template #title> 最高50px </template>
      <template #dropdown>
        <sb-drop-down-menu title="菜单组1">
          <sb-drop-down-item value="1">菜单1</sb-drop-down-item>
          <sb-drop-down-item value="2">菜单2</sb-drop-down-item>
          <sb-drop-down-item value="3">菜单3</sb-drop-down-item>
          <sb-drop-down-item value="4">菜单3</sb-drop-down-item>
          <sb-drop-down-item value="5">菜单3</sb-drop-down-item>
        </sb-drop-down-menu>
      </template>
    </sb-drop-down>
  </div>
</template>
