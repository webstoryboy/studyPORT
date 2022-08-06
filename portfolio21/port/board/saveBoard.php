<?php
    include '../connect/connect.php';
    include '../connect/session.php';
    //include '../connect/checkSession.php';
?>

<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP_board</title>

    <!-- css -->
    <link rel="stylesheet" href="../assets/css/reset_php.css">
    <link rel="stylesheet" href="../assets/css/style_php.css">
</head>

<body>
    <div class="wrap">
        <header id="header" class="header_2">
            <div class="menuBtn"><a href="#"><span></span></a></div>
            <div class="logo"><a href="../index3.html">yoo-jung</a></div>
            <nav>
                <ul class="menuList">
                    <li><a href="../pages/about.html">About</a></li>
                    <li><a href="../pages/reference.html">Reference</a></li>
                    <li><a href="../pages/youtube.html">Youtube</a></li>
                    <li><a href="../pages/script.html">Script</a></li>
                    <li><a href="../pages/contact.html">Contact</a></li>
                </ul>
                <ul class="menuList">
                    <li><a href="../sign/signUp.php">signUp</a></li>
                    <li><a href="../sign/logIn.php">login</a></li>
                    <li><a href="../board/board.php">board</a></li>
                </ul>
            </nav>
        </header>
        <!-- /header -->

        <section id="board-cont">
                <div class="container">
                    <div class="saveBoard">
                        <?php
                            $boardTitle = $_POST['boardTitle'];
                            $boardContent = $_POST['boardContent'];

                            if( $boardTitle != null && $boardTitle != '' ){
                                $boardTitle = $dbConnect -> real_escape_string($boardTitle);
                            }

                            if( $boardContent != null && $boardContent != '' ){
                                $boardContent = $dbConnect -> real_escape_string($boardContent);
                            }

                            $memberID = $_SESSION['memberID'];
                            $regTime = time();

                            $sql = "INSERT INTO myBoard2(memberID, title, content, regTime) VALUES('{$memberID}','{$boardTitle}','{$boardContent}','{$regTime}')";
                            $dbConnect -> query($sql);
                            $result = $dbConnect -> query($sql);

                            if($result){
                                echo "<div class='info'>저장이 완료되었습니다.
                                    <a href='board.php'>게시판 목록으로 이동하기</a>
                                </div>";
                                exit;
                            } else {
                                echo "<div class='info'>저장이 실패하였습니다.
                                    <a href='writeBoard.php'>게시판 작성하기</a>
                                </div>";
                                exit;
                            }
                        ?>
                    </div>
                </div>
            </section>
        <!-- /board-cont -->

        <!-- <footer id="footer">
            <h6>Let’s create something new</h6>
            <h1>LET`S GET IN <span>TOUCH</span></h1>
            <button type="button">Contact Us</button>
        </footer> -->
        <!-- /footer -->
    </div>
</body>

</html>