/**
Main AngularJS Single-Page Web App
*/

var w = window.innerWidth;

console.log(w);

var app = angular.module('Single-Page-App', ['ui.router', 'ngAnimate', 'ngMessages']);


app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');
	$stateProvider
	.state("home", {
		url:"/home",
		views: {
			"main@": {
				templateUrl: "partials/home.html"
			}
		}	
	})
	.state("listen", {
		url:"/listen",
		views: {
			"main@": {
				templateUrl: "partials/listen.html"
			}
		}	
	})
	.state("watch", {
		url:"/watch",
		views: {
			"main@": {
				templateUrl: "partials/watch.html"
			}
		}	
	})
	.state("contact", {
		url:"/contact",
		views: {
			"main@": {
				templateUrl: "partials/contact.html"
			}
		}	
	})
})



	