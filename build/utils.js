var path = require('path')
var config = require('../config')

exports.assetsPath = function(_path) {
    var assetsSubDirectory = process.env.NODE_ENV === 'production' ? config.build.assetsSubDirectory : config.dev.assetsSubDirectory;

    console.log('path.posix.join(assetsSubDirectory, _path)=', path.posix.join(assetsSubDirectory, _path))
    return path.posix.join(assetsSubDirectory, _path)
}
