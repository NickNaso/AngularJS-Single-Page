/**
Main AngularJS Single-Page Web App
*/

var app = angular.module('Single-Page-App', ['ui.router', 'ngAnimate']);


app.config(function($stateProvider) {
	$stateProvider
	.state("home", {
		url:"/home",
		templateUrl: "partials/home.html",
	})
	.state("about", {
		url:"/about",
		templateUrl: "partials/about.html",
	})
	.state("contact", {
		url:"/contact",
		templateUrl: "partials/contact.html",
		controller: "contactCtrl"
	})
})



	