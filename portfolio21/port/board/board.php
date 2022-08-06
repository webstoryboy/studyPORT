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
    <div class="wrap">
        <!-- header -->
        <?php
            include '../component/header2.php';
        ?>
        <!-- //header -->
        
        <main id="main">
            <!-- boardCont -->
            <section id="boardCont">
                <div class="container">
                    <div class="listBoard">
                        <h2>BOARD</h2>
                        <div class="listSearch">
                            <form name="tableSearch" method="post" action="searchResult.php">
                                <fieldset>
                                    <legend class="sr-only">게시판 검색 영역입니다.</legend>
                                    <input type="search" name="searchKeyword" class="form-search" placeholder="search" aria-label="search" />
                                    <select name="searchOption" id="searchOption" class="form-select">
                                        <option value="title">제목</option>
                                        <option value="content">내용</option>
                                        <option value="tandc">제목과 내용</option>
                                        <option value="torc">제목 또는 내용</option>
                                    </select>
                                    <button type="submit" class="form-btn">search</button>
                                    <a class="form-btn black" href="writeBoard.php">write</a>
                                </fieldset>
                            </form>
                        </div>
                        <!-- //listSearch -->
                        <div class="listTable">
                            <table class="table">
                                <colgroup>
                                    <col style="width: 10%">
                                    <col style="width: 65%">
                                    <col style="width: 10%">
                                    <col style="width: 15%">
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>번호</th>
                                        <th>제목</th>
                                        <th>작성자</th>
                                        <th>등록일</th>
                                    </tr>
                                </thead>
                                <tbody>
                    
                                    <?php

                                        //myMember(m) myBoard(b)를 합치는 거
                                        if ( isset($_GET['page']) ){
                                            $page = (int) $_GET['page'];
                                        } else {
                                            $page = 1;
                                        }

                                        $numView = 20;
                                        $viewLimit = ($numView * $page) - $numView;
                                        // 1 ~ 20 : DESC LIMIT 0, 20 --> $page = 1      {$numView * $page} -  $numView
                                        // 21 ~ 40 : DESC LIMIT 20, 20 --> $page = 2    {$numView * $page} -  $numView
                                        // 41 ~ 60 : DESC LIMIT 40, 20 --> $page = 3    {$numView * $page} -  $numView
                                        // 61 ~ 80 : DESC LIMIT 60, 20 --> $page = 4    {$numView * $page} -  $numView
                                        // 81 ~ 100 : DESC LIMIT 80, 20 --> $page = 5   {$numView * $page} -  $numView

                                        $sql = "SELECT b.boardID, b.title, m.youNickName, b.regTime FROM ";
                                        $sql .= "myBoard2 b JOIN myMember2 m ON (m.memberID = b.memberID) ORDER BY boardID ";
                                        $sql .= "DESC LIMIT {$viewLimit}, {$numView}";

                                        $result = $dbConnect -> query($sql);

                                        if( $result ){
                                            $dataCount = $result -> num_rows;
                                            
                                            if( $dataCount > 0 ){
                                                for ( $i=1; $i<=$dataCount; $i++ ){
                                                    $memberInfo = $result -> fetch_array(MYSQLI_ASSOC);
                                                    echo "<tr>";
                                                    echo "<td>".$memberInfo['boardID']."</td>";
                                                    echo "<td><a class='left' href='viewBoard.php?boardID={$memberInfo['boardID']}'>".$memberInfo['title']."</a></td>";
                                                    echo "<td>".$memberInfo['youNickName']."</td>";
                                                    echo "<td>".date('Y-m-d H:i', $memberInfo['regTime'])."</td>";
                                                    echo "</tr>";
                                                } 
                                            } else {
                                                echo "<tr><td colspan='4'>게시글이 없습니다.</td></tr>";
                                            }
                                        } else {
                                            echo "error";
                                        }
                                    ?>

                                </tbody>
                            </table>
                        </div>
                    </div>

                    <?php
                        include 'pagination.php';
                    ?>
                </div>
            </section>
            <!-- //boardCont -->
        </main>
        <!-- //main -->

        <!-- <footer id="footer">
            <h6>Let’s create something new</h6>
            <h1>LET`S GET IN <span>TOUCH</span></h1>
            <button type="button">Contact Us</button>
        </footer> -->
        <!-- /footer -->
    </div>
</body>

</html>