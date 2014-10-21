var Services = angular.module('teamo.services', ['ngResource']);

Services.factory('ApiaryUser', function($resource, $q) {
    'use strict';
    var Request = $resource('http://private-10ef2-teamo.apiary-mock.com/user', {}, {
        create: {method:'POST'},
        update: {method: 'PATCH'},
        delete: {method:'DELETE'}
    });
    Request.blank = function() {
        return {
            'username':null,
            'name':null,
            'email':null
        };
    };
    this.copy = Request.blank();
    Request.backup = function(obj) {
        this.copy = angular.copy(obj);
    };
    Request.restore = function(obj) {
        obj.name = this.copy.name;
        return this.obj;
    };
    return Request;
});


Services.factory('ApiaryCompany', function($resource, $q) {
    'use strict';
    var Request = $resource('http://private-10ef2-teamo.apiary-mock.com/company/:id', {id:'@id'}, {
        create: {method:'POST'},
        update: {method: 'PATCH'},
        get:  {method:'GET', isArray:false},
        delete: {method:'DELETE'}
    });
    Request.blank = function() {
        return {
            'name':null,
            'active':null
        };
    };
    this.copy = Request.blank();
    Request.backup = function(obj) {
        this.copy = angular.copy(obj);
    };
    Request.restore = function(obj) {
        obj.name = this.copy.name;
        return this.obj;
    };
    return Request;
});


Services.factory('ApiaryTeamCollection', function($resource, $q) {
    'use strict';
    var Request = $resource('http://private-10ef2-teamo.apiary-mock.com/company/:companyId/team', {}, {
        create: {url:'', method:'POST'}
    });
    Request.blank = function() {
        return {
            'name':null
        };
    };
    this.copy = Request.blank();
    Request.backup = function(obj) {
        this.copy = angular.copy(obj);
    };
    Request.restore = function(obj) {
        obj.name = this.copy.name;
        return this.obj;
    };
    return Request;
});


Services.factory('ApiaryTeam', function($resource, $q) {
    'use strict';
    var Request = $resource('http://private-10ef2-teamo.apiary-mock.com/team/:id', {id:'@id'}, {
        update: {method: 'PATCH'},
        delete: {method:'DELETE'}
    });
    Request.blank = function() {
        return {
            'name':null
        };
    };
    this.copy = Request.blank();
    Request.backup = function(obj) {
        this.copy = angular.copy(obj);
    };
    Request.restore = function(obj) {
        obj.name = this.copy.name;
        return this.obj;
    };
    return Request;
});




// team