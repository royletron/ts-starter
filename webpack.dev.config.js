var path = require('path');
var webpack = require('webpack');
var html = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var cssnano = require('cssnano');
var nested = require('postcss-nested');

module.exports = {
  target: 'web',
  entry: './src/index.tsx',
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    hot: true,
    inline: true,
    port: 3333,
    historyApiFallback: true
  },
  debug: true,
  devtool: 'eval-source-map',
  postcss: function () {
    return [precss, nested, autoprefixer]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new html({template: 'src/index.ejs'})
  ],
  module: {
    loaders: [
      {
        test: /\.tsx?$/, loader: 'ts-loader' 
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
      }
    ],
    preLoaders: [
      {
        test: /\.js$/, loader: 'source-map-loader'
      }
    ]
  }
}