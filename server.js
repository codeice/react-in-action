var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var config = require('./webpack.config.js');
var setting = require('./config/setting.js');

const compiler = webpack(config);
new WebpackDevServer(compiler, {
        historyApiFallback: true,
        hot: true,
        port: setting.port,
        publicPath: config.output.publicPath,
        noInfo: false
    })
    .listen(setting.port, setting.host, (err) => {
        if (err) {
            console.log(err);
        }
        console.log('Listening at localhost:' + config.port);
    });



/*const compiler = webpack(config);
// attach to the compiler & the server
webpackDevMiddleware(compiler, {
    noInfo: true,
    hot: true,
    port: setting.port,
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    }
});

webpackHotMiddleware(compiler);*/
