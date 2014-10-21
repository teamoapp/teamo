'use strict';

angular.module('teamoApp')
  .directive('drmAutofillFix', function ($timeout) {
    return {
	  require: '?ngModel',
      link: function (scope, elem, attrs, ngModel) {
      	var origVal = elem.val();
      	$timeout(function () {
            var newVal = elem.val();
            if (ngModel.$pristine && origVal !== newVal) {
                ngModel.$setViewValue(newVal);
                elem.addClass('has-visited');
                ngModel.hasVisited = true;
            }
        }, 500);
      }
    };
  });