<template>
  <div class="box">
    <sb-row class="row">
      <sb-col span="8" class="col"> 33.3 </sb-col>
      <sb-col span="8" class="col" offest="8"> 33.3 </sb-col>
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
