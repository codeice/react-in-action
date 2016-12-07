'use strict';

const path = require('path');

function buildConfig() {
    let config = {};
    if (process.env.NODE_ENV === 'prod') {
        config = require(path.join(__dirname, 'config/prod'));
    } else {
        config = require(path.join(__dirname, 'config/dev'));
    }
    return config;
}

module.exports = buildConfig();
