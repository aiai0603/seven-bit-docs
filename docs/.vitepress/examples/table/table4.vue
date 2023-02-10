<template>
  <div class="box">
    <sbTable
      :columns="columns"
      :data="data"
      ref="tableRef"
      :bordered="bordered"
      :hoverable="hoverable"
      :stripe="stripe"
      :size="size"
      :loading="loading"
      :row-selection="rowSelection"
    >
      <template #empty>
        <div class="sb-empty-image">
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            class="sb-icon sb-icon-empty"
            stroke-width="4"
            stroke-linecap="butt"
            stroke-linejoin="miter"
          >
            <path
              d="M24 5v6m7 1 4-4m-18 4-4-4m28.5 22H28s-1 3-4 3-4-3-4-3H6.5M40 41H8a2 2 0 0 1-2-2v-8.46a2 2 0 0 1 .272-1.007l6.15-10.54A2 2 0 0 1 14.148 18H33.85a2 2 0 0 1 1.728.992l6.149 10.541A2 2 0 0 1 42 30.541V39a2 2 0 0 1-2 2Z"
            ></path>
          </svg>
        </div>
        <div class="sb-empty-description">暂无数据</div>
      </template>
    </sbTable>
  </div>
  <div class="action">
    border:
    <sb-button @click="changeBorder">{{ bordered }}</sb-button>
    hoverable:<sb-button @click="changehoverable">{{ hoverable }}</sb-button>
    stripe:<sb-button @click="changestripe">{{ stripe }}</sb-button>
  </div>
  <div class="action">
    size:
    <select v-model="size">
      <option v-for="val in sizeList" :key="val" :value="val">{{ val }}</option>
    </select>
    loading:<sb-button @click="changeLoad">{{ loading }}</sb-button>
    nodata:<sb-button @click="changenodata">{{ nodata }}</sb-button>
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
    ellipsis: true,
    width: "100px",
  },
  {
    title: "Email",
    dataIndex: "email",
    width: "100px",
  },
];
let data = ref([
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
]);

const bordered = ref(true);
const changeBorder = function () {
  bordered.value = !bordered.value;
};

const hoverable = ref(true);
const changehoverable = function () {
  hoverable.value = !hoverable.value;
};
const stripe = ref(true);
const changestripe = function () {
  stripe.value = !stripe.value;
};

const sizeList = reactive(["mini", "small", "medium", "large"]);
const size = ref("large");

const loading = ref(false);
const changeLoad = function () {
  loading.value = !loading.value;
};

const rowSelection = reactive({
  type: "checkbox",
  showCheckedAll: true,
});

const nodata = ref(false);
const changenodata = function () {
  nodata.value = !nodata.value;
  if (!nodata.value) {
    data.value = [
      {
        key: "1",
        name: "Jane Doe",
        salary: 23000,
        address:
          "32 Park Road, London11111111111111111111111111111111111111111111111111111111111",
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
  } else {
    data.value = [];
  }
};
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
.action {
  margin: 20px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
