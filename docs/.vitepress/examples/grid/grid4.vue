<template>
  <div class="box">
    <sb-row class="row" :gutter="20">
      <sb-col span="8"> <div class="col">33.3-1</div> </sb-col>
      <sb-col span="8"> <div class="col">33.3-2</div> </sb-col>
      <sb-col span="8"> <div class="col">33.3-3</div> </sb-col>
    </sb-row>
  </div>
</template>

<style scoped>
.box {
  width: 100%;
}
.row {
  margin: 10px 0;
  background-color: #ccc;
}
.col {
  height: 50px;
  border: 1px #000 solid;
  background-color: skyblue;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
}
</style>
