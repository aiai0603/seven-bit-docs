<template>
  <div class="box">
    <sb-button size="small"> small </sb-button>
    <sb-button> default </sb-button>
    <sb-button size="large"> large </sb-button>
  </div>
</template>


<style scoped>
.box > *:not(:first-child) {
  margin-left: 10px;
}
</style>