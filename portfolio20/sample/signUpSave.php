<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
    <meta name="author" content="han hyo ju" />
    <meta name="description" content="프론트앤드 개발자 한효주 포트폴리오 사이트입니다." />
    <meta name="keywords" content="웹표준, 웹접근성, 사이트만들기, 포트폴리오, 한효주, 프론트앤드 개발자" />
    <title>HYOJUDEV PORTFOLIO</title>

    <!-- Webfonts -->
    <link href="https://fonts.googleapis.com/css2?family=Italiana&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Nixie+One&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="//cdn.jsdelivr.net/font-iropke-batang/1.2/font-iropke-batang.css" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet" />

    <!-- CSS Style -->
    <link rel="stylesheet" href="../assets/css/reset.css" />
    <link rel="stylesheet" href="../assets/css/style.css" />
</head>

<body>
    <!-- header -->
    <header id="header">
        <div class="logo">hyoju</div>
        <div class="menu-wrap">
            <div class="hamburger">
                <div class="ham__bar1"></div>
                <div class="ham__bar2"></div>
            </div>
            <nav class="navigation">
                <div class="nav-radial">
                    <div class="nav-menu-wrap">
                        <ul class="main-menu">
                            <li class="main-menu__link">
                                <a href="../pages/index.html" class="main-split">home</a>
                            </li>
                            <li class="main-menu__link">
                                <a href="../pages/index.html" class="main-split">about</a>
                            </li>
                            <li class="main-menu__link">
                                <a href="../pages/index.html" class="main-split">project</a>
                            </li>
                            <li class="main-menu__link">
                                <a href="../pages/index.html" class="main-split">contact</a>
                            </li>
                        </ul>
                        <ul class="sign-menu">
                            <?php if (isset($_SESSION['memberID'])) { ?>
                            <li class="youNickName sign-menu__link"><?= $_SESSION[
                                'youNickName'
                            ] ?> 님</li>
                            <li class="sign-menu__link"><a href="../sign/logOut.php">logOut</a></li>
                            <?php } else { ?>
                            <li class="sign-menu__link"><a href="../sign/logIn.php">logIn</a></li>
                            <li class="sign-menu__link"><a href="../sign/signUp.php">signUp</a></li>
                            <?php } ?>
                        <li class="sign-menu__link"><a href="../board/board.php">board</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <div>protfolio</div>
    </header>
    <!-- //header -->

    <!-- main -->
       <main>
            <?php
            // 접속하기
            include '../connect/connect.php';
            include '../connect/session.php';

            // 데이터 가져오기
            // echo $_POST['userEmail'], '<br>';
            // echo $_POST['userName'], '<br>';
            // echo $_POST['userNickName'], '<br>';
            // echo $_POST['userPW'], '<br>';
            // echo $_POST['birthYear'], '<br>';
            // echo $_POST['birthMonth'], '<br>';
            // echo $_POST['birthDay'], '<br>';

            // 데이터 가져와서 변수에 저장
            $userEmail = $_POST['userEmail'];
            $userName = $_POST['userName'];
            $userNickName = $_POST['userNickName'];
            $userPW = $_POST['userPW'];
            $birthYear = $_POST['birthYear'];
            $birthMonth = $_POST['birthMonth'];
            $birthDay = $_POST['birthDay'];

            //에러 : 경고창
            function errorAlert($alert)
            {
                echo "<div class='errorAlert'>{$alert}<a href='signUp.php'>회원가입 다시하기</a><a href='logIn.php'>로그인 하기</a></div>";
                return;
            }

            //이메일 검사
            if (!filter_Var($userEmail, FILTER_VALIDATE_EMAIL)) {
                errorAlert('올바른 이메일이 아닙니다.');
                exit(); // 다음 단계로 넘어감
            }

            //이름이 한글로 구성되어 있는지 확인(정규식 표현법)
            $userNamePattern = '/^[가-힣]{1,}$/'; // ^시작[가부터힣까시 쓸 수 있음] {1자리 이상 써야 함} $/는 닫아주는 표시
            if (!preg_match($userNamePattern, $userName, $matches)) {
                errorAlert('한글로 이루어진 이름이 아닙니다.');
                exit();
            }

            //유효성 검사
            if ($userName == null || $userName == '') {
                errorAlert('이름을 입력해주세요!!');
                exit();
            }
            if ($userNickName == null || $userNickName == '') {
                errorAlert('닉네임을 입력해주세요!!');
                exit();
            }
            if ($userPW == null || $userPW == '') {
                errorAlert('패스워드를 입력해주세요!!');
                exit();
            }
            if ($birthYear == 0) {
                errorAlert('생일 년도를 선택해 주세요');
                exit();
            }
            if ($birthMonth == 0) {
                errorAlert('생일 월을 선택해 주세요');
                exit();
            }
            if ($birthDay == 0) {
                errorAlert('생일 일을 선택해 주세요');
                exit();
            }

            $birth = $birthYear . '-' . $birthMonth . '-' . $birthDay;

            //이메일 중복 검사
            $userEmailCheck = false; // 기본 설정 : false시 회원가입 불가

            // 선택하기 : 앞서 $sql 에 저장해준 myMember에서 youEamil을 선택한 후, youEmail에 userEamil 여부 확인
            $sql = "SELECT youEmail FROM port03Member WHERE youEmail = '{$userEmail}'";
            // 전송하기
            $result = $dbConnect->query($sql);

            if ($result) {
                $count = $result->num_rows; // num_rows : 1과 0으로 결과 출력

                if ($count == 0) {
                    $userEmailCheck = true; // 회원가입 가능
                } else {
                    // 이미 존재하는 이메일 입력 시 에러 출력
                    errorAlert('이메일이 중복됩니다. 다시 한번 확인해주세요!!');
                    exit(); // 결과가 맞으면 나가기
                }
            } else {
                // 그것도 아니라면 문의하기 출력
                errorAlert('관리자에게 문의하세요~ 에러 발생');
                exit();
            }

            //닉네임 중복 검사
            $userNickNameCheck = false;

            // 선택하기 : 앞서 $sql 에 저장해준 myMember에서 youNickName 선택한 후, youNickName userNickName 여부 확인
            $sql = "SELECT youNickName FROM port03Member WHERE youNickName = '{$userNickName}'";
            // 전송하기
            $result = $dbConnect->query($sql);

            if ($result) {
                $count = $result->num_rows; // num_rows : 1과 0으로 결과 출력

                if ($count == 0) {
                    $userNickNameCheck = true; // 회원가입 가능
                } else {
                    // 이미 존재하는 닉네임 입력 시 에러 출력
                    errorAlert('닉네임이 중복됩니다. 다시 한번 확인해주세요!!');
                    exit(); // 결과가 맞으면 나가기
                }
            } else {
                // 그것도 아니라면 문의하기 출력
                errorAlert('관리자에게 문의하세요~ 에러 발생');
                exit();
            }

            //이메일도 중복안되고, 닉네임도 중복 안됐을 때
            if ($userEmailCheck = true && ($userNickNameCheck = true)) {
                // 앞서 `변수의 데이터를 모아서 저장`한 것을 이 곳에 넣기
                $regTime = time();

                // 에러가 없다면, 변수의 값을 가져와서
                $sql =
                    'INSERT INTO port03Member(youEmail, youName, youNickName, youPW, youBirth, regTime) ';
                // 데이터 값 넣기
                $sql .= "VALUES('{$userEmail}','{$userName}','{$userNickName}','{$userPW}','{$birth}',{$regTime})";
                $result = $dbConnect->query($sql);

                if ($result) {
                    // 회원 가입 완료 했을 때 모든 페이지 접근 가능하게 해줌
                    // session
                    $_SESSION['memberID'] = $dbConnect->insert_id; // id값 가져오기
                    $_SESSION['youNickName'] = $userNickName;
                    // 이동 시켜 줌
                    Header('Location: ../pages/index.html');
                } else {
                    // 둘 다 false일 때 에러 출력
                    errorAlert('관리자에게 문의하세요~ 에러 발생');
                    exit();
                }
            } else {
                // 하나만 false일 때 에러 출력
                errorAlert('이메일 또는 닉네임이 존재합니다.');
                exit();
            }
            ?>
    </main>
    <!-- //main -->

    <!-- script -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <!-- <script src="https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js"></script> -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/ScrollTrigger.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.min.js"></script>

    <script src="../assets/js/scroll.js"></script>
    <script src="../assets/js/script.js"></script>
    <!-- //script -->
</body>

</html>