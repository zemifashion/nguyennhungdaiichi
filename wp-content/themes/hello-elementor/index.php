<!DOCTYPE html>
<html lang="en">
<head>
    <title>Bảo Hiểm Dai-ichi life Việt Nam</title>
    <meta name="description" content="Phòng Kinh Doanh Hà Nội - Công ty TNHH Bảo Hiểm Nhân Thọ Dai-ichi Việt Nam"/>
    <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
    <style>
        img.wp-smiley, img.emoji {
            display: inline !important;
            border: none !important;
            box-shadow: none !important;
            height: 1em !important;
            width: 1em !important;
            margin: 0 .07em !important;
            vertical-align: -0.1em !important;
            background: none !important;
            padding: 0 !important
        }
    </style>
    <link rel='stylesheet' id='wp-block-library-css' href='<?= get_template_directory_uri() ?>/css/style.min.css' media='all'/>
    <link rel='stylesheet' id='contact-form-7-css' href='<?= get_template_directory_uri() ?>/css/styles-5.5.2.css' media='all'/>
    <link rel='stylesheet' id='sanpop-public-style-css' href='<?= get_template_directory_uri() ?>/css/sanpop-public-style-1.1.1.css' media='all'/>
    <link rel='stylesheet' id='aia-style-css' href='<?= get_template_directory_uri() ?>/css/style-1.0.0.css' media='all'/>
    <link rel='stylesheet' id='msl-main-css' href='<?= get_template_directory_uri() ?>/css/masterslider.main-3.7.10.css' media='all'/>
    <link rel='stylesheet' id='msl-custom-css' href='<?= get_template_directory_uri() ?>/css/custom-1.6.css' media='all'/>
    <style>
        .recentcomments a {
            display: inline !important;
            padding: 0 !important;
            margin: 0 !important
        }
    </style>
    <link rel="icon" href="<?= get_template_directory_uri() ?>/image/cropped-to3rypcleg9nzytr3gpl-32x32.png" sizes="32x32"/>
    <link rel="icon" href="<?= get_template_directory_uri() ?>/image/cropped-to3rypcleg9nzytr3gpl-192x192.png" sizes="192x192"/>
    <link rel="apple-touch-icon" href="<?= get_template_directory_uri() ?>/image/cropped-to3rypcleg9nzytr3gpl-180x180.png"/>
    <meta name="msapplication-TileImage" content="<?= get_template_directory_uri() ?>/image/cropped-to3rypcleg9nzytr3gpl-270x270.png"/>
    <meta name="robots" content="follow, index"/>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="<?= get_template_directory_uri() ?>/image/dai-ichi-logo.png" type="image/x-icon"/>
    <link rel="stylesheet" href="<?= get_template_directory_uri() ?>/css/bootstrap.css">
    <link rel="stylesheet" href="<?= get_template_directory_uri() ?>/css/style.css">
    <link rel="stylesheet" href="<?= get_template_directory_uri() ?>/css/all.min.css">
    <link rel="stylesheet" type="text/css" href="<?= get_template_directory_uri() ?>/css/slick-theme.css"/>
    <link rel="stylesheet" type="text/css" href="<?= get_template_directory_uri() ?>/css/slick.css"/>
    <link rel="stylesheet" type="text/css" href="<?= get_template_directory_uri() ?>/css/menu-mobile.css"/>
    <link rel="stylesheet" type="text/css" href="<?= get_template_directory_uri() ?>/css/404-style.css">
</head>
<body>
<?php get_header(); ?>
<?php
$is_elementor_theme_exist = function_exists( 'elementor_theme_do_location' );

if ( is_singular() ) {
    if ( ! $is_elementor_theme_exist || ! elementor_theme_do_location( 'single' ) ) {
        get_template_part( 'template-parts/single' );
    }
} elseif ( is_archive() || is_home() ) {
    if ( ! $is_elementor_theme_exist || ! elementor_theme_do_location( 'archive' ) ) {
        get_template_part( 'template-parts/archive' );
    }
} elseif ( is_search() ) {
    if ( ! $is_elementor_theme_exist || ! elementor_theme_do_location( 'archive' ) ) {
        get_template_part( 'template-parts/search' );
    }
} else {
    if ( ! $is_elementor_theme_exist || ! elementor_theme_do_location( 'single' ) ) {
        get_template_part( 'template-parts/404' );
    }
}
?>

