import { delay } from "@/utils";
import vm from "@/main";

export default {
  namespaced: true,
  state: {
    token: sessionStorage["TOKEN"],
    loading: false
  },
  mutations: {
    SET_TOKEN: (state, token) => (state.token = token),
    SET_LOADING: (state, loading) => (state.loading = loading)
  },
  actions: {
    ASYNC_LOGIN: ({ commit }, token) => {
      commit("SET_LOADING", true);
      delay(1000).then(() => {
        commit("SET_LOADING", false);
        commit("SET_TOKEN", token);
        sessionStorage["TOKEN"] = token;
        if (vm.$route.query.redirect) {
          vm.$router.push(vm.$route.query.redirect);
        } else {
          vm.$router.push("/");
        }
      });
    },
    ASYNC_LOGIN_OUT: ({ commit }) => {
      delete sessionStorage["TOKEN"];
      commit("SET_TOKEN", null);
      if (vm.$route.query.redirect) {
        vm.$router.push(vm.$route.query.redirect);
      } else {
        vm.$router.push("/login");
      }
    }
  }
};
