jQuery(function($) {
    // Smooth Scrolling
    $(".backtop a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
    // Show - Hide Back To Top Button
    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 400) {
            $(".backtop").addClass("show");
        } else {
            $(".backtop").removeClass("show");
        }
    });
    $(".backtop").click(function () {
       $("html, body").animate({scrollTop: 0}, 1000);
    });
    // Sticky Header
    $(document).scroll(function() {
        var y = $(this).scrollTop();
        var h = $(".top-menu").height();
        if (y > h) {
            $(".top-menu").addClass("is-sticky");
        } else {
            $(".top-menu").removeClass("is-sticky");
        }
    });
    // Show/Hide search popup
    $('.mobile-search-btn, .search-btn').click(function(){
        $('.search-popup').addClass('show-popup');
    });
    $('.close-search').click(function(){
        $(this).addClass('is-active').delay(1000).queue(function(next){
            $(this).removeClass('is-active');
            next();
        });
        $('.search-popup').removeClass('show-popup');
    });
    // Change icon navbar-toggler
    $('.navbar-toggler').click(function(){
        $(this).toggleClass('is-active').delay(300).queue(function(next){
            $(this).toggleClass('show-menu');
            next();
        });
    });
    // Products Carousel
    $('.products-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            468:{
                items:2
            },
            800:{
                items:3
            },
            1000:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });
    // Products Carousel
    $('.gallery-carousel').owlCarousel({
        loop:true,
        margin:15,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
    // Banner Carousel
    $('.banner-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        items:1
    });
    // Feedback
    $('.feedback-carousel').owlCarousel({
        loop:true,
        margin:25,
        nav:false,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    // Show GG Map
    $(".show-google-map").click(function(){
        $(".google-map-content").slideToggle(400);
        $(".show-google-map").toggleClass("show-google");
    });
});