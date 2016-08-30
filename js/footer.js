angular
	.module('Single-Page-App')
	.directive('appFooter', function () {
	    return {
	        restrict: 'E',
	        template: '&copy; Name {{ getYearCtrl.date | date:"yyyy" }}',
	        controller: function(){
	            this.date = Date.now();
	        },
	        controllerAs:'getYearCtrl'
	    };
	});
