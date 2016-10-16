/**
 * Created by pheadra on 9/18/16.
 */

var webpackConfig = require('../webpack/webpack.test.js')

// Reference: http://karma-runner.github.io/0.12/config/configuration-file.html
module.exports = function karmaConfig(config) {
  config.set({
    frameworks: [
      // Reference: https://github.com/karma-runner/karma-mocha
      // Set framework to mocha
      'mocha'
    ],

    reporters: [
      'coverage', 'mocha'
    ],
    preprocessors: {
      // Reference: http://webpack.github.io/docs/testing.html
      // Reference: https://github.com/webpack/karma-webpack
      // Convert files with webpack and load sourcemaps
      './test_bundler.js': ['webpack', 'sourcemap']
    },
    files: [
      // Reference: https://www.npmjs.com/package/phantomjs-polyfill
      // Needed because React.js requires bind and phantomjs does not support it
      '../../node_modules/phantomjs-polyfill/bind-polyfill.js',
      // Grab all files in the app folder that contain .config.
      './test_bundler.js'
    ],

    browsers: [
      // Run tests using PhantomJS
      'PhantomJS'
    ],

    singleRun: true,

    // Configure code coverage reporter
    coverageReporter: {
      dir: '../../coverage',
      reporters: [
        { type: 'html', subdir: 'html' },
        { type: 'text-summary' }
      ]
    },
    webpack: webpackConfig
  })
}
