<template>
  <sb-switch v-model:checked="checked1" :beforeChange="handleChangeIntercept" />
  <sb-switch v-model:checked="checked2" type="round" :beforeChange="handleChangeIntercept2" />
  <sb-switch v-model:checked="checked3" type="line" :beforeChange="handleChangeIntercept3" />
</template>

<script setup>
import { ref } from 'vue';
const checked1 = ref(false);
const checked2 = ref(false);
const checked3 = ref(false);
const handleChangeIntercept = async newValue => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return true;
};

const handleChangeIntercept2 = async newValue => {
  await new Promise(resolve => setTimeout(resolve, 500));
  if (!newValue) {
    console.error("OH, You can't change");
    return false;
  }
  return true;
};

const handleChangeIntercept3 = async newValue => {
  await new Promise((_, reject) =>
    setTimeout(() => {
      console.error('OH, Something went wrong');
      reject();
    }, 1000)
  );
  return true;
};
</script>

<style scoped>
.sb-switch {
  margin-right: 20px;
}
</style>