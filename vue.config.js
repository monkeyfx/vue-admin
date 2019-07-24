const path = require("path");
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src"));
  },
  // 构建给github-pages
  publicPath: process.env.NODE_ENV === "production" ? "/vue-admin" : "/"
};
