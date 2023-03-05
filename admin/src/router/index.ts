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
    component: layout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        component: () => import("../views/home/index.vue"),
        meta: {
          title: "首页",
          hidden: false,
        },
      },
      {
        path: "/blog",
        redirect: "/blog/md",
        meta: {
          title: "博客管理",
          hidden: false,
        },
        children: [
          {
            path: "/blog/md",
            component: () => import("../views/blog/index.vue"),
            meta: {
              title: "MD编辑器",
              hidden: false,
            },
          },

          {
            path: "/blog/md/view",
            component: () => import("../views/blog/view/index.vue"),
            meta: {
              title: "查看博客",
              hidden: false,
            },
          },
        ],
      },
      {
        path: "/user",
        component: () => import("../views/user/index.vue"),
        meta: {
          title: "类别管理",
          hidden: false,
        },
      },

      {
        path: "/tags",
        component: () => import("../views/tags/index.vue"),
        meta: {
          title: "标签",
          hidden: false,
        },
      },
      {
        path: "/bulletin",
        component: () => import("../views/bulletin/index.vue"),
        meta: {
          title: "公告",
          hidden: false,
        },
      },
    ],
  },
  {
    path: "/login",
    component: () => import("../views/login/index.vue"),
    hidden: true,
    meta: {
      title: "登录",
      hidden: false,
    },
  },
  {
    path: "/404",
    hidden: true,
    component: () => import("../views/404/index.vue"),
    meta: {
      title: "404",
      hidden: false,
    },
  },
  {
    path: "/test",
    hidden: true,
    component: () => import("../views/test/index.vue"),
    meta: {
      title: "测试",
      hidden: false,
    },
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
