<template>
  <div class="box">
    <sbTable :columns="columns" :data="data" :row-selection="rowSelection">
    </sbTable>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    width: "70px",
  },
  {
    title: "Salary",
    dataIndex: "salary",
    width: "60px",
  },
  {
    title: "Address",
    dataIndex: "address",
    width: "100px",
  },
  {
    title: "Email",
    dataIndex: "email",
    width: "100px",
  },
];
let data = [
  {
    key: "1",
    name: "Jane Doe",
    salary: 23000,
    address: "32 Park Road, ",
    email: "jane.doe@example.com",
  },
  {
    key: "2",
    name: "Alisa Ross",
    salary: 25000,
    address: "35 Park Road, London",
    email: "alisa.ross@example.com",
  },
  {
    key: "3",
    name: "Kevin Sandra",
    salary: 22000,
    address: "31 Park Road, London",
    email: "kevin.sandra@example.com",
  },
  {
    key: "4",
    name: "Ed Hellen",
    salary: 17000,
    address: "42 Park Road, London",
    email: "ed.hellen@example.com",
  },
  {
    key: "5",
    name: "William Smith",
    salary: 27000,
    address: "62 Park Road, London",
    email: "william.smith@example.com",
  },
];
const rowSelection = reactive({
  type: "checkbox",
  showCheckedAll: true,
});
</script>

<style lang="less">
.box {
  // margin: 20px;
  // padding: 20px;

  width: 100%;
}
table {
  display: table !important;
}
</style>
