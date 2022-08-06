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
    <link rel="stylesheet" href="../assets/css/style_php2.css">
</head>

<body>
<div id="wrap">
        
        <!-- header -->
        <?php
            include '../component/header2.php';
        ?>
        <!-- //header -->

        <!-- 
            1. 게시판 테이블 만들기
            2. 게시판 등록 페이지(writeBoard.php)
            3. 게시판 데이터 저장 페이지(saveBoard.php)
            4. 게시판 데이터 불러오기 페이지(board.php)
         -->

        <main id="main">
            <section id="board-cont">
                <div class="container">
                    <div class="writeBoard">
                        <h2>WRITE</h2>
                        <form action="saveBoard.php" name="boardWrite" method="post">
                            <fieldset>
                                <legend class="sr-only">게시판 작성 영역입니다.</legend>
                                <div>
                                    <label for="boardTitle">Title</label>
                                    <input type="text" name="boardTitle" id="boardTitle" class="title-text" required autofocus placeholder="제목을 작성해주세요!" />
                                </div>
                                <div>
                                    <label for="boardContent">Content</label>
                                    <textarea name="boardContent" id="boardContent" class="title-text" rows="13" required placeholder="내용을 작성해주세요!"></textarea>
                                </div>
                            </fieldset>
                            <button class="writeBoardBtn" type="submit" value="저장하기">Save</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
        <!-- //main -->
    </div>
    <!-- //wrap -->
</body>

</html>