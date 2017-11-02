/**
 * Created by Administrator on 2017/9/7.
 */
$(function(){
   var shareImage = $('#topBar .wrap .share img');
    console.log(shareImage);
    var shareHidden=$('.share-hidden');
    shareImage.click(function(){

        shareHidden.css('display','block');
    })
    var cancer = $('.share-hidden .cancer');
    cancer.click(function(){
        shareHidden.css('display','none');

    });
    var love=$('.bannerBar .love span');
    var count=0;
    love.click(function(){
        count++;
        if(count%2==0){
            love.css('background',"url('./img/love.png')");
        }else{
            love.css('background',"url('./img/love1.png')");
        }

    })

});
