import layoutConfig from "@/_config/layout.config";

export default {
  namespaced: true,
  state: {
    ...layoutConfig
  },
  mutations: {
    SET_IS_COLLAPSE: (state, bool) => (state.isCollapse = bool)
  },
  actions: {}
};
