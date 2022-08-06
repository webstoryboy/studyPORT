<header class="header">
    <h1 class="logo">
        <a href="../main/index.html">
            <img src="../../assets/img/logo_jh.png" alt="logo">
        </a>
    </h1>
    <nav class="nav">
        <ul>
            <li><a href="#section1">home</a></li>
            <li><a href="#section2">skills</a></li>
            <li><a href="#section5">website</a></li>
            <li><a href="#section7">mobile</a></li>
            <li><a href="#section9">script</a></li>
            <li><a href="#section11">contact</a></li>
        </ul>
    </nav>
    <ul class="login">
        <?php if(!isset($_SESSION['memberID'])){ ?>
            <li><a href="../sign/signUp.php"><i class="fa fa-user-o"></i><span>PHP <i class="fa fa-book"></i></span>회원가입</a></li>
            <li><a href="../sign/logIn.php"><i class="fa fa-sign-in"></i>로그인</a></li>
        <?php } else { ?>
            <li><a href="#"><?=$_SESSION['youNickName']?>님 환영합니다.</a></li>
            <li><a href="../sign/logOut.php"><i class="fa fa-sign-out"></i>로그아웃</a></li>
        <?php } ?> 
        <li><a href="../board/listBoard.php"><i class="fa fa-table"></i>게시판</a></li>
    </ul>
    <div class="togglebtn">
        <i class="fa fa-bars"></i>
    </div>
</header>


 