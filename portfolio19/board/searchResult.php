<?php
include '../connect/connect.php';
include '../connect/session.php';

// include '../connect/checkSession.php';
?>

<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>HYO JU DEV</title>

    <!-- 문서 형식 설정 -->
    <meta http-equiv="Content-Script-Type" content="text/javascript">
    <meta http-equiv="Content-Style-Type" content="text/css">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <!-- SEO -->
    <meta name="author" content="hyojudev">
    <meta name="description" content="프론트 엔트 개발자 한효주 포트폴리오 사이트입니다.">
    <meta name="keywords" content="리액트, 포트폴리오, 웹표준, 웹접근성, 사이트만들기, 포트폴리오, 프론트엔드, 개발자한효주">
    <meta name="robots" content="all">

    <!-- facebook -->
    <meta property="og:url" content="#">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Hyojudev Portfolio App">
    <meta property="og:description" content="프론트 엔트 개발자 한효주 포트폴리오 사이트입니다.">
    <meta property="og:image" content="#">

    <!-- twitter -->
    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="React Portfolio App">
    <meta name="twitter:url" content="#">
    <meta name="twitter:image" content="#">
    <meta name="twitter:description" content="프론트 엔트 개발자 한효주 포트폴리오 사이트입니다.">

    <!-- Mobile -->
    <meta name="theme-color" content="#000000" />
    <meta name="apple-mobile-web-app-title" content="Portfolio">
    <meta name="apple-mobile-web-app-capable" content="yes">

    <!-- 아이콘 -->
    <link rel="icon" href="/favicon.ico" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="manifest" href="/manifest.json">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">

    <!-- Webfonts -->
    <link href="https://fonts.googleapis.com/css2?family=Italiana&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Nixie+One&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="//cdn.jsdelivr.net/font-iropke-batang/1.2/font-iropke-batang.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300;400&display=swap" rel="stylesheet">


    <!-- CSS Style -->
    <link rel="stylesheet" href="../assets/css/reset.css">
    <link rel="stylesheet" href="../assets/css/style.css">

</head>

