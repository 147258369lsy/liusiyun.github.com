function nowTime(){
	var now = new Date();
	var year = now.getFullYear();
	var month = now.getMonth();
	var day = now.getDate();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();
	if(minute < 10){
		minute = "0" + minute;
	}

	return year + '/' + (month + 1) + '/' + day + ' ' + hour + ':' + minute + ':' + second;
}

window.onload = function (){
	var container = document.getElementsByClassName('container')[0];
	document.getElementById('send').onclick = function (){
		var textArea = document.getElementById('text');
		if(textArea.value == ''){
			return;
		}
		// 创建一个ul
		var ul = document.createElement('ul');
		ul.className = 'media-list';
		container.insertBefore(ul,container.children[0]);
		var mediaList = document.getElementsByClassName('media-list')[0];
		// 创建一个li
		var li = document.createElement('li');
		li.className = 'media';
		mediaList.insertBefore(li,mediaList.children[0]);
		var media = document.getElementsByClassName('media')[0];
		console.log(media);
		//创建一个div
		var div = document.createElement('div');
		div.className = 'media-left';
		media.insertBefore(div,media.children[0]);
		var mediaLeft = document.getElementsByClassName('media-left')[0];
		//创建一个a标签
		var a = document.createElement('a');
		a.href = '#';
		a.className = 'link';
		mediaLeft.insertBefore(a,mediaLeft.children[0]);
		var link = document.getElementsByClassName('link')[0];
		// 创建一个img标签
		var img = document.createElement('img');
		img.className = 'media-object';
		img.src = './img/tou2.jpg';
		link.insertBefore(img,link.children[0]);
		// 创建右边的节点元素
		var div = document.createElement('div');
		div.className = 'media-body';
		media.insertBefore(div,media.children[1]);
		var mediaBody = document.getElementsByClassName('media-body')[0];
		// 创建一个h4标签为昵称
		var h4 = document.createElement('h4');
		h4.className = 'media-heading';
		mediaBody.insertBefore(h4,mediaBody.children[0]);
		var mediaHeading = document.getElementsByClassName('media-heading')[0];
		//在h4标签下创建一个p标签
		var p = document.createElement('p');
		p.className = 'showTime';
		mediaHeading.appendChild(p);
		var showTime = mediaHeading.getElementsByClassName('showTime')[0];
		showTime.innerText = nowTime();
		//创建一个span标签
		var span = document.createElement('span');
		span.innerText = '用户名';
		span.className = 'userName'
		mediaHeading.insertBefore(span,mediaHeading.children[0]);
		// 创建一个i标签
		var i = document.createElement('i');
		i.className = 'glyphicon glyphicon-thumbs-up';
		i.innerHTML = ' 0';
		mediaHeading.insertBefore(i,mediaHeading.children[1]);
		var count = document.getElementsByClassName('glyphicon')[0];
		// '<i class="glyphicon glyphicon-thumbs-up"></i>'
		// 创建一个p标签为发表的评论
		var p = document.createElement('p');
		p.className = 'txt';
		mediaBody.insertBefore(p,mediaBody.children[1]);
		var txt = document.getElementsByClassName('txt')[0];
		txt.innerHTML = textArea.value;
		textArea.value = '';
		//点赞区域count数的变化
		var number = 0;
		count.onclick = function (){
			number++;
			count.innerText = ' ' + number;
		}

	}

	//给静态页面设置布局
	var zans = document.getElementsByClassName('zan');
	for(var i = 0; i < zans.length; i++){
		var zan = zans[i];
		zan.onclick = function (){

			var number = parseInt(this.innerText);
			number++;
			this.innerHTML = ' ' + number;
		}
	}
	//时间显示
	var now = new Date();

}