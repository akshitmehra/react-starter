const path = require('path');

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env']
        }
      },
      {
        test: /\.scss$/,
        include: [path.resolve(__dirname, 'src')],
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    extensions: ['.js']
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    publicPath: 'http://localhost:8080/dist/'
  }
};
