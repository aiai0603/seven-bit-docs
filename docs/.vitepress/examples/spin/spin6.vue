<template>
  <div class="box">
    <sb-spin :size="36" tip="This may take a while...">
      <template #icon>
        <div class="element"></div>
      </template>
    </sb-spin>
  </div>
</template>

<style scoped>
.element {
  width: 30px;
  height: 30px;
  background-color: red;
}
</style>