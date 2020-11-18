$(window).scroll(function() {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});


// why us Section counter
$('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
});

// Testimonial page
$(document).ready(function() {

    $("#owl-demo").owlCarousel({

        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true

        // "singleItem:true" is a shortcut for:
        // items : 1, 
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });

});