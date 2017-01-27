/*global $*/

$("document").ready(function () {
    "use strict";
//    $("a.animation[about]").addClass("active");
//    $('.animation[href="#about"]').trigger("click");
    
    //to add brackets to about as soon as page loads
    $(function () {
        $('.animation[href="#about"]').trigger("click");
    });
    
    //to make about button interactive
    // $("mybutton").on('click', function () {
    //     console.log("button is responding");
    //     $("dynamicabout").removeClass("show");
    // });
    // document.getElementById("mybutton").onclick = function() {
    //     console.log("About button is responding.");
    //     document.getElementById("dynamicabout").className = "";
    //     console.log(document.getElementById("dynamicabout").className);
    // }
    
    //to make close button hide dynamicabout div
    $("closebutton").click(function () {
        $("dynamicabout").addClass("show");
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
    
});