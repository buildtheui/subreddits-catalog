(function () {
  'use strict';
  angular
    .module('com.module.subreddit')
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('app.catalog', {
          abstract: true,
          url: '/catalog',
          templateUrl: 'app/modules/subreddits/views/catalog.html'
        })
        .state('app.catalog.index', {
          url: '',
          controller: function ($state) {
            $state.go('app.catalog.infinitescroll');
          }      
        })
        .state('app.catalog.infinitescroll', {
          url: '/catalog-scroll',
          templateUrl: 'app/modules/subreddits/views/infinite-scroll-catalog.html',
          controller: 'CatalogScrollCtrl'
        })
         $urlRouterProvider.otherwise('/app');
    });
})();
