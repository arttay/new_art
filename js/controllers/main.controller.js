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
	).when("/personal",
		{
			templateUrl: "js/templates/portfolio/cool.template.html",
			
		}
	)


});

app.controller("mainCtrl", function($scope, $location) {
	var links = ["/", "/info", "/portfolio", "/contact"];//site map :P
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
app.controller("proCtlr", function($scope, $location, $http) {
	
	$scope.go = function (path) {
        $location.path(path);
    }
    	$http({
		method: "GET", url: 'js/controllers/Data/proData.js'
		}).success(function(data){
		$scope.proData = data;
		console.log($scope.proData);
	
	});

});
app.controller("personalCtlr", function($scope, $location, $http) {
	
	$scope.go = function (path) {
        $location.path(path);
    }
    	$http({
		method: "GET", url: 'js/controllers/Data/personalData.js'
		}).success(function(data){
		$scope.personalData = data;
		console.log($scope.proData);
	
	});

});
app.controller("githubCtlr", function($scope, $location, $http) {
	
	$scope.go = function (path) {
        $location.path(path);
    }




  var url = "https://api.github.com/users/arttay/repos?callback=foo";

$http.jsonp(url);



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

});//end directive

app.directive('socidal',function($location){
	return {
	 	restrict: 'A',
	 	link: function(scope, element, attrs) {

	 		element.bind("mouseenter", function(){
	 			//scope.$apply(attrs);
	 			console.log(attrs.src);
	 		})	
	 	},
	 	template: ""//no tempalte
 }

});//end directive

function foo(data, $scope) {
  var test = data.data;
    console.log(test);
    //console.log($scope);)

  var el = document.getElementById('ctl');
    var scope = angular.element(el).scope();
    scope.$apply(function() {

        scope.data = data;
        scope.url = data.data[0].svn_url;
        scope.name = data.data[0].name;
        scope.lang = data.data[0].language;
        scope.descrip = data.data[0].description;
        var gitItem = [];
        gitItem.url = scope.url;

        for(item in data.data) {
        	 gitItem.url = scope.url;
        }
    });
}//end foo


