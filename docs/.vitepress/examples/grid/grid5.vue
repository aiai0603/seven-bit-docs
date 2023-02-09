<template>
  <div class="box">
    <sb-row class="row" justify="start">
      <sb-col span="6" class="col"> 1 </sb-col>
      <sb-col span="6" class="col"> 2 </sb-col>
      <sb-col span="6" class="col"> 3 </sb-col>
    </sb-row>
    <sb-row class="row" justify="end">
      <sb-col span="6" class="col"> 1 </sb-col>
      <sb-col span="6" class="col"> 2 </sb-col>
      <sb-col span="6" class="col"> 3 </sb-col>
    </sb-row>
    <sb-row class="row" justify="center">
      <sb-col span="6" class="col"> 1 </sb-col>
      <sb-col span="6" class="col"> 2 </sb-col>
      <sb-col span="6" class="col"> 3 </sb-col>
    </sb-row>
    <sb-row class="row" justify="space-around">
      <sb-col span="6" class="col"> 1 </sb-col>
      <sb-col span="6" class="col"> 2 </sb-col>
      <sb-col span="6" class="col"> 3 </sb-col>
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
