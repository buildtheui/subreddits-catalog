(function () {
	'use strict';
	angular
		.module('com.module.subreddit')
		.controller('CatalogScrollCtrl', function ($scope, $timeout, $state, SubredditService) {
			$scope.subredditItems = [];
			$scope.busy = false;
			$scope.after = '';

			// refactor reddit url for banner images
			$scope.imgRefactorUrl = function (imgUrl) {
				var fallBackImgUrl = 'http://minimaxir.com/img/reddit-statistics/reddit_logo.jpg';
				return (imgUrl) ? imgUrl : fallBackImgUrl;
			}

			// refactor subreddit description
			$scope.descriptionRefactor = function (descriptionText) {
				var fallBackDescription = 'Description for this subreddit is not available';
				return (descriptionText.length > 0) ? descriptionText : fallBackDescription;
			}

			// getting pagination as request to reddit api
			$scope.nextPage = function () {
				if ($scope.busy) return;
				$scope.busy = true;

				// getting the subreddit list
				SubredditService.getSubredditsList($scope.after).then(function (redditList) {
					$scope.after = redditList.data.data.after;
					redditList = redditList.data.data.children;
					for (var i = 0; i < redditList.length; i++) {
						$scope.subredditItems.push(redditList[i]);
					}
					$scope.busy = false;
				});
			};
		});
})();
