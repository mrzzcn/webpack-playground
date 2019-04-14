const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'none',
  output: {
    path: path.resolve('dist'),
    filename: 'main.js'
  },

  optimization: {
    runtimeChunk: 'single'
  }
};