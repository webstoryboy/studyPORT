<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<meta name="author" content="JI HYUN">
	<meta name="description" content="웹퍼블리셔 김지현의 첫번째 포트폴리오입니다.">
	<meta name="keywords" content="김지현, 포트폴리오, 웹퍼블리셔, 프론트엔드, 퍼블리셔, 퍼블리셔 포트폴리오, 김지현포폴, 지현 포트폴리오, webs, Portfolio, Web Publisher">
	<title>지현 포트폴리오</title>
    
	<!-- style -->
	<link rel="stylesheet" href="../../assets/css/common.css">
	<link rel="stylesheet" href="../../assets/css/style.css">
	
    <!-- fontawesome -->
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">

	<!-- 파비콘 -->
	<link rel="apple-touch-icon" sizes="180x180" href="../../assets/img/favicon/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="../../assets/img/favicon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="../../assets/img/favicon/favicon-16x16.png">
	<link rel="manifest" href="../../assets/img/favicon/site.webmanifest">
	<link rel="mask-icon" href="../../assets/img/favicon/safari-pinned-tab.svg" color="#5bbad5">
	<meta name="msapplication-TileColor" content="#da532c">
	<meta name="theme-color" content="#ffffff">

	<!-- 웹폰트 -->
	<link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Noto+Sans+KR:wght@700&family=Pathway+Gothic+One&family=Yeon+Sung&family=Yeseva+One&display=swap" rel="stylesheet">
	
</head>
<body>
   
    <div id="skip">
        <a href="#cont_nav">콘텐츠 바로가기</a>
    </div>
    <!-- //skip -->
    
    <!-- header -->
    <?php
        include '../dom/header.php';
    ?>
    <!-- //header -->
    
<main>
    <?php
        include '../connect/connect.php';
        include '../connect/session.php';

        $userEmail = $_POST['userEmail'];
        $userName = $_POST['userName'];
        $userNickName = $_POST['userNickName'];
        $userPw = $_POST['userPw'];
        $birthYear = (int) $_POST['birthYear'];
        $birthMonth = (int) $_POST['birthMonth'];
        $birthDay = (int) $_POST['birthDay'];

        function goSignUpPage($alert){
            echo "<div class='signInfo error'><p>{$alert}</p><a href='signUp.php'>회원가입 페이지로 이동하기</a></div>";
            return;
        }

        //이메일 검사
        if(!filter_Var($userEmail, FILTER_VALIDATE_EMAIL)){
            goSignUpPage("죄송합니다. <br>올바른 이메일이 아닙니다.");
            exit;
        }

        //이름이 한글로 구성되어있는지 정규식 검사
        $userNameRegPattern = '/^[가-힣]{1,}$/';
        if (!preg_match($userNameRegPattern, $userName, $matches)) {
            goSignUpPage('닉네임은 한글로만 입력해 주세요.');
            exit;
        }

        //닉네임 검사
        if($userNickName == null || $userNickName == ''){
            goSignUpPage('활동에 필요한 이름을 입력해 주세요.');
            exit;
        }

        //비밀번호 검사
        if($userPw == null || $userPw == ''){
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

        $birth = $birthYear.'-'.$birthMonth.'-'.$birthDay;


        //이메일 중복 검사
        $isEmailCheck = false;

        $sql = "SELECT youEmail FROM member WHERE youEmail = '{$userEmail}'";
        $result = $dbConnect->query($sql);

        if( $result ) {
            $count = $result->num_rows;
            if($count == 0){
                $isEmailCheck = true;
            } else {
                goSignUpPage('이미 존재하는 이메일 입니다.');
                exit;
            }
        } else {
            echo "에러발생 : 관리자 문의 요망";
            exit;
        }

        //닉네임 중복 검사
        $isNickNameCheck = false;

        $sql = "SELECT youName FROM member WHERE youName = '{$userNickName}'";
        $result = $dbConnect->query($sql);

        if( $result ) {
            $count = $result->num_rows;
            if($count == 0){
                $isNickNameCheck = true;
            } else {
                goSignUpPage('이미 존재하는 닉네임 입니다.');
                exit;
            }
        } else {
            echo "에러발생 : 관리자에게 문의하세요!";
            exit;
        }

        //이상 없으면 데이터 입력
        if ($isEmailCheck == true && $isNickNameCheck == true) {
            $regTime = time();
            $sql = "INSERT INTO member(youEmail, youName, youNickName, youPw, birthday, regTime)";
            $sql .= "VALUES('{$userEmail}','{$userName}','{$userNickName}','{$userPw}','{$birth}', {$regTime})";
            $result = $dbConnect->query($sql);

            if ($result) {
                $_SESSION['memberID'] = $dbConnect->insert_id;
                $_SESSION['youName'] = $userName;
                $_SESSION['youNickName'] = $userNickName;
                Header("Location: http://wlgus6566.dothome.co.kr/port/assets/main/index.html");
            } else {
                echo '에러발생 : 관리자에게 문의하세요!';
                exit;
            }
        } else {
            goSignUpPage('이메일 또는 닉네임이 존재합니다.');
            exit;
        }

    ?>
</main>


</body>
</html>
