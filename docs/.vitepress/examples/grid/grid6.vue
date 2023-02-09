<template>
  <div class="box">
    <sb-row class="row" align="start">
      <sb-col span="6" class="col"> 1 </sb-col>
      <sb-col span="6" class="col"> 2 </sb-col>
      <sb-col span="6" class="col"> 3 </sb-col>
    </sb-row>
    <sb-row class="row" align="end">
      <sb-col span="6" class="col"> 1 </sb-col>
      <sb-col span="6" class="col"> 2 </sb-col>
      <sb-col span="6" class="col"> 3 </sb-col>
    </sb-row>
    <sb-row class="row" align="center">
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
  height: 100px;
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
