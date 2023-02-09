<template>
  <div class="box">
    <sb-avatar :image-url="imageUrl">A</sb-avatar>
    <sb-avatar :style="{ backgroundColor: '#3370ff' }">kif</sb-avatar>
  </div>
</template>
<script ts setup>
const imageUrl =
  "https://kifimg.oss-cn-beijing.aliyuncs.com/img/202212060030103.png";
</script>
<style scoped>
.box > *:not(:first-child) {
  margin-left: 10px;
}
</style>
