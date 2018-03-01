(function () {
  'use strict';
  angular
    .module('com.module.subreddit')
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('app.catalog', {
          abstract: true,
          url: '/catalog',
          templateUrl: 'modules/subreddits/views/catalog.html',
          controller: 'CatalogCtrl' 
        })
        .state('app.catalog.index', {
          url: '',
          controller: function ($state) {
            $state.go('app.catalog.infinitescroll');
          }      
        })
        .state('app.catalog.infinitescroll', {
          url: '/catalog-scroll',
          templateUrl: 'modules/subreddits/views/infinite-scroll-catalog.html',
          controller: function ($state) {

          }
        })
         $urlRouterProvider.otherwise('/app');
    });
})();
