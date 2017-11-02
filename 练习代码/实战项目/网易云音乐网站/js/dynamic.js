$(function(){ 

	// 点击关闭
   $('div.title_btn span.send').click(function(){
   	  $('section.main_things').css({'display':'block'});
   	  $('#msg')[0].value='';
   });
   $('div.closeIt').click(function(){
   	 $('section.main_things').css({'display':'none'});
   })
    // 点击发送
   $('.sendIt').click(function(){
   	  var vivo = document.getElementsByClassName('case')[0];
   	  var ul_list=document.getElementsByClassName('ul_list')[0];
   	  var oppo =vivo.cloneNode(true);
      var textMsg = $('#msg')[0].value;
      $('#msg')[0].value='';
      $(oppo).find('div.msg span').text(textMsg);
      $(oppo).find('span.name').text('我');
      // 获取时间
      $(oppo).find('div.time').text('刚刚'); 
      $(oppo).find('em.zang').text('0');
      $(oppo).find('em.zhuanfa').text('(0)');
      $(oppo).find('em.pinglun').text('(0)');
   	  ul_list.insertBefore(oppo,ul_list.children[0]);
   	  $('section.main_things').css({'display':'none'});
   });
   $('.cancel').click(function(){
   	$('section.main_things').css({'display':'none'});
   });

   $('span.zang').on('click',function(){
   	$(this).find('em').text(parseInt($(this).find('em').text())+1);
   	$(this).off('click');
   })











});