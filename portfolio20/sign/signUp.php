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
    <link href="https://fonts.googleapis.com/css2?family=Italiana&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Nixie+One&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="//cdn.jsdelivr.net/font-iropke-batang/1.2/font-iropke-batang.css" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet" />

    <!-- CSS Style -->
    <link rel="stylesheet" href="../assets/css/reset.css" />
    <link rel="stylesheet" href="../assets/css/style.css" />
</head>

<body>

    <noscript>페이지를 보려면 자바스크립트 옵션이 활성화 되어 있어야 합니다. You need to enable JavaScript to run this app.</noscript>

    <!-- header -->
    <header id="header">
        <a href="../pages/index.html" class="logo">hyoju</a>
        <div class="menu-wrap">
            <div class="hamburger">
                <div class="ham__bar1"></div>
                <div class="ham__bar2"></div>
            </div>
            <nav class="navigation">
                <div class="nav-radial">
                    <div class="nav-menu-wrap">
                        <ul class="main-menu">
                            <li class="main-menu__link">
                                <a href="../pages/index.html" class="main-split">home</a>
                            </li>
                            <li class="main-menu__link">
                                <a href="../pages/index.html" class="main-split">about</a>
                            </li>
                            <li class="main-menu__link">
                                <a href="../pages/index.html" class="main-split">project</a>
                            </li>
                            <li class="main-menu__link">
                                <a href="../pages/index.html" class="main-split">contact</a>
                            </li>
                        </ul>
                        <ul class="sign-menu">
                            <?php if (isset($_SESSION['memberID'])) { ?>
                            <li class="youNickName sign-menu__link"><?= $_SESSION[
                                'youNickName'
                            ] ?> 님</li>
                            <li class="sign-menu__link"><a href="../sign/logOut.php">logOut</a></li>
                            <?php } else { ?>
                            <li class="sign-menu__link"><a href="../sign/logIn.php">logIn</a></li>
                            <li class="sign-menu__link"><a href="../sign/signUp.php">signUp</a></li>
                            <?php } ?>
                        <li class="sign-menu__link"><a href="../board/board.php">board</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <div>protfolio</div>
    </header>
    <!-- //header -->

    <!-- main -->
   
    <main>
        <!-- signUpCont -->
        <section id="signUpCont">
            <div class="signUp">
                <h1><strong>HYOJUDEV PORTFOLIO</strong> 사이트에 오신걸 환영합니다 :)</h1>
                <form name="signUp" method="post" action="signUpSave.php">
                    <fieldset>
                        <legend class="sr-only">회원 가입 폼입니다.</legend>
                        <div>
                            <label for="userEmail" class="sr-only">이메일</label>
                            <input type="email" name="userEmail" id="userEmail" class="input-text" placeholder="이메일" required autofocus>
                        </div>
                        <div>
                            <label for="userName" class="sr-only">이름</label>
                            <input type="text" name="userName" id="userName" class="input-text" placeholder="이름" required>
                        </div>
                        <div>
                            <label for="userNickName" class="sr-only">닉네임</label>
                            <input type="text" name="userNickName" id="userNickName" class="input-text" placeholder="닉네임" required>
                        </div>
                        <div>
                            <label for="userPW" class="sr-only">패스워드</label>
                            <input type="text" name="userPW" id="userPW" class="input-text" placeholder="패스워드" required>
                        </div>
                        <div class="birth">
                            <div>
                                <label for="birthYear">년도</label>
                                <select name="birthYear" id="birthYear" required>
                                    <?php
                                    $birthYear = date('Y', time());

                                    for ($i = $birthYear; $i >= 1930; $i--) {
                                        echo "<option>{$i}</option>";
                                    }
                                    ?>
                                </select>
                            </div>                            
                            <div>
                                <label for="birthMonth">월</label>
                                <select name="birthMonth" id="birthMonth" required>
                                <?php for ($i = 1; $i <= 12; $i++) {
                                    echo "<option value='{$i}'>{$i}</option>";
                                } ?>
                                </select>
                            </div>
                            <div>
                                <label for="birthDay">일</label>
                                <select name="birthDay" id="birthDay" required>
                                <?php for ($i = 1; $i <= 31; $i++) {
                                    echo "<option value='{$i}'>{$i}</option>";
                                } ?>
                                </select>
                                
                            </div>
                        </div>
                        <button class="signUpBtn" type="submit" value="회원가입">회원가입</button>
                        <p class="signDesc">로그인을 원하면? <a href="logIn.php">로그인</a></p>
                    </fieldset>
                </form>
            </div>
        </section>
        <!--— //signUpCont -->
    </main>
    <!-- //main -->

    <!-- script -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <!-- <script src="https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js"></script> -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/ScrollTrigger.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.min.js"></script>

    <script src="../assets/js/scroll.js"></script>
    <script src="../assets/js/script.js"></script>
    <!-- //script -->
</body>

</html>