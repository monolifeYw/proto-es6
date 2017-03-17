'use strict';

var path = require('path');

module.exports = {
  entry: path.join(__dirname, '/js/es6_step.js'),
  output: {
    path: path.join(__dirname + '/public'),
    filename: 'dist.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',// transpiler 
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  // local dev server
  /*
     object { hot?, hotOnly?, lazy?, host?, filename?, publicPath?, port?, socket?, watchOptions?, headers?, clientLogLevel?, overlay?, key?, cert?, ca?, pfx?, pfxPassphrase?, inline?, public?, https?, contentBase?, watchContentBase?, open?, features?, compress?, proxy?, historyApiFallback?, staticOptions?, setup?, stats?, reporter?, noInfo?, quiet?, serverSideRender?, index?, log?, warn? }
   */
  devServer: {
    contentBase: './public',
    port: '3000'
  }
};