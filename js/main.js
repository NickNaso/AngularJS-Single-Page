/**
Main AngularJS Single-Page Web App
*/

var app = angular.module('Single-Page-App', ['ngRoute']);


app.config(function($routeProvider) {
	$routeProvider
	.when("/home", {
		templateUrl: "partials/home.html",
	})
	.when("/about", {
		templateUrl: "partials/about.html",
	})
	.when("/contact", {
		templateUrl: "partials/contact.html",
		controller: "contactCtrl"
	})
})



	