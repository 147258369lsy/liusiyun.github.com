//加入图片first3
$(function () {
   var liArr = $('#first3 > .slider_first3 > .sliderBlock_first3 > ul > li');
    liArr.each(function (index, li) {
        var imgURL = './img/the-first-page1_'+ (index * 2 + 40) +'.png';
        li.style.backgroundImage = "url('"+ imgURL +"')";
    });
});


//左右拖拽函数
function draft (index){   
	var touchEvents = {
        touchstart: "touchstart",
        touchmove: "touchmove",
        touchend: "touchend",

        /**
         * @desc:判断是否pc设备，若是pc，需要更改touch事件为鼠标事件，否则默认触摸事件
         */
        initTouchEvents: function () {
            if (isPC()) {
                this.touchstart = "mousedown";
                this.touchmove = "mousemove";
                this.touchend = "mouseup";
            }
        }
    };
	index.onmousedown = function (e){
				var tx = e.pageX;
				var ox = tx - index.offsetLeft;
				index.onmousemove = function (e){
					var first3 = document.getElementById('first3');
					var first4 = document.getElementById('first4');
					var first5 = document.getElementById('first5');
					var aArr3 = first3.getElementsByTagName('a');
					var aArr4 = first4.getElementsByTagName('a');
					var aArr5 = first5.getElementsByTagName('a');
	 			   for (var i = 0; i < aArr3.length; i++){	 			   	
          		   aArr3[i].style.display = 'none';
					}	
					for (var i = 0; i < aArr4.length; i++){	 			   	
          		   aArr4[i].style.display = 'none';
					}	
					for (var i = 0; i < aArr5.length; i++){	 			   	
          		   aArr5[i].style.display = 'none';
					}	


					var event = e ? e : window.event;
					var pageX = e.pageX;
					var target = pageX - ox;
					// console.log(index);
					var sliderBlockFirst3 = document.getElementsByClassName('sliderBlock_first3')[0];
					var sliderBlockFirst4 = document.getElementsByClassName('sliderBlock_first4')[0];
					var sliderBlockFirst5 = document.getElementsByClassName('sliderBlock_first5')[0];
					if (index == sliderBlockFirst3) {
						if (target <= -219) {
						target = -219;
					}
					else if(target >= 0){
						target = 0;
					}
				}
					else if (index == sliderBlockFirst4) {
						if (target <= -330) {
						target = -330;
					}
					else if(target >= 0){
						target = 0;
					}
					} 
					else if (index == sliderBlockFirst5) {
						if (target <= -214) {
						target = -214;
					}
					else if(target >= 0){
						target = 0;
					}
					}
					
					
					index.style.left = target + 'px';
				}
				index.onmouseup = function(){
					index.onmousemove = null;
					index.onmouseup=null; 
				    var aArr = document.getElementsByTagName('a');
	 			   for (var i = 0; i < aArr.length; i++){	 			   	
          		      aArr[i].style.display = 'block';
					}
				}
}
}



window.onload = function () {
	var sliderBlockFirst3 = document.getElementsByClassName('sliderBlock_first3')[0];
	// var sliderFirst3 = document.getElementsByClassName('slider_first3')[0];
	var sliderBlockFirst4 = document.getElementsByClassName('sliderBlock_first4')[0];
	// var sliderFirst4 = document.getElementsByClassName('slider_first4')[0];
	var sliderBlockFirst5 = document.getElementsByClassName('sliderBlock_first5')[0];
	// var sliderFirst5 = document.getElementsByClassName('slider_first5')[0];				
		 draft(sliderBlockFirst3);
         draft(sliderBlockFirst4);
         draft(sliderBlockFirst5);  
}