<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>session.php</title>
</head>
<body>
	<?php
        session_start();

        // 세션 생성
        $_SESSION['userID'] = 'hyojudev';

        if(isset($_SESSION['userID'])){
            echo "세션 생성 성공.";
            echo "{$_SESSION['userID']}";
        } else {
            echo "세션 생성 실패.";
        }
        
	    // 세션 삭제
	    // unset($_SESSION['userID']);
	?>
</body>
</html>