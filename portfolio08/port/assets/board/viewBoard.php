<?php
    include '../connect/session.php';
    include '../connect/connect.php';
    include '../connect/checkSession.php';
?>

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

<body class="gray">
   
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
                <div class="listBoard viewBoard">
                <div class="tableList">
                    <table class="table">
                          <colgroup>
                            <col style="width: 15%;">
                            <col style="width: 85%;">
                          </colgroup>
                          <tbody>
								
							<?php
								if(isset($_GET['boardID']) && (int) $_GET['boardID'] > 0){
							    	$boardID = $_GET['boardID'];
							    	$sql = "SELECT b.title, b.content, m.youNickName, b.regTime FROM board b JOIN member m ON (b.memberID = m.memberID) WHERE b.boardID = {$boardID}";
							    	$result = $dbConnect->query($sql);

							    	if($result){
							    		$contentInfo = $result->fetch_array(MYSQLI_ASSOC);
							    		echo "<tr><th>제목</th><td>{$contentInfo['title']}</td></tr>";
							    		echo "<tr><th>등록자</th><td>{$contentInfo['youNickName']}</td></tr>";
							    		$regDate = date("Y-m-d h:i");
							    		echo "<tr><th>등록일</th><td>{$regDate}</td></tr>";
							    		echo "<tr style='height:400px'><th>내용</th><td>{$contentInfo['content']}</td></tr>";
							    	}
							    }
							?>
							</tbody>
						</table>
                </div>
                <a href="listBoard.php" class="btn-list">목록보기</a>
                </div>
            </div>
        </section>
        <!— //boardCont —>
    </main>
    

</body>
</html>