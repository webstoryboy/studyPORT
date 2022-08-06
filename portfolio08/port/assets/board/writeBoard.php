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
        <a href="#mainCont">콘텐츠 바로가기</a>
    </div>
    <!-- //skip -->
    
    <!-- header -->
    <?php
        include '../dom/header.php';
    ?>
    <!-- //header -->
    <main>
      <!-- boardCont -->
      <section id="boardCont">
          <div class="container">
              <h1 class="contTitle" aria-label="CODING NOTICE">
                  <span aria-hidden="true">자유게시판 <i class="fa fa-pencil-square-o"></i></span>
              </h1>
              <div class="writeBoard">
                  <form action="saveBoard.php" name="boardWrite" method="post">
                      <fieldset>
                          <div>
                              <label for="title">제목</label>
                              <input type="text" name="title" class="form-control" id="title" required autofocus>
                          </div>
                          <div>
                              <label for="content">내용</label>
                              <textarea class="form-control" name="content" id="content" rows="13" required></textarea>
                          </div>
                          <div class="form-btn">
                              <input type="submit" value="저장하기">
                          </div>
                      </fieldset>
                  </form>
              </div>
          </div>
      </section>
      <!-- //boardCont -->
    </main>
    

</body>
</html>