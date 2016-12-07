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
        /*'./src/index'*/
        path.join(__dirname, '../src/index'),
    ],
    cache: true,
    devtool: 'eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new openBrowserPlugin({
            url: 'http://'+baseConfig.host+':/'+baseConfig.port
        })
    ]
});

module.exports = config;
