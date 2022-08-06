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
	<title>지현 포트폴리오 - 게시판</title>
    
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
                    <span aria-hidden="true">| 자유게시판 <i class="fa fa-pencil-square-o"></i></span>
                </h1>
                <div class="listBoard">
                   <?
                    include 'searchBoard.php';
                    ?>
                    <div class="tableList">
                        <table class="table">
                            <colgroup>
								<col style="width: 10%;">
								<col style="width: 65%;">
								<col style="width: 10%;">
								<col style="width: 15%;">
							</colgroup>
                            <thead>
                                <tr>
                                    <th scope="col">번호</th>
                                    <th scope="col">제목</th>
                                    <th scope="col">등록자</th>
                                    <th scope="col">등록일</th>
                                </tr>
                            </thead>
                            <tbody>
                             <?php
								
                                    if(isset($_GET['page'])){
                                        $page = (int) $_GET['page'];
                                    } else {
                                        $page = 1;
                                    }

                                    // LIMIT 0, 20  //(20 * 1) - 20 -> ($numView * $page) - $numView
                                    // LIMIT 20, 20 //(20 * 2) - 20 -> ($numView * $page) - $numView
                                    // LIMIT 40, 20 //(20 * 3) - 20 -> ($numView * $page) - $numView
                                    $numView = 20;
                                    $firstLimitValue = ($numView * $page) - $numView;


                                    $sql = "SELECT b.boardID, b.title, m.youNickName, b.regTime FROM board b JOIN member m ON (b.memberID = m.memberID) ORDER BY boardID ";
                                    $sql .= "DESC LIMIT {$firstLimitValue}, {$numView}";
                                    $result = $dbConnect->query($sql);

                                    if($result){
                                        $dataCount = $result->num_rows;
                                        if($dataCount > 0){
                                            for($i=0; $i<$dataCount; $i++){
                                                $memberInfo = $result->fetch_array(MYSQLI_ASSOC);
                                                echo "<tr>";
                                                echo "<td>".$memberInfo['boardID']."</td>";
                                                echo "<td><a href='viewBoard.php?boardID={$memberInfo['boardID']}'>".$memberInfo['title']."</a></td>";
                                                echo "<td>".$memberInfo['youNickName']."</td>";
                                                echo "<td>".date('Y-m-d H:i', $memberInfo['regTime'])."</td>";
                                                echo "</tr>";
                                            }
                                        }
                                    } else {
                                        //게시글이 없을 경우
                                        echo "<tr><td colspan='4'>게시글이 없습니다.</td></tr>";
                                    }
                                  
                                    
                                ?>
                                
                            </tbody>
                        </table>
                    </div>
                    
                    <div class="tablePig">
	<ul class="pagination">
		<?php
			//전체 레코드 수 구하기
			$sql = "SELECT count(boardID) FROM board";
			$result = $dbConnect->query($sql);

			$boardTotalCount = $result->fetch_array(MYSQLI_ASSOC);
			$boardTotalCount = $boardTotalCount['count(boardID)'];

			//총 페이지 수
			$totalPage = ceil($boardTotalCount / $numView);

			//현재 페이지를 기준으로 앞뒤에 페이지 수 표시
			$pageTerm = 5;

			//처음 표시할 페이지를 현재 페이지를 기준으로 5개 이전까지만 표시
			$startPage = $page - $pageTerm; //1 - 5 = -4 ->1
			$lastPage = $page + $pageTerm;

			//음수일 경우
			if($startPage < 1) {
				$startPage = 1;
			}
			//마지막 페이지보다 수가 경우
			if($lastPage >= $totalPage) {
				$lastPage = $totalPage;
			}

			//처음 페이지
			if($page != 1){
				echo "<li><a class='page-link' href='./listBoard.php?page=1'><span aria-hidden='true'><i class='fa fa-angle-double-left'></i></span></a></li>";
			}

			//이전 페이지
			if($page != 1){
				$prevPage = $page - 1;
				echo "<li><a class='page-link' href='./listBoard.php?page={$prevPage}'><span aria-hidden='true'><i class='fa fa-angle-left'></i></span></a></li>";
			}

			for($i=$startPage; $i<=$lastPage; $i++){
				$active = '';

				if($i == $page){
					$active = 'active';
				}

				echo "<li class='{$active}'><a class='page-link' href='./listBoard.php?page={$i}'>{$i}</a></li>";
			}

			//다음 페이지
			if($page != $totalPage){
				$nextPage = $page + 1;
				echo "<li><a class='page-link' href='./listBoard.php?page={$nextPage}'><span aria-hidden='true'><i class='fa fa-angle-right'></i></span></a></li>";
			}
			
			//마지막 페이지
			if($page != $totalPage){
				echo "<li><a class='page-link' href='./listBoard.php?page={$totalPage}'><span aria-hidden='true'><i class='fa fa-angle-double-right'></i></span></a></li>";
			}
		?>
	</ul>
</div>
                 
                </div>
            </div>
        </section>
        <!— //boardCont —>
    </main>
    

</body>
</html>