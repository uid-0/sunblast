'use strict';

window.sunblast = angular.module("sunblast", []);

window.sunblast.run(function($rootScope) {
  $rootScope.window = {
    story: {state: {}}
  }
})
