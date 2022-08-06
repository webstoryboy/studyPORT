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
                <a href="../../index3.html" name="home"><span>Yeong's</span></a>
            </div>
             <!-- 회원가입 로그인 게시판 -->
             <?php 
                include '../include/header.php';
             ?>
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
                        <li><a href="javascript:navLink1()">home</a></li>
                        <li><a href="javascript:navLink2()">about</a></li>
                        <li><a href="javascript:navLink3()">portfolio</a></li>
                        <li><a href="javascript:navLink4()">contact</a></li>
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
            <?php 
                include '../connect/connect.php';
                include '../connect/session.php';

                // echo $_POST['userEmail'], "<br>";
                // echo $_POST['userPW'], "<br>";

                $userEmail = $_POST['userEmail'];
                $userPW = $_POST['userPW'];

                //에러 : 경고창
                function errorAlert($alert){
                    echo "<div class='errorAlert'>{$alert}<a href='signUp.php'>회원가입 다시하기</a><a href='logIn.php'>로그인 하기</a></div>";
                    return;
                }

                //이메일 검사
                if( !filter_Var($userEmail, FILTER_VALIDATE_EMAIL) ){
                    errorAlert('올바른 이메일이 아닙니다.');
                    exit;
                }

                //이메일 데이터 확인
                $sql = "SELECT youEmail, youPW, youNickName, memberID FROM portMember ";  //정보가져오기
                $sql .= "WHERE youEmail = '{$userEmail}' AND youPW = '{$userPW}'";  //같은정보가 있는지 확인
                $result = $dbConnect -> query($sql);

                if( $result ){
                    if( $result -> num_rows == 0 ){
                        //회원가입안되있을때
                        errorAlert('로그인 정보가 일치하지 않습니다.');
                    } else {
                        $memberInfo = $result -> fetch_array(MYSQLI_ASSOC);  //모든정보를 가져옴
                        $_SESSION['memberID'] = $memberInfo['memberID'];      // 모든정보가져와서 섹션생성
                        $_SESSION['youNickName'] = $memberInfo['youNickName'];
                        Header('Location: ../../index3.html');                 //메인의 인덱스로 넘어감
                    }
                }  else {
                    errorAlert('에러발생: 로그인 관리자에게 문의하세요!');
                    exit;
                }
            ?>
        </section>
        <!-- //section1 -->
    </main>
    <script src="../js/phpscript.js"></script>
</body>
</html>