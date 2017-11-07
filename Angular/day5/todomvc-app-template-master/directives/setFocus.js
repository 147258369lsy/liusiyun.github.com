//双击聚焦,使光标在文本最后面
angular.module('app')
	.directive('setFocus',function ($timeout) {
		return{
			link:function (scope,ele,attr) {
				console.log(ele);
				console.log(attr);
				scope.$watch(attr.setFocus,function (newVal) {

					if(newVal){
						console.log(newVal);
						$timeout(function () {

							ele[0].focus();
						},0)
					}
				})
			}
		}
	})
