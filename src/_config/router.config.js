import Vue from "vue";
import Router from "vue-router";
import store from "@/vuex";
import NProgress from "nprogress";
import "nprogress/nprogress.css"; // nprogress样式文件
import { recursionPath } from "@/utils";

/**
 * @param {String} path - 路由的路径
 * @param {String} name - 路由名字
 * @param {String} title - menu名字
 * @param {String} icon - menu图标
 * @param {String} meta - 拓展字段
 * @param {Boolean} isMenuHidden - 是否要显示侧边栏
 * @param {Array} children - 子集
 */
export const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () => import("@/layout/BaseLayout"),
    redirect: { path: "/dashboard" },
    icon: "icon-home",
    title: "menu.HomePage",
    meta: {
      auth: true
    },
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        icon: "icon-dashboard",
        title: "menu.Dashboard",
        component: () => import("@/pages/dashboard")
      }
    ]
  },
  {
    path: "/element-ui",
    icon: "icon-elementui",
    title: "menu.element-ui.default",
    name: "element-ui",
    component: () => import("@/layout/BaseLayout"),
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
        component: () => import("@keep-alive-router-view"),
        children: [
          {
            path: "/element-ui/form/radio",
            title: "menu.element-ui.form.radio",
            name: "radio",
            component: () => import("@/pages/element-ui/form/radio"),
            meta: {
              auth: true,
              keepAlive: true
            }
          }
        ]
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    isMenuHidden: true,
    component: () => import("@/pages/login")
  }
];

Vue.use(Router);
NProgress.configure({
  showSpinner: false // 是否显示加载ico
});

const router = new Router({
  mode: "hash",
  routes: routes
});
/**
 * to: Route: 即将要进入的目标 路由对象
 * from: Route: 当前导航正要离开的路由
 * next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
 */
router.beforeEach((to, from, next) => {
  if (to.path !== from.path) NProgress.start();
  if (to.meta.auth && !store.state.auth.token) {
    return next({
      path: "/login",
      query: {
        redirect: to.fullPath
      }
    });
  }
  next();
});
router.afterEach(to => {
  NProgress.done();
  // 保存路由地址
  store.commit("layout/SET_MENU_ACTIVE", to.path);
  // 保存从路由中递归出来面包屑导航
  store.commit(
    "layout/SET_BREADCRUMB",
    recursionPath(routes, to.path).filter(item => item.path !== "/")
  );
  // 保存路由历史记录
  const history = recursionPath(routes, to.path);
  store.dispatch("layout/ACTIONS_HISTORY", history[history.length - 1]);
});

export default router;
