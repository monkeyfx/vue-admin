import Vue from "vue";
import Router from "vue-router";
import store from "@/vuex";
import NProgress from "nprogress";
import "nprogress/nprogress.css"; // nprogress样式文件
import menuConfig from "./menu.config";
Vue.use(Router);
NProgress.configure({
  showSpinner: false // 是否显示加载ico
});

const router = new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
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
  NProgress.start();
  if (to.meta.auth && !store.state.auth.token) {
    return next({
      path: "/login",
      query: {
        redirect: to.fullPath
      }
    });
  }
  if (to.path === "/") {
    return next({
      path: "/dashboard"
    });
  }
  next();
});
router.afterEach((to, from) => {
  NProgress.done();
  console.log(to, from);
});
export default router;
