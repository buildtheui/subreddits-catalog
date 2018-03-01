(function () {
  'use strict';
  angular
    .module('com.module.subreddit')
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('catalog', {
          url: '/catalog',
          templateUrl: 'modules/subreddits/views/catalog.html',
          controller: 'CatalogCtrl' 
        })
        .state('catalog.index', {
          url: '',
          controller: function ($state) {
            $state.go('catalog.all');
          }      
        })
         $urlRouterProvider.otherwise('/app');
    });
})();
