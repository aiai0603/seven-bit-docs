<template>
  <div class="box">
    <div class="List">
      <sbAvatar shape="circle" size="20">20</sbAvatar>
      <sbAvatar shape="circle" size="30">30</sbAvatar>
      <sbAvatar shape="circle">40</sbAvatar>
      <sbAvatar shape="circle" size="50">50</sbAvatar>
      <sbAvatar shape="circle" size="60">60</sbAvatar>
    </div>
    <div class="List">
      <sbAvatar shape="square" size="20">20</sbAvatar>
      <sbAvatar shape="square" size="30">30</sbAvatar>
      <sbAvatar shape="square">40</sbAvatar>
      <sbAvatar shape="square" size="50">50</sbAvatar>
      <sbAvatar shape="square" size="60">60</sbAvatar>
    </div>
  </div>
</template>

<style scoped>
.box > *:not(:first-child) {
  margin-left: 10px;
}
.box {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.List {
  margin: 10px;
}
.sb-avatar {
  margin: 6px;
}
</style>
