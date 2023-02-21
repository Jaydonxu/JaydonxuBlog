<template>
  <div class="flex items-center justify-center test-container">
    <div class="number" v-for="item, index in numList" :key="index">
      <span class="list" v-if="item === ',' || item === '.'">{{ item }}</span>
      <span class="list" v-else :ref="getList">0123456789</span>
    </div>
  </div>
  <div>
    {{ numList }}
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, onMounted } from "vue";
// const list = ref([1, 2, 4, 5]);
const props = defineProps({
  number: {
    type: String,
    default: "1,234,567,894,567.89",
  },
  numStyle: {
    type: Object,
    default: {
      width: "14px",
      height: "14px",
      backgroundColor: 'red',
    }
  },

});

const strList = ref(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])
console.log(strList);
const numList = ref(props.number.split(""));

const listDom = []
const getList = (el) => {
  listDom.push(el)
}
onMounted(() => {
  Array.from(listDom).forEach((c, i) => {
    const isNum = numList.value[i] !== ',' && numList.value[i] !== '.'
    const timerObj = {}
    let index = 0
    timerObj[i] = setInterval(() => {
      index++
      if (index.toString() !== numList.value[i] && isNum) {
        c.style.transform = `translateY(-${index * 16}px)`
      } else {
        clearInterval(timerObj[i])
        timerObj[i] = null
        // if (!isNum) {
        //   c.innerHTML = numList.value[i]
        //   console.dir(c, "改变值：：");

        // }
      }
    }, 100)
  })
})
</script>

<style lang="scss" scoped>
.test-container {
  width: 100vw;
  height: 100vh;

  .number {
    width: 20px;
    height: 20px;
    // border: 1px solid #333;
    overflow: hidden;

    span {
      transition: all 1s;
      writing-mode: vertical-rl;
      text-orientation: upright;
      // border: 1px solid red;
      display: block;
    }

    .list {
      // border: 1px solid red;
    }
  }
}
</style>
