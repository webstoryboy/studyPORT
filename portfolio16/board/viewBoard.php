<!-- //회원가입 시만 작성하도록 -->
<?php
  include '../connect/connect.php';
  include '../connect/session.php';
//   include '../create/checkSession.php'; 누구나 보게 하기위해 생략
?>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="author" content="webstoryboy">
    <meta name="description" content="웹스토리보이 포트폴리오 사이트입니다.">
    <meta name="keywords" content="웹표준, 웹접근성, 사이트만들기, 포트폴리오, 웹스토리보이">
    <title>Portfolio</title>

    <!-- CSS Style -->
    <link rel="stylesheet" href="../assets/css/reset.css">    
    <link rel="stylesheet" href="../assets/css/style.css">

    <!-- webfonts -->
    <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Playfair+Display:700,900" rel="stylesheet">
</head>
<body>
    <!-- skip -->
    <div id="skip">
        <a href="#boardCont">게시글 작성하기</a>
    </div>
    <!-- //skip -->

    <!-- header -->
        <?php
            include '../component/header.php';
        ?>
    <!-- //header -->

    <main>
        <!-- boardCont -->
        <section id="boardCont">
            <div class="container">
                <div class="listBoard">
                    <h2>게시판입니다.</h2>
                    <div class="listTable">
                        <table class="table">
                            <colgroup>
                                <col style="width: 20%">
                                <col style="width: 80%">
                            </colgroup>
                            <tbody>

                            <?php
								if(isset($_GET['boardID']) && (int) $_GET['boardID'] > 0){
                                    $boardID = $_GET['boardID'];
                                    
							    	$sql = "SELECT b.boardTitle, b.boardContent, m.youNickName, b.regTime FROM myBoard b JOIN myMember m ON (b.memberID = m.memberID) WHERE b.boardID = {$boardID}";
                                    $result = $dbConnect -> query($sql);
                                    
							    	if( $result ){
							    		$memberInfo = $result -> fetch_array(MYSQLI_ASSOC);
                                        echo "<tr><th>제목</th><td class='left'>".$memberInfo['boardTitle']."</td></tr>";
                                        echo "<tr><th>글쓴이</th><td class='left'>".$memberInfo['youNickName']."</td></tr>";
                                        echo "<tr><th>등록일</th><td class='left'>".date('Y-m-d H:i', $memberInfo['regTime'])."</td></tr>";
                                        echo "<tr><th class='height'>내용</th><td class='left'>".$memberInfo['boardContent']."</td></tr>";
							    	}
							    }
                            ?>
                            </tbody>
                        </table>
                    </div>

                    <div class="listSearch">
                        <a class="form-btn black mt20" href="board.php">목록보기</a>
                    </div>
                    <!-- <!— //listTable —> -->
                </div>
            </div>
        </section>
        <!-- <!— //boardCont —> -->
    </main>
    <!-- footer -->
    <?php
        include '../component/footer.php';
    ?>
    <!-- //footer -->
</body>
</html>