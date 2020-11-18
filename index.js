$(window).scroll(function() {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});


// why us Section counter
$('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
});

// Testimonial page
