const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
// const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const { DefinePlugin } = require("webpack");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  context: __dirname,
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "[name].bundle.[hash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              plugins: [isDevelopment && "react-refresh/babel"].filter(Boolean),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "/public/index.html"),
    }),
    ,
    new DefinePlugin({
      PRODUCT_ENV: JSON.stringify("hi"),
    }),
    // new ForkTsCheckerWebpackPlugin(),
  ].filter(Boolean),
  watchOptions: {
    ignored: /node_modules/,
  },
};
