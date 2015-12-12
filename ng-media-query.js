var ngMediaQuery = angular.module('ngMediaQuery', []);

ngMediaQuery.value('media', {
    'xs': [-1, 767],
    'sm': [768, 991],
    'md': [992, 1199],
    'lg': [1200, -1]
});

ngMediaQuery.factory('NgMediaQuery', ['$rootScope', '$window', '$log', 'media', '$q',
    function ($rootScope, $window, $log, media, $q) {

        var ngMediaQuery = {};
        var windowWidth = $window.innerWidth;

        var setMedia = function () {
            angular.forEach(media, function (value, key) {
                if ((windowWidth > value[0] || value[0] < 0) && (windowWidth < value[1] || value[1] < 0)) {
                    $rootScope.$broadcast('MediaChange', key);
                }
            });
        };
        setMedia();

        ngMediaQuery.getMedia = function () {
            var defer = $q.defer();
            angular.forEach(media, function (value, key) {
                if ((windowWidth > value[0] || value[0] < 0) && (windowWidth < value[1] || value[1] < 0)) {
                    defer.resolve(key);
                }
            });
            return defer.promise;
        };

        angular.element($window).bind('resize', function () {
            windowWidth = $window.innerWidth;
            setMedia();
        });

        angular.element($window).bind('orientationchange', function () {
            windowWidth = $window.innerWidth;
            setMedia();
        });

        return ngMediaQuery;

    }]);