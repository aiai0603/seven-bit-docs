<template>
  <div class="box">
    <sb-button @click="testopen()" style="margin-right:10px"> 打开 </sb-button>
    <sb-button status="secondary" @click="testclose()"> 关闭 </sb-button>
    <div class="aside">
      <sb-menu @handleItemClick="test" defaultKey="1" mode="vertical" ref="me">
        <sb-menu-item value="1">
          <template #icon>
            <sb-icon name="location"></sb-icon>
          </template>
          测试1
        </sb-menu-item>
        <sb-menu-item value="2" disabled>测试2</sb-menu-item>
        <sb-sub-menu :defaultOpen="true" keys="3">
          <template #title>
            <sb-menu-item>
              <template #icon>
                <sb-icon name="location"></sb-icon>
              </template>
              测试1
            </sb-menu-item>
          </template>
          <sb-menu-item value="3-2">测试5</sb-menu-item>
          <sb-sub-menu :defaultOpen="true" keys="3-3">
            <template #title>
              <sb-menu-item> 测试1 </sb-menu-item>
            </template>
            <sb-menu-item value="3-3-1">测试5</sb-menu-item>
            <sb-menu-item value="3-3-2">测试6</sb-menu-item>
          </sb-sub-menu>
        </sb-sub-menu>
        <sb-menu-item value="4">
          <template #icon>
            <sb-icon name="location"></sb-icon>
          </template>
          测试4
        </sb-menu-item>
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
const me = ref(null);
const testopen = () => {
  me.value && (me.value as any).handleOpenMenu();
};
const testclose = () => {
  me.value && (me.value as any).handleCloseMenu();
};
</script>
<style scoped>
.aside {
  width: 200px;
  margin-top: 10px;
  box-sizing: content-box;
}
</style>

