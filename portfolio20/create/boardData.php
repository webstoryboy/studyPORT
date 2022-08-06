<?php
include '../connect/connect.php';
include '../connect/session.php';
// include '../connect/checkSession.php';

// 테스트 확인 후 주석처리
// for ($i = 1; $i <= 400; $i++) {
//     $regTime = time();
//     $sql =
//         'INSERT INTO port03Board(memberID, boardTitle, boardContent, regTime) ';
//     $sql .= "VALUES(1, '{$i}번째 게시판 제목입니다.', '{$i} 번째 게시물 컨텐츠 입니다. 내용입니다. 내용입니다.', {$regTime})";
//     $result = $dbConnect->query($sql);

//     if ($result) {
//         echo "{$i} data input complete";
//     } else {
//         echo "{$i} data input false";
//     }
//     echo '<br>';
// }
?>
