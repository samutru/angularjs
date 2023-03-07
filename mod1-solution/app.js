(function () {
  "use strict";
  angular
    .module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);
  LunchCheckController.$inject = ["$scope"];

  function LunchCheckController($scope) {
    $scope.input = "";

    $scope.checkInput = function () {
      var input = $scope.input;
      var values = input.split(/,\s*/).filter((val) => val !== "");

      if ($scope.input === "") {
        console.log($scope.input);
        $scope.message = "Please enter data first";
      } else if (values.length > 3) {
        $scope.message = "Too much!";
      } else {
        $scope.message = "Enjoy!";
      }
    };
  }
})();
