const ESLintPlugin = require('eslint-webpack-plugin');

const config = require('./webpack.config');

const ESLintPluginConfig = new ESLintPlugin();

config.plugins.push(ESLintPluginConfig);

module.exports = config;
