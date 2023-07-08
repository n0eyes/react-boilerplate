const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  /**@description source-map - TerserPlugin을 위해 ( 그러나 공식문서 warning) or false? */
  devtool: "source-map",
  optimization: {
    minimize: true,
    usedExports: true,
    /**@todo lazy loading과 어떻게 사용되는지? */
    // splitChunks: {
    //   chunks: 'all',
    // },
    minimizer: true
      ? [
          /**@todo devtool 변경해야함 */
          new TerserPlugin({
            terserOptions: {
              compress: {
                drop_console: true,
              },
            },
          }),
        ]
      : [],
  },
});
