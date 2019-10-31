$(document).ready(function () {

    // lead slider
    if ($('.lead-slider').length > 0) {
        $('.lead-slider').owlCarousel({
            items: 1,
            dots: false,
            loop: true,
            slideBy: 1,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true
        });
    }

    // clients slider
    if ($('.clients-slider').length > 0) {
        $('.clients-slider').owlCarousel({
            items: 8,
            dots: false,
            loop: true,
            slideBy: 1,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            nav: true,
            navText: [
                '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                '<i class="fa fa-angle-right" aria-hidden="true"></i>'
            ],
            navContainer: '.clients-links .custom-nav',
            margin: 8,
            responsive: {
                0: {
                    items: 2,
                    margin: 4,
                    nav: false
                },
                550: {
                    items: 3,
                    margin: 4,
                    nav: true
                },
                700: {
                    items: 6,
                    margin: 6,
                    nav:true
                },
                1000: {
                    items: 8,
                    slideBy: 1,
                    margin: 8
                }
            }
        });
    }

    // email validate

    if ($('.contact-form')) {
        $('.contact-form').validate({
            highlight: function (element) {
                $(element).addClass('is-invalid').removeClass('is-valid');
            },
            unhighlight: function (element) {
                $(element).addClass('is-valid').removeClass('is-invalid');
            },
            rules: {
                email: {
                    email: true
                }
            },
            messages: {
                email: {
                    email: 'Molimo Vas unesite ispravnu email adresu.'
                }
            },
            errorElement: 'p',
            errorPlacement: function (error, element) {
                error.appendTo(element.closest(".form-group").find(".error-msg"));
            }

        });
    }

      // log-in validate

      if ($('.log-in-form')) {
        $('.log-in-form').validate({
            highlight: function (element) {
                $(element).addClass('is-invalid').removeClass('is-valid');
            },
            unhighlight: function (element) {
                $(element).addClass('is-valid').removeClass('is-invalid');
            },
            rules: {
                userName: {
                    required: true,
                    minlength: 3
                },
                password: {
                    required: true,
                    minlength: 6
                }
            },
            messages: {
                userName: {
                    required: 'Ovo polje je obavezno.',
                    minlength: 'Morate uneti minimum 3 karaktera.'
                },
                password: {
                    required: 'Ovo polje je obavezno.',
                    minlength: 'Morate uneti minimum 6 karaktera.'
                }
            },
            errorElement: 'p',
            errorPlacement: function (error, element) {
                error.appendTo(element.closest(".form-group").find(".error-msg"));
            }

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