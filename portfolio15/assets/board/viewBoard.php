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
    <title>Portfolio ViewBoard</title>

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
                    <span>View Post</span>
                    <h1><span>Ask</span> anything !</h1>
                    <div class="search_wrap result">
                        <a href="board.php" class="form-btn t_edit" id="board">목록보기</a>
                    </div>
                    <!-- 게시판 -->
                    <div class="view_wrap">
                        <table>
                            <caption class="blind">게시판 목록</caption>
                            <colgroup>
                                <col width="20%">
                                <col width="80%">
                            </colgroup>
                            <tbody>
                                <?php 
                                    if(isset($_GET['boardID']) && (int) $_GET['boardID'] > 0){ //id값 가져와서
                                        $boardID = $_GET['boardID'];
                                        
                                        $sql = "SELECT b.boardTitle, b.boardContent, m.youNickName, b.regTime FROM portBoard b JOIN portMember m ON (b.memberID = m.memberID) WHERE b.boardID = {$boardID}";
                                        $result = $dbConnect -> query($sql);
                                        
                                        if( $result ){
                                            $memberInfo = $result -> fetch_array(MYSQLI_ASSOC);
                                            echo "<tr><th scope='col'>제목</th><td scope='col'>".$memberInfo['boardTitle']."</td></tr>";
                                            echo "<tr><th scope='col'>등록자</th><td scope='col'>".$memberInfo['youNickName']."</td></tr>";
                                            echo "<tr><th scope='col'>등록일</th><td scope='col'>".date('Y-m-d H:i', $memberInfo['regTime'])."</td></tr>";
                                            echo "<tr><th scope='col'>내용</th><td scope='col'>".$memberInfo['boardContent']."</td></tr>";
                                        }
                                    }
                                ?>
                                <!-- <tr>
                                    <th scope="col">제목</th>
                                    <td scope="col">안녕하세요. 신입 퍼블리셔 김영지의 게시판 입니다.</td>
                                </tr>
                                <tr>
                                    <th scope="col">등록자</th>
                                    <td scope="col">yeong</td>
                                </tr>
                                <tr>
                                    <th scope="col">등록일</th>
                                    <td scope="col">2021-01-30 14:15</td>
                                </tr>
                                <tr>
                                    <th scope="col">내용</th>
                                    <td scope="col">내용수정예정</td>
                                </tr> -->
                            </tbody>
                        </table>
                    </div>
                    
                </div>
            </div>
        </section>
        <!-- //section1 -->
    </main>
    <script src="../js/phpscript.js"></script>
</body>
</html>