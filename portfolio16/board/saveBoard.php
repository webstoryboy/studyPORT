<!-- //회원가입 시만 작성하도록 -->
<?php
  include '../connect/connect.php';
  include '../connect/session.php';
  include '../create/checkSession.php';
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
                <div class="saveBoard">
                    <?php
                        $boardTitle = $_POST['boardTitle'];
                        $boardContent = $_POST['boardContent'];

                        //공백시 다음 화면 넘어가지 않음
                        if( $boardTitle != null && $boardTitle != '' ){
                            $boardTitle = $dbConnect -> real_escape_string($boardTitle);
                        }

                        if( $boardContent != null && $boardContent != '' ){
                            $boardContent = $dbConnect -> real_escape_string($boardContent);
                        }

                        $memberID = $_SESSION['memberID'];
                        $regTime = time();
                        //데이터 넣기
                        $sql = "INSERT INTO myBoard(memberID, boardTitle, boardContent, regTime) ";
                        $sql .= "VALUES('{$memberID}','{$boardTitle}','{$boardContent}',{$regTime})";
                        //전송하기
                        $result = $dbConnect -> query($sql);

                        if( $result ){
                            echo "<div class='info'><p>저장이 완료되었습니다.</p><a href='board.php'>게시판 목록으로 이동하기</a></div>";
                            exit;
                        } else {
                            echo "<div class='info'><p>저장이 실패되었습니다.</p><a href='writeBoard.php'>게시판 작성하기</a></div>";
                            exit;
                        }

                    ?>
                </div>
            </div>
        </section>
        <!--//boardCont  -->
    </main>
    <!-- footer -->
    <?php
        include '../component/footer.php';
    ?>
    <!-- //footer -->
</body>
</html>