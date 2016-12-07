'use strict'
const path = require('path');

const srcPath = path.join(__dirname, '../src');
const host='127.0.0.1'
const dfltPort = 8000;
const publicPath='../dist';


const baseConfig = {
    port: dfltPort,
    debug: true,
    devtool: 'eval',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: publicPath
    },
    devServer: {
        contentBase: './src/',
        historyApiFallback: true,
        hot: true,
        port: dfltPort,
        publicPath: publicPath,
        noInfo: false
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            loaders: ["babel-loader"],
            exclude: /(node_modules|bower_components)/,
            include: [
                path.resolve(__dirname, "src")
            ]
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


module.exports = {
    srcPath: srcPath,
    host:host,
    port: dfltPort,
    publicPath:publicPath,
    baseConfig: baseConfig
};
