<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP_login</title>

    <!-- css -->
    <link rel="stylesheet" href="../assets/css/reset_php.css">
    <link rel="stylesheet" href="../assets/css/style_php.css">
    <link rel="stylesheet" href="../assets/css/style_php2.css">
</head>

<body>
    <div id="wrap">
        <!-- header -->
        <?php
            include '../component/header.php';
        ?>
        <!-- //header -->

        <main id="main">
            <section id="login-cont">
                <?php
                    include '../connect/session.php';
                    
                    unset($_SESSION['memberID']);
                    unset($_SESSION['youNickName']);

                    echo "<div class='out'>로그아웃 되었습니다.<br><a href='../index3.html'>메인페이지로 이동</a></div>"
                ?>
            </section>
        </main>
        <!-- //main -->
    </div>
    <!-- //wrap -->
</body>

</html>