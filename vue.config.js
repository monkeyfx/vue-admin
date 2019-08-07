const resolve = dir => require("path").join(__dirname, dir);
const CopyWebpackPlugin = require("copy-webpack-plugin");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//   .BundleAnalyzerPlugin;

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set(
        "@keep-alive-router-view",
        resolve("src/components/global/custom/custom-router-transition")
      );
  },
  productionSourceMap: false,
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
      config.plugins = [
        ...config.plugins,
        // new BundleAnalyzerPlugin(),
        new CopyWebpackPlugin([
          {
            from: resolve("./CNAME"), // 拷贝此文件到目录下 部署使用
            to: "./" // 复制到publiv
          }
        ])
      ];
    } else {
      // 为开发环境修改配置...
    }
  }
};
