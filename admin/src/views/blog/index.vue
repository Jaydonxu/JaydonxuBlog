<script setup lang="ts">
import { ref } from "vue";
const value = ref("");
console.log(value, "value");
</script>
<template>
  <div>
    <mavon-editor v-model="value" />
  </div>
</template>

<style scoped></style>
