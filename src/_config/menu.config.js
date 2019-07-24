export default [
  {
    path: "/admin",
    icon: "el-icon-menu",
    name: "关于我",
    children: [
      {
        path: "/admin/1",
        icon: "el-icon-menu",
        name: "关于我"
      },
      {
        path: "/about/2",
        icon: "el-icon-menu",
        name: "关于我"
      },
      {
        path: "/about/3",
        icon: "el-icon-menu",
        name: "关于我",
        children: [
          {
            path: "/admin/1",
            icon: "el-icon-menu",
            name: "关于我"
          },
          {
            path: "/about/2",
            icon: "el-icon-menu",
            name: "关于我"
          },
          {
            path: "/about/3",
            icon: "el-icon-menu",
            name: "关于我"
          }
        ]
      }
    ]
  },
  {
    path: "/about",
    icon: "el-icon-menu",
    name: "关于我",
    children: [
      {
        path: "/admin/1",
        icon: "el-icon-menu",
        name: "关于我"
      },
      {
        path: "/about/2",
        icon: "el-icon-menu",
        name: "关于我"
      },
      {
        path: "/about/3",
        icon: "el-icon-menu",
        name: "关于我"
      }
    ]
  }
];
