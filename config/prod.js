'use strict';
var webpack = require('webpack');
var path = require('path');
var transferWebpackPlugin = require('transfer-webpack-plugin'); //var env = process.env.NODE_ENV
var openBrowserPlugin = require('open-browser-webpack-plugin');

let baseConfig = require('./base');


let config = Object.assign({}, baseConfig, {
  entry: path.join(__dirname, '../src/index'),
  cache: false,
  devtool: 'sourcemap',
  plugins: [
    new webpack.optimize.DedupePlugin(),
   /* new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"prod"'
    }),*/
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin()
  ]
});

module.exports = config;
