<script setup lang="ts">
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { tagAdd } from "../../api/index.js";
const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];
const formData = reactive({
  name: "",
});
const search = () => {
  console.log("搜索");
};
const add = () => {
  dialogFormVisible.value = true;
};

// 弹窗内容
const dialogFormVisible = ref(false);

const dialogForm = reactive({
  name: "",
  desc: "",
  region: "",
});

const rules = reactive<FormRules>({
  name: [{ required: true, message: "请输入标签名称", trigger: "blur" }],
  desc: [{ required: true, message: "请输入标签描述", trigger: "blur" }],
  region: [
    {
      required: true,
      message: "请选择状态",
      trigger: "change",
    },
  ],
});

const confirmHandle = async () => {
  console.log("提交代码", dialogForm);
  const res = await tagAdd();
};
</script>
<template>
  <div class="form-content">
    <el-form :model="formData" label-width="120px">
      <el-col :span="4">
        <el-form-item label="标签名称:">
          <el-input v-model="formData.name" width="180" />
        </el-form-item>
      </el-col>
      <el-button type="primary" @click="search">查询</el-button>
      <el-button type="success" @click="add">新增</el-button>
    </el-form>
  </div>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="ID" width="180" />
      <el-table-column prop="name" label="标签名称" width="180" />
      <el-table-column prop="address" label="创建时间" />
    </el-table>
  </div>
  <el-dialog v-model="dialogFormVisible" title="新增">
    <el-form :rules="rules" :model="dialogForm" prop="name">
      <el-form-item label="标签名字">
        <el-input v-model="dialogForm.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="标签描述" prop="desc">
        <el-input v-model="dialogForm.desc" autocomplete="off" />
      </el-form-item>
      <el-form-item label="状态" prop="region">
        <el-select v-model="dialogForm.region" placeholder="请选择状态">
          <el-option label="启用" value="1" />
          <el-option label="禁用" value="0" />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="confirmHandle"> 确定 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped>
.form-content {
  margin-bottom: 20px;
}
</style>
