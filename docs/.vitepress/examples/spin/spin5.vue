<template>
  <div class="box">
    <sb-spin :size="30" :loading="loading" tip="This may take a while..." style="width: 100%">
      <div class="container">
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, aliquam. Velit, sequi magnam. Ipsa odit eum totam consectetur perferendis voluptatum sapiente, voluptas, vel esse dolorem ipsam natus adipisci modi aut!</span>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla deleniti rem hic velit nihil delectus nisi modi quam dolores magni voluptatibus, aliquid ad, sit sapiente nam praesentium eos. Tempore, impedit.</span>
      </div>
    </sb-spin>
    <br />
    <br />
    <sb-button @click="loading = !loading">click</sb-button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
let loading = ref(false);
</script>


<style scoped>
.container {
  box-sizing: border-box;
  padding: 20px 32px;
  border: 10px solid lightblue;
  border-radius: 5px;
}
</style>