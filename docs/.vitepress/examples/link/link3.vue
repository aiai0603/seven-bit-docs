<template>
  <div class="box">
    <sb-link underline>default</sb-link>
    <sb-link type="warning" underline> warning </sb-link>
    <sb-link type="success" underline> success </sb-link>
    <sb-link type="error" underline> error </sb-link>
    <sb-link type="secondary" underline> secondary </sb-link>
  </div>
</template>

<style scoped>
.box > *:not(:first-child) {
  margin-left: 10px;
}
</style>
