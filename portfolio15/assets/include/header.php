<div class="sign">
    <ul>
        <?php if( isset($_SESSION['memberID']) ){ ?>
            <li><?=$_SESSION['youNickName']?>님 환영합니다.</li>
            <li><a href="http://www.yjshop.net/port/assets/sign/logOut.php"><i class="fa fa-sign-out" aria-hidden="true"></i>로그아웃</a></li>
        <?php } else{ ?>
            <li>
                <a href="http://www.yjshop.net/port/assets/sign/signUp.php"><i class="fa fa-user-plus" aria-hidden="true"></i>회원가입</a>
                <span class="php-icon">PHP</span>
            </li>
            <li>
                <a href="http://www.yjshop.net/port/assets/sign/logIn.php"><i class="fa fa-sign-in" aria-hidden="true"></i>로그인</a>
                <span class="php-icon">PHP</span>
            </li>
        <?php } ?>
        <li>
            <a href="http://www.yjshop.net/port/assets/board/board.php"><i class="fa fa-list-alt" aria-hidden="true"></i>게시판</a>
            <span class="php-icon">PHP</span>
        </li>
    </ul>
</div>