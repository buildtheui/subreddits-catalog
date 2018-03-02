(function () {
  'use strict';
  angular
    .module('com.module.core')
    .config([
      'cfpLoadingBarProvider',
      function (cfpLoadingBarProvider) {
        // config angular loading bar plugin
        cfpLoadingBarProvider.includeSpinner = false;
      }
    ])

})();
