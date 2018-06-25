const webpack           = require('webpack');
const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'client/index.html'),
  filename: 'index.html',
  inject: 'body',
  favicon: path.join(__dirname, 'client/assets/icons/favicon.ico'),
});

const ExtractTextPluginConfig = new ExtractTextPlugin('bundle.css');
const ModuleConcatenationConfig = new webpack.optimize.ModuleConcatenationPlugin();

module.exports = {
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    inline: true,
  },
  entry: [
    './client/index.js',
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
  },
  resolve: {
    alias: {
      _elements: path.resolve(__dirname, 'client/components/elements/'),
      _components: path.resolve(__dirname, 'client/components/components/'),
      _structures: path.resolve(__dirname, 'client/components/structures/'),
      _sections: path.resolve(__dirname, 'client/components/sections/'),
      _pages: path.resolve(__dirname, 'client/components/pages/'),
      _layouts: path.resolve(__dirname, 'client/components/layouts/'),
      _store: path.resolve(__dirname, 'client/store/'),
      _assets: path.resolve(__dirname, 'client/assets/'),
      _styles: path.resolve(__dirname, 'client/styles/'),
      _utils: path.resolve(__dirname, 'client/utils/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.join(__dirname, 'client')],
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(['style-loader', 'css-loader']),
      },
      {
        test: /\.scss$/i,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
      },
      {
        test: /\.less$/i,
        loader: ExtractTextPlugin.extract(['css-loader', 'less-loader']),
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
          {
            loader: 'image-webpack-loader',
            query: {
              optipng: {
                optimizationLevel: 7,
              },
              mozjpeg: {
                progressive: true,
              },
              gifsicle: {
                interlaced: false,
              },
              pngquant: {
                quality: '75-90',
                speed: 3,
              },
            },
          },
        ],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    ExtractTextPluginConfig,
    ModuleConcatenationConfig,
  ],
};
