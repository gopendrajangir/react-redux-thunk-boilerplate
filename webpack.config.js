const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ],
  },
  resolve: {
    alias: {
      'assets': path.join(__dirname, './assets'),
      'components': path.join(__dirname, './src/components'),
      'containers': path.join(__dirname, './src/containers'),
      'actions': path.join(__dirname, './src/actions'),
      'reducers': path.join(__dirname, './src/reducers'),
      'apis': path.join(__dirname, './src/apis')
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filname: './index.html'
    })
  ],
}