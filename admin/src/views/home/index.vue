<template>
  <div class="home-container">
    <div class="home-user-info">个人信息</div>
    <div class="user-blog-data">博客数据</div>
    <div class="blog-date">当日时间</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
onMounted(() => {
  console.log("进来了");
});
</script>

<style scoped></style>
