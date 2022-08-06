<?php 
    //데이터베이스 접속
    $host = "localhost";
    $user = "rladudwl210";
    $pw = "kk5371826";
    $dbName = "rladudwl210";
    $dbConnect = new mysqli($host, $user, $pw, $dbName);
    $dbConnect -> set_charset("utf8");

    if(mysqli_connect_errno()){
        echo "database connect false";
    }else {
        // echo "database connect true";
    }
?>