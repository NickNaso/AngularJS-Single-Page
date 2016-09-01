var app = angular.module('Single-Page-App', ['ui.router', 'ngMessages']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');

	var home = {
		name: 'home',
		url: '/home',
		views: {
			"main@": {
				templateUrl: "partials/home.html"
			}
		}
	}

	var listen = {
		name: 'listen',
		url: '/listen',
		views: {
			"main@": {
				templateUrl: "partials/listen.html"
			}
		}
	}

	var watch = {
		name: 'watch',
		url: '/watch',
		views: {
			"main@": {
				templateUrl: "partials/watch.html"
			}
		}
	}

	var contact = {
		name: 'contact',
		url: '/contact',
		views: {
			"main@": {
				templateUrl: "partials/contact.html"
			}
		}
	}

	$stateProvider.state(home);
	$stateProvider.state(listen);
	$stateProvider.state(watch);
	$stateProvider.state(contact);

}])
