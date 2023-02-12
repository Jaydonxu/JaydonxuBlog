<template>
  <div class="head-container flex flex-end items-center">
    <span class="user-img">
      <img src="../../assets/imgs/home/userImg.jpeg" alt />
    </span>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.head-container {
  width: 100%;
  height: 100%;
  background-color: #eeeeee;
  .user-img {
    width: 30px;
    height: 30px;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
