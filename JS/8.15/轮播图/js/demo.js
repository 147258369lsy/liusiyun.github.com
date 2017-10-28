window.onload = function () {

	var box = $('.box')[0];	//父盒子
	var contentBox = $('.slider-content')[0];
	var controlBox = $('.slider-control')[0];
	var imageDivArr = contentBox.getElementsByTagName('div');
	console.log(imageDivArr);

	var currentIndex = 0;
	//盒子的宽度
	var boxWidth = box.offsetWidth;
	//动态创建下面的控制条
	for (var i = 0; i < imageDivArr.length; i++){
		var span = document.createElement('span');
		if (i == 0) {
			span.className =  'slider-control-bar current';
		} else {
			span.className = 'slider-control-bar';
		}
		//给span 加编号
		span.index = i;

		controlBox.appendChild(span);

		//控制条的点击事件
		span.onclick = function(){
			console.log(this);
			//如果当前点击的按钮  就是当前的按钮  则不作操作
			if (currentIndex != this.index) {

				//点击的图片，在当前图片的右边
				if (this.index > currentIndex){
					//当前图片左移
					animate(imageDivArr[currentIndex], {
						left : -boxWidth
					});
					//被点击的图片 先放到最右边，然后再左移
					currentIndex = this.index;
					imageDivArr[currentIndex].style.left = boxWidth; 


				} else {
					//点击的图片 在当前图片的左边
					//当前图片右移
					animate(imageDivArr[currentIndex], {
						left : boxWidth
					});


					//被点击的图片 先放到最左边，然后再右移
					currentIndex = this.index;
					imageDivArr[currentIndex].style.left = -boxWidth; 
				}
				animate(imageDivArr[currentIndex], {
					left : 0
				})
				//刷新控制条
				refreshControlBar();
			}

		};
	}
	// console.log(boxWidth);
	//当前第一个盒子放在left=0的位置， 其余所有盒子放在left=310的位置(右边)
	for (var i = 0; i < imageDivArr.length; i++){
		var imgDiv = imageDivArr[i];
		imgDiv.style.left = boxWidth + 'px';
	}
	imageDivArr[0].style.left = '0';

	// 第一个图片向左滑出  第二个图片从右边滑入

	// var currentIndex = 0;
	//自动显示下一个图片
	function nextImage(){
		//当前图片向左边滑出
		animate(imageDivArr[currentIndex], {
			left : -boxWidth
		});
		//下一个图片从右边滑入
		currentIndex++;
		if (currentIndex >= imageDivArr.length) {
			currentIndex = 0;
		}
		//先将下一个图片放到最右边
		imageDivArr[currentIndex].style.left = boxWidth + 'px';
		//向左移动的动画
		animate(imageDivArr[currentIndex], {
			left : 0
		});

		//刷新控制条显示
		refreshControlBar();
	}

	function prevImage(){
		//当前图片向右边滑出
		animate(imageDivArr[currentIndex], {
			left : boxWidth
		});
		//下一个图片从右边滑入
		currentIndex--;
		if (currentIndex < 0) {
			currentIndex = imageDivArr.length - 1;
		}
		//先将下一个图片放到最左边
		imageDivArr[currentIndex].style.left = -boxWidth + 'px';
		//向左移动的动画
		animate(imageDivArr[currentIndex], {
			left : 0
		});


		//刷新控制条显示
		refreshControlBar();
	}

	function refreshControlBar(){
		//刷新当前的控制条
		//所有控制条 取消current类
		for (var i = 0; i < controlBox.children.length; i++){
			var bar = controlBox.children[i];
			bar.className = 'slider-control-bar';
		}
		//当前的控制条添加current类
		controlBox.children[currentIndex].className = 'slider-control-bar current';
	}


	//通过左右按钮切换
	$('#next').onclick = nextImage;
	$('#prev').onclick = prevImage;



	//开启自动播放
	var timer = setInterval(nextImage ,3000);
	//当鼠标移动到轮播图中， 停止自动播放
	box.onmouseover = function (){
		clearInterval(timer);
	}
	//移出时，重新开始定时器
	box.onmouseout = function (){
		timer = setInterval(nextImage ,3000);	
	}

}