<template>
  <div class="aside">
    <div class="aside-head">Jaydonxu个人博客</div>
    <ul class="menu-content">
      <li
        v-for="item in routeList"
        class="menu-item"
        :key="item"
        @click="toLink(item.path)"
      >
        <div
          class="flex justify-between menu-first"
          :class="[$route.path.indexOf(item.path) !== -1 ? 'active-menu' : '']"
        >
          <span class="menu-title">{{
            Object.assign({}, item.meta).title
          }}</span>
          <span class="arrow-top" v-if="item.children?.length"></span>
        </div>
        <ul v-if="item.children?.length" class="secon-menu-content">
          <li
            v-for="seconItem in item.children"
            :key="seconItem"
            class="secon-item"
            :class="[$route.path == seconItem.path ? 'secon-active-menu' : '']"
            @click="toLink(seconItem.path)"
          >
            {{ Object.assign({}, seconItem.meta).title }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { routes } from "../../router/index";
import { ref, reactive, route } from "vue";
import { useRouter } from "vue-router";

const Router = useRouter();

const _routes = routes
  .find((item) => item.path == "/")
  ["children"].filter((item) => !item?.meta?.hidden);

console.log(_routes, "_routes");

const routeList = reactive({
  ..._routes,
});
console.log(routeList, "routeListrouteListrouteList");

const toLink = function (item) {
  console.log(item, "item");

  Router.push(item.path);
};
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
      .secon-menu-content {
        .secon-item,
        .secon-active-menu {
          padding: 18px 20px;
          color: rgb(255, 255, 255, 0.5);
          cursor: pointer;
          &:hover {
            background-color: rgba(36, 50, 69, 0.5);
          }
        }
        .secon-active-menu {
          color: rgb(255, 255, 255);
          background-color: #72c140;
          &:hover {
            background-color: #72c140;
          }
        }
      }
      .menu-first,
      .active-menu {
        font-size: 18px;
        padding: 18px 20px;
        $color: rgb(255, 255, 255, 0.5);
        color: $color;
        position: relative;
        cursor: pointer;
        .arrow-top {
          position: absolute;
          top: 40%;
          right: 30px;
          transform: translateY(-50%);
          width: 10px;
          height: 10px;
          background: transparent;
          border-width: 2px;
          border-style: solid;
          border-top-color: $color;
          border-right-color: $color;
          border-bottom-color: transparent;
          border-left-color: transparent;
          display: block;
          transform: rotate(135deg);
        }
        &:hover {
          background-color: rgba(36, 50, 69, 0.5);
        }
      }
      .active-menu {
        $color: #fff;
        color: $color;
        .menu-first {
          .arrow-top {
            top: 50%;
            border-top-color: $color;
            border-right-color: $color;
            border-bottom-color: transparent;
            border-left-color: transparent;
            transform: rotate(-45deg);
          }
        }
      }
    }
  }
}
</style>
