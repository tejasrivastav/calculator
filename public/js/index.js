var webapp;
(function (webapp) {
    var directives;
    (function (directives) {
        var calculator = (function () {
            function calculator() {
                return {
                    templateUrl: "./public/partials/calculator.html",
                    controller: ["$scope", function ($scope) {
                            var defaultValues = function () {
                                $scope.equation = "";
                                $scope.computedValue = "";
                            };
                            defaultValues();
                            $scope.valueClicked = function (value) {
                                if (value === 'c') {
                                    defaultValues();
                                }
                                else {
                                    setValues(value);
                                }
                            };
                            var setValues = function (value) {
                                $scope.equation += value;
                                $scope.computedValue = eval($scope.equation);
                            };
                        }]
                };
            }
            return calculator;
        })();
        directives.calculator = calculator;
    })(directives = webapp.directives || (webapp.directives = {}));
})(webapp || (webapp = {}));
/// <reference path="./typings/main.d.ts" />
/// <reference path="./calculatorDirective.ts" />
var webapp;
(function (webapp) {
    function bootstrap() {
        var app = angular.module("calculator", [
            'ngMaterial'
        ]);
        loadDirectives(app);
    }
    webapp.bootstrap = bootstrap;
    function loadDirectives(app) {
        app.directive("calculator", webapp.directives.calculator);
    }
    webapp.loadDirectives = loadDirectives;
})(webapp || (webapp = {}));
webapp.bootstrap();
