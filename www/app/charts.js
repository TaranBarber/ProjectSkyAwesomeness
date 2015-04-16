angular.module('starApp')
.controller('ChartsCtrl', function($scope){
	
	$scope.hour = 12;
	$scope.timePeriod = 'AM';
	
	$scope.addTime = function (hours){
		if (($scope.hour + hours) > 12){
			
			if (($scope.timePeriod == 'AM') &&($scope.hour == 12)){
				$scope.timePeriod = 'PM';
			}
			else if (($scope.timePeriod == 'PM')&&($scope.hour == 12)){
				$scope.timePeriod = 'AM';
			}
			else{}

			$scope.hour = ($scope.hour+hours)%12;
		}
		else
			$scope.hour+= hours;
	};
	$scope.subtractTime = function(hours){
		if (($scope.hour - hours) < 1){
			
			$scope.hour = (($scope.hour-hours)%12)+12;
			if (($scope.timePeriod == 'AM')&&($scope.hour == 12)){
				$scope.timePeriod = 'PM';
			}
			else if (($scope.timePeriod == 'PM')&&($scope.hour == 12)){
				$scope.timePeriod = 'AM';
			}
			else{}
			
		}
		else
			$scope.hour-= hours;
	};
	
	$scope.angleInt = 0;
	$scope.angle = '0';
    $scope.rotate = function (angle) {
        
        $scope.angleInt = ($scope.angleInt + parseInt(angle))%360;
        $scope.angle = $scope.angleInt.toString();
        console.log("rotating");
    };
    
    $scope.vision = 'daymode';
    $scope.toggleVisionMode = function () {
        
        if ($scope.vision == 'nightmode'){
        	$scope.vision = 'daymode';
        }
        else {
        	$scope.vision = 'nightmode'
        }
        console.log("toggling night");
    };
});