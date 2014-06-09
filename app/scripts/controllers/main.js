'use strict';

angular.module('herokuTestApp')
  .controller('MainCtrl', function ($scope, $http) {
      $http.get('http://jj-heroku-test.herokuapp.com/api/awesomeThings').success(function (awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
  });
