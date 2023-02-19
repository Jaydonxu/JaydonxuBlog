<template>
  <div class="flex items-center justify-center test-container">
    <div class="number">
      <span>{{ number }}</span>
      <span class="list" v-for="item in numList" :key="item">{{ item }}</span>
    </div>
  </div>
  <div>
    {{ numList }}
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";

// const list = ref([1, 2, 4, 5]);
const props = defineProps({
  number: {
    type: String,
    default: "123124124",
  },
  numStyle: {
    type: Object,
    default: () => {
      width: "14px";
      height: "14px";
    },
  },
});

const numList = ref(props.number.split(""));

console.log(props.number, props.numStyle, numList, "number::");
</script>

<style lang="scss" scoped>
.test-container {
  width: 100vw;
  height: 100vh;
  .number {
    width: 20px;
    height: 20px;
    border: 1px solid #333;
    transition: all 1s;
    span {
      writing-mode: vertical-rl;
      text-orientation: upright;
    }
    .list {
      border: 1px solid red;
    }
  }
}
</style>
