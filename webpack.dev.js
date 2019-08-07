const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: "development",
  devtool: 'source-map',

  entry: {
    JsPerfDoctor: "./src/index.js"
  },
  output: {
    library: '[name]',
    libraryTarget: 'umd',
    path: __dirname + '/build-umd',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
});