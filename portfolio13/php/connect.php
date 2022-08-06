<?php
    $host = "localhost";
    $user = "heemwon";
    $pw = "ox1004631!";
    $dbName = "heemwon";
    $dbConnect = new mysqli($host, $user, $pw, $dbName);
    $dbConnect -> set_charset("utf8");

    if(mysqli_connect_errno()){
        echo "database connect false";
    } else {
//        echo "database connect true";
    }
?>