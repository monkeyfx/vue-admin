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
    editor: {
      default: "富文本编辑器",
      quill: "quill富文本编辑器",
      wangEditor: "wangEditor"
    },
    "multi-media": {
      default: "多媒体",
      audio: "音乐",
      video: "视频"
    },
    exception: {
      default: "异常页",
      "404": "404"
    }
  },
  ...zhLocale
};

export default cn;
