(function () {
	'use strict';
	angular
		.module('com.module.subreddit')
		.controller('CatalogScrollCtrl', function ($scope, $timeout, $state, SubredditService) {
			$scope.subredditItems = [];

			// refactor reddit url for banner images
			$scope.imgRefactorUrl = function (imgUrl) {
				var fallBackImgUrl = 'http://minimaxir.com/img/reddit-statistics/reddit_logo.jpg';
				return (imgUrl.length > 0) ? imgUrl : fallBackImgUrl;
			}

			// refactor subreddit description
			$scope.descriptionRefactor = function (descriptionText) {
				var fallBackDescription = 'Description for this subreddit is not available';
				return (descriptionText.length > 0) ? descriptionText : fallBackDescription;
			}

			// getting the subreddit list
			SubredditService.getSubredditsList('').then(function (redditList) {
				redditList = redditList.data.data.children
				for (var i = 0; i < redditList.length; i++) {
					$scope.subredditItems.push(redditList[i])
				}				
			});
		});
})();
