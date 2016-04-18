angular.module('starter.controllers', [])

    .controller('AppCtrl', function ($rootScope, $scope, $timeout) {

        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //$scope.$on('$ionicView.enter', function(e) {
        //});
    })

    .controller('DashboardCtrl', function ($rootScope, $scope) {
        $scope.alertes = [
            {
                date: '18/04/16',
                type: 'Chaudière',
                cause: 'Température trop élevée (50°C)'
            },
            {
                date: '18/04/16',
                type: 'Détecteur',
                cause: 'Il a bougé le bougre'
            }
        ];

        //$scope.alertes = [];
    })

    .controller('BoilerCtrl', function ($rootScope, $scope) {

    })

    .controller('AlarmCtrl', function ($rootScope, $scope) {
        $scope.alarms = [
            {
                date: '18/04/16',
                localisation: 'porte 1'
            },
            {
                date: '18/04/16',
                localisation: 'porte 2'
            },
            {
                date: '18/04/16',
                localisation: 'porte 3'
            }
        ];

        //$scope.alarms = [];
    })

    .controller('ConfigCtrl', function ($rootScope, $scope) {

    })
;
