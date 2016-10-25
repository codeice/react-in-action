'use strict'
var webpack = require('webpack');
var path = require('path');
var transferWebpackPlugin = require('transfer-webpack-plugin'); //文件copy
var openBrowserPlugin = require('open-browser-webpack-plugin');

//path define
const srcPath = path.join(__dirname, './src');
const distPath = path.join(__dirname, './dist');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const publicPath = '/build/';
const defaultPort = 3000;


var config = {
    entry: {
        index: [
            'webpack-dev-server/client?http://127.0.0.1:3000', // WebpackDevServer host and port
            'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
             path.resolve(__dirname, 'src/app/index')
        ]
    },
    output: {
        path: path.resolve(__dirname, 'src/build'),
        filename: 'bundle.js',
        publicPath: publicPath
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css?modules", exclude: nodeModulesPath },
            { test: /\.less$/, loader: "style!css!less" },
            { test: /\.(png|jpg|gif|woff|woff2)$/, loader: 'url-loader?limit=8192' },
            //jsx 编译
            {
                test: /\.(js|jsx)$/,
                /* loaders: ['react-hot','babel?presets[]=react,presets[]=es2015,presets[]=stage-0'],*/
                loaders: ["babel-loader"],
                exclude: /(node_modules|bower_components)/,
                include: [
                    path.resolve(__dirname, "src")
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new openBrowserPlugin({
            url: 'http://127.0.0.1:3000/index.html'
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.json', '.less', '.css', '.png', '.jpg']
    },
    // 启用source-map
    devtool: '#source-map',
    debug: true,
    devServer: {
        contentBase: './src/',
        historyApiFallback: true,
        hot: true,
        port: defaultPort,
        publicPath: publicPath,
        noInfo: false
    }
};

module.exports = config;
