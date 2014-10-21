'use strict';

angular.module('teamoApp')
  .factory('userRepo', function ($resource) {
    return $resource('/api/user');
  });
