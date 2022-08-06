<?php
    include 'connect.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="heemwon">
    <meta name="description" content="힘원 포트폴리오 사이트입니다.">
    <meta name="keywords" content="웹표준, 웹접근성, 사이트만들기, 포트폴리오, 힘원">
    <title>HEEMWON | PORTFOLIO</title>

    <!-- css -->
    <link rel="stylesheet" href="../assets/css/reset.css">
    <link rel="stylesheet" href="../assets/css/style8.css">

    <!-- animation.css -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
    
    <!-- web font -->
    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet">
    
</head>
<body>
    <section id="saveMsg">
        <div class="saveMsg">
            <?php
                $yourEmail = $_POST['yourEmail'];
                $yourSubject = $_POST['yourSubject'];
                $yourMsg = $_POST['yourMsg'];
                if( $yourEmail != null && $yourEmail != '' ){
                    $yourEmail = $dbConnect -> real_escape_string($yourEmail);
                }
                if( $yourSubject != null && $yourSubject != '' ){
                    $yourSubject = $dbConnect -> real_escape_string($yourSubject);
                }
                if( $yourMsg != null && $yourMsg != '' ){
                    $yourMsg = $dbConnect -> real_escape_string($yourMsg);
                }
                $memberID = $_SESSION['memberID'];
                $regTime = time();
                $sql = "INSERT INTO myContact(memberID, yourEmail, yourSubject, yourMsg, regTime) ";
                $sql .= "VALUES('{$memberID}', '{$yourEmail}', '{$yourSubject}', '{$yourMsg}', {$regTime} )";
                $result = $dbConnect -> query($sql);
                if( $result ){
                    echo "<div class='info'><p>메세지 전송이 완료되었습니다.</p><p>Thank You!</p></div>";
                    exit;
                } else {
                    echo "<div class='info'><p>메세지 전송에 실패했습니다.</p><p>Please Try Again</p></div>";
                    exit;
                }
            ?>
        </div>
    </section>
    <!-- //contact -->
</body>
</html>