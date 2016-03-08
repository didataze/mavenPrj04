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

app.factory('PostFactory',function ($http, $q, $timeout){
        var factory = {
            posts : false
                 ,
            getPosts : function(){
                var deferred = $q.defer();
                $http.get('../../js/posts.json')
                    .success(function(data ,status ){
                        factory.posts =data;
                        $timeout(function(){
                            deferred.resolve(factory.posts);
                        },2000)
                    }).error(function(data,status ){
                        deferred.reject('impossible de recuperer les articles')
                })

                return deferred.promise;
                //return factory.posts;
            },
            getPost : function(id){
                var deferred = $q.defer();
                var post = {};
                var posts= factory.getPosts().then(function(posts){
                    angular.forEach(factory.posts,function(value, key){
                        if(value.stockId == id){
                            post = value
                        }
                    });
                    deferred.resolve(post);
                },function(msg){
                    deferred.reject(msg);
                })

                return deferred.promise;
                //return post;
            }

        }
    return factory;
});


    app.controller('PostsCtrl',function($scope, PostFactory){
            $scope.loading = true;
            $scope.listPosts = PostFactory.getPosts().then(function(posts){
                $scope.loading = false;
                $scope.posts = posts;
            },function(msg){
                alert(msg);
            });

    });

//app.controller('PostsCtrl',function($scope, $http){
//    $http.get('http://localhost:8080/rest/emp/allStock').success(function(response){
//        $scope.listPosts = response.stock;
//    });
//});

app.controller('CommentsCtrl',function($scope, PostFactory, $routeParams){
    $scope.loading = true;
    var post = PostFactory.getPost($routeParams.id).then(function(posts){
        $scope.title = post.stockCode;
        $scope.listComments = post.comments;
    }, function(msg){
        alert(msg);
    });
        

});


//app.controller('CommentsCtrl',function($scope, $http){
//   $http.get('http://localhost:8080/rest/emp/allStock').success(function(response){
//       $scope.listComments = response.stock;
//   });
//});



