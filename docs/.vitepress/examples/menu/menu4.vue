<template>
  <div class="box">
    <div class="aside">
      <sb-menu defaultKey="3" @handleItemClick="test" mode="vertical">
        <sb-menu-item value="1">
          <template #icon>
            <sb-icon name="location"></sb-icon>
          </template>
          测试1
        </sb-menu-item>
        <sb-menu-item value="2" disabled>测试2</sb-menu-item>
        <sb-menu-item value="3">测试3</sb-menu-item>
      </sb-menu>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const value = ref("3");
const test = (clickValue: any) => {
  value.value = clickValue;
};
</script>
<style scoped>
.aside {
  width: 200px;
}
</style>

