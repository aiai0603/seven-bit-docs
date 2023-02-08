<template>
  <div class="box">
    <sb-link disabled>default</sb-link>
    <sb-link type="warning" disabled> warning </sb-link>
    <sb-link type="success" disabled> success </sb-link>
    <sb-link type="error" disabled> error </sb-link>
    <sb-link type="secondary" disabled> secondary </sb-link>
  </div>
</template>

<style scoped>
.box > *:not(:first-child) {
  margin-left: 10px;
}
</style>
