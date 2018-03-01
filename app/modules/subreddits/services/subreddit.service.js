(function () {
  'use strict';
  angular
    .module('com.module.subreddit')
    .service('SubredditService', function ($state, $http, ENV) {

      /**
       *  List all subreddits with paggination, depending on the 
       *  afterId (shown on every subreddit item)
       * @param {String} afterId 
       * @returns {Object}
       */
      this.getSubredditsList = function (afterId) {
        return $http.get(ENV.redditApiUrl + 'reddits.json?limit=9&after=' + afterId);
      };

    });
})();