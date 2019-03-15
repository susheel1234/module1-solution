(function(){
  'use strict';
  angular.module("dishChecker", []).controller("dishCheckerController",dishCheckerController);
  dishCheckerController.$inject=["$scope"];

  function dishCheckerController($scope){
    $scope.message="";
    $scope.checkIfTooMuch=function(){
      var returnMessage=logicFuntion($scope.name);
      $scope.message=returnMessage;
    }
  }

  function logicFuntion(item){
    var arrayItem=item.split(",");
    return arrayItem[0];
  }
})();
