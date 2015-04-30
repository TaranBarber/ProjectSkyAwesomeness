angular.module('starApp')
.controller('LessonsCtrl', function($scope,$state ){

	$scope.goToLesson = function(lesson){
		$scope.$parent.currentLesson= lesson.substring(15).toUpperCase();
		  $state.transitionTo(lesson);
	  }
});