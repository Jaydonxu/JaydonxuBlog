<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.logoBox {
  position: absolute;
  top: 18px;
  left: 30px;
  font-size: 24px;
  color: #fff;
}

.box {
  width: 100vw;
  height: 100vh;
}
.header {
  padding: 0;
  height: 58px;
  background-color: #545c64;
}

/* 去除默认的边框样式 */
.el-header .el-menu {
  border-bottom: none;
}
.el-aside .el-menu {
  border-right: none;
}

.el-main {
  background-color: #e9eef3;
}

.el-aside {
  width: 240px;
  background: #545c64;
  padding-top: 58px;
}
</style>
