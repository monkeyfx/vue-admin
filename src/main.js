import Vue from "vue";
import router from "./_config/router.config";
import store from "./vuex";
import axios from "./_config/axios.config";
import qs from "qs";
import ElementUI from "element-ui";
import i18n from "./_config/i18n/i18n";
import Fragment from "vue-fragment";
import CustomGlobal from "@/components/global";

import "element-ui/lib/theme-chalk/index.css";
import "./main.scss";

Vue.config.productionTip = false;

Vue.prototype.$ = axios;
Vue.prototype.$qs = qs;

Vue.use(ElementUI);
Vue.use(Fragment.Plugin);
Vue.use(CustomGlobal);

export default new Vue({
  router,
  store,
  i18n,
  render: h => h("router-view")
}).$mount("#app");
