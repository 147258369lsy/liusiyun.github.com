$(function(){
   var images=$("#xiangqing > .content6 > .miaoshu > div > img");
    var P = $("#xiangqing > .content6 > .miaoshu > p")
    console.log(images);
    console.log(P);
    images.click(function(){
        var PHeight = P.css("height");
        if(PHeight == "250px"){
            P.css("height","112px");
        }else{
            P.css("height","250px");
        }
    });
});


$(function(){
    var img = $("#ssfw > .miaosha > .money > img");
    console.log(img);
    img.click(function(){
        $(".shijian").toggleClass("toggle");
    })

});

        // 下个月隐藏
        $("div.next_month").hide();
        $("i.next_month").click(function() {
            // 点击下个月显示
            $("div.this_month").hide();
            $("div.next_month").show();
            $("div.next_month").css("display", "fiex");
        });
        $("i.prev_month").click(function() {
            //点击显示这个月
            $("div.next_month").hide();
            $("div.this_month").show();
        });
        $("li[class='box_date']").click(function(){
          $(this).toggleClass("yuding");
        });