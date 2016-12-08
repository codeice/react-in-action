var path = require('path')
var rimraf=require('rimraf');
var webpack = require('webpack')
var ora = require('ora')

var config = require('../config')
var webpackConfig = require('./webpack.prod.config')

var spinner = ora('building for production...')
spinner.start()

//remove the assets under dist directory
var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)
rimraf(assetsPath,function(){
	console.log('remove asset done...')
})

webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
});
