var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var autoprefixer = require('autoprefixer')
var precss = require('precss')

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    './src/index',
    'babel-polyfill'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publickPath: '/static/'
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    HtmlWebpackPluginConfig,
  ],

  module: {


    loaders:[{
      test: /\.js$/,
      loaders: ['react-hot', 'babel-loader'],
      include: path.join(__dirname, 'src'),
      plugins: ['transform-runtime'],
    },

    {
      test: /\.css$/,
      loader: 'style-loader!css-loader!postcss-loader'
    
    }
    
    
    ]
  },

  postcss: function() {
    return [autoprefixer, precss]
  
  }

}
