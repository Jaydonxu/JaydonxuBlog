<script setup lang="ts">
import { reactive } from "vue";
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
</script>
<template>
  <div>
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
</template>

<style scoped></style>
