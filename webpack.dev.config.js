const webpack = require('webpack');
const config = require('./webpack.config.js');

config.plugins.push(new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('development'),
  },
}));

config.plugins.push(new webpack.LoaderOptionsPlugin({
  debug: true,
}));

module.exports = config;
