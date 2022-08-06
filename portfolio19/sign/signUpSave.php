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
        <?php include '../component/header.php'; ?>
    </header>
    <!-- //header -->

    <main>
        <!-- signUpCont -->
        <?php
        // 접속하기
        include '../connect/connect.php';
        include '../connect/session.php';

        // 데이터 가져오기
        // echo $_POST['userEmail'], "<br>";
        // echo $_POST['userName'], "<br>";
        // echo $_POST['userNickName'], "<br>";
        // echo $_POST['userPW'], "<br>";
        // echo $_POST['birthYear'], "<br>";
        // echo $_POST['birthMonth'], "<br>";
        // echo $_POST['birthDay'], "<br>";

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
            echo "<div class='errorAlert'>{$alert}<a class='errorAlert-a' href='signUp.php'>회원가입 다시하기</a><a href='logIn.php'>로그인 하기</a></div>";
            return;
        }

        //이메일 검사
        if (!filter_Var($userEmail, FILTER_VALIDATE_EMAIL)) {
            errorAlert('올바른 이메일이 아닙니다.');
            exit();
        }

        //정규식 표현법
        $userNamePattern = '/^[가-힣]{1,}$/';
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
        $userEmailCheck = false;

        $sql = "SELECT youEmail FROM myPortMember WHERE youEmail = '{$userEmail}'";
        // 전송하기
        $result = $dbConnect->query($sql);

        if ($result) {
            $count = $result->num_rows;

            if ($count == 0) {
                $userEmailCheck = true;
            } else {
                errorAlert(
                    '<h2>📢<br />이메일이 중복됩니다.<br /> 다시 한번 확인해주세요 :(</h2>'
                );
                exit();
            }
        } else {
            errorAlert('<h2>📢<br />에러 발생: 관리자에게 문의하세요!</h2>');
            exit();
        }

        //닉네임 중복 검사
        $userNickNameCheck = false;

        $sql = "SELECT youNickName FROM myPortMember WHERE youNickName = '{$userNickName}'";
        // 전송하기
        $result = $dbConnect->query($sql);

        if ($result) {
            $count = $result->num_rows;

            if ($count == 0) {
                $userNickNameCheck = true;
            } else {
                errorAlert(
                    '<h2>📢<br />닉네임이 중복됩니다.<br /> 다시 한번 확인해주세요!!</h2>'
                );
                exit();
            }
        } else {
            errorAlert('<h2>📢<br />에러 발생: 관리자에게 문의하세요!</h2>');
            exit();
        }

        if ($userEmailCheck = true && ($userNickNameCheck = true)) {
            $regTime = time();
            $sql =
                'INSERT INTO myPortMember(youEmail, youName, youNickName, youPW, youBirth, regTime) ';
            $sql .= "VALUES('{$userEmail}','{$userName}','{$userNickName}','{$userPW}','{$birth}',{$regTime})";
            $result = $dbConnect->query($sql);

            if ($result) {
                // session
                $_SESSION['memberID'] = $dbConnect->insert_id;
                $_SESSION['youNickName'] = $userNickName;
                Header('Location: ../pages/index3.html');
            } else {
                errorAlert(
                    '<h2>📢<br />에러 발생: 관리자에게 문의하세요!</h2>'
                );
                exit();
            }
        } else {
            errorAlert('<h2>📢<br />이메일 또는 닉네임이 존재합니다 :(</h2>');
            exit();
        }
        ?>
        <!--— //signUpCont -->
    </main>
</body>

</html>