/*global $*/

function canvasfunc() {
    "use strict";
    var mycanvas = $("mycanvas").getContext("2d");
    mycanvas.fillRect(50, 25, 100, 100);
}

//function testfunc() {
//     var scrollpos = $(window).scrollTop()
//     var currelement = onmouseover()
//     if (scrollpos > window.innerHeight/2) {
//         
//     }
//}


$("document").ready(function () {
    "use strict";
//    $("a.animation[about]").addClass("active");
//    $('.animation[href="#about"]').trigger("click");
    
    $(function () {
        $('.animation[href="#about"]').trigger("click");
    });
    
    //to make page scroll to appropriate section when navbar link is clicked
    $(".animation").click(function (event) {
        
        $(".active").removeClass("active");
        $(this).addClass("active");
        
        event.preventDefault();
        var target = $(this).attr('href');
        
        if (target.length) {
            
            $('html, body').stop().animate({
                scrollTop: $(target).offset().top
//                scrollTop: $(target).offset().top - $("#navbar").innerHeight()
            }, 1000);
        }
    });
    
    //if ()
   
    
    
    
//    $(window).scroll(function () {
//        $("#about").animate(
//            $(this).fadeOut(50)
//        );
//    });
//    
//    $('a').onclick(function () {
//        $(this).animate({fontSize: "+= 6px"});
//    });
//    
//    to add brackets when link is active
//    $(".animation").onclick(function () {
//        $(this).addClass(".active");
//    });
});

//$("#button").click(function() {
//    $('html, body').animate({
//        scrollTop: $("#myDiv").offset().top
//    }, 2000);
//});