<template>
  <div class="box">
    <sb-layout direction="horizontal" class="layout-0">
      <sb-aside width="100">
        <div style="height: 100px" class="layout-3">Aside</div>
      </sb-aside>
      <sb-main class="layout-2"> Main </sb-main>
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
