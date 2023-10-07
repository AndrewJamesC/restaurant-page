const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: '[name][ext]'
  },
  module: {
   rules: [
    {
      test: /\.(png|jpg|jpeg|gif|svg)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192, // You can adjust the limit as needed
            name: 'images/[name].[ext]', // Output path and filename
          },
        },
      ],
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
   ]
 },
};

