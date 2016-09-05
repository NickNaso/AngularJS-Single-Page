angular
.module('Single-Page-App')
.controller('contactCtrl', ['$scope', '$http', function($scope, $http){
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
					// make all error messages blank when
					// php return a string (which is the success message)
					// which means there are no error messages being sent from php
					$scope.nameError = "";
					$scope.messageError = "";
					$scope.subjectError = "";
					$scope.emailError = "";

					// put the success string from php into
					// the successMsg so it can be accessed in the view
					$scope.successMsg = response.data;

					// clear all form values
					// and set the inputs to prisitine and untouched
					// so that angular will not display any error messages
					// once a user submits the form successfully

					$scope.contact = {};
					$scope.contactForm.$setPristine();
					$scope.contactForm.$setUntouched();

					console.log($scope.successMsg);
					console.log("not an object");
				} else {
					if(typeof(response.data) == 'object') {
					// if php sends an object
					// (which contains all the error messages present)
					// populate variables with error messages

					$scope.nameError = response.data['name-error'];
					$scope.messageError = response.data['message-error'];
					$scope.subjectError = response.data['subject-error'];
					$scope.emailError = response.data['email-error'];

					//clear the success message if errors come back from php
					$scope.successMsg = "";

					console.log("it is an object");
					}
				}


			}, function (error){
				$scope.msg = error.data;
				console.log($scope.msg);

		});
	}
}]);

//Helpful video about sending data from angular form to php
//https://www.youtube.com/watch?v=gVd6Mo-VEQg
