(function () {
	'use strict';
	angular
		.module('com.module.subreddit')
		.controller('CatalogScrollCtrl', ['$scope', '$timeout', '$state', '$uibModal', 'SubredditService',
			function ($scope, $timeout, $state, $uibModal, SubredditService) {
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

				// open modal to see subreddit descriptions
				$scope.subredditDetailsOpen = function (redditItem) {
					var modalInstance = $uibModal.open({
						animation: true,
						ariaLabelledBy: 'modal-title',
						ariaDescribedBy: 'modal-body',
						templateUrl: 'app/modules/subreddits/views/subreddit-details.html',
						controller: 'SubredditDetailsCtrl',
						size: 'lg',
						resolve: {
							subreddit: function () {
								return redditItem;
							}
						}
					});

				};

			}])

		.controller('SubredditDetailsCtrl', ['$scope', '$uibModalInstance', 'subreddit', 'SubredditService',
			function ($scope, $uibModalInstance, subreddit, SubredditService) {
				$scope.subreddit = subreddit;
				$scope.topComments = [];
				$scope.close = function () {
					$uibModalInstance.dismiss('cancel');
				};

				// getting the top 5 comments from the current subreddit
				SubredditService.getTopFiveComments(subreddit.url).then(function (topComments) {
					$scope.topComments = topComments.data.data.children;
				});
			}]);

})();
