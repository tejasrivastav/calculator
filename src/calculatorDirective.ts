module webapp.directives {
  export class calculator{
    constructor(){
      return {
        templateUrl: "./public/partials/calculator.html",
        controller: ["$scope",function($scope){
          var defaultValues = function (){
            $scope.equation = "";
            $scope.computedValue = "";
          }
          defaultValues();

          $scope.valueClicked = function(value){
            if(value === 'c'){
              defaultValues();
            } else {
              setValues(value)
            }
          }

          var setValues = function(value){
            $scope.equation += value;
            $scope.computedValue = eval($scope.equation);
          }
        }]
      }
    }
  }
}