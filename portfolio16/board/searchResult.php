<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="author" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta property="og:type" content="website">
    <meta property="og:title" content="portfolio">
    <meta property="og:description" content="portfolio #재밌는 #시크한척 #꿈꾸는 #바보 #퍼블리셔 #나윤주">
    <meta name="description" content="portfolio #재밌는 #시크한척 #꿈꾸는 #바보 #퍼블리셔 #나윤주">
    <meta name="keywords" content="portfolio">
    <meta property="og:url" content="portfolio">
    <meta property="og:image" content="../assets/img/thumb.png">
    <link href="./assets/img/favicon.png" rel="shortcut icon">
    <title>나윤주 포트폴리오</title>

    <!-- 부트스트랩 -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
   
    <!-- 스타일 -->
    <link rel="stylesheet" href="../assets/css/reset.css">
    <!-- <link rel="stylesheet" href="assets/css/bootstrap-grid.css"> -->
    <link rel="stylesheet" href="../assets/css/style.css">
    
    <!-- js -->
    
    <script src="../assets/js/work.js"></script>
    

</head>

<body>
    <a href="../index.html" class="logo"></a>
    
    <!-- hedder -->
    <?php
        include '../component/header.php';
    ?>
    <!-- //header -->
    
    

    <main>
        <!-- boardCont -->
        <section id="boardCont">
            <div class="container">
                <div class="listBoard">
                    <h2>검색한 결과입니다.</h2>
                    <div class = "listSearch">
                        <a class= "form-btn black" href="board.php">목록보기</a>
                    </div>
                    <!-- //listSearch -->
                    </div>
                    <div class="listTable">
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
                            if( isset($_GET['page']) ){
                                $page = (int) $_GET['page'];
                            }else{
                                $page = 1;
                            }


                            $numView = 10; //페이지보여지는 수
                            $viewLimit = ($numView * $page) - $numView;
                            
                            $searchKeyword = $dbConnect -> real_escape_string($_POST['searchKeyword']);
                            $searchOption = $dbConnect -> real_escape_string($_POST['searchOption']);

                            if( $searchKeyword == '' || $searchKeyword == null ){
                                echo "검색어가 없습니다.";
                                exit;
                            }

                            switch ($searchOption){
                                case 'title';
                                case 'content';
                                case 'tandc';
                                case 'torc';
                                    break;
                                default:
                                    echo "검색 옵션을 선택해 주세요!";
                                    exit;
                                    break;
                            }
                            // $sql = "SELECT b.boardID, b.boardTitle, b.boardContent, m.youNickName, b.regTime FROM myBoard b JOIN myMember m ON (m.memberID = b.memberID) WHERE b.boardTitle LIKE '%{$searchKeyword}%' ";
                            // $sql = "SELECT b.boardID, b.boardTitle, b.boardContent, m.youNickName, b.regTime FROM myBoard b JOIN myMember m ON (m.memberID = b.memberID) WHERE b.boardContent LIKE '%{$searchKeyword}%' ";
                            // $sql = "SELECT b.boardID, b.boardTitle, b.boardContent, m.youNickName, b.regTime FROM myBoard b JOIN myMember m ON (m.memberID = b.memberID) WHERE b.boardTitle LIKE '%{$searchKeyword}%' AND b.boardContent LIKE '%{$searchKeyword}%' ";
                            // $sql = "SELECT b.boardID, b.boardTitle, b.boardContent, m.youNickName, b.regTime FROM myBoard b JOIN myMember m ON (m.memberID = b.memberID) WHERE b.boardTitle LIKE '%{$searchKeyword}%' OR b.boardContent LIKE '%{$searchKeyword}%' ";

                            $sql = "SELECT b.boardID, b.boardTitle, b.boardContent, m.youNickName, b.regTime FROM myBoard b JOIN myMember m ON (m.memberID = b.memberID) ";
                            
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
                            
                            $sql .= "LIMIT {$viewLimit}, {$numView}";

                            $result = $dbConnect -> query($sql);

                            if($result){
                                $dataCount = $result -> num_rows;
                                if($dataCount > 0){
                                    for($i=1; $i<= $dataCount; $i++){
                                        $memberInfo = $result -> fetch_array(MYSQLI_ASSOC);
                                        echo "<tr>";
                                        echo "<td>".$memberInfo['boardID']."</td>";
                                        echo "<td class='left'><a href='veiwBoard.php'>".$memberInfo['boardTitle']."</a></td>";
                                        echo "<td>".$memberInfo['youNickName']."</td>";
                                        echo "<td>".date('Y-m-d H:i', $memberInfo['regTime'])."</td>";
                                        echo "</tr>";
                                }
                            }else{
                                echo"<tr><td colspan='4'>게시글이 없습니다.</td></tr>";
                            }
                        }else{
                            echo "에러발생: 관리자에게 문의하세요!";
                            exit;
                        }
                            ?>
                            </tbody>
                        </table>
                    </div>
                    <!-- //listTable -->
                    <?php
                     include '../board/pagination.php';
                    ?>
                    
                    <!-- //listPage -->
                </div>    
            </div>
        </section>
        <!--// boardCont -->
    </main>
    <!-- footer -->
    <?php
        include '../component/footer.php';
    ?>
    <!-- //footer -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"
    integrity="sha256-lPE3wjN2a7ABWHbGz7+MKBJaykyzqCbU96BJWjio86U=" crossorigin="anonymous"></script>
  <!-- three js -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/108/three.min.js"
    integrity="sha256-3mBEX8I0uMLF7+AUjJeTCelosuorzYpqwBMBPDTyQqY=" crossorigin="anonymous"></script>

  <script>
    TweenMax.staggerFrom(".logo", 1.5, {
      delay: 0.5,
      opacity: 0,
      x: "-50",
      ease: Expo.easeInOut
    }, 0.08);

    // NAVBAR
    TweenMax.staggerFrom(".sidebar", 1.5, {
      delay: 1.5,
      opacity: 0,
      y: "20",
      ease: Expo.easeInOut
    }, 0.08);

    TweenMax.staggerFrom("header", 1.5, {
      delay: 0.5,
      opacity: 0,
      x: "20",
      ease: Expo.easeInOut
    }, 0.08);

    TweenMax.staggerFrom(".contact-btn", 1.5, {
      delay: 0.5,
      opacity: 0,
      y: "-20",
      ease: Expo.easeInOut
    }, 0.08);

    TweenMax.staggerFrom(".all-btn", 1.5, {
      delay: 0.7,
      opacity: 0,
      y: "20",
      ease: Expo.easeInOut
    });

    // TEXT......
    TweenMax.from(".text h1 .hide-text.i1", 1.5, {
      delay: 0,
      y: "100%",
      ease: Expo.easeInOut
    });

    TweenMax.from(".text h1 .hide-text.i2", 1.5, {
      delay: 0.1,
      y: "100%",
      ease: Expo.easeInOut
    });

    TweenMax.from(".text h1 .hide-text.i3", 1.5, {
      delay: 0.2,
      y: "100%",
      ease: Expo.easeInOut
    });

    TweenMax.from(".text h1 .hide-text.i4", 1.5, {
      delay: 0.3,
      y: "100%",
      ease: Expo.easeInOut
    });
    //

    TweenMax.from(".right-sec", 1.5, {
      delay: 0.5,
      opacity: 0,
      y: "20",
      ease: Expo.easeInOut
    });

   
    TweenMax.from(".top-sec", 1.5, {
      delay: 0.5,
      opacity: 0,
      y: "20",
      ease: Expo.easeInOut
    });

    TweenMax.from(".scroll-btn", 1.5, {
      delay: 0.5,
      x: "100",
      ease: Expo.easeInOut
    });

    TweenMax.from(".name", 1.5, {
      delay: 0.6,
      opacity: 0,
      y: "20",
      ease: Expo.easeInOut
    });

 

  </script>
</body>
</html>
