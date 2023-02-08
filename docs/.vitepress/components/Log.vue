<template>
  <div class="log">
    <a-timeline reverse>
      <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
      <a-timeline-item>Solve initial network problems 2015-09-02</a-timeline-item>
      <a-timeline-item>Technical testing 2015-09-03</a-timeline-item>
      <a-timeline-item>Network problems being solved 2015-09-04</a-timeline-item>
      <a-timeline-item>往后写...</a-timeline-item>
    </a-timeline>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.log {
  margin-top: 50px;
}

.log::v-deep(.ant-timeline-item-content) {
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  padding: 20px;
}
</style>