/**
 * Created by stepinfo on 07/03/16.
 */

var app = angular.module('myapp',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/',{templateUrl: '../../partials/home.html',
            controller: 'PostsCtrl'})
        .when('/comments/:id',{templateUrl: '../../partials/comments.html',
            controller: 'productController'})
        .otherwise({redirectTo : '/'});
});

app.factory('PostFactory',function (){
        var factory = {
            posts : [
                {
                    "stock": [
                        {
                            "stockCode": "Nocha",
                            "stockId": "1",
                            "stockName": "GENM bcp blabla "
                        },
                        {
                            "stockCode": "Idetica",
                            "stockId": "4",
                            "stockName": "quelques fonctions d"
                        },
                        {
                            "stockCode": "Ali",
                            "stockId": "5",
                            "stockName": "web et du graphisme."
                        },
                        {
                            "stockCode": "Ebra",
                            "stockId": "6",
                            "stockName": "Mais dans le cadre "
                        }
                    ]
                }
            ],
            getPosts : function(){
                return factory.posts;
            },
            getPost : function(id){
                return factory.posts[0];
            }

        }
    return factory;
});


//app.controller('PostsCtrl',function($scope, PostFactory){
//
//        $scope.listPosts = PostFactory.getPosts();
//
//});

app.controller('PostsCtrl',function($scope, $http){
    $http.get('http://localhost:8080/rest/emp/allStock').success(function(response){
        $scope.listPosts = response.stock;
    });
});

//app.controller('productController',function($scope, PostFactory){
//
//        $scope.listProducts = PostFactory.getPost().stockName;
//
//});

app.controller('productController',function($scope, $http){
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
