<?php
/**
 * Cấu hình cơ bản cho WordPress
 *
 * Trong quá trình cài đặt, file "wp-config.php" sẽ được tạo dựa trên nội dung 
 * mẫu của file này. Bạn không bắt buộc phải sử dụng giao diện web để cài đặt, 
 * chỉ cần lưu file này lại với tên "wp-config.php" và điền các thông tin cần thiết.
 *
 * File này chứa các thiết lập sau:
 *
 * * Thiết lập MySQL
 * * Các khóa bí mật
 * * Tiền tố cho các bảng database
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Thiết lập MySQL - Bạn có thể lấy các thông tin này từ host/server ** //
/** Tên database MySQL */
define( 'DB_NAME', 'nhungdaichi' );

/** Username của database */
define( 'DB_USER', 'nhungdaichi' );

/** Mật khẩu của database */
define( 'DB_PASSWORD', 'Hanoi1989#' );

/** Hostname của database */
define( 'DB_HOST', 'localhost' );

/** Database charset sử dụng để tạo bảng database. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Kiểu database collate. Đừng thay đổi nếu không hiểu rõ. */
define('DB_COLLATE', '');

/**#@+
 * Khóa xác thực và salt.
 *
 * Thay đổi các giá trị dưới đây thành các khóa không trùng nhau!
 * Bạn có thể tạo ra các khóa này bằng công cụ
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * Bạn có thể thay đổi chúng bất cứ lúc nào để vô hiệu hóa tất cả
 * các cookie hiện có. Điều này sẽ buộc tất cả người dùng phải đăng nhập lại.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'voh/7Y5Fa7A:0(g3D2qsrG >/}H&NvjJPV!y#bmBR~N}5P6m`m*$fKpP.6DO~H@a' );
define( 'SECURE_AUTH_KEY',  '-C.ZQ9aAVLW/`nZu??I<XqL9x1|p]?pH;9[Vp<g-w*!;^i C`lvMLHke<i$?11YM' );
define( 'LOGGED_IN_KEY',    'F@0|!2FTwZP +]^[k{oC? GC;QUg};K.2X.(&k*; !V~)f/KOL7a:~rh@;^Em#}W' );
define( 'NONCE_KEY',        '4SwrYz0En:x<Ea)($gLXPLnrb>ut6WORgF);rOR@pW&p[*nf3[4:t>(0Pb]sNnKr' );
define( 'AUTH_SALT',        'wb5a=Jq8]|i5Qp]3[z4&%;g_oRyGq}&d{q-KEgh(smnE2t`LAVcus;v&S<3jkbjM' );
define( 'SECURE_AUTH_SALT', ':;>2MYz, <]-9TYtzXg*zX#p{wj+`v:`.cpG&IVJXaunG=~j`/:ArF/XIy.2BsP?' );
define( 'LOGGED_IN_SALT',   'FB].3=uF:_*D{3e;nm,H{n(n5R3%t|s_vZ4M}7|b?8!SJxXHMYrY)oO9siLhe]R|' );
define( 'NONCE_SALT',       'b=QV=K>Ml9k?D:A!6=%F=t~F)pT/Q-%ak,KQjUp5HD~.{,qnznX;J-w>lYkGjBx/' );

/**#@-*/

/**
 * Tiền tố cho bảng database.
 *
 * Đặt tiền tố cho bảng giúp bạn có thể cài nhiều site WordPress vào cùng một database.
 * Chỉ sử dụng số, ký tự và dấu gạch dưới!
 */
$table_prefix = 'wp_';

/**
 * Dành cho developer: Chế độ debug.
 *
 * Thay đổi hằng số này thành true sẽ làm hiện lên các thông báo trong quá trình phát triển.
 * Chúng tôi khuyến cáo các developer sử dụng WP_DEBUG trong quá trình phát triển plugin và theme.
 *
 * Để có thông tin về các hằng số khác có thể sử dụng khi debug, hãy xem tại Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* Đó là tất cả thiết lập, ngưng sửa từ phần này trở xuống. Chúc bạn viết blog vui vẻ. */

/** Đường dẫn tuyệt đối đến thư mục cài đặt WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Thiết lập biến và include file. */
require_once(ABSPATH . 'wp-settings.php');
