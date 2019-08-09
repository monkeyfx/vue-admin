const parse = key => (localStorage[key] ? JSON.parse(localStorage[key]) : true);

export default {
  isCollapse: true, // 侧边栏是否要展开
  isShowHeader: true, // 头部是否要固定
  isShowLogo: parse("isShowLogo"), // logo 是否要固定
  isShowTabs: parse("isShowTabs"), // 标签栏是否显示
  // 自定义配置侧边栏颜色
  menuBgColor: localStorage["menuBgColor"] || "#202124",
  menuTextColor: localStorage["menuTextColor"] || "#ffffff",
  logoBgColor: localStorage["logoBgColor"] || "#202124",
  logoTextColor: localStorage["logoTextColor"] || "#ffffff",
  logoBorderBottomColor: localStorage["logoBorderBottomColor"] || "#303336",
  logoBorderRightColor: localStorage["logoBorderRightColor"] || "#cccccc",
  headerBgColor: localStorage["headerBgColor"] || "#ffffff"
};
