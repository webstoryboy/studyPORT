<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP_signUp</title>

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
    
    <section id="signUp">
        <div class="section signUp_section">
            <div>
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
            </div>
            <form name="signUp" method="post" action="signUpSave.php">
                <fieldset>
                    <legend class="ir_so">정보입력</legend>
                    <div>
                        <label for="userEmail" class="ir_so">이메일</label>
                        <input id="userEmail" name="userEmail" type="email" placeholder="Mail" required autofocus>
                    </div>

                    <div>
                        <label for="userName" class="ir_so">이름</label>
                        <input id="userName" name="userName" type="text" placeholder="Name" required>
                    </div>

                    <div>
                        <label for="userNickName" class="ir_so">닉네임</label>
                        <input type="text" name="userNickName" id="userNickName" placeholder="NickName" required>
                    </div>

                    <div>
                        <label for="userPW" class="ir_so">비밀번호</label>
                        <input id="userPW" name="userPW" type="password" placeholder="Password" required>
                    </div>
                    <div class="select birth">
                        <div>
                            <label for="birthYear">year
                                <select name="birthYear" id="birthYear" required>
                                    <?php
                                        $thisYear = date('Y', time());

                                        for( $i = $thisYear; $i >= 1930; $i-- ){
                                            echo "<option value='{$i}'>{$i}</option>";
                                        }
                                    ?>
                                </select>
                            </label>
                        </div>

                        <div>
                            <label for="birthMonth">month
                                <select name="birthMonth" id="birthMonth" required>
                                    <?php
                                        for( $i=1; $i<=12; $i++){
                                            echo "<option value='{$i}'>{$i}<?option>";
                                        }
                                    ?>
                                </select>
                            </label>
                        </div>

                        <div>
                            <label for="birthDay">day
                                <select name="birthDay" id="birthDay" required>
                                    <?php
                                        for( $i=1; $i<=31; $i++){
                                            echo "<option value='{$i}'>{$i}<?option>";
                                        }
                                    ?>
                                </select>
                            </label>
                        </div>    
                    </div>
                </fieldset>
                <button class="signup-btn" type="submit" value="회원가입">SIGN UP</button>
            </form>
        </div>
    </section>
    <!-- /signUp -->
</body>

</html>