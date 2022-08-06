<header id="header" class="header2">
    <div class="port"><a href="../index3.html">portfolio</a></div>
    <div class="logo"><a href="../index3.html">yoo-jung</a></div>
    <nav class="nav">
        <!-- <ul>
            <li><a href="../pages/about.html">About</a></li>
            <li><a href="../pages/reference.html">Reference</a></li>
            <li><a href="../pages/youtube.html">Youtube</a></li>
            <li><a href="../pages/script.html">Script</a></li>
            <li><a href="../pages/contact.html">Contact</a></li>
        </ul> -->
        <ul>
            <?php if( isset($_SESSION['memberID']) ){ ?>
                    <li class="line"><?=$_SESSION['youNickName']?></li>
                    <li><a href="../sign/logOut.php">LOGOUT</a></li>
            <?php } else { ?>
                    <li><a href="../sign/signUp.php">SIGNUP</a></li>                
                    <li><a href="../sign/logIn.php">LOGIN</a></li>
            <?php } ?> 
            <li><a href="../board/board.php">BOARD</a></li>
        </ul>
    </nav>
</header>