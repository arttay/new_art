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
	)

});

app.controller("mainCtrl", function($scope, $location) {
	var links = ["/", "/info", "/contact", "/portfolio"];
	var linkIndex = 1;
	
	    $scope.updateIndex = function(link) {
    	console.log(links);
    	var link = document.location.href.split('/');
		var currentLink = links.indexOf("/" + link[5]);

		//linkIndex = currentLink++;
		console.log(currentLink);

    	
    }
 	$scope.go = function (path) {
        $location.path(path);
    }
	$scope.pages = function(path) {
		var link = document.location.href.split('/');
		var currentLink = links.indexOf("/" + link[5]);
			if(currentLink == linkIndex) {
				linkIndex++;
				console.log(linkIndex);
			}
			if(linkIndex === links.length) {
	    		linkIndex = 0;
	    	}//end if
    	$location.path(links[linkIndex]);
    	linkIndex++;
    }//end pages

   

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


