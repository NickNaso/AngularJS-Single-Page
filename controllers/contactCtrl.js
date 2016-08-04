angular
	.module('Single-Page-App')
	.controller('contactCtrl', function($scope, $http){
		$scope.contact = {};

		$scope.contact = {name : '', email : '', subject : '', message : ''};
		$scope.submitForm = function() {
     		var config = {
				method: 'POST',
				url : '../php/process-form.php',
				data : {
					'name' : $scope.contact.name,
					'email': $scope.contact.email,
					'subject': $scope.contact.subject,
					'message' : $scope.contact.message
				}
			};
			var request = $http(config);
			request.then(function (response){
				$scope.msg = response.data;
				console.log($scope.msg);
			}, function (error){
				$scope.msg = error.data;
				console.log($scope.msg);

		});
	}
});

