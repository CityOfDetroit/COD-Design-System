const createConfig = require('./webpack.common');

module.exports = createConfig({
  entry: './src/experimental/index-experimental.js',
  outputPath: 'build/experimental',
  port: 3000
});