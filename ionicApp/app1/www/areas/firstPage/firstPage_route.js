angular.module('firstPage.route', ['firstPage.controller'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('firstPage', {
                url: '/firstPage',
                templateUrl: 'areas/firstPage/firstPage.html',
                controller: 'FirstPageCtrl'
            })
    })
