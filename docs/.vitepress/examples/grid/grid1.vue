<template>
  <div class="box">
    <sb-row class="row">
      <sb-col span="12" class="col"> 50 </sb-col>
      <sb-col span="12" class="col"> 50 </sb-col>
    </sb-row>
    <sb-row class="row">
      <sb-col span="6" class="col"> 25 </sb-col>
      <sb-col span="6" class="col"> 25 </sb-col>
      <sb-col span="6" class="col">25 </sb-col>
      <sb-col span="6" class="col">25 </sb-col>
    </sb-row>
    <sb-row class="row">
      <sb-col span="24" class="col"> 100</sb-col>
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
