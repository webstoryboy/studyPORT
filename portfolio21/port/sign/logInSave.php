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
</head>

<body>
<header id="header" class="header_1">
        <div class="menuBtn"><a href="#"><span></span></a></div>
        <div class="logo"><a href="#">yoo-jung</a></div>
        <nav>
            <ul class="menuList">
                <li><a href="../pages/about.html">About</a></li>
                <li><a href="../pages/reference.html">Reference</a></li>
                <li><a href="../pages/youtube.html">Youtube</a></li>
                <li><a href="../pages/script.html">Script</a></li>
                <li><a href="../pages/contact.html">Contact</a></li>
            </ul>
            <ul class="menuList">
                <li><a href="../sign/signUp.php">signUp</a></li>
                <li><a href="../sign/logIn.php">login</a></li>
                <li><a href="../board/board.php">board</a></li>
            </ul>
        </nav>
    </header>
    <!-- /header -->
    
    <section id="login_save">
        <?php
            include '../connect/session.php';
            include '../connect/connect.php';

            $userEmail = $_POST['userEmail'];
            $userPW = $_POST['userPW'];

            //에러메세지 변수로 만들어 두기
            function goSignUpPage($alert){
                echo "<div class='signInfo'><p>{$alert}</p></div>";
                return;
            }

            //이메일 검사                    
            if( !filter_var($userEmail, FILTER_VALIDATE_EMAIL) ){
                goSignUpPage("이메일이 잘못되었습니다. <br> 올바른 이메일을 적어주세요!");
                exit;
            }

            //비밀번호 검사
            if($userPW == null || $userPW == ''){
                goSignUpPage('비밀번호를 입력해 주세요.');
                exit;
            }

            //데이터 입력 --> 데이터 검사 --> 데이터 보내기(보내려면 query문)
            $sql = "SELECT youEmail, youPw, youNickName, memberID FROM myMember2 ";
            $sql .= "WHERE youEmail = '{$userEmail}' AND youPw = '{$userPW}'";
            $result = $dbConnect -> query($sql);

            if( $result ){
                if( $result -> num_rows == 0 ){
                    goSignUpPage("로그인 정보가 일치하지 않습니다.");
                    exit;
                } else {
                    $memberInfo = $result -> fetch_array(MYSQLI_ASSOC);
                    $_SESSION['memberID'] = $memberInfo['memberID'];
                    $_SESSION['youNickName'] = $memberInfo['youNickName'];
                    Header("Location: http://ujjj.dothome.co.kr/port/index3.html");
                }
            } else {
                goSignUpPage("에러 : 관리자에게 문의하세요!");
            }
        ?>
    </section>
    <!-- /login-cont -->
</body>

</html>