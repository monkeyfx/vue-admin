/**
 * @param {String} path - 路由的路径
 * @param {String} icon - 图标
 * @param {String} name - 名字
 * @param {String} title - menu名字
 * @param {String} meta - 鉴权
 * @param {String} name - 名字
 * @param {Array} children - 子集
 */
export default [
  {
    path: "/dashboard",
    icon: "el-icon-orange",
    title: "仪表盘",
    name: "dashboard",
    meta: {
      auth: true
    },
    component: () => import("@/pages/dashboard")
  },
  {
    path: "/test",
    icon: "el-icon-menu",
    title: "测试",
    name: "test",
    component: () => import("@/pages/test"),
    meta: {
      auth: true
    },
    children: [
      {
        path: "/test/test1",
        icon: "el-icon-menu",
        title: "测试-1",
        name: "test-1",
        component: () => import("@/pages/test/test1"),
        meta: {
          auth: true
        }
      },
      {
        path: "/test/test2",
        icon: "el-icon-menu",
        title: "测试-2",
        name: "test-2",
        component: () => import("@/pages/test/test2"),
        meta: {
          auth: true
        }
      },
      {
        path: "/test/test3",
        icon: "el-icon-menu",
        title: "测试-3",
        name: "test-3",
        component: () => import("@/pages/test/test3"),
        meta: {
          auth: true
        }
      },
      {
        path: "/test/test4",
        icon: "el-icon-menu",
        title: "测试-4",
        name: "test-4",
        component: () => import("@/pages/test/test4"),
        meta: {
          auth: true
        }
      }
    ]
  }
];
