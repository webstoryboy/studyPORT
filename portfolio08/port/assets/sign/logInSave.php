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
        <!-- mainCont -->
        <section id="signUpCont">
        <?php
            include '../connect/session.php';
            include '../connect/connect.php';

            $userEmail = $_POST['userEmail'];
            $userPw = $_POST['userPw'];

            function goSignInPage($alert){
                echo "<div class='signInfo error'><p>{$alert}</p><a href='logIn.php'>로그인 페이지로 이동하기</a></div>";
                return;
            }

            //이메일 검사
            if(!filter_Var($userEmail, FILTER_VALIDATE_EMAIL)){
                goSignInPage('올바른 이메일이 아닙니다.');
                exit;
            }

            //비밀번호 검사
            if($userPw == null || $userPw == '') {
                goSignInPage('비밀번호를 입력해 주세요.');
                exit;
            }

            //$pw = sha1('php200'.$pw);

            $sql = "SELECT youEmail, youNickName, memberID FROM member ";
            $sql .= "WHERE youEmail = '{$userEmail}' AND youPw = '{$userPw}'";
            $result = $dbConnect->query($sql);

            if($result){
                if($result->num_rows == 0){
                    goSignInPage('로그인 정보가 일치하지 않습니다.');
                    exit;
                } else {
                    $memberInfo = $result->fetch_array(MYSQLI_ASSOC);
                    $_SESSION['memberID'] = $memberInfo['memberID'];
                    $_SESSION['youNickName'] = $memberInfo['youNickName'];
                    Header("Location: http://wlgus6566.dothome.co.kr/port/assets/main/index.html");
                }
            }
        ?>
        </section>
        <!-- //mainCont -->
    </main>
    

</body>
</html>
