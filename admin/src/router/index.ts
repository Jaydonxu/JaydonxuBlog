// 1. 定义路由组件.
// 也可以从其他文件导入
import * as VueRouter from "vue-router";
import { ElMessage } from "element-plus";

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/home/index.vue"),
    children: [
      {
        path: "/user",
        name: "User",
        component: () => import("../views/user/index.vue"),
      },
    ],
  },
  { path: "/login", component: () => import("../views/login/index.vue") },
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
  const token = localStorage.getItem("token");
  if (to.path !== "/login" && !token) {
    ElMessage({
      message: "token失效或已过期!请重新登录",
      type: "warning",
    });
    next("/login");
  }
  next();
});

export default router;
