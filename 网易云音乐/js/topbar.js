// window.onload = function() {
//   var list = document.getElementById('list');
//   var items = list.getElementsByTagName('a');
//   var nav = document.getElementsByClassName('nav')[0];
//   console.log(nav);
//   // console.log(items.length);
//   for(var i = 0; i < items.length; i++){
//  	var item = items[i];
//  	var itemone = items[0];
 	
//  	item.onclick = function(){
//  		for(var j = 0; j < items.length; j++){
//  			items[j].getElementsByTagName('span')[0].className = '';
//  			items[j].style.backgroundColor = '#242424';
//  			items[j].style.color = '#ccc';
 			
//  		}
//  		if(i == 0){
//  		console.log('111');
//  		item.getElementsByTagName('span')[0].className = 'arrow';
//  		nav.style.display = 'block';
//  	    }else{
//  	    	nav.style.display = 'none';
//  	    }
//  		this.getElementsByTagName('span')[0].className = 'arrow';
//  		this.style.backgroundColor = '#000';
//  		this.style.color = '#fff';
//  	}
//   }

// }

$(function(){
	$('.nav').css({'display':'block'});
	$('#list li').each(function(index){
        $(this).find('a').click(function(){
        $('#list li a').css({'backgroundColor':'#242424'});
        $('#list li a').css({'color':'#ccc'});
       	$('#list li a span').removeClass('arrow');
       	$(this).find('span').addClass('arrow');
       	$(this).css({'backgroundColor':'#000'});
       	$(this).css({'color':'#fff'});
       	  console.log(index);
       	  if(index===0){
       	  $('.nav').css({'display':'block'});
       	  $('.banner').css({'display':'block'});
          $('section#mainBody').css({'display':'none'});
          $('section#homePage').css({'display':'block'});
       	  }else{
       	  $('.nav').css({'display':'none'});
       	  $('.banner').css({'display':'none'});
           if(index===2){
            $('section#homePage').css({'display':'none'});
            $('section#mainBody').css({'display':'block'});
           }else{
             $('section#mainBody').css({'display':'none'});
            $('section#homePage').css({'display':'none'});
           }
       	  }
       })
	});

	// console.log($('#placehold'));
	$('#placehold').click(function(){
		console.log('222');
	})
	$('.search span input').focus(function(){
		console.log('111');
		$('#placehold').css({'display':'none'});
	})
	$('.search span input').blur(function(){
		$('#placehold').css({'display':'block'});
	})
    
})