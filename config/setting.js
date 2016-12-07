const path = require('path');

const srcPath = path.join(__dirname, '../src');
const host = '127.0.0.1'
const dfltPort = 8000;
const publicPath ='/dist';
/*const publicPath ='http://127.0.0.1:8000/dist';*/

module.exports = {
    srcPath: srcPath,
    host: host,
    port: dfltPort,
    publicPath: publicPath
}
