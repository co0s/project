const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
// const loader = require('image-minimizer-webpack-plugin/types/loader');

// const { plugins } = require("@babel/preset-env/lib/plugins-compat-data");

module.exports = (env) => ({
  entry: [path.join(__dirname, 'src', 'index.js')],
  output: {
    filename: 'main.[contenthash].js', // ! результирующий файл в папку dist/main.js
    publicPath: '/',
    clean: true, // ! очистить папку перед сборкой
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/i,
        use: 'raw-loader',
      },
      {
        test: /\.scss$/i,
        use: [
          env.prod ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          // 'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'), // <- ПРОВЕРЬТЕ ЭТОТ ПУТЬ!
      filename: 'index.html',
    }),
  ],

  devServer: {
    watchFiles: path.join(__dirname, 'src'), // ! наблюдатель за изменениями для авто-релодинга
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  optimization: {
    minimizer: [
      new ImageMinimizerPlugin({
        // ! оптимизация изображений через image-minimizer-plugin
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ['gifsicle', { interlaced: true }],
              ['jpegtran', { progressive: true }],
              ['optipng', { optimizationLevel: 5 }],
              ['svgo', { name: 'preset-default' }],
            ],
          },
        },
      }),
    ],
  },
});
