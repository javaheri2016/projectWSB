(function () {

    "use strict";

    const app = angular.module("app");
    
    app.controller("EmpCtrl", function($scope, EmpService) {     
        
            $scope.getItems = function () {
            return EmpService.getItems();
        };
    });
})();