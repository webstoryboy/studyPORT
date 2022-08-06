 <!-- header -->
    <header>
        <div class="other-project-btn">
            <a target="_blank" href="http://hyojudev.dothome.co.kr/port03/pages/index.html"></a>
        </div>
        <div class="nav-bg">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <nav class="main-menu">
            <li class="main-menu__link page__link"><a href="../pages/home.html">home</a></li>
            <li class="main-menu__link page__link"><a href="../pages/about.html">about</a></li>
            <li class="main-menu__link page__link"><a href="../pages/projects.html">projects</a></li>
            <li class="main-menu__link page__link menu-active"><a href="../pages/script.html">script</a></li>
            <li class="main-menu__link page__link-php"><a href="../board/board.php">board</a></li>
            <li class="main-menu__link page__link"><a href="../pages/contact.html">contact</a></li>
        </nav>
        <ul class="sign-menu">
            <?php if (isset($_SESSION['memberID'])) { ?>
            <li><a href="#">
                    <?= $_SESSION['youNickName'] ?>님👻
                </a></li>
            <li><a href="../sign/logOut.php">LOGOUT</a></li>
            <?php } else { ?>
            <li><a href="../sign/logIn.php">LOGIN</a></li>
            <li><a href="../sign/signUp.php">SIGNUP</a></li>
            <?php } ?>
        </ul>
        <div class="mobile-menu">
            <div class="hamburger">
                <div class="ham__bar1"></div>
                <div class="ham__bar2"></div>
            </div>
        </div>
    </header>
    <!-- //header -->
