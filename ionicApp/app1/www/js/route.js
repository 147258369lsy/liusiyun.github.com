angular.module('route', [
    'firstPage.route',
    'guidePage.route',
    'homePage.route'
])
    .config(function ($stateProvider, $urlRouterProvider,$windowProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js

     var w = $windowProvider.$get();
     console.log(w.localStorage);

        $stateProvider

        // setup an abstract state for the tabs directive
        /*
          uiroute 是对angualr-route的封装
          .state是对.when的封装
           */
            .state('tab', { //tab是容器的名字
                url: '/tab', //容器页面的 hash 值
                abstract: true, //将下面templateUrl设置成容器
                templateUrl: 'templates/tabs.html' //指定模板地址
            });

            // Each tab has its own nav history stack:

            // .state('tab.dash', {//路由模块的名字, 这个名字很关键 '.'前面的必须是容器的名字, 在这里一定是tab;
            //     url: '/dash', //url路径,当容器匹配上之后, 就会在这个路径前面自动拼接上tab, 因为模块的名字是 tab.dash
            //     views: { //设置实际页面的参数
            //         'tab-dash': { //实际页面的名字 和tabs.html中,每一个tab item中的ion-nav-view的name属性一一对应
            //             templateUrl: 'templates/tab-dash.html',
            //             controller: 'DashCtrl' //实际上就是相当于将DashCtrl的代码复制到templates/tab-dash.html中
            //         }
            //     }
            // })
            //
            // .state('tab.chats', {
            //     url: '/chats',
            //     views: {
            //         'tab-chats': {
            //             templateUrl: 'templates/tab-chats.html',
            //             controller: 'ChatsCtrl'
            //         }
            //     }
            // })
            // .state('tab.chat-detail', {
            //     url: '/chats/:chatId',
            //     views: {
            //         'tab-chats': {
            //             templateUrl: 'templates/chat-detail.html',
            //             controller: 'ChatDetailCtrl'
            //         }
            //     }
            // })
            //
            // .state('tab.account', {
            //     url: '/account',
            //     views: {
            //         'tab-account': {
            //             templateUrl: 'templates/tab-account.html',
            //             controller: 'AccountCtrl'
            //         }
            //     }
            // });
        //
        //
        // if none of the above states are matched, use this as the fallback
        // 其他情况做的匹配
      if(w.localStorage['web1707']!=2){
        $urlRouterProvider.otherwise('/guidePage');
      }else {
        $urlRouterProvider.otherwise('tab/home');
      }


    });
