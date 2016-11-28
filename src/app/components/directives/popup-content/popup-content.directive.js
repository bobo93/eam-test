(function() {
    'use strict';
    angular
        .module('praca')
        .directive('popupContent', Directive);

    /** @ngInject */
    function Directive() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/directives/popup-content/popup-content.html',
            scope: {
                title: '@'
            },
            controller: Controller,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function Controller() {
            var vm = this;

        }
    }
})();
