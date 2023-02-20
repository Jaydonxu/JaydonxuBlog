<template>
  <div class="flex items-center justify-center test-container">
    <div class="number" v-for="item, index in numList" :key="index">
      <span class="list" :ref="getList">0123456789</span>
    </div>
  </div>
  <div>
    {{ numList }}
  </div>
</template>

<script setup lang="ts">
import { transform } from "lodash";
import { ref, defineProps, onMounted } from "vue";
// const list = ref([1, 2, 4, 5]);
const props = defineProps({
  number: {
    type: String,
    default: "456789",
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

console.log(props.number, props.numStyle, numList, "number::");

const listDom = []
const getList = (el) => {
  console.log(el, 'elel');
  listDom.push(el)
}

onMounted(() => {
  console.log('执行了，onMounted');
  Array.from(listDom).forEach(c => {
    console.dir(c, 'c::');
    setInterval(() => {
      c.style.transform = `translateY(-${50}%)`
    }, 200)
  })

})

console.log(listDom, 'listDom');


// return { getList }

</script>

<style lang="scss" scoped>
.test-container {
  width: 100vw;
  height: 100vh;

  .number {
    width: 20px;
    height: 20px;
    border: 1px solid #333;
    overflow: hidden;

    span {
      transition: all 1s;
      writing-mode: vertical-rl;
      text-orientation: upright;
    }

    .list {
      border: 1px solid red;
    }
  }
}
</style>
