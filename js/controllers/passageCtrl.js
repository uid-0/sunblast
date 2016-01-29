sunblast.controller("PassageCtrl", function($scope, storyData, $sce) {
	var startId = storyData.startPassage;
	$scope.id = startId;

	$scope.setMainPassage = function(id) {
		$scope.id = storyData.resolvePassage(id).id;
	}
})
