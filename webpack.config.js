const webpack = require('webpack')
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

// const VENDOR_LIBS = ['react', 'react-dom', 'react-router', 'react-router-dom']
const BUILD_DIR = path.join(__dirname, 'dist')
const APP_DIR = path.join(__dirname, 'src')

module.exports = {
  entry: { 
    bundle: APP_DIR + '/index.js',
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: 'css-loader'
          }
        )
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: './public/index.html',
        hash: false,
        inject: true,
        filename: 'index.html'
      }
    ),
    new ExtractTextPlugin({filename: './src/style.css'}),
    new CleanWebpackPlugin(['dist'])
  ]
}