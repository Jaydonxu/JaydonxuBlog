<template>
  <div>
    <ScrollNumber></ScrollNumber>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ScrollNumber from "../../components/scrollNumber/index.vue";

const number = ref("12346789");
</script>

<style lang="scss" scoped></style>

