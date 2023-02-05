<script setup lang="ts">
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
const form = ref<FormInstance>();
const ruleForm = reactive<FormRules>({
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [
    {
      required: true,
      message: "请输入密码",
      trigger: "change",
    },
  ],
});

const formData = reactive({
  username: "",
  password: "",
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!", fields);
    }
  });
};
</script>

<template>
  <div class="login-container">
    <div class="login-content flex items-center justify-between">
      <img src="../../assets/imgs/login/login_img.png" alt="" />
      <div class="login-form">
        <h3>博客后台管理系统</h3>
        <el-form
          ref="form"
          label-position="top"
          label-width="100px"
          :model="formData"
          :rules="ruleForm"
          style="max-width: 460px"
        >
          <el-form-item label="账号" prop="username">
            <el-input v-model="formData.username" />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="formData.password" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm(form)"> </el-button>
          </el-form-item>
        </el-form>
        <!-- <el-button type="primary" @click="loginHandler(form)">登录</el-button> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-container {
  width: 100vw;
  height: 100vh;
  background-color: #1890ff;
  padding-top: 100px;
  .login-content {
    width: 1200px;
    margin: 0 auto;
    .login-form {
      width: 350px;
      height: 400px;
      background-color: #fff;
      padding: 45px 10px;
      border-radius: 4px;
      h3 {
        font-weight: 400;
        text-align: center;
        margin: 0 auto;
      }
      .el-form {
        width: 300px;
        margin: 40px auto;
        ::v-deep .el-form-item {
          .el-input__wrapper {
            height: 40px;
          }
          .el-form-item__label::before {
            display: none !important;
          }
        }
      }
      .el-button {
        width: 300px;
        height: 40px;
        margin: 0 auto;
        display: block;
      }
    }
  }
}
</style>
