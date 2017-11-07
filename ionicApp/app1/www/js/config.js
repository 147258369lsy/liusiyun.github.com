angular.module('config', ['global'])
    .config(function ($ionicConfigProvider, GlobalVariable) {
        $ionicConfigProvider.platform.ios.tabs.position('bottom');
        $ionicConfigProvider.platform.android.tabs.position('bottom');
        console.log(GlobalVariable)
    });
