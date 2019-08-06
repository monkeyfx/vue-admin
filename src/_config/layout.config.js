export default {
  isCollapse: true, // 侧边栏是否要展开
  isShowLogo: true, // logo 是否要固定
  isHeaderFixed: true, // 头部是否要固定
  isTabsFixed: true, // 标签栏是否要固定
  // 自定义配置侧边栏颜色
  menuBgColor: localStorage["menuBgColor"] || "#202124",
  menuTextColor: localStorage["menuTextColor"] || "#ffffff",
  logoBgColor: localStorage["logoBgColor"] || "#202124",
  logoTextColor: localStorage["logoTextColor"] || "#ffffff",
  logoBorderBottomColor: localStorage["logoBorderBottomColor"] || "#303336"
};
