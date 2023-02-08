<template>
  <div class="box">
    <sb-progress 
      width="50%" 
      :percent="percent" 
      :color="color" 
      :track-color="trackColor" 
    />
    <br />
    <sb-progress 
      type="circle"
      width="50" 
      :percent="percent" 
      :color="color" 
      :track-color="trackColor" 
    />
  </div>
</template>

<script setup>
const percent = 60;
const color = "#165dff";
const trackColor="#e7f3ff" 
</script>