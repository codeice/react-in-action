if (process.env.NODE_ENV === 'prod') {
  module.exports = require('./root.prod');
} else {
  module.exports = require('./root.dev');
}