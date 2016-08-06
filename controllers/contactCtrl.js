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
				if(typeof(response.data) == 'string') {
					// this value is populated when no error messages exist
					$scope.nameError = "";
					$scope.messageError = "";
					$scope.subjectError = "";
					$scope.emailError = "";

					$scope.successMsg = response.data;
					console.log($scope.successMsg);
					console.log("not an object");
				} else {
						//these values are for the error response object
					$scope.nameError = response.data['name-error'];
					$scope.messageError = response.data['message-error'];
					$scope.subjectError = response.data['subject-error'];
					$scope.emailError = response.data['email-error'];

					$scope.successMsg = "";

					console.log("it is an object");
				}
				
				
			}, function (error){
				$scope.msg = error.data;
				console.log($scope.msg);

		});
	}
});

//Helpful video about sending data from angular form to php 
//https://www.youtube.com/watch?v=gVd6Mo-VEQg

