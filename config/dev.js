'use strict';
let path = require('path');
let webpack = require('webpack');
let baseConfig = require('./base');

let transferWebpackPlugin = require('transfer-webpack-plugin'); //var env = process.env.NODE_ENV
let openBrowserPlugin = require('open-browser-webpack-plugin');

let config = Object.assign({}, baseConfig, {
    entry: [
        'webpack-dev-server/client?http://'+baseConfig.host+':' + baseConfig.port,
        'webpack/hot/only-dev-server',
        '../src/index'
    ],
    cache: true,
    devtool: 'eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new openBrowserPlugin({
            url: 'http://'+baseConfig.host+':/'+baseConfig.port
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('dev')
        })
    ]
});

module.exports = config;
