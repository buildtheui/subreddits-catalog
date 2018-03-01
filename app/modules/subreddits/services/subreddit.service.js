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
        var afterQuery = ''
        if (afterId !== '') {
          afterQuery = 't3_' + afterId
        }
        return $http.get(ENV.redditApiUrl + 'reddits?limit=9&after=' + afterQuery + '.json');
      };

    });
})();