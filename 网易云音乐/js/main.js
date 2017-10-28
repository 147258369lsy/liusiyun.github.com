window.onload = function(){
var animateTimer;
	function animate(element, target) {
		clearInterval(animateTimer);
		var left = element.offsetLeft;
		var step = (target - left) / 50;
		animateTimer = setInterval(function () {
			left += step;
			element.style.left = left + 'px';
			if (Math.abs(target-left) <= Math.abs(step)) {
				clearInterval(animateTimer);
				element.style.left = target + 'px';
			}
		},5);
	};

  var content = document.getElementsByClassName('contents')[0];
  var prev = document.getElementById('prev');
  var next = document.getElementById('next');

  var index = 0; 
  var contentLeft = content.offsetLeft; //0
  // console.log(contentLeft);
  // content.appendChild(content.children[0].cloneNode(true)); //在克隆第一个ul到content中
  // content.insertBefore(ulTwo, content.children[0]);
//  //下一个
//   next.onclick = function(){
//   	if(index == 1){
//         index = 0;
//         content.style.left = '0';
//         contentLeft = 0;
//   	}
//   	contentLeft -= 686;
//   	animate(content,contentLeft);
//   	index++;
//   }
//  // 上一个
//   prev.onclick = function(){
  	
//   	if(index == -1){
//         index = 0;
//         content.style.left = "0px";
//         contentLeft = -6860;         
//   	}
//   	contentLeft += 686; 
//   	animate(content,contentLeft);
//   	index--;
//   	// console.log(contentLeft);
//   }
   // $('')
   var lis =content.getElementsByTagName('ul');
   for(var i = 0;i<lis.length;i++){
         var width=686;
         lis[i].style.left=width*i+'px';
   }
   // console.log(lis[0].style.left);
   $(next).click(function(){
   	$('.contents ul').each(function(index){
   		console.log($(this).css('left'));
   		if($(this).css('left')==='1372px'){		
        $(this).css({
           'left':0
        })
   		}else{
   			$(this).animate({
           'left': parseInt($(this).css('left'))+686
      })
   		}
   	})
   });
   $(prev).click(function(){
   	$('.contents ul').each(function(index){
   		console.log($(this).css('left'));
   		if($(this).css('left')==='0px'){		
        $(this).css({
           'left':1372
        })
   		}else{
   			$(this).animate({
           'left': parseInt($(this).css('left'))-686
      })
   		}
   	})
   })
   // next.onclick=function(){
   //    // for(var i = 0;i<lis.length;i++){
   //    	 // lis[i].index=i;
   //    	 // console.log(lis[i].style.left);
   //    	 animate(lis[0],parseInt(lis[0].style.left)+686);
   //    	 animate(lis[1],parseInt(lis[1].style.left)+686);
   //    	 animate(lis[2],parseInt(lis[2].style.left)+686);
         
   //    }
   // }
}
