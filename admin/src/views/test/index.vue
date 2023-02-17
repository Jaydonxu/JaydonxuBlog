<template>
  <div class="flex items-center justify-center test-container">
    <div class="number">
      <span>0123456789</span>
      <span v-for="item in list" :key="item">{{ item }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const list = [1, 2, 4, 5];
</script>

<style lang="scss" scoped>
.test-container {
  width: 100vw;
  height: 100vh;
  .number {
    width: 20px;
    height: 20px;
    border: 1px solid #333;
    span {
      writing-mode: vertical-rl;
      text-orientation: upright;
      transform: translateY(0%);
    }
  }
}
</style>
