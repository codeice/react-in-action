'use strict';

const path = require('path');

function buildConfig() {
	console.log('process.env.NODE_ENV=',process.env.NODE_ENV);
    let config = {};
    if (process.env.NODE_ENV === 'production') {
        config = require(path.join(__dirname, 'config/prod'));
    } else {
        config = require(path.join(__dirname, 'config/dev'));
    }
    console.log(config.plugins[2])
    return config;
}
module.exports = buildConfig();