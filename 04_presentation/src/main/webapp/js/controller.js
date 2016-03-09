/**
 * Created by stepinfo on 07/03/16.
 */

var app = angular.module('myapp',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/',{templateUrl: '../../partials/home.html',
            controller: 'PostsCtrl'})
        .when('/comments/:id',{templateUrl: '../../partials/comments.html',
            controller: 'CommentsCtrl'})
        .otherwise({redirectTo : '/'});
});

app.factory('PostFactory',function (){
        var factory = {
            posts : [
                {
                    "stockCode": "Nocha",
                    "stockId": "1",
                    "stockName": "GENM bcp blabla<br>GENM bcp blabla<br>GENM bcp blabla",
                    "comments": [
                        {
                            "stockCode": "Nocha",
                            "stockId": "1",
                            "stockName": "GENM bcp blabla ",
                            "comments": "aze"
                        },
                        {
                            "stockCode": "Idetica",
                            "stockId": "4",
                            "stockName": "quelques fonctions d"
                        }
                    ]
                },
                {
                    "stockCode": "Idetica",
                    "stockId": "4",
                    "stockName": "quelques fonctions d",
                    "comments": [
                        {
                            "stockCode": "Nocha",
                            "stockId": "1",
                            "stockName": "GENM bcp blabla ",
                            "comments": "aze"
                        }
                    ]
                },
                {
                    "stockCode": "Ali",
                    "stockId": "5",
                    "stockName": "web et du graphisme.",
                    "comments": [
                        {
                            "stockCode": "Nocha",
                            "stockId": "1",
                            "stockName": "GENM bcp blabla ",
                            "comments": "aze"
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
                        }
                    ]
                },
                {
                    "stockCode": "Ebra",
                    "stockId": "6",
                    "stockName": "Mais dans le cadre ",
                    "comments": [
                        {
                            "stockCode": "Nocha",
                            "stockId": "1",
                            "stockName": "GENM bcp blabla ",
                            "comments": "aze"
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
            ]
                 ,
            getPosts : function(){
                return factory.posts;
            },
            getPost : function(id){
                var post = {};
                angular.forEach(factory.posts,function(value, key){
                    if(value.stockId == id){
                        post = value
                    }
                });
                return post;
            }

        }
    return factory;
});


app.controller('PostsCtrl',function($scope, PostFactory){

        $scope.listPosts = PostFactory.getPosts();

});

//app.controller('PostsCtrl',function($scope, $http){
//    $http.get('http://localhost:8080/rest/emp/allStock').success(function(response){
//        $scope.listPosts = response.stock;
//    });
//});

app.controller('CommentsCtrl',function($scope, PostFactory, $routeParams){
        var post = PostFactory.getPost($routeParams.id);
        $scope.title = post.stockCode;
        $scope.listComments = post.comments;

});


//app.controller('CommentsCtrl',function($scope, $http){
//   $http.get('http://localhost:8080/rest/emp/allStock').success(function(response){
//       $scope.listComments = response.stock;
//   });
//});



