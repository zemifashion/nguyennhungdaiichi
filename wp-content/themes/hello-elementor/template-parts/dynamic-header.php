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

$header_nav_menu = wp_nav_menu( [
	'theme_location' => 'menu-1',
	'fallback_cb' => false,
	'echo' => false,
    'menu'                 => '',
    'container'            => '',
    'container_class'      => '',
    'container_id'         => '',
    'container_aria_label' => '',
    'menu_class'           => 'nav navbar-nav',
    'menu_id'              => 'main-menu',
    'before'               => '',
    'after'                => '',
    'link_before'          => '',
    'link_after'           => '',
    'items_wrap'           => '<ul id="%1$s" class="%2$s">%3$s</ul>',
    'item_spacing'         => 'preserve',
    'depth'                => 0,
    'walker'               => '',
]);
?>
<header>
    <div class="topbar">
        <div class="container">
            <div class="topbar-main">
                <div class="topbar-social">
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/DaiichiLife.TuVanBaoHiemChuyenNghiep/">
                                <img src="<?= get_template_directory_uri() ?>/image/facebook@2x.png" alt="facebook">
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UC0qOfWon7JBVAs_DxQudvwQ">
                                <img src="<?= get_template_directory_uri() ?>/image/youtube@2x.png" alt="youtube">
                            </a>
                        </li>
                        <li>
                            <a href="https://zalo.me/0879565666">
                                <img src="<?= get_template_directory_uri() ?>/image/Zalo@2x.png" alt="zalo">
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="topbar-nav">
                    <ul>
                        <li><a href="https://dai-ichi.vn/tuyen-dung/">Ứng tuyển</a></li>
                        <li><a href="https://dai-ichi.vn/lien-he/">Liên hệ</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="header-main">
        <nav class="navbar navbar-expand-md navbar-light main-nav">
            <div class="container">
                <div class="header-main__left">
                    <a href="#menu-mobile" class="menu-mobile icon-menu-mobile">
                        <i class="fa fa-bars"></i><span></span></a>
                    <a class="navbar-brand order-first order-md-0 mx-0 header-main__logo" href="/">
                        <img src="<?= get_template_directory_uri() ?>/image/dai-ichi-logo.png" alt="" width="200">
                    </a></div>
                <div class="header-main__right">
                    <div class="contact-box">
                        <div class="contact-box__icon"><i class="fas fa-envelope"></i></div>
                        <div class="contact-box__text"><strong><a href="mailto:btl.daiichivn@gmail.com">btl.daiichivn@gmail.com</a></strong>
                            <span>Gửi thông tin cho chúng tôi</span>
                        </div>
                    </div>
                    <div class="contact-box">
                        <div class="contact-box__icon"><i class="fas fa-phone-square-alt"></i></div>
                        <div class="contact-box__text"><strong><a href="tel:0879565666">0879 565 666</a></strong><span>Liên hệ nhanh cho chúng tôi</span>
                        </div>
                    </div>
                    <button class="btn btn-outline btn-apply text-uppercase"><a href="#"><?= __('Tham gia Dai-ichi')?></a></button>
                </div>
            </div>
        </nav>
    </div>
    <div id="navbar" class="header-bottom">
        <div class="container">
            <div class="collapse overlay navbar-collapse w-100" id="navbarSupportedContent">
                <div class="overlay-content header-bottom-flex w-100">
                    <?= $header_nav_menu ?>
                </div>
            </div>
        </div>
    </div>
</header>
