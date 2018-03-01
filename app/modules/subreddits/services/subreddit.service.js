(function () {
  'use strict';
  angular
    .module('com.module.subreddit')
    .service('SubredditService', function ($state, $http, $q, ENV) {

      this.getSubreddits = function () {
        return $http.get(ENV.hostUrl + '');
      }

    });
})();