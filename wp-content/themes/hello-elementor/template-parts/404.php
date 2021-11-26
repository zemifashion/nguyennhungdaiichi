<?php
/**
 * The template for displaying 404 pages (not found).
 *
 * @package HelloElementor
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
?>
<main class="site-main" role="main">
	<?php if ( apply_filters( 'hello_elementor_page_title', true ) ) : ?>
        <div id="notfound">
            <div class="notfound">
                <div class="notfound-404">
                    <h1>404</h1>
                </div>
                <h2>Xin lỗi, trang bạn tìm kiếm không tồn tại!</h2>
                <a href="/"><span class="arrow"></span>Quay lại trang chủ</a>
            </div>
        </div>
	<?php endif; ?>
</main>
