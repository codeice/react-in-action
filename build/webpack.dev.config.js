'use strict';
let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let openBrowserPlugin = require('open-browser-webpack-plugin');
let merge = require('webpack-merge');
let baseWebpackConfig = require('./webpack.base.config');
let config = require('../config');

var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';
module.exports = merge(baseWebpackConfig, {
    entry: {
        app: ['./src/index.js', hotMiddlewareScript]
    },
    devtool: 'eval-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),
        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
/*        new openBrowserPlugin({
            url: 'http://' + config.dev.host + ':' + config.dev.port
        }),*/
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            inject: true,
            // favicon: 'src/static/favicon.ico'
        })
    ]
});
