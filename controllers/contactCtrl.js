angular
	.module('Single-Page-App')
	.controller('contactCtrl', function($scope, $http){
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
				$scope.msg1 = response.data[0];
				$scope.msg2 = response.data[1];
				$scope.msg3 = response.data[2];
				console.log($scope.msg);
			}, function (error){
				$scope.msg = error.data;
				console.log($scope.msg);

		});
	}
});

//Helpful video about sending data from angular form to php 
//https://www.youtube.com/watch?v=gVd6Mo-VEQg

