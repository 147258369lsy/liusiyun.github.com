angular.module('homePage.route', ['homePage.controller'])
  .config(function ($stateProvider) {
    $stateProvider
      .state('tab.home', {
        url: '/home',
        views:{
          'tab-home': {
            templateUrl: 'areas/homePage/homePage.html',
            controller: 'HomePageCtrl'
          }
        }
      })
  });
