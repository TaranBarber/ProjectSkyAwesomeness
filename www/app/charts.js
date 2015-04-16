angular.module('starApp')
.controller('ChartsCtrl', function($scope){
	$scope.angleInt = 0;
	$scope.angle = '0';
    $scope.rotate = function (angle) {
        
        $scope.angleInt = ($scope.angleInt + parseInt(angle))%360;
        $scope.angle = $scope.angleInt.toString();
        console.log("rotating");
    };
});