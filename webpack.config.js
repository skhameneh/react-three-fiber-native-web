const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const DEV = false;

module.exports = {
  mode: DEV ? "development" : "production",
  entry: "./index.web.js",
  output: {},
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-react",
            ["@babel/preset-typescript", { isTSX: true, allExtensions: true }],
          ],
          plugins: [
            [
              "@babel/plugin-transform-runtime",
              {
                absoluteRuntime: false,
                corejs: false,
                helpers: true,
                regenerator: true,
                useESModules: true,
              },
            ],
            "@babel/plugin-transform-modules-commonjs",
          ],
        },
        include: [path.resolve(".")],
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react"],
          plugins: [
            "@babel/plugin-transform-flow-strip-types",
            [
              "@babel/plugin-transform-runtime",
              {
                absoluteRuntime: false,
                corejs: false,
                helpers: true,
                regenerator: true,
                useESModules: true,
              },
            ],
            "@babel/plugin-transform-modules-commonjs",
          ],
        },
        include: [path.resolve(".")],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.browser": true,
      "process.env.READABLE_STREAM": true,
      "process.env.APP_MANIFEST": false,
      __DEV__: DEV,
    }),
  ],
  resolve: {
    extensions: [
      ".web.js",
      ".web.ts",
      ".web.tsx",
      ".tsx",
      ".ts",
      ".js",
      ".json",
      ".jsx",
      ".css",
    ],
    alias: {
      "react-native$": "react-native-web/src",
      crypto: "crypto-browserify",
      stream: "stream-browserify",
      randombytes: "randombytes/browser",
      "@babel/runtime/helpers/esm/extends": "@babel/runtime/helpers/extends",
    },
  },
  devtool: DEV ? "source-map" : false,
  target: "es2015",
  experiments: {
    asyncWebAssembly: true,
    outputModule: true,
    topLevelAwait: true,
  },
  optimization: {
    minimize: !DEV,
  },
};
