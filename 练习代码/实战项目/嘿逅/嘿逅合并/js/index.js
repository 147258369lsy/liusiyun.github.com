



$(function(){
    //ÂÖ²¥Í¼ÉèÖÃ
    var itemArr = $("#banner > .carousel > .carousel-inner > .item");
    console.log(itemArr);
    itemArr.each(function(index , item){

        var imageURL = item.dataset.image;
        //console.log(item.dataset.image);
        item.style.backgroundImage = "url('"+ imageURL+"')";
    });
});