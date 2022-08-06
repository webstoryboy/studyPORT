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
    <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Playfair+Display:700,900" rel="stylesheet">
</head>
<body>
    <!-- skip -->
    <div id="skip">
        <a href="#mainCont">로그인 바로가기</a>
    </div>
    <!-- //skip -->

    <!-- header -->
    <header>
        <nav>
            <span class="title">I create digital awesomeness.</span>
            <div class="nav-right float-right">
                <a href="#" class="login" data-toggle="modal" data-target="#login-modal">로그인</a>
                <a href="../board/board.php" class="board">게시판</a>
            </div>
        </nav>
    </header>
    
    <aside class="sidebar">
        <button class="side-menu-btn">
            <span class="text">menu</span>
            <span></span>
        </button>
    </aside>
    <div class="all-btn" title="전체보기">전체보기</div>
    <span class="scroll-btn">SCROLL</span>
    <a class="contact-btn" title="contact">Contact</a>
    <!-- //header -->

    <main>
        <!-- mainCont -->
        <section id="mainCont">
           
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
    $sql = "SELECT youEmail, youPW, youNickName, memberID FROM myMember ";
    $sql .= "WHERE youEmail = '{$userEmail}' AND youPW = '{$userPW}'";
    $result = $dbConnect -> query($sql);

    if( $result ){
        if( $result -> num_rows == 0 ){
            errorAlert('로그인 정보가 일치하지 않습니다.'); 
        } else {
            $memberInfo = $result -> fetch_array(MYSQLI_ASSOC);
            $_SESSION['memberID'] = $memberInfo['memberID'];
            $_SESSION['youNickName'] = $memberInfo['youNickName'];
            Header('Location: ../main/index.html');
        }
    } else {
        errorAlert('에러 발생: 관리자에게 문의하세요!(4)'); 
        exit;
    }
?>

        </section>
        <!-- <!— //mainCont —> -->
    </main>
    <!-- footer -->
    <?php
        include '../component/footer.php';
    ?>
    <!-- //footer -->
</body>
</html>