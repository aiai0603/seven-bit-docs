<template>
  <div class="box">
    <sb-link>default</sb-link>
    <sb-link type="warning"> warning </sb-link>
    <sb-link type="success"> success </sb-link>
    <sb-link type="error"> error </sb-link>
    <sb-link type="secondary"> secondary </sb-link>
  </div>
</template>


<style scoped>
.box > *:not(:first-child) {
  margin-left: 10px;
}
</style>