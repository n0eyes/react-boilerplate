const path = require("path");
const paths = require("./paths");
const webpackUtils = require("./webpackUtils");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const { DefinePlugin } = require("webpack");

const libListToCopy = ["axios"];

const isDevelopment = process.env.NODE_ENV !== "production";
const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  context: __dirname,
  mode: "development",
  entry: paths.appIndex,
  output: {
    filename: "[name].bundle.[hash].js",
    path: paths.appOutput,
    clean: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  externals: webpackUtils.getExternals(libListToCopy),
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              /**@todo 과연..? */
              // cacheCompression: false,
              // cacheDirectory: true,
              plugins: [isDevelopment && "react-refresh/babel"].filter(Boolean),
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        /**@todo asset vs resource */
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: paths.appHtml,
    }),
    ,
    new DefinePlugin({
      PRODUCT_ENV: JSON.stringify("test"),
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: paths.appTsConfig,
      },
    }),
    new CopyPlugin({
      patterns: webpackUtils.getLibsToCopyPattern(libListToCopy),
    }),
  ].filter(Boolean),
  watchOptions: {
    ignored: [".yarn", "**/node_modules"],
  },
};
