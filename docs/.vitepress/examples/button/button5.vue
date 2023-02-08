<template>
  <div class="box">
    <sb-button round>round</sb-button>
    <sb-button type="outline" round>outline</sb-button>
    <sb-button type="text" round>text</sb-button>
  </div>
</template>


<style scoped>
.box > *:not(:first-child) {
  margin-left: 10px;
}
</style>