<body>

    <noscript>페이지를 보려면 자바스크립트 옵션이 활성화 되어 있어야 합니다. You need to enable JavaScript to run this app.</noscript>

   <!-- header -->
    <header>
        <div class="other-project-btn">
            <a target="_blank" href="http://hyojudev.dothome.co.kr/port03/pages/index.html"></a>
        </div>
         <div class="nav-bg">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <nav class="main-menu">
            <li class="main-menu__link"><a href="../pages/home.html">home</a></li>
            <li class="main-menu__link"><a href="../pages/about.html">about</a></li>
            <li class="main-menu__link"><a href="../pages/projects.html">projects</a></li>
            <li class="main-menu__link"><a href="../pages/script.html">script</a></li>
            <li class="main-menu__link menu-active"><a href="../board/board.php">board</a></li>
            <li class="main-menu__link"><a href="../pages/contact.html">contact</a></li>
        </nav>
        <ul class="sign-menu">
            <?php if (isset($_SESSION['memberID'])) { ?>
            <li><a href="#">
                    <?= $_SESSION['youNickName'] ?>님👻
                </a></li>
            <li><a href="../sign/logOut.php">LOGOUT</a></li>
            <?php } else { ?>
            <li><a href="../sign/logIn.php">LOGIN</a></li>
            <li><a href="../sign/signUp.php">SIGNUP</a></li>
            <?php } ?>
        </ul>
        <div class="mobile-menu">
            <div class="hamburger">
                <div class="ham__bar1"></div>
                <div class="ham__bar2"></div>
            </div>
        </div>
    </header>
    <!-- //header -->

    <main>
        <!-- boardCont -->
        <section id="boardCont">
            <div class="container">
                <div class="listBoard">
                    <h2>📢<br />검색한 결과입니다!!</h2>
                    <!-- listSearch -->
                    <div class="listSearch">
                        <a class="form-btn black" href="board.php">목록보기</a>
                    </div>
                    <!-- //listSearch -->
                    <!-- listTable -->
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
                                    <th>등록자</th>
                                    <th>등록일</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php
                                // GET 방식
                                if (isset($_GET['page'])) {
                                    // (int) 숫자인지 문자인지 유형을 표시하는 것
                                    $page = (int) $_GET['page'];
                                } else {
                                    $page = 1; //아무 것도 없다면 페이지를 1
                                }

                                $numView = 20; // 게시물을 20개만 보여줌
                                $viewLimit = $numView * $page - $numView; // 총 몇 개 페이지인가? -> 현재 페이지를 빼고 계산

                                // board.php의 키워드 가져오기
                                $searchKeyword = $dbConnect->real_escape_string(
                                    $_POST['searchKeyword']
                                );
                                $searchOption = $dbConnect->real_escape_string(
                                    $_POST['searchOption']
                                );

                                // 검색어가 없을 때
                                if (
                                    $searchKeyword == '' ||
                                    $searchKeyword == null
                                ) {
                                    echo '📢<br />검색어가 없습니다.';
                                    exit();
                                }

                                //<option>의 value값 받기
                                switch ($searchOption) {
                                    case 'title':
                                    case 'content':
                                    case 'tandc':
                                    case 'torc':
                                        break;
                                    default:
                                        echo '📢<br />검색 옵션을 선택해주세요!!';
                                        exit();
                                        break;
                                }

                                // sql문으로 아래의 것 중에 myBoard를 약자로b라고 해줄 것이고, 앞뒤 %가 있으면 양쪽에 단어가 있어도 상관 없음
                                // LIKE 는 조건을 걸 수 있음
                                // $sql = "SELECT b.boardID, b.boardTitle, b.boardContent, m.youNickName, b.regTime FROM myBoard4 b JOIN myMember3 m ON (m.memberID = b.memberID) WHERE b.boardTitle LIKE '%{$searchKeyword}%' ";
                                // $sql = "SELECT b.boardID, b.boardTitle, b.boardContent, m.youNickName, b.regTime FROM myBoard4 b JOIN myMember3 m ON (m.memberID = b.memberID) WHERE b.boardContent LIKE '%{$searchKeyword}%' ";
                                // $sql = "SELECT b.boardID, b.boardTitle, b.boardContent, m.youNickName, b.regTime FROM myBoard4 b JOIN myMember3 m ON (m.memberID = b.memberID) WHERE b.boardTitle LIKE '%{$searchKeyword}%' AND b.boardContent LIKE '%{$searchKeyword}%' ";
                                // $sql = "SELECT b.boardID, b.boardTitle, b.boardContent, m.youNickName, b.regTime FROM myBoard4 b JOIN myMember3 m ON (m.memberID = b.memberID) WHERE b.boardTitle LIKE '%{$searchKeyword}%' OR b.boardContent LIKE '%{$searchKeyword}%' ";

                                $sql =
                                    'SELECT b.boardID, b.boardTitle, b.boardContent, m.youNickName, b.regTime FROM myPortBoard b JOIN myPortMember m ON (m.memberID = b.memberID) ';

                                switch ($searchOption) {
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

                                // 검색 결과를 20개 까지만 보여줌
                                //0 ~20 으로 작업해주기
                                $sql .= "LIMIT {$viewLimit}, {$numView}";

                                $result = $dbConnect->query($sql);

                                if ($result) {
                                    // result에서 값을 가져와서 숫자로 넣어주기
                                    $dataCount = $result->num_rows;
                                    if ($dataCount > 0) {
                                        for ($i = 1; $i <= $dataCount; $i++) {
                                            //배열로 가져오기
                                            $memberInfo = $result->fetch_array(
                                                MYSQLI_ASSOC
                                            );
                                            //뿌려주기(받아야 할 데이터 넣기 "..")
                                            echo '<tr>';
                                            echo '<td>' .
                                                $memberInfo['boardID'] .
                                                '</td>';
                                            echo "<td class='left'><a href='viewBoard.php'>" .
                                                $memberInfo['boardTitle'] .
                                                '</a></td>';
                                            echo '<td>' .
                                                $memberInfo['youNickName'] .
                                                '</td>';
                                            echo '<td>' .
                                                date(
                                                    'Y-m-d H:i',
                                                    $memberInfo['regTime']
                                                ) .
                                                '</td>';
                                            echo '</tr>';
                                        }
                                    } else {
                                        echo "<tr><td colspan='4'>{$searchKeyword}가 없습니다.</td></tr>";
                                    }
                                } else {
                                    echo '📢<br />에러 발생 : 관리자에게 문의하세요!';
                                    exit();
                                }
                                ?>
                            </tbody>
                        </table>
                    </div>
                    <!-- //listTable -->
                    <!-- listPage -->
                    <?php include '../board/pagination.php'; ?>
                    <!-- //listPage -->
                </div>
            </div>
        </section>
        <!-- //boardCont -->
    </main>

      <!-- Script -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/ScrollTrigger.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.min.js"></script>

    <script src="../assets/js/script.js"></script>
    <script src="../assets/js/menu.js"></script>
</body>

</html>