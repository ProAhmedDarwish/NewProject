/*global $, window, document,Typed*/

$(document).ready(function () {
    "use strict";
    
    //-----------------
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }
        
        
        if (this.scrollY > 500) {
            $(".scroll-up-btn").addClass("show");
        } else {
            $(".scroll-up-btn").removeClass("show");
        }
    });
    
    //----------------------
    $(".scroll-up-btn").click(function () {
        $("html").animate({
            scrollTop: 0
        }, 1200);
    });
    
    //-----------------------------------
    $(".navbar .menu-btn").click(function () {
        $(".navbar .menu").toggleClass("active");
        $(".navbar .menu-btn i").toggleClass("active");
    });
    
    //--------------------Owl Carousel---------------------
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        outoplayTimeOut: 2000,
        outoplayHoverPause: true,
        responsive: {
            0: {
                
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
    
    //---------------Typing Animation Script-------------------
    var typed = new Typed(".typing", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    
    
    var typedd = new Typed(".typing-2", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    
    
});






