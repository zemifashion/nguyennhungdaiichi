<?php
define( 'WP_CACHE', true ); // Added by WP Rocket

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
define( 'AUTH_KEY',         '@E=naP& x^~$<5J9S1pQA!B65r!$0E;zfSZ$_MLF.v5zQ1l_[Qwosr7j$50-~?/U' );
define( 'SECURE_AUTH_KEY',  'geqfOA_{/!G,n-^S))J ``E&d/SqmFbdQ_+N&W5^#ChT-}x2O!HuPr3i,>Sy_r3N' );
define( 'LOGGED_IN_KEY',    ',9_}hH|=O0D0lhwL{_0i}1Da^@O70Q@Rw,R|,wEhf*F_wtsp5}HttT,St75jGEvW' );
define( 'NONCE_KEY',        '4:A@ZauWfZ7m=m8#bggO/EOR,|`Fb-U*b!E}ed^5MjiY*_RSEVm;ur:kUiGoW?g=' );
define( 'AUTH_SALT',        'DGIC[/})5g=b9Ei&JGOR|Kpw-mju!cA;N,+!Re>3muve5;ji#H]6AB~[]i2(n~kp' );
define( 'SECURE_AUTH_SALT', '8+7Gy23Ui`ux:6h*Z!Fm#$[j58dvlVf}W5st h4jn0AjRm2:hWoRcwq3w!Oyo&*p' );
define( 'LOGGED_IN_SALT',   '?Msk*S$Etyzq^(tGNdumt>|C`T)n|-du ]ej[*a(Jj4.e!)HnKno)0,&Lpk_Jy(}' );
define( 'NONCE_SALT',       'ntVQ$y<9?rGLIl@#V$W!_8ge{Bs^-}3Z[#:3ZbSVrT5D<KQ+5UPb{XH4>H-!~EWH' );

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
