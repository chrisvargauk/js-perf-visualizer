const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: "production",
  entry: {
    JsPerfVisualizer: "./src/index.js"
  },
  output: {
    library: '[name]',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'build-umd'),
    filename: '[name].js',
  },
  optimization: {
    minimizer: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        }
      })
    ],
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
});