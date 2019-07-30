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
    title: "menu.Dashboard",
    name: "dashboard",
    meta: {
      auth: true
    },
    component: () => import("@/pages/dashboard")
  },
  {
    path: "/element-ui",
    icon: "el-icon-menu",
    title: "menu.element-ui.default",
    name: "element-ui",
    component: () => import("@keep-alive-router-view"), // 有层级的需加个空路由 渲染层级
    meta: {
      auth: true,
      keepAlive: true
    },
    children: [
      {
        path: "/element-ui/button",
        title: "menu.element-ui.button",
        name: "button",
        component: () => import("@/pages/element-ui/button")
      },
      {
        path: "/element-ui/form",
        title: "menu.element-ui.form.default",
        name: "form",
        component: () => import("@keep-alive-router-view"), // 有层级的需加个空路由 渲染层级
        children: [
          {
            path: "/element-ui/form/radio",
            title: "menu.element-ui.form.radio",
            name: "radio",
            component: () => import("@/pages/element-ui/form/radio")
          }
        ]
      }
    ]
  }
];
