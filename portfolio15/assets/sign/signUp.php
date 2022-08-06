<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="author" content="yeong">
    <meta name="descirption" content="개인 포트폴리오 사이트 입니다.">
    <meta name="keywords" content="publisher, portfolio">
    <meta name="generator" content="visual studio">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio signUp</title>

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
        <a href="#userEmail">회원가입 바로가기</a>
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
        <section id="section1">
            <div class="container">
                <div class="sec1">
                    <span>Create Account</span>
                    <h1><span>Welcome</span> to <br>
                        Portfolio</h1>
                   <form name="signUp" action="signUpSave.php" method="post">
                       <fieldset>
                           <legend class="blind">회원 가입 폼입니다</legend>
                            <div>
                                <label for="userEmail" class="blind">이메일</label>
                                <input type="email" name="userEmail" id="userEmail" placeholder="이메일을 적어주세요" required autofocus>
                            </div>
                            <div>
                                <label for="userName" class="blind">이름</label>
                                <input type="text" name="userName" id="userName" placeholder="이름을 적어주세요" required>
                            </div>
                            <div>
                                <label for="userNickName" class="blind">닉네임</label>
                                <input type="text" name="userNickName" id="userNickName" placeholder="활동에 필요한 닉네임을 적어주세요" required>
                            </div>
                            <div>
                                <label for="userPW" class="blind">패스워드</label>
                                <input type="text" name="userPW" id="userPW" placeholder="패스워드를 적어주세요" required>
                            </div>
                           <div class="birth">
                               <div>
                                   <label for="birthYear">년도</label>
                                   <select name="birthYear" id="birthYear">
                                       <?php 
                                            $birthYear = date('Y', time()); //연도불러오기
                                            for( $i=$birthYear; $i>=1930; $i-- ){
                                                echo "<option value='{$i}'>{$i}</option>";
                                            }
                                       ?>
                                   </select>
                               </div>
                               <div>
                                <label for="birthMonth">월</label>
                                <select name="birthMonth" id="birthMonth">
                                   <?php 
                                        for( $i = 1; $i <= 12; $i++ ){
                                            echo "<option value='{$i}'>{$i}</option>";
                                        }
                                   ?>
                                </select>
                            </div>
                            <div>
                                <label for="birthDay">일</label>
                                <select name="birthDay" id="birthDay">
                                    <?php 
                                        for( $i = 1; $i <= 31; $i++ ){
                                            echo "<option value='{$i}'>{$i}</option>";
                                        }
                                    ?>
                                </select>
                            </div>
                           </div>
                           <div>
                               <button type="submit" value="signUp">Sign Up</button>
                           </div>
                       </fieldset>
                   </form>
                   <p>Already have an account?&nbsp;<a href="logIn.php">Sign in here</a></p>
                </div>
            </div>
        </section>
        <!-- //section1 -->
    </main>
    <script src="../js/phpscript.js"></script>
</body>
</html>