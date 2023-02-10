<template>
  <div class="box">
    <sb-avatar>A</sb-avatar>
    <sb-avatar :style="{ backgroundColor: '#3370ff' }">kif</sb-avatar>
  </div>
</template>

<style scoped>
.box > *:not(:first-child) {
  margin-left: 10px;
}
</style>
