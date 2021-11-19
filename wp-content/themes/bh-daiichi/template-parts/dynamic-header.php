<?php
/**
 * The template for displaying header.
 *
 * @package HelloElementor
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! hello_get_header_display() ) {
	return;
}

$is_editor = isset( $_GET['elementor-preview'] );
$site_name = get_bloginfo( 'name' );
$tagline   = get_bloginfo( 'description', 'display' );
$header_nav_menu = wp_nav_menu( [
	'theme_location' => 'menu-1',
	'fallback_cb' => false,
	'echo' => false,
] );
?>
<head>
    <meta name="robots" content="follow, index"/>
    <title>Trang Chủ - Dai-ichi HN214</title>
    <meta name="description"
          content="Trang chủ chính thức của Phòng Kinh Doanh Hà Nội 214 - công ty TNHH Bảo Hiểm Nhân Thọ Dai-ichi Việt Nam. Tư vấn, giải đáp thắc mắc cho khách hàng về Dai-ichi"/>
    <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
    <link rel="canonical" href="https://dai-ichi.vn/"/>
    <meta property="og:locale" content="vi_VN">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Trang Chủ - Dai-ichi HN214">
    <meta property="og:description"
          content="Trang chủ chính thức của Phòng Kinh Doanh Hà Nội 214 - công ty TNHH Bảo Hiểm Nhân Thọ Dai-ichi Việt Nam. Tư vấn, giải đáp thắc mắc cho khách hàng về Dai-ichi">
    <meta property="og:url" content="https://dai-ichi.vn/">
    <meta property="og:site_name" content="Dai-ichi HN214">
    <meta property="og:updated_time" content="2021-03-12T17:18:16+07:00">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Trang Chủ - Dai-ichi HN214">
    <meta name="twitter:description" content="Trang chủ chính thức của Phòng Kinh Doanh Hà Nội 214 - công ty TNHH Bảo Hiểm Nhân Thọ Dai-ichi Việt Nam. Tư vấn, giải đáp thắc mắc cho khách hàng về Dai-ichi">
    <script type="application/ld+json" class="rank-math-schema">{
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@type": [
                        "Person",
                        "Organization"
                    ],
                    "@id": "https://dai-ichi.vn/#person",
                    "name": "Nguy\u1ec5n Ti\u1ebfn",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "./image/cropped-1.png"
                    },
                    "image": {
                        "@type": "ImageObject",
                        "url": "./image/cropped-1.png"
                    }
                },
                {
                    "@type": "WebSite",
                    "@id": "https://dai-ichi.vn/#website",
                    "url": "https://dai-ichi.vn",
                    "name": "Nguy\u1ec5n Ti\u1ebfn",
                    "publisher": {
                        "@id": "https://dai-ichi.vn/#person"
                    },
                    "inLanguage": "vi",
                    "potentialAction": {
                        "@type": "SearchAction",
                        "target": "https://dai-ichi.vn/?s={search_term_string}",
                        "query-input": "required name=search_term_string"
                    }
                },
                {
                    "@type": "WebPage",
                    "@id": "https://dai-ichi.vn/#webpage",
                    "url": "https://dai-ichi.vn/",
                    "name": "Trang Ch\u1ee7 - Dai-ichi HN214",
                    "datePublished": "2020-10-17T04:21:04+07:00",
                    "dateModified": "2021-03-12T17:18:16+07:00",
                    "isPartOf": {
                        "@id": "https://dai-ichi.vn/#website"
                    },
                    "inLanguage": "vi"
                },
                {
                    "@type": "Article",
                    "headline": "Trang Ch\u1ee7 - Dai-ichi HN214",
                    "datePublished": "2020-10-17T04:21:04+07:00",
                    "dateModified": "2021-03-12T17:18:16+07:00",
                    "author": {
                        "@type": "Person",
                        "name": "Nguy\u1ec5n Ti\u1ebfn"
                    },
                    "publisher": {
                        "@id": "https://dai-ichi.vn/#person"
                    },
                    "description": "",
                    "@id": "https://dai-ichi.vn/#richSnippet",
                    "isPartOf": {
                        "@id": "https://dai-ichi.vn/#webpage"
                    },
                    "inLanguage": "vi",
                    "mainEntityOfPage": {
                        "@id": "https://dai-ichi.vn/#webpage"
                    }
                }
            ]
        }</script>
    <link rel="alternate" type="application/rss+xml" title="Dòng thông tin Dai-ichi HN214 &raquo;"
          href="https://dai-ichi.vn/feed/"/>
    <link rel="alternate" type="application/rss+xml" title="Dòng phản hồi Dai-ichi HN214 &raquo;"
          href="https://dai-ichi.vn/comments/feed/"/>
    <style>img.wp-smiley, img.emoji {
            display: inline !important;
            border: none !important;
            box-shadow: none !important;
            height: 1em !important;
            width: 1em !important;
            margin: 0 .07em !important;
            vertical-align: -0.1em !important;
            background: none !important;
            padding: 0 !important
        }</style>
    <link rel='stylesheet' id='wp-block-library-css' href='../assets/css/style.min.css' media='all'/>
    <link rel='stylesheet' id='contact-form-7-css' href='../assets/css/styles-5.3.2.css' media='all'/>
    <link rel='stylesheet' id='sanpop-public-style-css' href='../assets/css/sanpop-public-style-1.1.css' media='all'/>
    <link rel='stylesheet' id='aia-style-css' href='../assets/css/style-1.0.0.css' media='all'/>
    <link rel='stylesheet' id='msl-main-css' href='../assets/css/masterslider.main-3.7.0.css' media='all'/>
    <link rel='stylesheet' id='msl-custom-css' href='../assets/css/custom-1.5.css' media='all'/>
    <style id='rocket-lazyload-inline-css'>.rll-youtube-player {
            position: relative;
            padding-bottom: 56.23%;
            height: 0;
            overflow: hidden;
            max-width: 100%
        }

        .rll-youtube-player iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 100;
            background: 0 0
        }

        .rll-youtube-player img {
            bottom: 0;
            display: block;
            left: 0;
            margin: auto;
            max-width: 100%;
            width: 100%;
            position: absolute;
            right: 0;
            top: 0;
            border: none;
            height: auto;
            cursor: pointer;
            -webkit-transition: .4s all;
            -moz-transition: .4s all;
            transition: .4s all
        }

        .rll-youtube-player img:hover {
            -webkit-filter: brightness(75%)
        }

        .rll-youtube-player .play {
            height: 72px;
            width: 72px;
            left: 50%;
            top: 50%;
            margin-left: -36px;
            margin-top: -36px;
            position: absolute;
            background: url(./assets/img/youtube.png) no-repeat;
            cursor: pointer
        }

        .wp-has-aspect-ratio .rll-youtube-player {
            position: absolute;
            padding-bottom: 0;
            width: 100%;
            height: 100%;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;</style>
    <script src='../assets/js/jquery.min-3.5.1.js' id='jquery-core-js'></script>
    <script src='../assets/js/jquery-migrate.min-3.3.2.js' id='jquery-migrate-js'></script>
    <link rel="https://api.w.org/" href="https://dai-ichi.vn/wp-json/"/>
    <link rel="alternate" type="application/json" href="https://dai-ichi.vn/wp-json/wp/v2/pages/8"/>
    <link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://dai-ichi.vn/xmlrpc.php?rsd"/>
    <link rel="wlwmanifest" type="application/wlwmanifest+xml" href="https://dai-ichi.vn/wp-includes/wlwmanifest.xml"/>
    <meta name="generator" content="WordPress 5.6.3"/>
    <link rel='shortlink' href='https://dai-ichi.vn/'/>
    <script>var ms_grabbing_curosr = 'https://dai-ichi.vn/wp-content/plugins/master-slider/public/assets/css/common/grabbing.cur',
            ms_grab_curosr = 'https://dai-ichi.vn/wp-content/plugins/master-slider/public/assets/css/common/grab.cur';</script>
    <meta name="generator" content="MasterSlider 3.7.0 - Responsive Touch Image Slider | avt.li/msf"/>
    <style>.recentcomments a {
            display: inline !important;
            padding: 0 !important;
            margin: 0 !important
        }</style>
    <link rel="icon" href="./assets/icon/cropped-to3rypcleg9nzytr3gpl-32x32.png"
          sizes="32x32"/>
    <link rel="icon" href="./assets/icon/cropped-to3rypcleg9nzytr3gpl-192x192.png"
          sizes="192x192"/>
    <link rel="apple-touch-icon"
          href="./assets/icon/cropped-to3rypcleg9nzytr3gpl-180x180.png"/>
    <meta name="msapplication-TileImage"
          content="./assets/icon/cropped-to3rypcleg9nzytr3gpl-270x270.png"/>
    <noscript>
        <style id="rocket-lazyload-nojs-css">.rll-youtube-player, [data-lazy-src] {
                display: none !important
            }</style>
    </noscript>
    <meta name="robots" content="follow, index"/>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bảo Hiểm Dai-ichi life Việt Nam</title>
    <link rel="icon" href="../image/cropped-to3rypcleg9nzytr3gpl-32x32.png" type="image/x-icon"/>
    <link rel="stylesheet" href="../assets/css/bootstrap.css">
    <link rel="stylesheet" href="../assets/css/style.css">
    <link rel="stylesheet" href="../assets/css/all.min.css">
    <link rel="stylesheet" type="text/css" href="../assets/css/slick-theme.css"/>
    <link rel="stylesheet" type="text/css" href="../assets/css/slick.css"/>
    <link rel="stylesheet" type="text/css" href="../assets/css/menu-mobile.css"/>
    <style type="text/css">ul#menu-mobile {
            width: 0;
            height: 0
        }

        nav#menu-mobile {
            z-index: 9999
        }</style>
</head>
<header>
    <div class="topbar">
        <div class="container">
            <div class="topbar-main">
                <div class="topbar-social">
                    <ul>
                        <li>
                            <a href="javascript:void(0)">
                                <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201%201'%3E%3C/svg%3E" data-lazy-src="../image/facebook@2x.png" alt="facebook">
                                <noscript><img src="../image/facebook@2x.png" alt="facebook"></noscript>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UC0qOfWon7JBVAs_DxQudvwQ">
                                <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201%201'%3E%3C/svg%3E" data-lazy-src="../image/youtube@2x.png" alt="youtube">
                                <noscript><img src="../image/youtube@2x.png" alt="youtube"></noscript>
                            </a>
                        </li>
                        <li>
                            <a href="https://zalo.me/0971120290">
                                <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201%201'%3E%3C/svg%3E" data-lazy-src="../image/Zalo@2x.png" alt="zalo">
                                <noscript><img src="../image/Zalo@2x.png" alt="zalo"></noscript>
                            </a></li>
                    </ul>
                </div>
                <div class="topbar-nav">
                    <ul>
                        <li><a href="../tuyen-dung/">Ứng tuyển</a></li>
                        <li><a href="../lien-he/">Liên hệ</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
	<div class="header-inner">
		<div class="site-branding show-<?php echo hello_elementor_get_setting( 'hello_header_logo_type' ); ?>">
			<?php if ( has_custom_logo() && ( 'title' !== hello_elementor_get_setting( 'hello_header_logo_type' ) || $is_editor ) ) : ?>
				<div class="site-logo <?php echo hello_show_or_hide( 'hello_header_logo_display' ); ?>">
					<?php the_custom_logo(); ?>
				</div>
			<?php endif;

			if ( $site_name && ( 'logo' !== hello_elementor_get_setting( 'hello_header_logo_type' ) || $is_editor ) ) : ?>
				<h1 class="site-title <?php echo hello_show_or_hide( 'hello_header_logo_display' ); ?>">
					<a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php esc_attr_e( 'Home', 'hello-elementor' ); ?>" rel="home">
						<?php echo esc_html( $site_name ); ?>
					</a>
				</h1>
			<?php endif;

			if ( $tagline && ( hello_elementor_get_setting( 'hello_header_tagline_display' ) || $is_editor ) ) : ?>
				<p class="site-description <?php echo hello_show_or_hide( 'hello_header_tagline_display' ); ?> ">
					<?php echo esc_html( $tagline ); ?>
				</p>
			<?php endif; ?>
		</div>

		<?php if ( $header_nav_menu ) : ?>
			<nav class="site-navigation <?php echo hello_show_or_hide( 'hello_header_menu_display' ); ?>" role="navigation">
				<?php echo $header_nav_menu; ?>
			</nav>
			<div class="site-navigation-toggle-holder <?php echo hello_show_or_hide( 'hello_header_menu_display' ); ?>">
				<div class="site-navigation-toggle">
					<i class="eicon-menu-bar"></i>
					<span class="elementor-screen-only">Menu</span>
				</div>
			</div>
			<nav class="site-navigation-dropdown <?php echo hello_show_or_hide( 'hello_header_menu_display' ); ?>" role="navigation">
				<?php echo $header_nav_menu; ?>
			</nav>
		<?php endif; ?>
	</div>
</header>
