<div class="php">
    <div class="sign">
        <?php if( isset($_SESSION['memberID']) ){ ?>
            <a href="#"><?=$_SESSION['youNickName']?></a>
            <a href="./sign/logOut.php"><span>logOut</span></a>
        <?php } else { ?>
            <a href="./sign/logIn.php"><span>logIn</span></a>
            <a href="./sign/signUp.php"><span>signUp</span></a>                
        <?php } ?> 
    </div>
    <div class="php_open_btn"><a href="#"></a></div>
</div>