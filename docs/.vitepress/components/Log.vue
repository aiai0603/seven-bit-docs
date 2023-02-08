<template>
  <div class="log">
    <a-timeline reverse>
      <a-timeline-item color="#165dff">Create a services site 2015-09-01</a-timeline-item>
      <a-timeline-item color="#165dff">Solve initial network problems 2015-09-02</a-timeline-item>
      <a-timeline-item color="#165dff">Technical testing 2015-09-03</a-timeline-item>
      <a-timeline-item color="#165dff">Network problems being solved 2015-09-04</a-timeline-item>
      <a-timeline-item color="#165dff">往后写...</a-timeline-item>
    </a-timeline>
  </div>
</template>

<script>
import 'ant-design-vue/lib/timeline/style/index.css';
</script>

<style scoped>
.log {
  margin-top: 50px;
}

.log::v-deep(.ant-timeline-item-content) {
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  padding: 20px;
}

.dark .log::v-deep(.ant-timeline-item-tail) {
  border-left-color: #4d4a4a;
}

.dark .log::v-deep(.ant-timeline-item-content) {
  color: rgba(255, 255, 245, 0.86);
  box-shadow: 0 2px 12px 0 rgb(255 255 255 / 10%);
}
</style>