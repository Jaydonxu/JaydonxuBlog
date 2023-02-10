<template>
  <div class="aside">
    <div class="aside-head">Jaydonxu个人博客</div>
    <ul class="menu-content">
      <li
        v-for="item in routeList"
        class="menu-item"
        @click="$router.push(`${item.path}`)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { routes } from "../../router/index";
import { ref, reactive } from "vue";
console.log(routes);

const _routes = routes.filter((item) => !item.hidden);

const routeList = reactive({
  ..._routes,
});
console.log(routeList, "routeListrouteListrouteList");
</script>

<style scoped lang="scss">
.aside {
  height: 100%;
  background-color: #2f3e52;
  color: #fff;
  .aside-head {
    text-align: center;
    font-size: 30px;
    height: 60px;
    line-height: 60px;
  }
  .menu-content {
    .menu-item {
      text-align: center;
      height: 60px;
      line-height: 60px;
      font-size: 20px;
      cursor: pointer;
      &:hover {
        background-color: rgba(36, 50, 69, 0.5);
      }
    }
  }
}
</style>
