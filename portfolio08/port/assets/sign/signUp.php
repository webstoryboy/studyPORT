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
            <div class="signTxet">
                <div class="signUp">
                    <h1><strong>안녕하세요.</strong>회원가입 완료 후 로그인해보세요:)</h1>
                    <form name="signUp" method="post" action="signUpSave.php">
                        <div>
                            <label for="userEmail" class="sr-only">이메일</label> 
                            <input type="email" name="userEmail" id="userEmail" class="input-text" placeholder="이메일을 적어주세요." required autofocus>
                        </div>
                        <div>
                            <label for="userName" class="sr-only">이름</label>
                            <input type="text" name="userName" id="userName" class="input-text" placeholder="이름을 적어주세요." required>
                        </div>
                        <div>
                            <label for="userNickName" class="sr-only">닉네임</label>
                            <input type="text" name="userNickName" id="userNickName" class="input-text" placeholder="활동에 필요한 별명을 지어주세요" required>
                        </div>
                        <div>
                            <label for="userPw" class="sr-only">패스워드</label>
                            <input type="password" name="userPw" id="userPw" class="input-text" placeholder="패스워드" required>
                        </div>
                        
                        <div class="birth">
                            <div>
                                <label for="birthYear">년도</label>
                                <select id="birthYear" name="birthYear" required>
                                    <?php
                                        $thisYear = date('Y', time());

                                        for($i = $thisYear; $i >= 1930; $i--) {
                                            echo "<option value='{$i}'>{$i}</option>";
                                        }
                                    ?>
                                </select>
                            </div>
                            <div>
                                <label for="birthMonth">생일</label>
                                <select id="birthMonth" name="birthMonth" required>
                                    <?php
                                        for($i = 1; $i <= 12; $i++) {
                                            echo "<option value='{$i}'>{$i}</option>";
                                        }
                                    ?>               
                                </select>
                            </div>
                            <div>
                                <label for="birthDay">일</label>
                                <select id="birthDay" name="birthDay" required>
                                    <?php
                                        for($i = 1; $i <= 31; $i++) {
                                            echo "<option value='{$i}'>{$i}</option>";
                                        }
                                    ?>              
                                </select>
                            </div>
                        </div>
                        <button class="signUpBtn" type="submit" value="회원가입">회원가입</button>
                        <p class="signDesc">로그인을 원하면? <a href="logIn.php">로그인</a></p>
                      
                    </form>
                </div>
            </div>
        </section>
        <!-- //mainCont -->
    </main>
    
</body>
</html>