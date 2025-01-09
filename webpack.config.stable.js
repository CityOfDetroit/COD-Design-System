const createConfig = require('./webpack.common');

module.exports = createConfig({
  entry: './src/stable/index-stable.js',
  outputPath: 'build/stable',
  port: 3001
});