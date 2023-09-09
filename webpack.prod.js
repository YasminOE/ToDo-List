const path = require('path');
const common = require('./webpack.config');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const _ = require('lodash'); // Use require instead of import


module.exports = merge(common,{
  mode: 'production',

  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new CleanWebpackPlugin()],
});
