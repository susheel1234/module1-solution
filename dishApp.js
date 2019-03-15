(function(){
  'use strict';
  angular.module("dishChecker", []).controller("dishCheckerController",dishCheckerController);
  dishCheckerController.$inject=["$scope"];

  function dishCheckerController($scope){
    $scope.message="";
    $scope.name="";
    $scope.checkIfTooMuch=function(){
      var returnMessage=logicFuntion($scope.name);
      $scope.message=returnMessage;
    }
  }

  function logicFuntion(item){
    var arrayItem=item.split(",");
    var filteredArray=arrayItem.filter(function(el){return el!=""});
    var arrayLength=filteredArray.length;
    if(arrayLength===0){
      return "Please enter data first";
    }
      else if (arrayLength<=3 && arrayLength>0) {
      return "Enjoy";
    }
    else if(arrayLength>3){
      return "Too much!";
    }
  }
})();
