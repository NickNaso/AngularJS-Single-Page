angular
	.module('Single-Page-App')
	.controller('contactCtrl', function($scope){
		$scope.contact = {};

		$scope.processForm = function() {
        alert('awesome!'); 
        }; 
	});
