const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const resolve = dir => path.join(__dirname, dir);

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: resolve('client/index.html'),
  filename: 'index.html',
  inject: 'body',
});

const FaviconsWebpackPluginConfig = new FaviconsWebpackPlugin({
  logo: resolve('client/assets/icons/favicon.ico'),
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
    windows: false,
  },
});


module.exports = {
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    inline: true,
  },
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: resolve('dist'),
    publicPath: '/',
  },
  resolve: {
    alias: {
      _atoms: resolve('client/components/atoms/'),
      _molecules: resolve('client/components/molecules/'),
      _organisms: resolve('client/components/organisms/'),
      _templates: resolve('client/components/templates/'),
      _pages: resolve('client/components/pages/'),
      _environment: resolve('client/components/environment/'),
      _store: resolve('client/store/'),
      _actions: resolve('client/store/actions'),
      _reducers: resolve('client/store/reducers'),
      _assets: resolve('client/assets/'),
      _styles: resolve('client/styles/'),
      _utils: resolve('client/utils/'),
      _api: resolve('client/api/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('client')],
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/i,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.less$/i,
        loaders: ['style-loader', 'css-loader', 'less-loader'],
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
    ],
  },
  plugins: [
    HtmlWebpackPluginConfig,
    FaviconsWebpackPluginConfig,
  ],
};
