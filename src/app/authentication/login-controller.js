/* global angular */


var app = angular.module('rateSiteApp.authentication');
app.controller('LoginCtrl', function($scope, backendUrl){
   'use strict';
   
   console.log('Hello Login');
   console.log(backendUrl);
});
