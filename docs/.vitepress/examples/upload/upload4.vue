<template>
  <div class=".upload-demo">
    <sb-upload accept="image/*"></sb-upload>
    <div style="height: 10px;"></div>
    <sb-upload accept=".pdf"></sb-upload>
    <div style="height: 10px;"></div>
    <sb-upload accept=".docx"></sb-upload>
  </div>
</template>
<script lang="ts" setup>
</script>
<style lang="less">
.upload-demo{
  width: 200px;
}
</style>