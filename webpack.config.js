const webpack = require('webpack')
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const VENDOR_LIBS = ['react', 'react-dom', 'react-router-dom']
const BUILD_DIR = path.join(__dirname, 'dist')
const APP_DIR = path.join(__dirname, 'src')

module.exports = {
  entry: { 
      bundle: APP_DIR + '/index.js',
      vendor: VENDOR_LIBS
    },
  output: {
    path: BUILD_DIR,
    filename: '[name].js'
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
        })
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,          // Possible added regexp (react|react-dom)[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: './public/index.html',
        hash: true,
        inject: true,
        filename: 'index.html'
      }
    ),
    new ExtractTextPlugin({filename: './src/style.css'})
  ]
}