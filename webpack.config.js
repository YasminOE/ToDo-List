const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: './src/index.js',
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
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
        use: {
           loader: 'file-loader',
           options: {
             name:"[name].[hash].[ext]",
             outputPath: "imgs"
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

