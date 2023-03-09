<script setup lang="ts">
import { ref } from "vue";
const value = ref("");
console.log(value, "value");

const save = () => {
  console.log("xxxxx");
};
</script>
<template>
  <div>
    <mavon-editor v-model="value" :ishljs="true" @save="save" />
  </div>
</template>

<style scoped></style>
