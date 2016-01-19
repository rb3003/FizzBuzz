module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/components/**/*.js',
      'app/FizzBuzz*/**/*.js',
      'app/views/**/*.js',
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['ChromeBackground'],
      customLaunchers: {
          ChromeBackground: {
              base: 'Chrome',
              flags: ['--no-startup-window']
          }
      },

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
