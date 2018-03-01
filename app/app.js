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
      hostUrl: location.protocol 
    })

  function getPort() {
    return (location.port == '') ? '' : ':' + location.port;
  }

})();