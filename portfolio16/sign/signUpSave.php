<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="author" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta property="og:type" content="website">
    <meta property="og:title" content="portfolio">
    <meta property="og:description" content="portfolio #재밌는 #시크한척 #꿈꾸는 #바보 #퍼블리셔 #나윤주">
    <meta name="description" content="portfolio #재밌는 #시크한척 #꿈꾸는 #바보 #퍼블리셔 #나윤주">
    <meta name="keywords" content="portfolio">
    <meta property="og:url" content="portfolio">
    <meta property="og:image" content="../assets/img/thumb.png">
    <link href="./assets/img/favicon.png" rel="shortcut icon">
    <title>나윤주 포트폴리오</title>

    <!-- 부트스트랩 -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
   
    <!-- 스타일 -->
    <link rel="stylesheet" href="../assets/css/reset.css">
    <!-- <link rel="stylesheet" href="assets/css/bootstrap-grid.css"> -->
    <link rel="stylesheet" href="../assets/css/style.css">
    
    <!-- js -->
    
    <script src="../assets/js/work.js"></script>
    

</head>

<body>
    <a href="../index.html" class="logo"></a>
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
    <a class="contact-btn" title="contact">Contact</a>

    <section class="sec1">
                      
<?php
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

    //이름이 한글로 구성되어 있는지 확인(정규식 표현법)
    $userNamePattern = '/^[가-힣]{1,}$/';
    if( !preg_match($userNamePattern, $userName, $matches )){
        errorAlert('한글로 이루어진 이름이 아닙니다.');
        exit;
    }

    //유효성 검사
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
   $userEmailClick = false;

   $sql = "SELECT youEmail FROM myMember WHERE youEmail = '{$userEmail}'";
   $result = $dbConnect -> query($sql);
   if($result){
       $count = $result -> num_rows;
       if($count == 0){
           $userEmailCheck = true;
       }else{
           errorAlert("이메일이 중복됩니다. 다시 한번 확인 해주세요!");
           exit;
       }
   }else{
       erroAlert("관리자에게 문의하세요! 에러발생");
       exit;
   }
   //닉네임 중복 검사
   $sql = "SELECT youNickName FROM myMember WHERE youNickName = '{$youNickName}'";
   $result = $dbConnect -> query($sql);
   if($result){
       $count = $result -> num_rows;
       if($count == 0){
           $userNickNameCheck = true;
       }else{
           errorAlert("이메일이 중복됩니다. 다시 한번 확인 해주세요!");
           exit;
       }
   }else{
       erroAlert("관리자에게 문의하세요! 에러발생");
       exit;
   }
//이메일도 중복안되고, 닉네임도 중복 안될때
if($userEmailCheck = true && $userNickNameCheck = true){
    $regTime = time();

    $sql = "INSERT INTO myMember(youEmail, youName, youNickName, youPW, youBirth, regTime) ";
    $sql .= "VALUES('{$userEmail}','{$userName}','{$userNickName}','{$userPW}','{$birth}',{$regTime})";
    $result = $dbConnect -> query($sql);
    if($result){
      $_SESSION['memberId'] =$dbConnect -> insert_id;
      $_SESSION['youNickName'] =$dbConnect -> insert_id;
      Header('Location:../main/index.html');
    }else{
        errorAlert("관리자에게 문의하세요.");
        exit;
    }
}else{
    errorAlert("이메일 또믄 닉네임이 존재합니다.");
    exit;
}

    
?>
    </section>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"
    integrity="sha256-lPE3wjN2a7ABWHbGz7+MKBJaykyzqCbU96BJWjio86U=" crossorigin="anonymous"></script>
  <!-- three js -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/108/three.min.js"
    integrity="sha256-3mBEX8I0uMLF7+AUjJeTCelosuorzYpqwBMBPDTyQqY=" crossorigin="anonymous"></script>

  <script>
    TweenMax.staggerFrom(".logo", 1.5, {
      delay: 0.5,
      opacity: 0,
      x: "-50",
      ease: Expo.easeInOut
    }, 0.08);

    // NAVBAR
    TweenMax.staggerFrom(".sidebar", 1.5, {
      delay: 1.5,
      opacity: 0,
      y: "20",
      ease: Expo.easeInOut
    }, 0.08);

    TweenMax.staggerFrom("header", 1.5, {
      delay: 0.5,
      opacity: 0,
      x: "20",
      ease: Expo.easeInOut
    }, 0.08);

    TweenMax.staggerFrom(".contact-btn", 1.5, {
      delay: 0.5,
      opacity: 0,
      y: "-20",
      ease: Expo.easeInOut
    }, 0.08);

    TweenMax.staggerFrom(".all-btn", 1.5, {
      delay: 0.7,
      opacity: 0,
      y: "20",
      ease: Expo.easeInOut
    });

    // TEXT......
    TweenMax.from(".text h1 .hide-text.i1", 1.5, {
      delay: 0,
      y: "100%",
      ease: Expo.easeInOut
    });

    TweenMax.from(".text h1 .hide-text.i2", 1.5, {
      delay: 0.1,
      y: "100%",
      ease: Expo.easeInOut
    });

    TweenMax.from(".text h1 .hide-text.i3", 1.5, {
      delay: 0.2,
      y: "100%",
      ease: Expo.easeInOut
    });

    TweenMax.from(".text h1 .hide-text.i4", 1.5, {
      delay: 0.3,
      y: "100%",
      ease: Expo.easeInOut
    });
    //

    TweenMax.from(".right-sec", 1.5, {
      delay: 0.5,
      opacity: 0,
      y: "20",
      ease: Expo.easeInOut
    });

   
    TweenMax.from(".top-sec", 1.5, {
      delay: 0.5,
      opacity: 0,
      y: "20",
      ease: Expo.easeInOut
    });

    TweenMax.from(".scroll-btn", 1.5, {
      delay: 0.5,
      x: "100",
      ease: Expo.easeInOut
    });

    TweenMax.from(".name", 1.5, {
      delay: 0.6,
      opacity: 0,
      y: "20",
      ease: Expo.easeInOut
    });

 

  </script>
</body>
</html>
