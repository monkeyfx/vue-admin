import Vue from "vue";
import router from "./router";
import store from "./vuex";
import axios from "./_config/axios";
import qs from "qs";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./main.scss";

Vue.config.productionTip = false;
Vue.prototype.$ = axios;
Vue.prototype.$qs = qs;
Vue.use(ElementUI);

export default new Vue({
  router,
  store,
  render: h => h("router-view")
}).$mount("#app");
