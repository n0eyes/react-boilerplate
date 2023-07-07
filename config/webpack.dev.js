const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  devServer: {
    static: "./dist",
    open: true,
    historyApiFallback: true,
    port: 3000,
    client: {
      overlay: false,
    },
  },
  stats: "errors-only",
});
