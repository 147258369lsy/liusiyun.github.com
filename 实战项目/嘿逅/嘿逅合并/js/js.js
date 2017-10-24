$(function(){
	var lis = $('#more .content div ul li');
	lis.click(function() {
		console.log(this);
		$(this).toggleClass("active");
	});	
})