<template>
  <div class="head-container flex flex-end items-center">
    <el-dropdown>
      <span class="user-img">
        <img src="@/assets/imgs/home/userImg.jpeg" />
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
  window.localStorage.removeItem("token");
  this.$router.push("/home");
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
