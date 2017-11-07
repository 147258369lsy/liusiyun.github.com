/**
 * Created by gj on 2016/10/12.
 */
angular.module('guidePage.route', ['guidePage.controller'])

  .config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
      // setup an abstract state for the tabs directive
      .state('guidePage', {
        url: '/guidePage',
        templateUrl: 'areas/guidePage/guidePage.html',
        controller:'GuidePageCtrl'
      })
  });


