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
        include '../connect/session.php';
        unset($_SESSION['memberID']);
        unset($_SESSION['youName']);
        unset($_SESSION['youNickName']);
        
        echo "<div class='signInfo'><p>로그아웃 되었습니다.</p><a href ='../main/index.html'>메인페이지로 이동하기</a></div>";
        return;
    ?>
    </main>
    

</body>
</html>