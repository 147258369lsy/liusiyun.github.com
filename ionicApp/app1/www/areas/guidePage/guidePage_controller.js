// 引导页的逻辑
angular.module('guidePage.controller', ['guidePage.service'])
  .controller('GuidePageCtrl', function($scope, GuidePageFactory,$state) {

    //引导页slide初始化
    var guideSlide = new Swiper('#guideSlide', {
      pagination: '.swiper-pagination',
      observer:true,//修改swiper自己或子元素时，自动初始化swiper
      observeParents:true,//修改swiper的父元素时，自动初始化swiper
      onSlideChangeEnd: function(swiper){
        var index = guideSlide.activeIndex;
        console.log("activeIndex"+index);
        if(index==1 || index==2){
          var item = $("#tips-"+index);
          if(item.hasClass("hidden")){
            item.removeClass("hidden");
            item.addClass("guide-show");
          }
        }
      }
    });
    //跳转到首页面
    //document.getElementById("close").addEventListener("click",function(event){
    //
    //  $state.go('tab.home');
    //},false);

    //跳转到首页面
    $scope.func_goHome=function(){
      $state.go('tab.home');
    }

  })
