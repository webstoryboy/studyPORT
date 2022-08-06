<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>setCookie.php</title>
</head>
<body>
    <?php
        setcookie('myCookie', 'cookie', time() + 10000, '/');
        if (isset($_COOKIE['myCookie'])) {
            echo '쿠키 생성 완료';
            echo "{$_COOKIE['myCookie']}";
        } else {
            echo '쿠기 생성 실패';
        }
    ?>
</body>
</html>