<script setup lang="ts">
import Header from "../../components/layout/header.vue";
</script>

<template>
  <div class="common-layout">
    <el-container class="content">
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>
          <Header></Header>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.common-layout {
  width: 100vw;
  height: 100vh;
}
.content {
  width: 100%;
  height: 100%;
}
.el-header {
  background-color: #eeeeee;
}
.el-aside {
  background-color: #2f3e52;
  color: #fff;
}
.el-main {
  background-color: #f7f7f5;
}
</style>
