<?php 
    include '../connect/connect.php';
    include '../connect/session.php';
    include '../connect/checkSession.php';
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="author" content="yeong">
    <meta name="descirption" content="개인 포트폴리오 사이트 입니다.">
    <meta name="keywords" content="publisher, portfolio">
    <meta name="generator" content="visual studio">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio writeBoard</title>

    <!-- css -->
    <link rel="stylesheet" href="../css/reset.css">
    <link rel="stylesheet" href="../css/header.css">
    <link rel="stylesheet" href="../css/nav.css">
    <link rel="stylesheet" href="../css/login.css">

    <!-- 폰트어썸 -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
</head>
<body>
    <!--skip-->
    <div id="skip">
        <a href="#boardTitle">글쓰기 바로가기</a>
    </div>

    <header>
        <div id="header">
            <div class="logo">
                <a href="../../index3.html" name="home"><span>Yeong's</span></a>
            </div>
             <!-- 회원가입 로그인 게시판 -->
             <?php 
                include '../include/header.php';
             ?>
            <nav class="menu">
                <div class="nav">
                    <div class="nav-background">
                        <div class="nav-bg nav-bg1"></div>
                        <div class="nav-bg nav-bg2"></div>
                        <div class="nav-bg nav-bg3"></div>
                        <div class="nav-bg nav-bg4"></div>
                    </div>
                    <h2 class="blind">메인 메뉴</h2>
                    <ul>
                        <li><a href="javascript:navLink1()">home</a></li>
                        <li><a href="javascript:navLink2()">about</a></li>
                        <li><a href="javascript:navLink3()">portfolio</a></li>
                        <li><a href="javascript:navLink4()">contact</a></li>
                    </ul>
                </div>
                <div class="menu-line">
                    <div class="hamburger">
                        <span class="line"></span>
                        <span class="line"></span>
                        <span class="line"></span>
                    </div>
                    <div class="hamburger-close">
                    </div>
                </div>
            </nav>
        </div> 
    </header>
    <main id="contents">
        <section id="section1" class="save-board">
            <div class="container">
                <div class="sec1">
                    <?php 
                        $boardTitle = $_POST['boardTitle'];
                        $boardContent = $_POST['boardContent'];
                        
                        //특수기호
                        if( $boardTitle != null && $boardTitle != '' ){
                            $boardTitle = $dbConnect -> real_escape_string($boardTitle);
                        }

                        if( $boardContent != null && $boardContent != ''){
                            $boardContent = $dbConnect -> real_escape_string($boardContent);
                        }

                        $memberID = $_SESSION['memberID'];
                        $regTime = time();

                        $sql = "INSERT INTO portBoard(memberID, boardTitle, boardContent, regTime) ";
                        $sql .= "VALUES('{$memberID}','{$boardTitle}','{$boardContent}', {$regTime})";
                        $result = $dbConnect -> query($sql);

                        if( $result ){
                            echo "<div class='info'><p>저장이 완료되었습니다</p><a href='board.php'>게시판 목록으로 이동하기</a></div>";
                            exit;
                        } else {
                            echo "<div class='info'><p>저장이 실패되었습니다</p><a href='writeBoard.php'>게시판 작성하기</a></div>";
                            exit;
                        }
                    ?>
                </div>
            </div>
        </section>
        <!-- //section1 -->
    </main>
    <script src="../js/phpscript.js"></script>
</body>
</html>