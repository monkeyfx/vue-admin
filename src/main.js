import Vue from "vue";
import router from "./_config/router.config";
import store from "./vuex";
import axios from "./_config/axios.config";
import qs from "qs";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./main.scss";
import i18n from "./_config/i18n/i18n";
import vuescroll from "vuescroll";
import Fragment from "vue-fragment";

Vue.use(Fragment.Plugin);
Vue.config.productionTip = false;
Vue.prototype.$ = axios;
Vue.prototype.$qs = qs;
Vue.use(ElementUI);
Vue.use(vuescroll);

export default new Vue({
  router,
  store,
  i18n,
  render: h => h("router-view")
}).$mount("#app");
