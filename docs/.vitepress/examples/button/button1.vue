<template>
  <div class="box">
    <sb-button>primary</sb-button>
    <sb-button type="outline">outline</sb-button>
    <sb-button type="text">text</sb-button>
  </div>
</template>


<style scoped>
.box > *:not(:first-child) {
  margin-left: 10px;
}
</style>