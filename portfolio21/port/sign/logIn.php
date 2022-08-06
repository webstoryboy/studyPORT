<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP_login</title>

    <!-- css -->
    <link rel="stylesheet" href="../assets/css/reset_php.css">
    <link rel="stylesheet" href="../assets/css/style_php.css">
    <link rel="stylesheet" href="../assets/css/style_php2.css">
</head>

<body>
    <!-- header -->
    <?php
        include '../component/header.php';
    ?>
    <!-- /header -->
    <section id="login">
        <div class="section login_section">
            <svg id="keyword_star" data-name="keyword_star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 185.39 185.39">
                <title>keyword_star</title>
                <polygon
                    points="92.69 0 106.16 60.19 158.24 27.15 125.2 79.23 185.38 92.69 125.2 106.16 158.24 158.24 106.16 125.2 92.69 185.38 79.23 125.2 27.15 158.24 60.19 106.16 0 92.69 60.19 79.23 27.15 27.15 79.23 60.19 92.69 0">
                </polygon>
                <text transform="translate(65.94 101.9)">i <tspan x="12.74" y="0"
                        style="letter-spacing:-0.009974888392857142em">a</tspan>
                    <tspan x="27.69" y="0" style="letter-spacing:0.00003487723214285714em">m</tspan>
                </text>
            </svg>
            <h2>welcome</h2>
            <form name="logIn" method="post" action="logInSave.php">
                <fieldset>
                    <legend class="ir_so">로그인 영역입니다.</legend>
                    <div>
                        <label for="userEmail"></label>
                        <input name="userEmail"  type="email" id="userEmail" placeholder="ID" required autofocus>
                    </div>

                    <div>
                        <label for="userPW"></label>
                        <input type="password" id="userPW" name="userPW" placeholder="Password" required>    
                    </div>
                </fieldset>
                <button type="submit" value="로그인">LOGIN</button>
                <a href="../sign/signUp.php" class="float_right">sign up</a>
            </form>
        </div>
    </section>
    <!-- /login -->
</body>

</html>