angular
	.module('Single-Page-App')
	.controller('contactCtrl', function($scope, $state){
		$scope.message = "Howdy dooty";
		$scope.$state = $state;
	});
