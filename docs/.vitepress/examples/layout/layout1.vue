<template>
  <div class="box">
    <sb-layout class="layout-0">
      <sb-header class="layout-1" height="50"> Header </sb-header>
      <sb-layout direction="horizontal" class="layout-0">
        <sb-aside width="100" >
          <div style="height: 100px" class="layout-3">Aside</div>
        </sb-aside>
        <sb-main class="layout-2"> Main </sb-main>
      </sb-layout>
      <sb-footer class="layout-1" height="50"> Footer </sb-footer>
    </sb-layout>
  </div>
</template>

<style scoped>
.box {
  width: 100%;
}
.layout-0 {
  width: 100%;
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

.layout-3 {
  background-color: rgb(160, 224, 247);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}
</style>
