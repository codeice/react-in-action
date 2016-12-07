'use strict';
let path = require('path');
let webpack = require('webpack');
let transferWebpackPlugin = require('transfer-webpack-plugin');
let openBrowserPlugin = require('open-browser-webpack-plugin');

let baseConfig = require('./base');
let setting = require('./setting');

let config = Object.assign({}, baseConfig, {
    entry: [
        'webpack-dev-server/client?http://' + setting.host + ':' + setting.port,
        'webpack/hot/only-dev-server',
        path.resolve(__dirname, '../src/index')
    ],
    cache: true,
    devtool: 'eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new openBrowserPlugin({
            url: 'http://' + setting.host + ':' + setting.port
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV ||'development')
        })
    ]
});

console.log('in dev.js process.env.NODE_ENV=',JSON.stringify(process.env.NODE_ENV ||'development'));
module.exports = config;
