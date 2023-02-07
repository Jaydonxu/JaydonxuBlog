<script setup lang="ts">
import Header from "../../components/layout/header.vue";
import menuAside from "../../components/layout/menuAside.vue";
</script>

<template>
  <div class="common-layout">
    <el-container class="content">
      <el-aside>
        <menuAside></menuAside>
      </el-aside>
      <el-container>
        <el-header>
          <Header></Header>
        </el-header>
        <el-main>
          <RouterView></RouterView>
        </el-main>
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
.el-main {
  background-color: #f7f7f5;
}
</style>
