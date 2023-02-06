<template>
  <div class="box">
    <sb-progress 
      :width="500" 
      :percent="60" 
      :color="colorObj"
    />
    <br />
    <sb-progress 
      type="circle"
      :width="100" 
      :percent="60" 
      :color="colorObj"
    />
  </div>
</template>

<script setup>
const colorObj = [
  {
    offset: "0%",
    color: "#257cff7f",
  },
  {
    offset: "100%",
    color: "#165dff",
  },
];
</script>