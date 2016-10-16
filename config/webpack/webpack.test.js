/**
 * Created by pheadra on 9/18/16.
 */

'use strict'
const webpack = require('webpack')

const debug = require('debug')('app:webpack:config')
debug('Creating testing configuration.')

module.exports = require('./webpack.base.js')({
  entry: { },
  output: { },
  cssLoaders : 'null',
  plugins: [ ],
  resolve : {
    mainFields : undefined
  },
  externals: {
    cheerio: 'window',
    'react/addons'                   : true,
    'react/lib/ExecutionEnvironment' : true,
    'react/lib/ReactContext'         : 'window'
  },
  devtool: 'cheap-module-source-map'
})
