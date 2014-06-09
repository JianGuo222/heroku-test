'use strict';

angular.module('herokuTestApp')
  .factory('User', function ($resource) {
      return $resource('http://jj-heroku-test.herokuapp.com/api/users/:id', {
      id: '@id'
    }, { //parameters default
      update: {
        method: 'PUT',
        params: {}
      },
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      }
	  });
  });
