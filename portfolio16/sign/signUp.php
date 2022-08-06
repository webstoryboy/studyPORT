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
    <header>
        <nav>
            <span class="title">I create digital awesomeness.</span>
            <div class="nav-right float-right">
                <a href="#" class="login" data-toggle="modal" data-target="#login-modal">로그인</a>
                <a href="../board/board.php" class="board">게시판</a>
            </div>
        </nav>
    </header>
    
    <aside class="sidebar">
        <button class="side-menu-btn">
            <span class="text">menu</span>
            <span></span>
        </button>
    </aside>
    <div class="all-btn" title="전체보기">전체보기</div>
    <span class="scroll-btn">SCROLL</span>
    <a class="contact-btn" title="contact">Contact</a>
    <!-- //header -->
    <main>
    <section class="sec1">
                <div class="left-sec left-l">
                    <div class="text">
                        <h1><span class="hide-text i1">LET’S</span></h1>
                        <h1><span class="hide-text i2">Sign UP</span></h1>
                        <h1><span class="hide-text i3"></span></h1>
                        <h1><span class="hide-text i4"></span></h1>
                    </div>
                </div>
                <div class="right-sec p-5">
                <div class="signUp">
                    <h3 class="text-center mb-5 mt-3">환영합니다.</h3>
                    <div class="sign-form">
                            <form name="signUp" method="post" action="signUpSave.php">
                                <fieldset>
                                    <legend class="sr-only">회원 가입 폼입니다.</legend>
                                    <div>
                                        <label for="userEmail" class="sr-only">이메일</label>
                                        <input type="email" name="userEmail" id="userEmail" class="input-text form-control" placeholder="이메일을 적어주세요." required="" autofocus="">
                                    </div>
                                    <div>
                                        <label for="userName" class="sr-only">이름</label>
                                        <input type="text" name="userName" id="userName" class="input-text form-control" placeholder="이름을 적어주세요" required="">
                                    </div>
                                    <div>
                                        <label for="userNickName" class="sr-only">닉네임</label>
                                        <input type="text" name="userNickName" id="userNickName" class="input-text form-control" placeholder="활동에 필요한 닉네임을 적어주세요" required="">
                                    </div>
                                    <div>
                                        <label for="userPW" class="sr-only">패스워드</label>
                                        <input type="password" name="userPW" id="userPW" class="input-text form-control" placeholder="패스워드를 적어주세요." required="">
                                    </div>
                                    <div class="birth input-group">
                                <div>
                                    <label for="birthYear">년도</label>
                                    <select name="birthYear" id="birthYear" required>
                                        <?php
                                        $birthYear = date('Y',time());
                                        for( $i = $birthYear; $i >= 1930; $i--){
                                            echo "<option value='{$i}'>{$i}</option>";
                                        }
                                        ?>
                                    </select>    
                                </div>                            
                                <div>
                                    <label for="birthMonth">월</label>
                                    <select name="birthMonth" id="birthMonth" required>
                                        <?php
                                        for( $i = 1; $i <= 12; $i++){
                                            echo "<option value='{$i}'>{$i}</option>";
                                        }
                                        ?>
                                    </select>
                                </div>
                                <div>
                                    <label for="birthDay">일</label>
                                    <select name="birthDay" id="birthDay" required>
                                    <?php
                                        for( $i =1; $i <= 31; $i++){
                                            echo "<option value='{$i}'>{$i}</option>";
                                        }
                                        ?>
                                    </select>
                                </div>
                            </div>
                                    <div class="text-center mt-3">
                                        <button class="btn btn-primary btn-block" type="submit" value="회원가입">회원가입</button>
                                        <p class="signDesc">로그인을 원한다면? <a href="#none" data-toggle="modal" data-target="#login-modal">로그인</a></p>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
        </section>
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
