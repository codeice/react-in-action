'use strict'
var webpack = require('webpack');
var path = require('path');
var transferWebpackPlugin = require('transfer-webpack-plugin'); //var env = process.env.NODE_ENV
var openBrowserPlugin = require('open-browser-webpack-plugin');
var env = process.env.NODE_ENV;
console.log('env=',env);

var config = {
    // 启用source-map
    devtool: '#source-map',
    debug: true,
    entry: {
        index: [
            'webpack-dev-server/client?http://127.0.0.1:3000', // WebpackDevServer host and port
            'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
            path.resolve(__dirname, 'src/index')
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new openBrowserPlugin({
            url: 'http://127.0.0.1:3000/'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(env||'prod')
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.json', '.less', '.css', '.png', '.jpg']
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loaders: ["babel-loader"],
                exclude: /(node_modules|bower_components)/,
                include: [
                    path.resolve(__dirname, "src")
                ]
            }, 
            {
                test: /\.css$/,
                loader: "style!css?modules"
            }, 
            {
                test: /\.less$/,
                loader: "style!css!less"
            }, 
            {
                test: /\.(png|jpg|gif|woff|woff2)$/,
                loader: 'url-loader?limit=10240'
            }
        ]
    }
};


//---如果是线上环境 则压缩js
if (env === 'production') {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      }
    })
  )
}

module.exports=config;