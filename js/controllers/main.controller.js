var app = angular.module('app', ['ngRoute', 'ngAnimate']);

app.config(function($routeProvider){
	$routeProvider.
	when("/",
		{
			templateUrl: "js/templates/main.template.html",
			
		}
	).when("/info",
		{
			templateUrl: "js/templates/info.template.html",
			
		}
	).when("/contact",
		{
			templateUrl: "js/templates/contact.template.html",
			
		}
	).when("/portfolio",
		{
			templateUrl: "js/templates/portfolio.template.html",
			
		}
	).when("/prowork",
		{
			templateUrl: "js/templates/portfolio/pro.template.html",
			
		}
	).when("/github",
		{
			templateUrl: "js/templates/portfolio/github.template.html",
			
		}
	).when("/personalprojects",
		{
			templateUrl: "js/templates/portfolio/cool.template.html",
			
		}
	)


});

app.controller("mainCtrl", function($scope, $location) {
	var links = ["/", "/info", "/contact", "/portfolio"];//site map :P
	var linkIndex = 1;
	$scope.updateIndex = function(link) {
		var currentLink = links.indexOf(link);
		linkIndex = currentLink +=1;	
    }
 	$scope.go = function (path) {
        $location.path(path);
    }
	$scope.pages = function(path) {
		var link = document.location.href.split('/');
		var currentLink = links.indexOf("/" + link[5]);
			if(currentLink == linkIndex) {
				linkIndex +=1;
			}
			if(linkIndex === links.length) {
	    		linkIndex = 0;
	    	}//end if
    	$location.path(links[linkIndex]);
    	linkIndex +=1;
    }//end pages
});
app.controller("portCtlr", function($scope, $location) {
	$scope.go = function (path) {
        $location.path(path);
    }

});
app.controller("proCtlr", function($scope, $location) {
	$scope.go = function (path) {
        $location.path(path);
    }

});
app.directive('newpage',function($location){
	return {
	 	restrict: 'A',
	 	link: function(scope, element, attrs) {

	 		element.bind("click", function(){
	 			scope.$apply(attrs.newpage);
	 		})	
	 	},
	 	template: ""//no tempalte
 }

});


