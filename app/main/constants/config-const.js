'use strict';
angular.module('main')
.constant('Config', {

  // gulp environment: injects environment vars
  // https://github.com/mwaylabs/generator-m-ionic#gulp-environment
  ENV: {
    /*inject-env*/
    'parse': {
      'appId': 'myAppId',
      'serverUrl': 'http://de2935ee.ngrok.io/parse'
    },
    'push': {
      'appId': '070C0-E677F',
      'googleProjectNumber': '434316930961'
    },
    'admob': {
      'interstitialForAndroid': 'ca-app-pub-3940256099942544/1033173712',
      'interstitialForiOS': 'ca-app-pub-3940256099942544/1033173712',
      'bannerId': 'ca-app-pub-8422613546571746/2710088514'
    },
    'gaTrackingId': 'UA-69485876-2',
    'theme': 'nearme',
    'unit': 'mi',
    'mapType': 'normal',
    'statusBarColor': '#1b68ea'
    /*endinject*/
  },

  // gulp build-vars: injects build vars
  // https://github.com/mwaylabs/generator-m-ionic#gulp-build-vars
  BUILD: {
    /*inject-build*/
    /*endinject*/
  }

});
