/**
 * Created by stepinfo on 07/03/16.
 */

var services = angular.module('ngdemo.services', ['ngResource']);

services.factory('UserFactory', function ($resource) {
    return $resource('/rest/emp/allStock', {}, {
        query: {
            method: 'GET',
            params: {},
            isArray: false
        }
    })
});

