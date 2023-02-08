<template>
  <div class="box">
    <sb-row class="row">
      <sb-col class="col" :xs="{span:2}" :sm="{span:4}" :md="{span:8}" :lg="{span:12}" :xl="{span:16}" :xxl="{span:24}">  </sb-col>
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
