<?php
    $host = "localhost";
    $user = "rowanna";
    $pw = "h5807329!";
    $dbName = "rowanna";
    $dbConnect = new mysqli($host, $user, $pw, $dbName);
    $dbConnect->set_charset("utf-8");

    if(mysqli_connect_error()){
        echo "database connect false";
    } else {
//        echo "database connect good";
    }
?>