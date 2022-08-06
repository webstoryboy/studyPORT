<?php 
    include '../connect/connect.php';
    include '../connect/session.php';
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
    <title>Portfolio SearchBoard</title>

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
        <a href="#board">게시판목록 바로가기</a>
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
        <section id="section1" class="notice">
            <div class="container">
                <div class="sec1">
                    <span>Search</span>
                    <h1><span>Ask</span> anything !</h1>
                    <div class="search_wrap result">
                        <a href="board.php" class="form-btn t_edit" id="board">목록보기</a>
                    </div>
                    <!-- 게시판 -->
                    <div class="table_wrap">
                        <table>
                            <caption class="blind">게시판 목록</caption>
                            <colgroup>
                                <col width="10%">
                                <col width="60%">
                                <col width="12%">
                                <col width="18%">
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">제목</th>
                                    <th scope="col">등록자</th>
                                    <th scope="col">등록일</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php 
                                    if( isset($_GET['page']) ){
                                        $page = (int) $_GET['page'];  //int 타입유형 표시
                                    } else {
                                        $page = 1;
                                    }
     
                                    $numView = 5;  //5개씩 보여주기
                                    $viewLimit = ($numView * $page) - $numView;    //몇개가 있는지 확인

                                    $searchKeyword = $dbConnect -> real_escape_string($_POST['searchKeyword']);
                                    $searchOption = $dbConnect -> real_escape_string($_POST['searchOption']);

                                    if( $searchKeyword == '' || $searchKeyword == null ){
                                        echo "<tr><td colspan='4'>검색어가 없습니다.</td></tr>";
                                        exit;
                                    }
                               
                                    $sql = "SELECT b.boardID, b.boardTitle, b.boardContent, m.youNickName, b.regTime FROM portBoard b JOIN portMember m ON (m.memberID = b.memberID) ";

                                    switch ($searchOption){
                                        case 'title':
                                            $sql .= "WHERE b.boardTitle LIKE '%{$searchKeyword}%' ";
                                            break;
                                        case 'content':
                                            $sql .= "WHERE b.boardContent LIKE '%{$searchKeyword}%' ";
                                            break;
                                        case 'tandc':
                                            $sql .= "WHERE b.boardTitle LIKE '%{$searchKeyword}%' AND b.boardContent LIKE '%{$searchKeyword}%' ";
                                            break;
                                        case 'torc':
                                            $sql .= "WHERE b.boardTitle LIKE '%{$searchKeyword}%' OR b.boardContent LIKE '%{$searchKeyword}%' ";
                                            break;
                                    }
                                    $sql .= "LIMIT {$viewLimit}, {$numView}";  // 200개 이상나오면 페이지가 나오게

                                    $result = $dbConnect -> query($sql);

                                    if( $result ){
                                        $dataCount = $result -> num_rows;
                                        if( $dataCount > 0 ){
                                            for( $i = 1; $i <= $dataCount; $i++ ){
                                                $memberInfo = $result -> fetch_array(MYSQLI_ASSOC);
                                                echo "<tr>";
                                                echo "<td><span class='t_num'>".$memberInfo['boardID']."</span></td>";
                                                echo "<td><a href='viewBoard.php?boardID={$memberInfo['boardID']}'>".$memberInfo['boardTitle']."</a></td>";
                                                echo "<td><span class='t_user'>".$memberInfo['youNickName']."</span></td>";
                                                echo "<td><span class='t_data'>".date('Y-m-d H:i', $memberInfo['regTime'])."</span></td>";
                                                echo "</tr>";
                                            }
                                        } else {
                                            echo "<tr><td colspan='4'>{$searchKeyword}가 없습니다.</td></tr>";
                                            exit;
                                        }
                                    } else {
                                        echo "에러 발생: 관리자에게 문의하세요!!";
                                        exit;
                                    }
                               ?>
                               
                            </tbody>
                        </table>
                    </div>
                    <!-- 페이지 버튼 -->
                    <?php 
                        include 'pagimation.php';
                    ?>
                </div>
            </div>
        </section>
        <!-- //section1 -->
    </main>
    <script src="../js/phpscript.js"></script>
</body>
</html>