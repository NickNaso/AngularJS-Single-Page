var app = angular.module('Single-Page-App', ['ui.router', 'ngMessages']);


app.config(['$stateProvider', function($stateProvider) {
	var home = {
	    name: 'home',
	    url: '/home',
	    views: {
				"main@": {
					templateUrl: "partials/home.html"
				}
			}
	  }
	
	  var contact = {
	    name: 'contact',
	    url: '/contact',
	    views: {
				"main@": {
					templateUrl: "partials/watch.html"
				}
			}
	  }
	
	  $stateProvider.state(home);
	  $stateProvider.state(contact);
	
}])

angular.bootstrap(document, ['Single-Page-App']);
