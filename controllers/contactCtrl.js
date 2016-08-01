angular
	.module('Single-Page-App')
	.controller('contactCtrl', function($scope){
		$scope.message = {};

		$scope.processForm = function() {
        alert('awesome!'); 
        }; 
	});
