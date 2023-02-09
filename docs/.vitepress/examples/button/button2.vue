<template>
  <div>
    <div class="box">
      <sb-button> default </sb-button>
      <sb-button status="warning"> warning </sb-button>
      <sb-button status="danger"> danger </sb-button>
      <sb-button status="success"> success </sb-button>
      <sb-button status="secondary"> secondary </sb-button>
    </div>
    <div class="box">
      <sb-button type="outline"> default </sb-button>
      <sb-button status="warning" type="outline"> warning </sb-button>
      <sb-button status="danger" type="outline"> danger </sb-button>
      <sb-button status="success" type="outline"> success </sb-button>
      <sb-button status="secondary" type="outline"> secondary </sb-button>
    </div>
    <div class="box">
      <sb-button type="text"> default </sb-button>
      <sb-button status="warning" type="text"> warning </sb-button>
      <sb-button status="danger" type="text"> danger </sb-button>
      <sb-button status="success" type="text"> success </sb-button>
      <sb-button status="secondary" type="text"> secondary </sb-button>
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