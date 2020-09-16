const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const config = require('./webpack.config.js');

config.optimization = {
  minimize: true,
  minimizer: [
    new TerserPlugin({
      terserOptions: {
        compress: {
          drop_console: true,
        },
        output: {
          comments: false,
        },
      },
      sourceMap: true,
    }),
  ],
};

config.plugins.push(new BundleAnalyzerPlugin({
  analyzerMode: 'static',
}));

module.exports = config;
