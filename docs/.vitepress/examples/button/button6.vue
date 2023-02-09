<template>
  <div>
    <div class="box">
      <sb-button disabled> default </sb-button>
      <sb-button status="warning" disabled> warning </sb-button>
      <sb-button status="danger" disabled> danger </sb-button>
      <sb-button status="success" disabled> success </sb-button>
      <sb-button status="secondary" disabled> secondary </sb-button>
    </div>
    <div class="box">
      <sb-button type="outline" disabled> default </sb-button>
      <sb-button status="warning" type="outline" disabled> warning </sb-button>
      <sb-button status="danger" type="outline" disabled> danger </sb-button>
      <sb-button status="success" type="outline" disabled> success </sb-button>
      <sb-button status="secondary" type="outline" disabled> secondary </sb-button>
    </div>
    <div class="box">
      <sb-button type="text" disabled> default </sb-button>
      <sb-button status="warning" type="text" disabled> warning </sb-button>
      <sb-button status="danger" type="text" disabled> danger </sb-button>
      <sb-button status="success" type="text" disabled> success </sb-button>
      <sb-button status="secondary" type="text" disabled> secondary </sb-button>
    </div>
  </div>
</template>


<style scoped>
.box {
  margin: 10px;
}
.box > *:not(:first-child) {
  margin-left: 10px;
}
</style>