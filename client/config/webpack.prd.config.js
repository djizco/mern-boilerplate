const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const config = require('./webpack.config');

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
    }),
  ],
};

config.plugins.push(new BundleAnalyzerPlugin({
  analyzerMode: 'static',
}));

const MiniCssExtractPluginConfig = new MiniCssExtractPlugin({
  filename: '[name].[fullhash].css',
  chunkFilename: '[id].[fullhash].css',
});

config.plugins.push(MiniCssExtractPluginConfig);

module.exports = config;
