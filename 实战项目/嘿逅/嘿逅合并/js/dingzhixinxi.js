window.onload = function () {
	console.log('nihao');
	var shareContent = document.getElementsByClassName('shareContent')[0];
	var btn = document.getElementsByClassName('btn')[0];
	var btncontent = document.getElementsByClassName('btncontent')[0];
	console.log(btncontent);
	btncontent.onclick = function () {
		console.log('nihao');
		shareContent.style.display = 'block';
	}

}