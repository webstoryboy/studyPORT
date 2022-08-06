<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="author" content="yeong">
    <meta name="descirption" content="개인 포트폴리오 사이트 입니다.">
    <meta name="keywords" content="publisher, portfolio">
    <meta name="generator" content="visual studio">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Login</title>

    <!-- css -->
    <link rel="stylesheet" href="../css/reset.css">
    <link rel="stylesheet" href="../css/header.css">
    <link rel="stylesheet" href="../css/nav.css">
    <link rel="stylesheet" href="../css/login.css">

    <!-- 폰트어썸 -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
</head>
<body>
    <header>
        <div id="header">
            <div class="logo">
                <a href="http://www.yjshop.net/port/index3.html" name="home"><span>Yeong's</span></a>
            </div>
             <!-- 회원가입 로그인 게시판 -->
             <div class="sign">
                <ul>
                    <li><a href="http://www.yjshop.net/port/assets/sign/signUp.html"><i class="fa fa-user-plus" aria-hidden="true"></i>회원가입</a></li>
                    <li><a href="#none"><i class="fa fa-sign-in" aria-hidden="true"></i>로그인</a></li>
                    <li><a href="#none"><i class="fa fa-list-alt" aria-hidden="true"></i>게시판</a></li>
                </ul>
            </div>
            <nav class="menu">
                <div class="nav">
                    <div class="nav-background">
                        <div class="nav-bg nav-bg1"></div>
                        <div class="nav-bg nav-bg2"></div>
                        <div class="nav-bg nav-bg3"></div>
                        <div class="nav-bg nav-bg4"></div>
                    </div>
                    <h2 class="blind">메인 메뉴</h2>
                    <ul>
                        <li><a href="../../index3.html#main">home</a></li>
                        <li><a href="../../index3.html#about">about</a></li>
                        <li><a href="../../index3.html#port2T">portfolio</a></li>
                        <li><a href="../../index3.html#contact">contact</a></li>
                    </ul>
                </div>
                <div class="menu-line">
                    <div class="hamburger">
                        <span class="line"></span>
                        <span class="line"></span>
                        <span class="line"></span>
                    </div>
                    <div class="hamburger-close">
                    </div>
                </div>
            </nav>
        </div> 
    </header>
    <main id="contents">
        <section id="section1">
            <div class="container">
            <?php
                // 1. 데이터베이스 접속 -> 세션 
                include '../connect/connect.php';
                include '../connect/session.php';

                // echo $_POST['userEmail'], "<br>";
                // echo $_POST['userName'], "<br>";
                // echo $_POST['userNickName'], "<br>";
                // echo $_POST['userPW'], "<br>";
                // echo $_POST['birthYear'], "<br>";
                // echo $_POST['birthMonth'], "<br>";
                // echo $_POST['birthDay'], "<br>";

                $userEmail = $_POST['userEmail'];
                $userName = $_POST['userName'];
                $userNickName = $_POST['userNickName'];
                $userPW = $_POST['userPW'];
                $birthYear = $_POST['birthYear'];
                $birthMonth = $_POST['birthMonth'];
                $birthDay = $_POST['birthDay'];

                function errorAlert($alert){
                    echo "<div class='errorAlert'>{$alert}<a href='signUp.php'>회원가입 다시하기</a><a href='logIn.php'>로그인 바로가기</a></div>";
                    return;
                }

                //이메일 검사
                if( !filter_Var($userEmail, FILTER_VALIDATE_EMAIL) ){
                    errorAlert('올바른 이메일이 아닙니다.');
                    exit;
                }
                //이름검사
                $userNamePattern = '/^[가-힣]{1,}$/';  //정규식표현법
                if( !preg_match($userNamePattern, $userName, $matches )){
                    errorAlert('한글로 이루어진 이름이 아닙니다.');
                    exit;
                }
                //닉네임 특수기호
                if( $userNickName != null && $userNickName != '' ){  
                    $userNickName = $dbConnect -> real_escape_string($userNickName);   //(오류 방지 메서드)
                }
                //유효성검사
                if( $userName == null || $userName == '' ){
                    errorAlert('이름을 입력해주세요!!');
                    exit;
                }
                if( $userNickName == null || $userNickName == '' ){
                    errorAlert('닉네임을 입력해주세요!!');
                    exit;
                }
                if( $userPW == null || $userPW == '' ){
                    errorAlert('패스워드를 입력해주세요!!');
                    exit;
                }
                if( $birthYear == 0 ){
                    errorAlert('생일 년도를 선택해 주세요');
                    exit;
                }
                if( $birthMonth == 0 ){
                    errorAlert('생일 월을 선택해 주세요');
                    exit;
                }
                if( $birthDay == 0 ){
                    errorAlert('생일 일을 선택해 주세요');
                    exit;
                }
                $birth = $birthYear.'-'.$birthMonth.'-'.$birthDay;

                //이메일 중복 검사
                $userEmailCheck = false;

                $sql = "SELECT youEmail FROM portMember WHERE youEmail = '{$userEmail}'";
                $result = $dbConnect -> query($sql);

                if( $result ){
                    $count = $result -> num_rows;  //num_rows메서드

                    if( $count == 0 ){
                        $userEmailCheck = true;
                    } else {
                        errorAlert("이메일이 중복됩니다.");
                        exit;
                    }
                } else {
                    errorAlert("관리자에게 문의하세요1");
                    exit;
                }

                //닉네임 중복 검사
                $userNickNameCheck = false;

                $sql = "SELECT youNickName FROM portMember WHERE youNickName = '{$userNickName}'";
                $result = $dbConnect -> query($sql);

                if( $result ){
                    $count = $result -> num_rows;  //num_rows메서드

                    if( $count == 0 ){
                        $userNickNameCheck = true;
                    } else {
                        errorAlert("닉네임이 중복됩니다.");
                        exit;
                    }
                } else {
                    errorAlert("관리자에게 문의하세요2");
                    exit;
                }

                //중복 없을 때 회원가입
                if( $userEmailCheck = true && $userNickNameCheck = true ){
                    $regTime = time();
                    //db테이블에 정보 넣기
                    $sql = "INSERT INTO portMember(youEmail, youName, youNickName, youPW, youBirth, regTime) ";
                    $sql .= "VALUES('{$userEmail}','{$userName}','{$userNickName}','{$userPW}','{$birth}',{$regTime})";
                    $result = $dbConnect -> query($sql);

                    if( $result ){
                        $_SESSION['memberID'] = $dbConnect -> insert_id; //id값 가져오기
                        $_SESSION['youNickName'] = $userNickName;
                        Header('Location: logIn.php'); //위치이동
                    } else {
                        errorAlert("관리자에게 문의하세요3");
                        exit;
                    }
                } else {
                    errorAlert("이메일과 닉네임이 존재합니다.");
                    exit;
                }
            ?>
            </div>
        </section>
        <!-- //section1 -->
    </main>
    <script src="../js/phpscript.js"></script>
</body>
</html>