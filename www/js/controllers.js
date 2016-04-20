angular.module('starter.controllers', [])

    .controller('AppCtrl', function ($rootScope, $scope) {
        //$scope.$on('$ionicView.enter', function (e) {
            //console.info(e);
        //});
    })

    .controller('DashboardCtrl', function ($rootScope, $scope, Boiler, Alarm, Alerts) {
        $scope.alertes = Alerts;
        $scope.boiler  = Boiler;
        $scope.alarm   = Alarm;
    })

    .controller('BoilerCtrl', function ($rootScope, $scope, Boiler, Config, CONFIG) {
        $scope.boiler = Boiler;
        $scope.config = Config;
        $scope.toggleJourVal = 'jour';

        $scope.toggleJour = function (value) {
            $scope.toggleJourVal = value;
        };

        $scope.setConfigBoiler = function () {
            if ($scope.config[$scope.toggleJourVal].temp.min < 0) {
                $scope.config[$scope.toggleJourVal].temp.min = 0;
            }
            if ($scope.config[$scope.toggleJourVal].temp.min > $scope.config[$scope.toggleJourVal].temp.max) {
                $scope.config[$scope.toggleJourVal].temp.min = $scope.config[$scope.toggleJourVal].temp.max;
            }
            if ($scope.config[$scope.toggleJourVal].temp.max < $scope.config[$scope.toggleJourVal].temp.min) {
                $scope.config[$scope.toggleJourVal].temp.max = $scope.config[$scope.toggleJourVal].temp.min;
            }

            CONFIG.setConfig($scope.config);
        };
    })

    .controller('AlarmCtrl', function ($rootScope, $scope, Alarm) {
        $scope.alarms = Alarm;
    })

    .controller('ConfigCtrl', function ($rootScope, $scope, Config, CONFIG) {
        $scope.config = Config;
        $scope.config.horaires.jour.debut   = new Date($scope.config.horaires.jour.debut);
        $scope.config.horaires.jour.fin     = new Date($scope.config.horaires.jour.fin);
        $scope.config.horaires.nuit.debut   = new Date($scope.config.horaires.nuit.debut);
        $scope.config.horaires.nuit.fin     = new Date($scope.config.horaires.nuit.fin);

        $scope.setConfigSchedule = function (granDay, granStart) {
            if ($scope.config.horaires.jour.debut > $scope.config.horaires.jour.fin) {
                $scope.config.horaires.jour.debut = $scope.config.horaires.jour.fin
            }

            if ($scope.config.horaires.nuit.debut < $scope.config.horaires.nuit.fin) {
                $scope.config.horaires.nuit.debut = $scope.config.horaires.nuit.fin
            }

            if (granDay === 'jour') {
                if (granStart === 'debut') {
                    $scope.config.horaires.nuit.fin = $scope.config.horaires.jour.debut;
                } else {
                    $scope.config.horaires.nuit.debut = $scope.config.horaires.jour.fin;
                }
            } else {
                if (granStart === 'debut') {
                    $scope.config.horaires.jour.fin = $scope.config.horaires.nuit.debut
                } else {
                    $scope.config.horaires.jour.debut = $scope.config.horaires.nuit.fin;
                }
            }

            CONFIG.setConfig($scope.config);
        };
    })
;
