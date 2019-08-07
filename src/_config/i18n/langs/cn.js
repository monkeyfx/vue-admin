import zhLocale from "element-ui/lib/locale/lang/zh-CN";
const cn = {
  menu: {
    HomePage: "首页",
    Dashboard: "仪表盘",
    "element-ui": {
      default: "Element-UI",
      button: "按钮",
      form: {
        default: "表单",
        radio: "单选框"
      }
    },
    exception: {
      default: "异常页",
      "404": "404"
    }
  },
  customColor: {
    "menu-background-color": "菜单背景颜色",
    "menu-text-color": "菜单文字颜色",
    "logo-background-color": "LOGO背景颜色",
    "logo-text-color": "LOGO文字颜色",
    "logo-border-bottom-color": "LOGO下边框颜色",
    "is-show-logo": "是否显示LOGO",
    "is-show-tabs": "是否显示Tabs",
    "logo-border-right-color": "LOGO右边框颜色",
    "header-bg-color": "顶部栏背景颜色"
  },
  ...zhLocale
};

export default cn;
