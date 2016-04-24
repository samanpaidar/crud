var studensP = angular.module('studensP', []);
studensP.controller('student', ['$scope', '$http', function($scope, $http) {
    
    console.log("hej hej");
    var refresh = function () {
	    $http.get('/studentlist').success(function (response) {
	    	console.log('got data');
	    	$scope.studentlist = response;
	    	$scope.student ="";
	    });
    };
    refresh();

    $scope.addStudent = function () {
    	console.log($scope.student);
    	$http.post('/studentlist',$scope.student).success(function (response) {
    		console.log(response);
    		refresh();
    	});
    };
    $scope.remove = function (id) {
    	console.log(id);
    	$http.delete('/studentlist/'+ id).success(function (response) {
    		refresh();
    	});
    };
    
}]);
