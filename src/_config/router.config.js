import Vue from "vue";
import Router from "vue-router";
import store from "@/vuex";
import NProgress from "nprogress";
import "nprogress/nprogress.css"; // nprogress样式文件
import menuConfig from "./menu.config";
import { recursionPath, recursionPathToHistory } from "@/utils";

Vue.use(Router);
NProgress.configure({
  showSpinner: false // 是否显示加载ico
});

const router = new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      redirect: "/dashboard",
      component: () => import("@/layout/BaseLayout"),
      meta: {
        auth: true
      },
      children: menuConfig.flat(Infinity)
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/pages/login")
    }
  ]
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
    recursionPath(menuConfig, to.path, -1, [])
  );
  // 保存路由历史记录
  store.dispatch(
    "layout/ACTIONS_HISTORY",
    recursionPathToHistory(menuConfig, to.path)
  );
});

export default router;
