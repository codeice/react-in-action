var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');

/*new WebpackDevServer(webpack(config), {
        publicPath: config.output.publicPath,
        hot: true,
        noInfo: false,
        historyApiFallback: true
    })
    .listen(3000, '127.0.0.1', function(err, result) {
        if (err) {
            console.log(err);
        }
    });
*/

const compiler = webpack(config);

console.log('config.host=',config.host,'and config.port= ',config.port);
new WebpackDevServer(compiler, config.devServer)
.listen(config.port, config.host, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:' + config.port);
});
