<template>
  <div class="box">
    <sb-button status="default" @click="info">Open Modal</sb-button>
    <sb-button status="success" @click="success">Open Modal</sb-button>
    <sb-button status="warning" @click="warning">Open Modal</sb-button>
    <sb-button status="danger" @click="error">Open Modal</sb-button>
  </div>
</template>

<script>
import { sbModal } from "seven-bit-ui";
export default {
  methods: {
    info() {
      sbModal.$info({
        title: "My Title",
        content: "This is a long long long content!",
        onOk: () => {
          console.log("okkkkk");
        },
      });
    },
    success() {
      sbModal.$success({
        title: "My Title",
        content: "This is a long long long content!",
        onOk: () => {
          console.log("okkkkk");
        },
      });
    },
    warning() {
      sbModal.$warning({
        title: "My Title",
        content: "This is a long long long content!",
        onOk: () => {
          console.log("okkkkk");
        },
      });
    },
    error() {
      sbModal.$error({
        title: "My Title",
        content: "This is a long long long content!",
        onOk: () => {
          console.log("okkkkk");
        },
      });
    },
  },
};
</script>

<style scoped>
.box > *:not(:first-child) {
  margin-left: 10px;
}
</style>