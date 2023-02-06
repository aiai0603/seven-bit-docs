<template>
  <div class="result">
    <sb-result 
      title="This is title"
      subtitle="This is subtitle"
    >
      <template #icon>
        <img src="https://d300.paixin.com/thumbs/1222104/7138590/staff_1024.jpg?imageView2/2/w/500/h/360/format/webp/interlace/1/q/90/ignore-error/1" alt="logo">
      </template>
      <template #extra>
        <sb-button status="secondary" style="margin-right: 10px">取消</sb-button>
        <sb-button>返回</sb-button>
      </template>
    </sb-result>
  </div>
</template>

<style scoped>
.result:deep(img) {
  width: 150px;
  height: 150px;
  border-radius: 5px;
  box-shadow: 0 4px 12px rgba(0,0,0,.15);
}
</style>