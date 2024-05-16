$(function(){
    let currentindex = 0;
    $(".sliderWrap").append($(".slider").first().clone(true));

    setInterval(function(){
        currentindex++;
        $(".sliderWrap").animate({marginLeft:-800*currentindex},600);

        if(currentindex == 3){
            setTimeout(function(){
                $(".sliderWrap").animate({marginLeft:0},0);
                currentindex = 0;
            },600);
        }
    },3000);

    $(".nav > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown();
    });
    $(".nav > ul > li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp();
    });

    $(".popup_btn").click(function(){   
        $(".popup_view").show();    
    });
    $(".popup_close").click(function(){     
        $(".popup_view").hide ();   
    });
});