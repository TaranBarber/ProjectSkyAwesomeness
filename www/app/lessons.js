angular.module('starApp')
.controller('LessonsCtrl', function($scope,$state ){

	$scope.goToLesson = function(lesson){
		  $state.transitionTo(lesson);
	  }
});