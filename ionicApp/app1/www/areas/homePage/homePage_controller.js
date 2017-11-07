/**
 * Created by gj on 2016/10/12.
 */
angular.module('homePage.controller',[])
  .controller('HomePageCtrl',function($scope,$window){

    console.log("home 控制器");

    getHeaderSlideData();
    headerChangeColor();
    goTop();


      initHeaderSlide();
      initToutiaoSlide();


    // 头部滚动条数据
    function getHeaderSlideData(){
      $scope.headerSlideData=[
        {
          alt:"双十一预热主场会",
          src:"img/home/home-headerSlide-1.jpg"
        },
        {
          alt:"11月11天家电低价不停歇",
          src:"img/home/home-headerSlide-2.jpg"
        },
        {
          alt:"家具盛典 好货提前抢",
          src:"img/home/home-headerSlide-3.jpg"
        },
        {
          alt:"IT抢券节",
          src:"img/home/home-headerSlide-4.jpg"
        },
        {
          alt:"潮流数码 双11爽购攻略",
          src:"img/home/home-headerSlide-5.jpg"
        }
      ];
    }

    // 初始化头部滚动条
    function initHeaderSlide(){
      var headerSwiper = new Swiper('#headerSlider', {
        slidesPerView: 1, //前后各一张，看起来流畅
        paginationClickable: true,
        centeredSlides: true, //默认第一块居左，设置为true后居中
        autoplay: 2000,
        autoplayDisableOnInteraction: true, //交互的时候停止自动滚动
        loop: true,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        // 改变自动更新
        // 启动动态检查器，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
        //  默认false，不开启，可以使用update()方法更新
        // 参考 http://www.swiper.com.cn/api/Observer/2015/0308/218.html
        observer:true,

        //将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新。
        observeParents:true
      });
    }

    // 初始化京东头条滚动条
    function initToutiaoSlide(){
      var toutiaoSwiper = new Swiper('#toutiaoSlider', {
        direction:'vertical',
        autoplay: 2000,
        loop: true
      });
    }


    // 改变头部颜色
    function headerChangeColor(){
      var bg=$window.document.getElementById('home-content');
      var nowOpacity=0;
      bg.onscroll=function(event){
        if(this.scrollTop/250<.85){
          nowOpacity=this.scrollTop/250;
        }
        document.getElementById("headerBar-bg").style.opacity=nowOpacity;
      }
    }


    //回到顶部
    function goTop(){
      var bg=window.document.getElementById('home-content');
      var goTop = document.querySelector(".back_top");

      bg.addEventListener('scroll',function(){
        var top = bg.scrollTop;
        if(top>200){
          goTop.style.opacity = 1;
        }else{
          goTop.style.opacity = 0;
        }
      },false);

      goTop.onclick = function(){
        bg.scrollTop = 0;
      }
    };


  })
