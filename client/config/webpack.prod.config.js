const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const config = require('./webpack.config.js');

config.plugins.push(new BundleAnalyzerPlugin());

config.plugins.push(new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production'),
  },
}));

config.optimization = {
  minimizer: [
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          drop_console: true,
        },
      },
      sourceMap: true,
    }),
  ],
};

config.plugins.push(new webpack.LoaderOptionsPlugin({
  minimize: true,
}));

module.exports = config;
