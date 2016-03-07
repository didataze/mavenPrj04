/**
 * Created by stepinfo on 07/03/16.
 */

var myapp = angular.module('myapp',[]);

myapp.controller('productController',function($scope, $http){
   $http.get('http://localhost:8080/rest/emp/allStock').success(function(response){
       $scope.listProducts = response.stock;
   });
});



//var myapp = angular.module('ngdemo.controllers', []);
//myapp.controller('MyCtrl1', ['$scope', 'UserFactory', function ($scope, UserFactory) {
//    UserFactory.get({}, function (userFactory) {
//        $scope.firstname = userFactory.firstName;
//    })
//}]);
