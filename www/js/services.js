angular.module('starter.services', [])
    .service('REST', function ($http, $q) {
        var url = 'http://sensor.jeremyfroment.fr'; // PROD
        //var url = 'http://localhost:3000'; // DEV

        return {
            getBoiler: function () {
                var defered = $q.defer();

                $http.get(url + '/boiler')
                    .then(function (data) {
                        defered.resolve(data.data);
                    }, function (error) {
                        defered.reject(error);
                    });

                return defered.promise;
            },
            getAlarm: function () {
                var defered = $q.defer();

                $http.get(url + '/alarm')
                    .then(function (data) {
                        defered.resolve(data.data);
                    }, function (error) {
                        defered.reject(error);
                    });

                return defered.promise;
            },
            getAlerts: function () {
                var defered = $q.defer();

                $http.get(url + '/alert')
                    .then(function (data) {
                        defered.resolve(data.data);
                    }, function (error) {
                        defered.reject(error);
                    });

                return defered.promise;
            }
        }
    })
    .service('CONFIG', function ($window) {
        if ($window.localStorage.getItem('config') === null) {
            $window.localStorage.setItem('config', JSON.stringify({
                jour: {
                    temp: {
                        min: 10,
                        max: 30
                    }
                },
                nuit: {
                    temp: {
                        min: 15,
                        max: 40
                    }
                },
                horaires: {
                    jour: {
                        debut: new Date(1970, 0, 1, 6, 0, 0),
                        fin: new Date(1970, 0, 1, 20, 0, 0)
                    },
                    nuit: {
                        debut: new Date(1970, 0, 1, 20, 0, 0),
                        fin: new Date(1970, 0, 1, 6, 0, 0)
                    }
                }
            }));
        }

        return {
            getConfig: function () {
                return JSON.parse($window.localStorage.getItem('config'));
            },
            setConfig: function (config) {
                $window.localStorage.setItem('config', JSON.stringify(config));
            }
        }
    });