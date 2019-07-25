import layoutConfig from "@/_config/layout.config";

export default {
  namespaced: true,
  state: {
    ...layoutConfig,
    history: []
  },
  mutations: {
    // 设置是否折叠sidebar
    SET_IS_COLLAPSE: (state, bool) => (state.isCollapse = bool)
    // 设置历史路由记录
  },
  actions: {}
};
