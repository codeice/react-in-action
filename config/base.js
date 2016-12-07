'use strict'
const path = require('path');
const setting = require('./setting');

const baseConfig = {
    port: setting.port,
    debug: true,
    devtool: 'eval',
    output: {
        /* path: path.resolve(__dirname, '../dist'),
         filename: 'bundle.js',
         publicPath: setting.publicPath*/
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
        publicPath: setting.publicPath
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.json', '.less', '.css', '.png', '.jpg']
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            loaders: ["babel-loader"],
            exclude: /(node_modules|bower_components)/
        }, {
            test: /\.css$/,
            loader: "style!css?modules"
        }, {
            test: /\.less$/,
            loader: "style!css!less"
        }, {
            test: /\.(png|jpg|gif|woff|woff2)$/,
            loader: 'url-loader?limit=10240'
        }]

    }
};

module.exports = baseConfig;
