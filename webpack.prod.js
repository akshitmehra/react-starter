const path = require('path');

const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'js/[name].[contentHash].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, 'src')],
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
      inject: false,
      minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        keepClosingSlash: true,
        removeComments: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css'
    })
  ]
});
