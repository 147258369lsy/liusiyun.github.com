/**
 * Created by Administrator on 2017/9/6.
 */
$(function(){
    var navBarlist=$('.navBar>.navbarlist');
    console.log(navBarlist);
    var aArry=$('.navBar>.navbarlist>a');
    aArry.click(function(){
        $(this).parent().siblings().find("a").removeClass('activeYs');
        $(this).addClass('activeYs');

        //console.log($(this));
        //console.log($(this).siblings());
        //console.log(this.siblings);
    })
    var img = $("#footer ul li img");
    var arrimgSrc = [];
    img.on("click",function () {
        $("#footer ul li img").each(function (index,subimg) {
            var imgup = subimg.dataset.image;
            var imghover = $("#footer ul li img").eq(index).attr('src');
            arrimgSrc.push($(subimg).attr("src"));
            $(subimg).attr("src",arrimgSrc[index]);
        });
        $(this).attr('src',$(this).attr("data-image"));

    });

})