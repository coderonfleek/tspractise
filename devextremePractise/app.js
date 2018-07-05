let app = angular.module("MyApp", ["dx"]);

app.controller("DevExtremeTestCtrl", ["$scope", DevExtremeTestCtrl]);

function DevExtremeTestCtrl($scope) {
  //Reference to widget instance
  $scope.chatInstance = {};
  //Widget Options
  $scope.ChartOptions = {
    dataSource: [
      { fruit: "Oranges", total: 10 },
      { fruit: "Apples", total: 15 },
      { fruit: "Bananas", total: 9 }
    ],
    series: { argumentField: "fruit", valueField: "total" },
    onInitialized: function(e) {
      $scope.chatInstance = e.component;
      console.log($scope.chatInstance);
    }
  };

  /*Detecting changes*/
  $scope.checkBoxOptions = {
    bindingOptions: {
      value: "checkBoxValue" //Value of the widget, 'checkBoxValue' will automatically become a scope value
    }
  };

  //Dynamically set the value of the cheque box using the binding reference
  $scope.checkBoxValue = true;
} //DevExtremeTestCtrl
