/* global angular */

var app = angular.module('rateSiteApp.authentication');
app.controller('SignupCtrl', function($scope) {
   'use strict';

   /////////////////////////
   /// BINDINGS
   /////////////////////////

   $scope.googleKey = '6LftHiATAAAAAOtpf2LeVuK6xyXevGHSYqk-DYme';
   $scope.form = {};
   $scope.errMsg = '';

   /////////////////////////
   /// EVENTS
   /////////////////////////

   $scope.signup = function() {
      var params = $scope.form;
      console.log(params);
   
      $scope.errMsg = '';
      if (params.password !== params.passwordConfirmation) {
         $scope.errMsg = "Passwords don't match";
      }
      
      if (params.password !== params.passwordConfirmation) {
         $scope.errMsg += '\nConfirm that you are a human being';
      }
   };

});
