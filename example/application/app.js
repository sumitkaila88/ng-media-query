var app = angular.module('exampleMediaQuery', ['ngMediaQuery']);

app.value('media', {
    'xs': [-1, 767],
    'sm': [768, 991],
    'md': [992, 1199],
    'lg': [1200, -1]
});

app.controller('mediaQueryController', ['$scope', 'NgMediaQuery', '$log',
    function ($scope, NgMediaQuery, $log) {
        
        var getMedia = NgMediaQuery.getMedia();
        
        getMedia.then(function(data){
            $scope.media = data;
        }, function(status){});
        
        $scope.$on('MediaChange', function(event, media){
            $scope.media = media;
            $scope.$apply();
        });
    
    }]);