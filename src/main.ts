/// <reference path="./typings/main.d.ts" />
/// <reference path="./calculatorDirective.ts" />

module webapp {
    export function bootstrap() {
        var app = angular.module("calculator",[
            'ngMaterial'
        ]);
        loadDirectives(app);
    }

    export function loadDirectives(app){
        app.directive("calculator",webapp.directives.calculator);
    }
}
webapp.bootstrap();