const path = require("path");
const paths = require("./paths");
const webpackUtils = require("./webpackUtils");
const { getClientEnvironment } = require("./env");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const { DefinePlugin } = require("webpack");

const PUBLIC_PATH = "http://localhost:3000/";

const libListToCopy = ["axios"];

const isDevelopment = process.env.NODE_ENV !== "production";
const isProduction = process.env.NODE_ENV === "production";

const env = getClientEnvironment(PUBLIC_PATH);

module.exports = {
  context: __dirname,
  entry: paths.appIndex,
  output: {
    filename: "[name].bundle.[hash].js",
    path: paths.appOutput,
    publicPath: PUBLIC_PATH,
    clean: true,
  },
  resolve: {
    extensions: paths.moduleFileExtensions.map((e) => `.${e}`),
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
    new DefinePlugin(env.stringified),
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
