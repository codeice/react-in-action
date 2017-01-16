var path = require('path');
var webpack = require('webpack');
var express = require('express');
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.config.js');
var config = require('../config')

const menus=require('../fake/menus.js')
const users=require('../fake/users.js')


console.log('menus=',menus);
console.log('users=',users);

var proxyTable = config.dev.proxyTable
    // default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
var app = express();

const compiler = webpack(webpackConfig);

var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
});
// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
app.use(require('webpack-hot-middleware')(compiler))

// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function(compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function(data, cb) {
        hotMiddleware.publish({ action: 'reload' })
        cb()
    })
});

// proxy api requests
Object.keys(proxyTable).forEach(function(context) {
    var options = proxyTable[context]
    if (typeof options === 'string') {
        options = { target: options }
    }
    options.pathRewrite = function(path, req) {
        if (path.indexOf('/api') > -1) {
            path = path.replace('/api', '')
        }
        console.log(path)
        return path
    }
    console.log('context=', context, 'options=', options);
    app.use(proxyMiddleware(context, options))
})


// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

app.post('/api/menus', function(req, res) {

  console.log(res.json(menus));
  res.json(menus);
});

app.post('/api/users', function(req, res) {
    console.log( res.json(users));
  res.json(users);
});


module.exports = app.listen(port, function(err) {
    if (err) {
        console.log(err)
        return
    }
    console.log('Listening at http://localhost:' + port + '\n')
})
