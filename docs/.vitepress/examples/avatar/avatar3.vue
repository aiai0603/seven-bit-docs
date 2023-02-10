<template>
  <div class="box">
    <div class="List">
      <sbAvatar
        trigger-type="mask"
        :style="{ backgroundColor: '#168CFF' }"
        @click="clickFunc"
      >
        seven
        <template #trigger-icon>
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            class="sb-icon sb-icon-camera"
            stroke-width="4"
            stroke-linecap="butt"
            stroke-linejoin="miter"
          >
            <path
              d="m33 12-1.862-3.724A.5.5 0 0 0 30.691 8H17.309a.5.5 0 0 0-.447.276L15 12m16 14a7 7 0 1 1-14 0 7 7 0 0 1 14 0ZM7 40h34a1 1 0 0 0 1-1V13a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v26a1 1 0 0 0 1 1Z"
            ></path>
          </svg>
        </template>
      </sbAvatar>
      <sbAvatar
        trigger-type="button"
        :style="{ backgroundColor: '#168CFF' }"
        @click="clickFunc"
      >
        seven
        <template #trigger-icon>
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            class="sb-icon sb-icon-camera"
            stroke-width="4"
            stroke-linecap="butt"
            stroke-linejoin="miter"
          >
            <path
              d="m33 12-1.862-3.724A.5.5 0 0 0 30.691 8H17.309a.5.5 0 0 0-.447.276L15 12m16 14a7 7 0 1 1-14 0 7 7 0 0 1 14 0ZM7 40h34a1 1 0 0 0 1-1V13a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v26a1 1 0 0 0 1 1Z"
            ></path>
          </svg> </template
      ></sbAvatar>
    </div>
  </div>
</template>
<script ts setup>
const clickFunc = function () {
  alert("click");
};
</script>
<style scoped>
.box > *:not(:first-child) {
  margin-left: 10px;
}
.box {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.List {
  margin: 10px;
}
.sb-avatar {
  margin: 6px;
}
</style>
