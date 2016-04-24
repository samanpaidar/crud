var studensP = angular.module('studensP', []);
studensP.controller('student', ['$scope', '$http', function($scope, $http) {
    
    console.log("hej hej");
    $http.get('/studentlist').success(function (response) {
    	console.log('got data');
    	$scope.studentlist = response;
    });
    
}]);
