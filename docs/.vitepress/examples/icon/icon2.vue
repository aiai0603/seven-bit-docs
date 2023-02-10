<template>
  <div class="box">
    <div class="show-icon">
      <sb-icon name="check-circle" class="icon-style"></sb-icon>
      <div>check-circle</div>
    </div>
    <div class="show-icon">
      <sb-icon name="close-circle" class="icon-style"></sb-icon>
      <div>close-circle</div>
    </div>
    <div class="show-icon">
      <sb-icon name="info-circle" class="icon-style"></sb-icon>
      <div>info-circle</div>
    </div>
    <div class="show-icon">
      <sb-icon name="left-circle" class="icon-style"></sb-icon>
      <div>left-circle</div>
    </div>
    <div class="show-icon">
      <sb-icon name="down-circle" class="icon-style"></sb-icon>
      <div>down-circle</div>
    </div>
    <div class="show-icon">
      <sb-icon name="copyright" class="icon-style"></sb-icon>
      <div>copyright</div>
    </div>
    <div class="show-icon">
      <sb-icon name="minus-circle" class="icon-style"></sb-icon>
      <div>minus-circle</div>
    </div>
    <div class="show-icon">
      <sb-icon name="plus-circle" class="icon-style"></sb-icon>
      <div>plus-circle</div>
    </div>
    <div class="show-icon">
      <sb-icon name="play-circle" class="icon-style"></sb-icon>
      <div>play-circle</div>
    </div>
    <div class="show-icon">
      <sb-icon name="question-circle" class="icon-style"></sb-icon>
      <div>question-circle</div>
    </div>
    <div class="show-icon">
      <sb-icon name="right-circle" class="icon-style"></sb-icon>
      <div>right-circle</div>
    </div>
    <div class="show-icon">
      <sb-icon name="timeout" class="icon-style"></sb-icon>
      <div>timeout</div>
    </div>
    <div class="show-icon">
      <sb-icon name="YUAN" class="icon-style"></sb-icon>
      <div>YUAN</div>
    </div>
    <div class="show-icon">
      <sb-icon name="up-circle" class="icon-style"></sb-icon>
      <div>up-circle</div>
    </div>
    <div class="show-icon">
      <sb-icon name="warning-circle" class="icon-style"></sb-icon>
      <div>warning-circle</div>
    </div>
  </div>
</template>
<style scoped>
.box {
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
}
.icon-style {
  font-size: 24px;
  margin-bottom: 20px;
  color: #1d2e29;
  display: flex;
}

.show-icon {
  padding: 20px 0px;
  border: 1px solid #ccc;
  width: 25%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s linear;
  font-size: 14px;
}

.show-icon:hover {
  background-color: #f2f3f5;
  transition: all 0.3s linear;
  font-weight: 800;
}
</style>
