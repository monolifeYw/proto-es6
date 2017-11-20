'use strict';

const ENV = require('./app-config');

module.exports = {
  entry: ENV.ENTRY,
  output: {
    path: ENV.PUBLIC_PATH,
    filename: 'dist.js',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',// transpiler
        exclude: /node_modules/,
        query: {
          presets: ['es2015'],
        },
      },
    ],
  },

  // local dev server
  devServer: {
    contentBase: ENV.PUBLIC_PATH,
    port: ENV.PORT,
  }
};