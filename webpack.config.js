//
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const VERSION = require('./package.json').version;

const PORT = 6080;
const SRC = path.resolve(__dirname, 'src');
const SASS_PATH = path.resolve(SRC, 'sass');
const extractSass = new ExtractTextPlugin({
  // filename: '[name].[contenthash].css',
  filename: 'app.css',
  disable: process.env.NODE_ENV === 'development'
});


module.exports = {
  mode: 'development',
  entry: path.resolve(SRC, 'index.jsx'),
  output: {
    // filename: 'app.bundle.[hash].js',
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        query: {
          presets: ['env', 'react'],
          compact: false
        }
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        query: {
          presets: ['env', 'react']
        }
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [SASS_PATH]
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(SRC, 'index.html')
    }),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(VERSION)
    }),
    extractSass
  ],
  devServer: {
    host: '0.0.0.0',
    port: PORT,
    historyApiFallback: true,
    open: true
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
