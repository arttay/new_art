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
	);

});

app.controller("mainCtrl", function($scope, $location) {
	var links = ["/", "/info"];
	var linkIndex = 1;
	var link = document.location.href.split('/');
	var currentLink = links.indexOf("/" + link[5]);
		if(currentLink == linkIndex) {
			linkIndex++;
			console.log(linkIndex);
		}



 	$scope.go = function (path) {
        $location.path(path);
    }
	$scope.pages = function(path) {

		if(linkIndex === links.length) {
	    		linkIndex = 0;
	    	}//end if
    	$location.path(links[linkIndex]);
    	linkIndex++;
	    
    }//end pages
    $scope.test = function() {
    	console.log("ayep");
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


