// ================点击切换变成红心==============
$(function () {
	var heart1 = $('#heart1');
	var heart2 = $('#heart2');
	var heart3 = $('#heart3');
	var heart4 = $('#heart4');
	var heart5 = $('#heart5');
	console.log(heart2);
	heart1.click(function(){
		console.log('click');
		heart1.toggleClass("redheart");
	})
	heart2.click(function(){
		heart2.toggleClass("redheart");
	})
	heart3.click(function(){
		heart3.toggleClass("redheart");
	})
	heart4.click(function(){
		heart4.toggleClass("redheart");
	})
	heart5.click(function(){
		heart5.toggleClass("redheart");
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
