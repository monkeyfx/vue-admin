import Vue from "vue";
import Router from "vue-router";
import store from "@/vuex";
Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("@/layout/BaseLayout"),
      meta: {
        auth: true
      },
      children: [
        {
          path: "/admin",
          name: "home",
          component: () => import("@/pages/home"),
          meta: {
            auth: true
          }
        }
      ]
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

export default router;
