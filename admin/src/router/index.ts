// 1. 定义路由组件.
// 也可以从其他文件导入
import * as VueRouter from "vue-router";
import { ElMessage } from "element-plus";
import layout from "../components/layout/index.vue";

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  {
    path: "/",
    name: "首页",
    hidden: false,
    component: layout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("../views/home/index.vue"),
      },
    ],
  },
  {
    path: "/user",
    name: "个人",
    hidden: false,
    component: layout,
    children: [
      {
        path: "/user",
        name: "user",
        component: () => import("../views/user/index.vue"),
      },
    ],
  },
  {
    path: "/blog",
    name: "博客",
    hidden: false,
    component: layout,
    children: [
      {
        path: "/blog",
        name: "blog",
        component: () => import("../views/blog/index.vue"),
      },
    ],
  },
  {
    path: "/tags",
    name: "标签",
    hidden: false,
    component: layout,
    children: [
      {
        path: "/tags",
        name: "tags",
        component: () => import("../views/tags/index.vue"),
      },
    ],
  },
  {
    path: "/bulletin",
    name: "公告",
    hidden: false,
    component: layout,
    children: [
      {
        path: "/bulletin",
        name: "bulletin",
        component: () => import("../views/bulletin/index.vue"),
      },
    ],
  },
  // {
  //   path: "*",
  //   redirect: "/404",
  // },
  {
    path: "/login",
    name: "登录",
    component: () => import("../views/login/index.vue"),
    hidden: true,
  },
  {
    path: "/404",
    hidden: true,
    component: () => import("../views/404/index.vue"),
  },
  {
    path: "/test",
    hidden: true,
    component: () => import("../views/test/index.vue"),
  },
];

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = VueRouter.createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: VueRouter.createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

// 这里就可以进行vue-router的beforeEach拦截了，你也可以放其他地方，我比较喜欢放这
router.beforeEach((to, from, next) => {
  // const token = localStorage.getItem("token");
  // if (to.path !== "/login" && !token) {
  //   ElMessage({
  //     message: "token失效或已过期!请重新登录",
  //     type: "warning",
  //   });
  //   next("/login");
  // }
  next();
});

export { router, routes };
