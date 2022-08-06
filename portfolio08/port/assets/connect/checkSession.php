<?php
  if(!isset($_SESSION['memberID'])){
    Header('Location:http://wlgus6566.dothome.co.kr/port/assets/sign/logIn.php');
    exit;
  }
?>