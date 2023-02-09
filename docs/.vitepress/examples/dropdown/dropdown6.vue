<template>
  <div class="box">
    <sb-drop-down :maxHeight="200">
      <template #title> 分组菜单 </template>
      <template #dropdown>
        <sb-drop-down-menu title="菜单组1">
          <sb-drop-down-item value="11">菜单1-1</sb-drop-down-item>
          <sb-drop-down-item value="12">菜单1-2</sb-drop-down-item>
          <sb-drop-down-item value="13">菜单1-3</sb-drop-down-item>
          <sb-drop-down-item value="14">菜单1-4</sb-drop-down-item>
          <sb-drop-down-item value="15">菜单1-5</sb-drop-down-item>
        </sb-drop-down-menu>
        <sb-drop-down-menu title="菜单组2">
          <sb-drop-down-item value="21">菜单2-1</sb-drop-down-item>
          <sb-drop-down-item value="22">菜单2-2</sb-drop-down-item>
          <sb-drop-down-item value="23">菜单2-3</sb-drop-down-item>
          <sb-drop-down-item value="24">菜单2-4</sb-drop-down-item>
          <sb-drop-down-item value="25">菜单2-5</sb-drop-down-item>
        </sb-drop-down-menu>
      </template>
    </sb-drop-down>
  </div>
</template>
