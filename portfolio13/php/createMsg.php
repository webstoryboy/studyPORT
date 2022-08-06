<?php
    include 'connect.php';
    $sql = "create table myContact(";
    $sql .= "contactID int(10) unsigned NOT NULL AUTO_INCREMENT,";
    $sql .= "memberID int(10) unsigned NOT NULL,";
    $sql .= "yourEmail varchar(50) NOT NULL,";
    $sql .= "yourSubject varchar(50) NOT NULL,";
    $sql .= "yourMsg longtext NOT NULL,";
    $sql .= "regTime int(10) unsigned NOT NULL,";
    $sql .= "PRIMARY KEY(contactID)";
    $sql .= ") CHARSET=utf8";
    $result = $dbConnect -> query($sql);
    if($result){
        echo "Create Tables Complete";
    } else {
        echo "Create Tables False";
    }
?>