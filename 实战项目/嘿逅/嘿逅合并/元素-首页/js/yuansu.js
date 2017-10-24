
//点击爱心收藏
window.onload = function(){
	var aixinArr = document.getElementsByClassName('aixin');
	console.log(aixinArr);

	for(var i = 0; i <= aixinArr.length; i++){
		var aixin = aixinArr[i];

		aixin.onclick = function() {
    	// console.log("img1");
       	if (this.src.search("aixin1.png") != -1) {
            this.src = "./images/aixin2.png";
       		} else {
        	this.src = "./images/aixin1.png";
       	 	}
    	}
	}
}
