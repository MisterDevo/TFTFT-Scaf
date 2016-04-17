angular.module('directives', [])
    .directive('welcome', function () {
        return {
            restrict: 'E',
            template: '<img src="../images/logo.png"/>',
            link: function(scope, element, attrs) {
            }
        }
    })
