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

<div id="wrap">
        
        <!-- header -->
        <?php
            include '../component/header2.php';
        ?>
        <!-- //header -->

        <!-- 
            1. 게시판 테이블 만들기
            2. 게시판 등록 페이지 만들기(wirteBoard.php)
            3. 등록한 정보(데이터)를 저장하는 페이지 만들기(saveBoard.php)
            4. 게시판 데이터 불러오는 페이지 만들기(board.php)
         -->

         <main id="main">
            <!-- boardCont -->
            <section id="boardCont">
                <div class="container">
                <div class="listBoard">
                    <h2>BOARD</h2>
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
                                    
							    	$sql = "SELECT b.title, b.content, m.youNickName, b.regTime FROM myBoard2 b JOIN myMember2 m ON (b.memberID = m.memberID) WHERE b.boardID = {$boardID}";
                                    $result = $dbConnect -> query($sql);
                                    
							    	if( $result ){
							    		$memberInfo = $result -> fetch_array(MYSQLI_ASSOC);
                                        echo "<tr><th>제목</th><td class='left'>".$memberInfo['title']."</td></tr>";
                                        echo "<tr><th>작성자</th><td class='left'>".$memberInfo['youNickName']."</td></tr>";
                                        echo "<tr><th>등록일</th><td class='left'>".date('Y-m-d H:i', $memberInfo['regTime'])."</td></tr>";
                                        echo "<tr><th class='height'>내용</th><td class='left'>".$memberInfo['content']."</td></tr>";
							    	}
							    }
                            ?>
                            </tbody>
                        </table>
                    </div>

                    <div class="listSearch">
                        <a class="form-btn black mt20" href="board.php">List</a>
                    </div>
                    <!— //listTable —>
                </div>
                </div>
            </section>
            <!-- //boardCont -->
        </main>
        <!-- //main -->
    </div>
    <!-- //wrap -->
</body>

</html>