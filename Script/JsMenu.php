<script type="text/javascript">
    $(document).ready(function ($) {
        $("#menu-mobile").mmenu();
    });
    window.onscroll = function () {
        myFunction()
    };

    var navbar = document.getElementById("navbar");
    let sticky = navbar.offsetTop;

    function myFunction() {
        if ($(window).scrollTop() >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }

    jQuery(document).ready(function ($) {
        // Show form on click button search
        $('.btn-search').click(function () {
            $('.form').toggle();
        });

        $('.card-covid').hover(function (e) {
            $("body").find(".imghvr-slide-up figcaption").removeClass("d-none-hv");
        })

        $('#home-slider').slick({
            dots: true,
            infinite: true,
            speed: 800,
            autoplay: false,
            autoplaySpeed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1
        });

        $('.home-services__slider').slick({
            dots: true,
            infinite: true,
            speed: 800,
            autoplaySpeed: 2000,
            slidesToShow: 5,
            slidesToScroll: 5,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]

        });

        $('.slider-4').slick({
            dots: true,
            infinite: true,
            speed: 800,
            autoplaySpeed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    });
</script>