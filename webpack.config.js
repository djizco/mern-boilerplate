const webpack           = require('webpack');
const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'client/index.html'),
  filename: 'index.html',
  inject: 'body',
});

const ExtractTextPluginConfig = new ExtractTextPlugin('bundle.css');
const FaviconsWebpackPluginConfig = new FaviconsWebpackPlugin({
  logo: path.join(__dirname, 'client/assets/icons/favicon.ico'),
  prefix: 'icons/',
  emitStats: false,
  statsFilename: 'iconstats.json',
  persistentCache: false,
  inject: true,
  icons: {
    android: false,
    appleIcon: false,
    appleStartup: false,
    coast: false,
    favicons: true,
    firefox: false,
    opengraph: false,
    twitter: false,
    yandex: false,
    windows: false
  },
});
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
      _atoms: path.resolve(__dirname, 'client/components/atoms/'),
      _molecules: path.resolve(__dirname, 'client/components/molecules/'),
      _organisms: path.resolve(__dirname, 'client/components/organisms/'),
      _templates: path.resolve(__dirname, 'client/components/templates/'),
      _pages: path.resolve(__dirname, 'client/components/pages/'),
      _environment: path.resolve(__dirname, 'client/components/environment/'),
      _store: path.resolve(__dirname, 'client/store/'),
      _actions: path.resolve(__dirname, 'client/store/actions'),
      _reducers: path.resolve(__dirname, 'client/store/reducers'),
      _assets: path.resolve(__dirname, 'client/assets/'),
      _styles: path.resolve(__dirname, 'client/styles/'),
      _utils: path.resolve(__dirname, 'client/utils/'),
      _api: path.resolve(__dirname, 'client/api/'),
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
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]',
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
        loader: 'url-loader',
        options: {
          name: 'fonts/[name].[ext]',
          limit: 8192,
          mimetype: 'application/font-woff',
        },
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        options: {
          name: 'icons/[name].[ext]',
        },
      },
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    ExtractTextPluginConfig,
    FaviconsWebpackPluginConfig,
    ModuleConcatenationConfig,
  ],
};