<?php
    include '../connect/connect.php'; //링크 시킴
    
    $sql = "create table myMember("; //멤버폴더
    $sql .= "memberID int(10) unsigned NOT NULL AUTO_INCREMENT,"; //자동으로 늘어남 10이내
    $sql .= "youEmail varchar(40) UNIQUE NOT NULL,"; //메일
    $sql .= "youName varchar(10) NOT NULL,"; //이름
    $sql .= "youNickName varchar(10) NOT NULL,"; //닉네임
    $sql .= "youPW varchar(20) DEFAULT NULL,"; //패스워드
    $sql .= "youBirth varchar(10) NOT NULL,"; //생일
    $sql .= "regTime int(11) NOT NULL,"; //회원가업시간
    $sql .= "PRIMARY KEY(memberID)"; //주민번호
    $sql .= ") CHARSET=utf8"; //언어설정
    
    $result = $dbConnect -> query($sql);  //DB 풔리로

    if($result){
        echo "Create Tables Complete";
    } else {
        echo "Create Tables False";
    }
?>