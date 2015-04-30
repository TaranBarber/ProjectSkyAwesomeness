angular.module('starApp')
.controller('LessonCtrl', function($scope){
	if (!(angular.isUndefined($scope.$parent.currentLesson) || $scope.$parent.currentLesson === null) 
			&& $scope.$parent.currentLesson != '')
	{
		$scope.lessonName ='';
		$scope.lessonName = $scope.$parent.currentLesson;
	}
	else{
		$scope.lessonName='';
		$state.go("lessons");
	}
});