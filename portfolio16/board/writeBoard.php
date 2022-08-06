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
                <div class="writeBoard">
                    <h2>게시글을 작성해주세요!</h2>
                    <form action="saveBoard.php" name="boardWrite" method="post">
                        <fieldset>
                            <legend class="sr-only">게시판 작성 영역입니다.</legend>
                            <div class="mb-2">
                                <label for="boardTitle">제목</label>
                                <input type="text" name="boardTitle" id="boardTitle" class="title-text" required autofocus placeholder="제목을 작성해주세요!" />
                            </div>
                            <div>
                                <label for="boardContent">내용</label>
                                <textarea name="boardContent" id="boardContent" class="title-text" rows="8" required placeholder="내용을 작성해주세요!"></textarea>
                            </div>
                        </fieldset>
                        <button class="writeBoardBtn mt-2" type="submit" value="저장하기">저장하기</button>
                    </form>
                </div>
            </div>
        </section>
        <!— //boardCont —>
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
