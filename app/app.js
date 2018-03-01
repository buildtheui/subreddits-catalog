(function () {
  'use strict';
  angular
    .module('mainApp', [
      'ui.router',
      'ngAnimate',
      'angular-loading-bar',
      'com.module.core',
      'com.module.subreddit'
    ])
    .constant('ENV', {
      redditApiUrl: 'https://api.reddit.com/'
    })
})();