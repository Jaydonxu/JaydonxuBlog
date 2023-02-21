<template>
  <div class="flex items-center justify-center test-container">
    <div
      class="number"
      :style="{ ...numStyle }"
      v-for="(item, index) in numList"
      :key="index"
    >
      <span
        class="list"
        :style="{
          fontSize: numStyle.height,
        }"
        :ref="getList"
        >0123456789</span
      >
    </div>
  </div>
  <div>
    {{ numList }}
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, onMounted } from "vue";
const props = defineProps({
  number: {
    type: String,
    default: "123456789456789",
  },
  numStyle: {
    type: Object,
    default: {
      width: "20px",
      height: "20px",
      backgroundColor: "rgb(255, 255, 255, 0.4)",
      marginRight: "4px",
      fontSize: "14px",
      borderRadius: "2px",
      display: "block",
    },
  },
});
console.log(parseInt(props.numStyle.height), "numStylenumStylenumStyle");

const numList = ref(props.number.split(""));
const listDom = [];
const getList = (el) => {
  listDom.push(el);
};
onMounted(() => {
  Array.from(listDom).forEach((c, i) => {
    const isNum = numList.value[i] !== "," && numList.value[i] !== ".";
    const timerObj = {};
    let index = 0;
    timerObj[i] = setInterval(() => {
      index++;
      if (index.toString() !== numList.value[i] && isNum) {
        c.style.transform = `translateY(-${index * 10}%)`;
      } else {
        clearInterval(timerObj[i]);
        timerObj[i] = null;
      }
    }, 100);
  });
});
</script>

<style lang="scss" scoped>
.test-container {
  width: 100vw;
  height: 100vh;

  .number {
    display: block;
    border: 1px solid red;
    overflow: hidden;

    span {
      transition: all 1s;
      writing-mode: vertical-rl;
      text-orientation: upright;
      // border: 1px solid red;
      display: block;
    }

    .list {
      box-sizing: border-box;
      // border: 1px solid red;
    }
  }
}
</style>