<?php get_footer(); ?>
<nav id="menu-mobile">
    <ul id="menu-menu-1" class="">
        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-498">
            <a href="/gioi-thieu/">Giới Thiệu</a>
        </li>
        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-449">
            <a href="/san-pham/">Sản phẩm</a>
        </li>
        <li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-401">
--            <a href="/dich-vu-khach-hang/">DỊCH VỤ KHÁCH HÀNG</a>
        </li>
        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-22">
            <a href="/tin-tuc/">Tin tức</a>
        </li>
        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-23">
            <a href="/tuyen-dung/">Tuyển dụng</a>
        </li>
    </ul>
</nav>

<script src='<?= get_template_directory_uri() ?>/js/navigation-1.0.0.js' id='aia-navigation-js'></script>

<script type="text/javascript" src="<?= get_template_directory_uri() ?>/js/jquery-3.5.1.js"></script>
<script type="text/javascript" src="<?= get_template_directory_uri() ?>/js/bootstrap.js"></script>
<script type="text/javascript" src="<?= get_template_directory_uri() ?>/js/jquery.mmenu.all.min.js"></script>
<script type="text/javascript" src="<?= get_template_directory_uri() ?>/js/slick.min.js"></script>
<script type="text/javascript">
    $(document).ready(function ($) {
        $("#menu-mobile").mmenu();
    });
    var navbar = document.getElementById("navbar");
    let sticky = navbar.offsetTop;
    window.onscroll = function () {
        if ($(window).scrollTop() >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    };

    jQuery(document).ready(function ($) {
        $('.card-covid').hover(function (e) {
            $("body").find(".imghvr-slide-up figcaption").removeClass("d-none-hv");
        });

        $('.home-services-slider').slick({
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

        setTimeout( function() {
            var html2mecon = '<div class="slider-item__boxText">' +
                '<h1 class="text-uppercase">AN PHÚC HƯNG THỊNH TOÀN DIỆN</h1>' +
                '<p>Lập kế hoạch học tập cùng con yêu!</p> ' +
                '<button class="btn btn-danger btn-readMore">' +
                '<a href="/san-pham/">Xem thêm</a>' +
                '<i class="fas fa-arrow-right"></i></button></div>';
            var htmlAntam = '<div class="slider-item__boxText">' +
                '<h1 class="text-uppercase"></h1>' +
                '<p></p> ' +
                '<button class="btn btn-danger btn-readMore">' +
                '<a href="/san-pham/">Xem thêm</a>' +
                '<i class="fas fa-arrow-right"></i></button></div>';
            $('#hai-me-con').each(function(){
                $(this).find('.ms-slide-bgcont').append(html2mecon);
            });
            $('#an-tam-song-hanh').each(function(){
                $(this).find('.ms-slide-bgcont').append(htmlAntam);
            });
        }, 1000 );

        $('.slider-services').slick({
            centerMode: !0,
            centerPadding: '60px',
            slidesToShow: 7,
            dots: !0,
            arrows: !1,
            responsive: [{
                breakpoint: 992,
                settings: {arrows: !1, centerMode: !0, centerPadding: '40px', slidesToShow: 3}
            }, {
                breakpoint: 768,
                settings: {arrows: !1, centerMode: !0, centerPadding: '40px', slidesToShow: 3}
            }, {
                breakpoint: 480,
                settings: {
                    arrows: !1,
                    centerMode: !0,
                    centerPadding: '20px',
                    slidesToShow: 1,
                    autoplay: !0,
                    autoplaySpeed: 2000,
                    focusOnSelect: !0
                }
            }]
        });
        $('.blog-slider').slick({
            centerPadding: '60px',
            slidesToShow: 3,
            arrows: !0,
            prevArrow: '<button type="button" class="slick-prev">Trước</button>',
            nextArrow: '<button type="button" class="slick-next">Next</button>',
            autoplay: !0,
            autoplaySpeed: 3000,
            responsive: [{breakpoint: 768, settings: {arrows: !1, slidesToShow: 1}}, {
                breakpoint: 640,
                settings: {arrows: !0, slidesToShow: 1, autoplay: !0, autoplaySpeed: 2000}
            }]
        });
    });
</script>
</body>
</html>