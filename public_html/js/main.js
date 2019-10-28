$(document).ready(function(){

    // lead slider
    if ($('.lead-slider').length > 0) {
        $('.lead-slider').owlCarousel({
            items: 1,
            dots: false,
            loop: true,
            slideBy: 1,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true
        });
    }
    //ANIMATION
    function animation() {
        let windowHeight = $(window).height();
        let scroll = $(window).scrollTop();

        $('.animation').each(function () {
            let position = $(this).offset().top;
            let animationName = $(this).attr('data-animation');
            let delay = $(this).attr('data-delay');

            if (position < windowHeight + scroll - 100) {
                $(this).addClass(animationName);
                $(this).css('animation-delay', delay);
            }
        });
    }

    $(window).scroll(function () {
        animation();
    });

    animation();


});