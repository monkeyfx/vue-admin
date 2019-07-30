const resolve = dir => require("path").join(__dirname, dir);

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set(
        "@keep-alive-router-view",
        resolve("src/components/global/custom/custom-router-transition")
      );
  },
  // 构建给github-pages
  publicPath: process.env.NODE_ENV === "production" ? "/vue-admin" : "/"
};
