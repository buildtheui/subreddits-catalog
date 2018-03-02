(function () {
  'use strict';
  angular
    .module('mainApp', [
      'ui.router',
      'ngAnimate',
      'angular-loading-bar',
      'infinite-scroll',
      'ui.bootstrap',
      'com.module.core',
      'com.module.subreddit'
    ])
    .constant('ENV', {
      redditApiUrl: 'https://www.reddit.com/'
    })
})();