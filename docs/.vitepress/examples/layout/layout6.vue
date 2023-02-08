<template>
  <div class="box">
    <sb-layout class="layout-0">
      <div class="layout-1">div1</div>
      <div class="layout-2">div2</div>
    </sb-layout>
    <sb-layout direction="horizontal" class="layout-0">
      <sb-main class="layout-1">div1</sb-main>
      <sb-main class="layout-2">div2</sb-main>
    </sb-layout>
  </div>
</template>

<style scoped>
.box {
  width: 100%;
}
.layout-0 {
  width: 100%;
  margin: 10px;
}
.layout-1 {
  background-color: skyblue;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

.layout-2 {
  background-color: rgb(76, 179, 219);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}
</style>
