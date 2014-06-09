'use strict';

angular.module('herokuTestApp')
  .factory('Session', function ($resource) {
      return $resource('http://jj-heroku-test.herokuapp.com/api/session/');
  });
