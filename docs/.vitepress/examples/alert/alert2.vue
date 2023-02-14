<template>
  <div class="box">
    <div class="sb-row">
      <div class="sb-col">
        <sb-alert>This is an info alert.</sb-alert>
      </div>
      <div class="sb-col">
        <sb-alert type="success">This is an success alert.</sb-alert>
      </div>
      <div class="sb-col">
        <sb-alert type="warning">This is an warning alert.</sb-alert>
      </div>
      <div class="sb-col">
        <sb-alert type="error">This is an error alert.</sb-alert>
      </div>
    </div>
  </div>
</template>
<style scoped>
.sb-row {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
}

.sb-col {
  box-sizing: border-box;
  flex: 0 0 50%;
  width: 50%;
  padding: 10px 20px;
}
</style>