'use strict';

describe('Directive: drmAutofillFix', function () {

  // load the directive's module
  beforeEach(module('teamoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    // element = angular.element('<drm-autofill-fix></drm-autofill-fix>');
    // element = $compile(element)(scope);
    // expect(element.text()).toBe('this is the drmAutofillFix directive');
  }));
});