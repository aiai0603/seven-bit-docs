<template>
  <div class="box">
    <sb-spin />
    <sb-spin :size="28" />
    <sb-spin :size="36" />
  </div>
</template>

<style scoped>
.box > *:not(:first-child) {
  margin-left: 10px;
}
</style>