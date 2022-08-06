<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP_signUp</title>

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
    
    <section id="signup_save">
        <?php
            include '../connect/session.php';
            include '../connect/connect.php';

            $userEmail = $_POST['userEmail'];
            $userName = $_POST['userName'];
            $userNickName = $_POST['userNickName'];
            $userPW = $_POST['userPW'];
            $birthYear = (int) $_POST['birthYear'];
            $birthMonth = (int) $_POST['birthMonth'];
            $birthDay = (int) $_POST['birthDay'];
            

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

            //이름이 한글인지 검사(정규식 표현)
            $userNameRegPattern = '/^[가-힣]{1,}$/';
            //{1,} : 빈칸인지 검사
            if( !preg_match($userNameRegPattern, $userName, $matches) ){
                goSignUpPage("이름은 한글로만 입력해주세요!");
                exit;
            }

            //닉네임 검사
            if($userNickName == null || $userNickName == ''){
                goSignUpPage('활동에 필요한 이름을 입력해 주세요.');
                exit;
            }

            //비밀번호 검사
            if($userPW == null || $userPW == ''){
                goSignUpPage('비밀번호를 입력해 주세요.');
                exit;
            }

            //$userPw = sha1('php'.$userPw);

            //생년 검사
            if($birthYear == 0) {
                goSignUpPage('생년을 정확히 입력해 주세요.');
                exit;
            }

            //생월 검사
            if($birthMonth == 0) {
                goSignUpPage('생월을 정확히 입력해 주세요.');
                exit;
            }

            //생일 검사
            if($birthDay == 0) {
                goSignUpPage('생일을 정확히 입력해 주세요.');
                exit;
            }

            $birth = $birthYear."-".$birthMonth."-".$birthDay;

            //데이터 입력 --> 데이터 가져오기 --> 데이터 검사 --> db로 가서 이메일 중복 검사

            //이메일 중복 검사
            $isEmailCheck = false;

            $sql = "SELECT youEmail FROM myMember2 WHERE youEmail = '{$userEmail}'";
            $result = $dbConnect -> query($sql);

            if($result){
                $count = $result -> num_rows;

                if($count == 0){
                    $isEmailCheck = true;
                } else {
                    goSignUpPage("이미 존재하는 이메일입니다.");
                    exit;
                }
            } else {
                goSignUpPage("에러 : 관리자에게 문의하세요!1");
                exit;
            }

            //닉네임 중복 검사
            $isNickNameCheck = false;

            $sql = "SELECT youNickName FROM myMember2 WHERE youNickName = '{$userNickName}'";
            $result = $dbConnect -> query($sql);

            if($result){
                $count = $result -> num_rows;

                if($count == 0){
                    $isNickNameCheck = true;
                } else {
                    goSignUpPage("이미 존재하는 닉네임입니다.");
                    exit;
                }
            } else {
                goSignUpPage("에러 : 관리자에게 문의하세요!2");
                exit;
            }

            //데이터 입력 --> 데이터 가져오기 --> 데이터 검사 --> db로 가서 이메일 중복 검사
            //--> db닉네임 중복 검사 --> 중복 검사 이상 없으면 --> 데이터 보내기

            //데이터가 이상 없으면 데이터 보내기
            if( $isEmailCheck == true && $isNickNameCheck == true ){
                $regTime = time();

                $sql = "INSERT INTO myMember2(youEmail, youName, youNickName, youPw, birthday, regTime) ";
                $sql .= "VALUE('{$userEmail}', '{$userName}', '{$userNickName}', '{$userPW}', '{$birth}', '{$regTime}')";
                $result = $dbConnect -> query($sql);

                if( $result ){
                    goSignUpPage("회원가입을 축하합니다.");
                    $_SESSION['memberID'] = $dbConnect -> insert_id;
                    $_SESSION['youNickName'] = $userNickName;
                } else {
                    goSignUpPage("에러발생 : 관리자에게 문의하세요 3");
                    exit;
                }
            } else {
                goSignUpPage("이메일 또는 닉네임이 존재합니다.");
                exit;
            }
        ?>
    </section>
    <!-- /signup-cont -->
</body>

</html>