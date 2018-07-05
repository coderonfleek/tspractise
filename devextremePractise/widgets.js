let app = angular.module("MyApp", ["dx"]);

app.controller("WidgetsCtrl", ["$scope", WidgetsCtrl]);

function WidgetsCtrl($scope) {
  $scope.accordionData = [
    {
      firstName: "John",
      lastName: "Smith",
      birthDate: "1986/03/14",
      position: "Network Administrator"
    },
    {
      firstName: "Samantha",
      lastName: "Jones",
      birthDate: "1972/11/13",
      position: "Technical Writer"
    }
  ];
} //WidgetsCtrl
