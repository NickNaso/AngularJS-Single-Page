/**
Main AngularJS Single-Page Web App
*/



var app = angular.module('Single-Page-App', ['ngRoute']);


app.config(function($routeProvider) {
	$routeProvider
	.when("/home", {
		templateUrl: "partials/home.html",
		controller: "homeController"
	})
	.when("/about", {
		templateUrl: "../partials/about.html",
		controller: "homeController"
	})
	.when("/contact", {
		templateUrl: "../partials/contact.html",
		controller: "homeController"
	})
})

