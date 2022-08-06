<?php
   $host="localhost";
   $user="naynara";
   $pw="heartofgod66!";
   $dbName="naynara";
   $dbConnect = new mysqli($host,$user,$pw,$dbName);
   $dbConnect -> set_charset("utf8");

   if(mysqli_connect_errno()){
       echo "database connect false";
   }else {
       echo "database connect true";
   }
?>