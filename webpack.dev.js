const path = require('path');
const common = require('./webpack.config');
const { merge } = require('webpack-merge');


module.exports = merge(common,{
  mode: 'development',

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: { 
    compress: false,
    open: 'chrome',
    stats: 'errors-only',
    overlay: true,
},
});
