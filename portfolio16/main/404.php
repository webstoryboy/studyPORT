<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="author" content="webstoryboy">
    <meta name="description" content="웹스토리보이 포트폴리오 사이트입니다.">
    <meta name="keywords" content="웹표준, 웹접근성, 사이트만들기, 포트폴리오, 웹스토리보이">
    <title>Portfolio</title>

    <!-- CSS Style -->
    <link rel="stylesheet" href="../assets/css/reset.css">
    <link rel="stylesheet" href="../assets/css/style.css">

    <!-- webfonts -->
    <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap"
        rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Playfair+Display:700,900" rel="stylesheet">
</head>

<body>
    <!-- skip -->
    <div id="skip">
        <a href="#mainCont">로그인 바로가기</a>
    </div>
    <!-- //skip -->

    <!-- header -->
    <header id="header" class="black">
        <?php
            include '../component/header.php';
        ?>
    </header>
    <!-- //header -->

    <main>
        <!-- mainCont -->
        <section id="mainCont">
            <div class='errorAlert'>
                <h2>잘못된 경로입니다. 다시한번 확인해주세요!!</h2>
                <a href='../main/index.html'>메인 페이지로 이동하기</a>
                <a href='../sign/signUp.php'>회원가입</a>
                <a href='../sign/logIn.php'>로그인</a>
                <a href='../board/writeBoard.php'>글 작성하기</a>                
                <a href='../board/board.php'>글 작성하기</a>
            </div>

        </section>
        <!-- <!— //mainCont —> -->
    </main>
</body>

</html>