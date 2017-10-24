// ================点击切换变成红心==============
$(function () {
	var heart = $('#heart');
	console.log(heart);
	heart.click(function(){
		console.log('click');
		heart.toggleClass("redheart");
		// console.log(this);
	})

})

// =====================点击分享======================
$(function(){
	var fenxiangMask = $('#fenxiang-mask');
	// console.log(fenxiangMask);
	var share = $('#share');
	console.log(share);
	share.click(function(){
		console.log('click');
         fenxiangMask.css('display', 'block');
	})
})
// window.onload = function () {
// 	var  fenxiangMask = document.getElementById('fenxiang-mask');
// 	console.log(fenxiangMask);
// 	var share = document.getElementById("share");
// 	console.log(share);
// 	share.onclick = function (){
// 		console.log('nihao');
// 	}
// }
