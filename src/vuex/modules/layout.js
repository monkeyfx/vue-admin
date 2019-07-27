import layoutConfig from "@/_config/layout.config";

export default {
  namespaced: true,
  state: {
    // 布局配置
    ...layoutConfig,
    //  历史记录
    historys: [{ title: "仪表盘", path: "/dashboard" }],
    // 当前的路由
    menuActive: "",
    // 面包屑导航
    breadcrumbs: []
  },
  mutations: {
    // 设置是否折叠sidebar
    SET_IS_COLLAPSE: (state, bool) => (state.isCollapse = bool),
    // 设置当前的路由
    SET_MENU_ACTIVE: (state, path) => (state.menuActive = path),
    // 设置面包屑导航
    SET_BREADCRUMB: (state, path) => (state.breadcrumbs = path),
    // 设置历史记录
    SET_HISTORYS: (state, routes) => (state.historys = routes)
  },
  actions: {
    ACTIONS_HISTORY: ({ commit, state }, object) => {
      if (!state.historys.map(_ => _.path).includes(object.path)) {
        commit("SET_HISTORYS", [...state.historys, object]);
      }
    }
  }
};
