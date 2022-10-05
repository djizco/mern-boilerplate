const ESLintPlugin = require('eslint-webpack-plugin');

const config = require('./webpack.config');

const ESLintPluginConfig = new ESLintPlugin({
  extensions: ['js', 'jsx'],
  failOnError: false,
});

config.plugins.push(ESLintPluginConfig);

module.exports = config;
