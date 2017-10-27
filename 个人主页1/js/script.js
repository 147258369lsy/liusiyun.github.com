function initNavbar() {

    var SCROLL_SPEED = 750;
    var SCROLL_OFFSET = 50;
    var EASING = "swing";

    var $navTop = $("#navbar-top");
    var $navBar = $(".navbar");
    var $navExternal = $(".nav-external");

    $navBar.onePageNav({
        currentClass: "active",
        changeHash: false,
        scrollSpeed: SCROLL_SPEED,
        scrollOffset: SCROLL_OFFSET,
        scrollThreshold: 0.5,
        filter: ":not(.external)",
        easing: EASING
    });

    $(window).on("scroll", function(event) {

        var scroll = $(window).scrollTop();

        if (scroll >= $("#home").height()) {
            $navBar.addClass("fixed");
        } else {
            $navBar.removeClass("fixed");
        }
    }).trigger("scroll");

    $navExternal.click(function(e) {
        e.preventDefault();

        $("html, body").stop().animate({
            scrollTop: $($(this).attr("href")).offset().top - SCROLL_OFFSET
        }, SCROLL_SPEED, EASING);
    });
}

function initPortfolio() {

    var $portfolio = $("#portfolio");
    var $items = $portfolio.find(".items");
    var $filters = $portfolio.find(".filters li a");

    $items.imagesLoaded(function() {

        $items.isotope({
            itemSelector: ".item",
            layoutMode: "fitRows",
            transitionDuration: "0.7s"
        });
    });

    $filters.click(function() {

        var $el = $(this);

        $filters.removeClass("active");

        $el.addClass("active");

        var selector = $el.attr("data-filter");

        $items.isotope({
            filter: selector
        });

        return false;
    });

    $items.find(".item a").venobox({
        border: "2rem",
        closeBackground: "transparent"
    });
}

function initAnimations() {
    var $animated = $(".animated");

    $animated.appear({
        force_process: true
    });

    $animated.on("appear", function() {

        var $el = $(this);

        var animation = $el.data("animation");
        var delay = $el.data("delay");

        // Mofile fix
        if ($(window).width() < 768) {
            delay = 0;
        }

        if (delay) {

            setTimeout(function() {
                $el.addClass(animation);
                $el.addClass("showing");
                $el.removeClass("hiding");
            }, delay);
        } else {

            $el.addClass(animation);
            $el.addClass("showing");
            $el.removeClass("hiding");
        }
    });

    // Service hover animation
    $(".service").hover(function() {
        $("i", this).addClass("animated tada");
    }, function() {
        $("i", this).removeClass("animated tada");
    });
    
}


$(document).ready(function() {

    initNavbar();
    initPortfolio();
    initAnimations();
});

$(window).on("load", function() {

    var $loader = $(".loader");

    $loader.find(".loading").fadeOut();
    $loader.fadeOut("slow");
});

//删除点击a 时给其添加的类名

// $('#deleteClass2').click(function(){
//     this.removeClass('vbox-item');
// });
// $('#deleteClass1').click(function(){
//     this.removeClass('vbox-item');
// });

// var aARR = $('#portfolio .items li a');
// console.log(aARR);
//用each遍历每个a元素,并添加点击事件删除类名
 $('#portfolio .items li a').each(function(index,element){
    // console.log(element);
    // console.log(index);
    $(element).click(function(){
        // console.log(this);
        this.removeClass(vbox-item);
    });
});

//返回顶部
function scroll(){
           var x;
           var y;

           if(window.pageYOffset ||window.pageYOffset){
             //高版本浏览器
             y = window.pageYOffset;
             x = window.pageXOffset;
           }else if(document.compatMode == 'CSS1Compat'){
             //旧版本IE浏览器
             y = document.documentElement.scrollTop;
             x = document.documentElement.scrollLeft;
           }else{
             //怪异模式浏览器
             y = document.body.scrollTop;
             x = document.body.scrollLeft;
           }
           //返回值,用json格式的数据作为返回值,在一个json中可以包含多个数据
           return {
            left : x,
            top  : y
           };
        }
        window.onload = function(){
            var backTop = document.getElementById('backTop');
            var target = 0;
            var current = 0;
            var timer;
            backTop.onclick = function(){
                //当我要开始一个新的定时器时，一般会先来停止前一次的定时器
                clearInterval(timer);
                current =scroll().top;
                timer = setInterval(function(){
                   current = current + (target - current)/50;
                   //scrollTo()函数是将页面滚到某一个位置,有两个参数,分别是x轴方向和y轴方向滚动的位置
                   window.scrollTo(0, current);
                   console.log(current);
                   if(current - target <= 0.1){
                    clearInterval(timer);
                    backTop.style.display = 'none';
                   }
                },30);
            }
        }

//名字字体
    
$(".superShadow").each(function(index, element){
  var animation = TweenMax.to(this, 0.2, {
    className: '+= superShadow',
    marginTop: '-10px',
    marginBottom: '10px',
    ease: Power1.easeIn,
    paused:true
  });
  element.animation = animation;
})


$('.superShadow').hover(function(){
 this.animation.play()
}, function(){
 this.animation.reverse();
})
