const path = require('path');

const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'main.[contentHash].js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: [path.resolve(__dirname, 'src')],
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: false,
      minify: {
        collapseWhitespace: true,
        keepClosingSlash: true,
        removeComments: true
      }
    })
  ]
});
