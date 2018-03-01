(function () {
  'use strict';
  angular
    .module('com.module.core')
    .config([
      'cfpLoadingBarProvider',
      function (cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = false;
      }
    ])
    .run(function ($rootScope) {

    });

})();
