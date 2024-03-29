import layoutConfig from "@/_config/layout.config";

export default {
  namespaced: true,
  state: {
    // 布局配置
    ...layoutConfig,
    //  历史记录
    historys: [{ title: "menu.Dashboard", path: "/dashboard" }],
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
    SET_HISTORYS: (state, routes) => (state.historys = routes),
    // 设置左侧布局的颜色
    SET_SIDE_COLOR: (state, object) => (state[object.key] = object.value)
  },
  actions: {
    // 设置tabs 侧边栏 面包屑 联动
    ACTIONS_HISTORY: ({ commit, state }, object) => {
      if (object) {
        if (
          !state.historys.map(_ => _.path).includes(object.path) &&
          object.path !== "/login"
        ) {
          const data = [...state.historys, object];
          commit("SET_HISTORYS", data);
        }
      }
    },
    // 设置左侧布局的颜色
    ACTIONS_SIDE_COLOR: ({ commit }, object) => {
      localStorage[object.key] = object.value;
      commit("SET_SIDE_COLOR", object);
    }
  }
};
