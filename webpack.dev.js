const path = require('path');
const common = require('./webpack.config');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const _ = require('lodash'); // Use require instead of import


module.exports = merge(common,{
  mode: 'development',

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },  plugins: [new CleanWebpackPlugin()],

  devServer: {
    contentBase: path.join(__dirname, 'dist'), // Path to serve static files from
    publicPath: '/', // Public URL path to access assets
    compress: false, // Whether to enable gzip compression (can affect image loading)
    open: 'chrome', // Open the application in Google Chrome (you can change this to your preferred browser)
    stats: 'errors-only', // Display only error messages in the console
    overlay: true, // Display errors as an overlay on the application
  },
});  