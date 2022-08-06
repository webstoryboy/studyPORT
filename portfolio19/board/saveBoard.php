<?php
include '../connect/connect.php';
include '../connect/session.php';

// include '../connect/checkSession.php';
?>

<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>HYO JU DEV</title>

    <!-- 문서 형식 설정 -->
    <meta http-equiv="Content-Script-Type" content="text/javascript">
    <meta http-equiv="Content-Style-Type" content="text/css">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <!-- SEO -->
    <meta name="author" content="hyojudev">
    <meta name="description" content="프론트 엔트 개발자 한효주 포트폴리오 사이트입니다.">
    <meta name="keywords" content="리액트, 포트폴리오, 웹표준, 웹접근성, 사이트만들기, 포트폴리오, 프론트엔드, 개발자한효주">
    <meta name="robots" content="all">

    <!-- facebook -->
    <meta property="og:url" content="#">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Hyojudev Portfolio App">
    <meta property="og:description" content="프론트 엔트 개발자 한효주 포트폴리오 사이트입니다.">
    <meta property="og:image" content="#">

    <!-- twitter -->
    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="React Portfolio App">
    <meta name="twitter:url" content="#">
    <meta name="twitter:image" content="#">
    <meta name="twitter:description" content="프론트 엔트 개발자 한효주 포트폴리오 사이트입니다.">

    <!-- Mobile -->
    <meta name="theme-color" content="#000000" />
    <meta name="apple-mobile-web-app-title" content="Portfolio">
    <meta name="apple-mobile-web-app-capable" content="yes">

    <!-- 아이콘 -->
    <link rel="icon" href="/favicon.ico" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="manifest" href="/manifest.json">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">

    <!-- Webfonts -->
    <link href="https://fonts.googleapis.com/css2?family=Italiana&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Nixie+One&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="//cdn.jsdelivr.net/font-iropke-batang/1.2/font-iropke-batang.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300;400&display=swap" rel="stylesheet">


    <!-- CSS Style -->
    <link rel="stylesheet" href="../assets/css/reset.css">
    <link rel="stylesheet" href="../assets/css/style.css">

</head>

<body>

    <noscript>페이지를 보려면 자바스크립트 옵션이 활성화 되어 있어야 합니다. You need to enable JavaScript to run this app.</noscript>

    <!-- header -->
    <header>
        <div class="other-project-btn">
            <a target="_blank" href="http://hyojudev.dothome.co.kr/port03/pages/index.html"></a>
        </div>
        <div class="nav-bg">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <nav class="main-menu">
            <li class="main-menu__link"><a href="../pages/home.html">home</a></li>
            <li class="main-menu__link"><a href="../pages/about.html">about</a></li>
            <li class="main-menu__link"><a href="../pages/projects.html">projects</a></li>
            <li class="main-menu__link"><a href="../pages/script.html">script</a></li>
            <li class="main-menu__link menu-active"><a href="../board/board.php">board</a></li>
            <li class="main-menu__link"><a href="../pages/contact.html">contact</a></li>
        </nav>
        <ul class="sign-menu">
            <?php if (isset($_SESSION['memberID'])) { ?>
            <li><a href="#">
                    <?= $_SESSION['youNickName'] ?>님👻
                </a></li>
            <li><a href="../sign/logOut.php">LOGOUT</a></li>
            <?php } else { ?>
            <li><a href="../sign/logIn.php">LOGIN</a></li>
            <li><a href="../sign/signUp.php">SIGNUP</a></li>
            <?php } ?>
        </ul>
        <div class="mobile-menu">
            <div class="hamburger">
                <div class="ham__bar1"></div>
                <div class="ham__bar2"></div>
            </div>
        </div>
    </header>
    <!-- //header -->

    <main>
        <!-- boardCont -->
        <section id="boardCont">
            <div class="container">
                <div class="saveBoard">
                    <?php
                    // writeBoard.php 의 정보 가져오기
                    $boardTitle = $_POST['boardTitle'];
                    $boardContent = $_POST['boardContent'];

                    // 특수기호 같은 거 적었을 때 오류나는 것 막아줌
                    if ($boardTitle != null && $boardTitle != '') {
                        $boardTitle = $dbConnect->real_escape_string(
                            $boardTitle
                        );
                    }

                    // 컨텐츠에 아무 글도 없으면 넘어가지 않게!
                    if ($boardContent != null && $boardContent != '') {
                        // 오류 방지
                        $boardContent = $dbConnect->real_escape_string(
                            $boardContent
                        );
                    }

                    // 게시글 작성 시간 전달해주기
                    $memberID = $_SESSION['memberID'];
                    $regTime = time();

                    //데이터 넣기
                    $sql =
                        'INSERT INTO myPortBoard(memberID, boardTitle, boardContent, regTime) ';
                    $sql .= "VALUES('{$memberID}', '{$boardTitle}', '{$boardContent}', {$regTime})";

                    // 전송하기
                    $result = $dbConnect->query($sql);

                    if ($result) {
                        echo "<div class='info'><p>📢<br />저장이 완료되었습니다.</p><a href='board.php'>게시판 목록으로 이동하기</a></div>";
                        exit();
                    } else {
                        echo "<div class='info'><p>📢<br />저장이 실패되었습니다.</p><a href='writeBoard.php'>게시판 작성하기</a></div>";
                        exit();
                    }
                    ?>
                </div>
            </div>
        </section>
        <!-- //boardCont -->    
    </main>

      <!-- Script -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/ScrollTrigger.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.min.js"></script>

    <script src="../assets/js/script.js"></script>
    <script src="../assets/js/menu.js"></script>
</body>

</html>