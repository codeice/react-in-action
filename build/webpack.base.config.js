'use strict'
const path = require('path');
const config = require('../config');

const baseConfig = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: config.build.assetsRoot,
        publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        fallback: [path.join(__dirname, '../node_modules')]
    },
    resolveLoader: {
        fallback: [path.join(__dirname, '../node_modules')]
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loaders: ["babel-loader"],
                exclude: /(node_modules|bower_components)/
            }, 
            {
                test: /\.css$/,
                loader: "style!css?modules"
            }, 
            {
                test: /\.less$/,
                loader: "style!css!less"
            }, 
   /*         {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            }, 
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }*/

            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader?limit=10240'
            }
        ]

    }
};

module.exports = baseConfig;
