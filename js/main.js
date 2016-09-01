var app = angular.module('Single-Page-App', ['ui.router', 'ngMessages']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');
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
	.state("watchHere", {
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
}])

angular.bootstrap(document, ['Single-Page-App']);
