/**
 * Created by pheadra on 9/18/16.
 */

'use strict'
const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const Clean = require('clean-webpack-plugin')

const debug = require('debug')('app:webpack:config')
debug('Creating configuration.')


module.exports = require('./webpack.base.js')({
  entry: {
    'app': './app/main.js'
  },
  output: {
    path: path.resolve(process.cwd(), 'public'),
    publicPath: '/',
    filename: '[name].[hash].js'
  },
  cssLoaders : ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap!postcss-loader' }),
  plugins: [
    new Clean(['public']),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true
      },
      output: {
        comments: false
      },
      sourceMap: true
    })
  ],
  resolve : {
    mainFields : ['main', 'browser']
  },
  externals: { },
  devtool: 'source-map'
})
