(function () {
  'use strict';
  angular
    .module('com.module.subreddit')
    .service('SubredditService', ['$state', '$http', 'ENV', function ($state, $http, ENV) {

      /**
       *  List all subreddits with paggination, depending on the 
       *  afterId (shown on every subreddit item)
       * @param {String} afterId 
       * @returns {Object}
       */
      this.getSubredditsList = function (afterId) {
        return $http.get(ENV.redditApiUrl + 'reddits.json?limit=9&after=' + afterId);
      };

      /**
       *  List Top 5 comments from a subreddit
       * @param {String} urlSubreddit
       * @returns {Object}
       */
      this.getTopFiveComments = function (urlSubreddit) {
        return $http.get(ENV.redditApiUrl + urlSubreddit + 'top.json?limit=5');
      };

    }]);
})();