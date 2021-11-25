<?php
/**
 * The template for displaying footer.
 *
 * @package HelloElementor
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$is_editor = isset( $_GET['elementor-preview'] );
$site_name = get_bloginfo( 'name' );
$tagline   = get_bloginfo( 'description', 'display' );
$footer_class = did_action( 'elementor/loaded' ) ? esc_attr( hello_get_footer_layout_class() ) : '';
$footer_nav_menu = wp_nav_menu( [
	'theme_location' => 'menu-2',
	'fallback_cb' => false,
	'echo' => false,
] );
?>
<footer style="margin-bottom: -35px">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="footer-main">
                    <div class="footer-left-logo">
                        <img src="<?= get_template_directory_uri() ?>/image/dai-ichi-logo.png" width="200" alt="">
                    </div>
                    <div class="footer-right"><p><strong>Liên hệ với Dai-ichi</strong> - Thông qua số HOTLINE</p><p style="color: white">0971120290</p></div>
                </div>
            </div>
            <div class="col-md-12">
                <div class="footer-bottom">
                    <div class="row">
                        <div class="col-md-4"><h4 class="footer-bottom__title">Liên hệ</h4>
                            <ul>
                                <li><i class="fas fa-phone-alt"></i>Số điện thoại:&nbsp<a href="tel:0971120290"><strong><a
                                                    href="tel:0971120290">0971120290</a></strong></a></li>
                                <li><i class="fas fa-envelope"></i>Email:&nbsp<a href="baohiem.daiichilifehanoi1@gmail.com">baohiem.daiichilifehanoi1@gmail.com</a>
                                </li>
                                <li><i class="fas fa-map-marker-alt"></i>Địa chỉ: Tầng 24, tòa Viwaseen Tower, 48 Tố Hữu, Trung Văn, Nam Từ Liêm, Hà Nội</li>
                            </ul>
                        </div>
                        <div class="col-md-2"><h4 class="footer-bottom__title">Về Dai-ichi</h4>
                            <ul>
                                <li><a href="/">Trang Chủ</a></li>
                                <li><a href="/tuyen-dung/">Tuyển dụng</a></li>
                            </ul>
                        </div>
                        <div class="col-md-2"><h4 class="footer-bottom__title">Sản phẩm</h4>
                            <ul>
                                <li><a href="/san-pham/">Sản phẩm</a></li>
                                <li><a href="/gioi-thieu/">Giới Thiệu</a></li>
                            </ul>
                        </div>
                        <div class="col-md-4"><h4 class="footer-bottom__title">Liên kết nhanh</h4>
                            <?= $footer_nav_menu; ?>
                            <div class="topbar-social">
                                <ul>
                                    <li><a href="javascript:void(0)"><img src="<?= get_template_directory_uri() ?>/image/facebook@2x.png" alt="facebook"></a></li>
                                    <li><a href="javascript:void(0)"><img src="<?= get_template_directory_uri() ?>/image/instagram@2x.png" alt="instagram"></a></li>
                                    <li><a href="javascript:void(0)"><img src="<?= get_template_directory_uri() ?>/image/linkedin@2x.png" alt="linkedin"></a></li>
                                    <li><a href="javascript:void(0)"><img src="<?= get_template_directory_uri() ?>/image/youtube@2x.png" alt="youtube"></a></li>
                                    <li><a href="javascript:void(0)"><img src="<?= get_template_directory_uri() ?>/image/Zalo@2x.png" alt="zalo"></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?php if ( '' !== hello_elementor_get_setting( 'hello_footer_copyright_text' ) || $is_editor ) : ?>
        <div class="copy-right <?php echo hello_show_or_hide( 'hello_footer_copyright_display' ); ?>">
            <span><?php echo hello_elementor_get_setting( 'hello_footer_copyright_text' ); ?></span>
        </div>
    <?php endif; ?>
</footer>
