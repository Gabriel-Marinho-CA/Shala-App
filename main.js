$(document).ready(function(){
    // navbar shrink //
    $(window).on("scroll", function(){
        if($(this).scrollTop() >90){
            $(".navbar").addClass("navbar-shrink");
        }
        else{
            $(".navbar").removeClass("navbar-shrink");
        }
    });

    //-------------//
    const video = $("#player-1").attr("src");

    $(".video-play-button, .video-popup").on("click",function(){
        if($(".video-popup").hasClass("open")){
            $(".video-popup").removeClass("open");
            $("#player-1").attr("src","");
        }
        else{
            $(".video-popup").addClass("open");
            if($("#player-1").attr("src")==''){
                $("#player-1").attr("src",video);
            }
        }
    });
    //-------------- ScreenShots carousel ----------//
    $('.screenshots-carousel').owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        responsive:{
        0:{
            item:1,           
        },
        600: {
            items:2,
        },
        1000:{
            items:4,
        }
     }
   })

    //-------------Testimonails-----//

    $('.testimonials-carousel').owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        responsive:{
        0:{
            item:1,           
        },
        600: {
            items:2,
        },
        1000:{
            items:3,
        }
     }
   })

   $.scrollIt({
       topOffset:-50
   });
  
//    s Navbar Collapse //
   $(".nav-link").on("click",function(){
       $(".navbar-collapse").collapse("hide");
   })
});

// 1:42:00 parou o video https://www.youtube.com/watch?v=an0_u96ac8A&t=2647s 

