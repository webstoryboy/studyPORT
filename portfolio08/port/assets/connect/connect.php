<?php
    $host = "localhost";
    $user = "wlgus6566";
    $pw = "dorldhfl2!";
    $dbName = "wlgus6566";
    $dbConnect = new mysqli($host, $user,$pw,$dbName);
    $dbConnect->set_charset("utf8");

    if(mysqli_connect_error()){
        echo "database connect false";
    }else{
//        echo "database connect good";
    }
?>