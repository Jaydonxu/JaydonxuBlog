<template>
  <div class="head-container flex flex-end items-center">
    <el-dropdown>
      <span class="user-img">
        <img src="../../assets/imgs/home/userImg.jpeg" />
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            @click="
              () => {
                $router.push('/user');
              }
            "
            >主页</el-dropdown-item
          >
          <el-dropdown-item @click="loginOut">退出登录</el-dropdown-item>
          <!-- <el-dropdown-item>Action 3</el-dropdown-item> -->
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
function loginOut() {
  console.log("执行了");

  window.localStorage.removeItem("token");
}
</script>

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
