// Karma configuration

process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function(config) {
  config.set({

      // frameworks to use
      // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
      frameworks: ['jasmine', 'karma-typescript'],


      // list of files / patterns to load in the browser
      files: [
		  { pattern: "src/**/*.ts" }
      ],


      // list of files to exclude
      exclude: [],


      // preprocess matching files before serving them to the browser
      // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
      preprocessors: {
          // source files, that you wanna generate coverage for
          // do not include tests or libraries
          // (these files will be instrumented by Istanbul)
          // 'js/tests.js': ['coverage']
          "src/**/*.ts": ['karma-typescript']
      },

      // test results reporter to use
      // possible values: 'dots', 'progress'
      // available reporters: https://npmjs.org/browse/keyword/karma-reporter
      reporters: ['mocha', 'karma-typescript'], //, 'coverage'

      karmaTypescriptConfig: {
          /*
          compilerOptions: {
            "target": "es2015",
            "module": "commonjs",
            "declaration": true,
            "outDir": "./dist",
            "sourceMap": true,
            "experimentalDecorators": true
        }*/
        tsconfig: "./tsconfig.json"
      },

      // web server port
      port: 9876,


      // enable / disable colors in the output (reporters and logs)
      colors: true,


      // level of logging
      // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
      logLevel: config.LOG_INFO,


      // enable / disable watching file and executing tests whenever any file changes
      autoWatch: false,


      // start these browsers
      // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
      browsers: ['ChromeHeadless'],


      // Continuous Integration mode
      // if true, Karma captures browsers, runs the tests and exits
      singleRun: true,

      // Concurrency level
      // how many browser should be started simultaneous
      concurrency: Infinity
  })
}