$(function(){

    // 轮播图----------------------
    //更改函数:
    function changeImg(imgarr,index,classname){
      imgarr.each(function(){
      // $(this).fadeOut();
      $(this).removeClass(classname);
      });
      // $(imgarr[index]).fadeIn();
      $(imgarr[index]).addClass(classname);
    }
	 
    //主动切换
    var pinIndex = 0;
	var timer1 = setInterval(function(){
      pinIndex+=1;
      pinIndex=pinIndex>4?0:pinIndex;
      pinIndex=pinIndex<0?0:pinIndex;
      changeImg($('li.picLi'),pinIndex,'active');
      changeImg($('li.liRound'),pinIndex,'hot');
	},5000);
    //小圆点点击切换
    $('.liRound').each(function(index){
    	$(this).click(function(){
    	changeImg($('li.picLi'),index,'active');
        changeImg($('li.liRound'),index,'hot');
    	pinIndex=index;
    	});
    })
    
    //左右切换按钮
    $('div.prevNext').find('a.prev').click(function(){
    	pinIndex-=1;
    	pinIndex=pinIndex<0?4:pinIndex;
    	changeImg($('li.picLi'),pinIndex,'active');
        changeImg($('li.liRound'),pinIndex,'hot');
    });

    $('div.prevNext').find('a.next').click(function(){
    	pinIndex+=1;
    	pinIndex=pinIndex>4?0:pinIndex;
    	changeImg($('li.picLi'),pinIndex,'active');
        changeImg($('li.liRound'),pinIndex,'hot');
    })

   //--------------------------------
       // 点击返回顶部栏
    $("div.backTop").click(function() {
        var spanT = scroll().top;
        moveTo(spanT, 0);
    });
    // 获取当前屏幕位置函数
    function scroll() {
        var x;
        var y;
        if (window.pageYOffset || window.pageXOffset) {
            x = window.pageXOffset;
            y = window.pageYOffset;
        } else if (document.compatMode == "CSS1Compat") {
            x = document.documentElement.scrollLeft;
            y = document.documentElement.scrollTop;
        } else {
            x = document.body.scrollLeft;
            y = document.body.scrollTop;
        }
        return {
            left: x,
            top: y
        };
    }
    window.onscroll=function(){
    
     if(scroll().top>600){
        $('section#navRight').fadeIn();
     }else{
        $('section#navRight').fadeOut();
     }
    }
  
    // 上下移动屏幕函数 :当前值　／目标值
    var moveTimer;  
    function moveTo(current, target) {　　
        clearInterval(moveTimer);　
        moveTimer = setInterval(function() {
            if (current > target) {
                var now = current;
                current = current - (current - target) / 10;
                window.scrollTo(now, current);
                if (Math.abs(current - target) < 10) {
                    window.scrollTo(current, target);
                    clearInterval(moveTimer);
                }
            } else {
                var now = current;
                current = current + (target - current) / 10;
                window.scrollTo(now, current);
                if (Math.abs(target - current) < 10) {
                    window.scrollTo(target, current);
                    clearInterval(moveTimer);
                }
            }
        }, 50);

    }






})