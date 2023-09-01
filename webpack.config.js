const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/indexSrc.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
         test: /\.html$/,
         use: ["html-loader"],
     },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        // type: 'asset/resource',
        use: {
           loader: 'file-loader',
           options: {
            name: './[name].[ext]',
             outputPath: "icons"
           }
         },
      },
     {
       test: /\.(woff|woff2|eot|ttf|otf)$/i,
       type: 'asset/resource',
     },
    ],
  },
};

