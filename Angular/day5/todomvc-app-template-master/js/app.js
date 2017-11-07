(function (window, angular, _) {
	'use strict';

	// Your starting point. Enjoy the ride!
	var app = angular.module('app', ['ngRoute']);

		app.config(['$routeProvider', function($routeProvider){
			$routeProvider
				.when('/:url?', {
					templateUrl: 'template',
					controller: 'AppCtrl'
				})
				.otherwise({
					redirectTo: '/'
				})
		}]);
	app.controller('AppCtrl', ['$scope', '$window','$location','$routeParams',function ($scope, $window,$location,$routeParams) {


       //本地存储
		var storage = $window.localStorage;
		$scope.todos = storage['myTodos'] ? JSON.parse(storage['myTodos']) : [
			{
				id: 0,
				text: 'Taste Javascript',
				isCompleted: true
			},
			{
				id: 1,
				text: 'dota',
				isCompleted: false
			}
		];
        $scope.toggle = function () {
			localSave();
		}
		var localSave = function () {
			storage['myTodos'] = JSON.stringify($scope.todos);
		}
		// localSave();
		// console.log(JSON.parse(storage['myTodos']));


		// var num = 2;
		function getId() {
			var id = new Date().getTime();
			// var id = Math.random()
			// for(var item of $scope.todos){
			// 	if (id === item.id){
			// 		getId()
			// 	}
			// }
			return id;
		}
		//增加功能
		$scope.addTodoItem = function (e) {

			if (e.code === 'Enter' && $scope.text !== '' && $scope.text !== undefined) {
				console.log("dota");
				console.log($scope.text);
				var item = {};
				item.text = $scope.text;
				item.id = getId();
				item.isCompleted = false;
				console.log(item);
				$scope.todos.push(item);
				$scope.text = '';

				//id 最好是升序的, 并且唯一, 最好是不受增减影响
				//次点的要求, 这个id是唯一
			}
			localSave();
		}
      //删除功能
		$scope.remove = function (id) {
			for (var index = 0; index < $scope.todos.length; index++) {
				if ($scope.todos[index].id === id) {

					$scope.todos.splice(index, 1);
				}
			}
			localSave();
		};
		//编辑修改
		$scope.currentId = -1;
		$scope.editing = function (id) {
			console.log("开始编辑" + id);
			console.log($scope.text);
			$scope.currentId = id;
		};
		$scope.save = function () {
			$scope.currentId = -1;
			localSave();

		};

		//清除所有完成项
		$scope.clearCompleted = function () {
			var result = [];
			for (var i = 0; i < $scope.todos.length; i++) {
				// if ($scope.todos[i].isCompleted === true) {
				// 	$scope.todos.splice(i, 1);
				// }
				if ($scope.todos[i].isCompleted === false) {
					result.push($scope.todos[i]);
				}
			}
			$scope.todos = result;
			localSave();

		};

        //全选和取反
		var now = true;
		$scope.toggleAll = function () {
			// console.log("执行");
			if($scope.getUnfinishNum() === 0){
				now = false;
			}
			for (var item of $scope.todos) {
				item.isCompleted = now;
			}
			now = !now;
			localSave();
		};

      //左边获取leftitem数
		$scope.getUnfinishNum = function () {
			var i = 0;
			for (var item of $scope.todos) {
				if (item.isCompleted === false) {
					i++;
				}
			}
			return i;
		}
		// $scope.leftItemsNum = getUnfinishNum();


		//实现All Active和Completed的功能(方法一)
        //
		// $scope.$location = $location;
        // // console.log($location);
		// $scope.$watch('$location.$$hash',function (newVal,oldVal) {
		// 	switch (newVal){
		// 		case '/active':
		// 			$scope.selector = {isCompleted:false};
		// 			break;
		// 		case '/completed':
		// 			$scope.selector = {isCompleted:true};
		// 			break;
		// 		default:
		// 			$scope.selector = {};
		// 	}
		// })

		//方法二:angular路由
		$scope.selector = {};
		var url = $routeParams.url;
		console.log($routeParams);

		switch(url){
			case '/':
				$scope.selector = {};
				break;
			case 'active':
				$scope.selector = { isCompleted : false};
				break;
			case 'completed':
				$scope.selector = { isCompleted : true};
				break;
			default:
				$scope.selector = {};
		}

	}])
})(window, angular, _);
