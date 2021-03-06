var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');
new WebpackDevServer(webpack(config), config.devServer)
    .listen(3000, '127.0.0.1', function(err, result) {
        if (err) {
            console.log(err);
        }
        console.log('Listening at 127.0.0.1:3000');
    });
