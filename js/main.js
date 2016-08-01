/**
Main AngularJS Single-Page Web App
*/

var app = angular.module('Single-Page-App', ['ui.router', 'ngAnimate']);


app.config(function($stateProvider) {
	$stateProvider
	.state("home", {
		url:"/home",
		views: {
			"main@": {
				templateUrl: "partials/home.html"
			}
		}	
	})
	.state("about", {
		url:"/about",
		views: {
			"main@": {
				templateUrl: "partials/about.html"
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
	.state("info", {
		parent:"contact",
		views: {
			"contact-form@contact": {
				templateUrl: "partials/contact-info.html"
			}
		}	
	})
	.state("message", {
		parent:"contact",
		views: {
			"contact-form@contact": {
				templateUrl: "partials/contact-message.html"
			}
		}	
	})
})



	