/**
Main AngularJS Single-Page Web App
*/



var app = angular.module('single-page-ngApp', ['ngRoute'], function() {})

app.directive('appFooter', function(){
	return {
		restrict: 'E',
		template: '<p class="footer_copy">&copy; {{ footer.date | date:"yyyy" }} AT&amp;T</p>',
		controller: function(){
			this.date = Date.now();
		},
		controllerAs:'footer'
	};
});