/*global $*/
$(function () {
    let header = $("#header");
    let intro = $("#intro");
     let introH = intro.height();
     let scroll = $(window).scrollTop();
    let scrollPos =$(window).scrollTop();
    console.log(introH);
    console.log(scrollPos);

    $(window).on("scroll", function(){
        scrollPos= $(this).scrollTop();


        console.log(scrollPos);
        
    });
    
    $(window).on("scroll load resize", function() {
        scrollPos = $(this).scrollTop();

        if( scrollPos >  introH ) {
            header.addClass("absolute");
            
        } else {
            header.removeClass("absolute");
        }
    })


let nav = $("#nav");
let navToggle = $("#navToggle");


    navToggle.on("click", function(event) {
        event.preventDefault();
        nav.toggleClass("show");

    })

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
        console.log(elementOffset);
        $("html, body").animate ({
            scrollTop: elementOffset
        });
        });
    
   
    
});