<?php
header("Content-Type: text/html; charset=UTF-8");
 
// 빈 필드가 있는지 확인하는 구문
if(empty($_POST['name'])  		|| // post로 넘어온 name값이 비었는지 확인
   empty($_POST['mail']) 		|| // email값이 비었는지 확인
   empty($_POST['message'])	|| // message값이 비었는지 확인
   !filter_var($_POST['mail'],FILTER_VALIDATE_EMAIL)) // 전달된 이메일 값이 유효한 이메일값인지 검증
   {
	echo("<script>alert('성명, 이메일, 내용은 필수 입력사항입니다. 또는 이메일주소가 바르지 않습니다.');</script>");
    echo("<script>history.back();</script>");
	return false;
   }
// Cross-Site Scripting (XSS)을 방지하는 시큐어코딩
// strip_tags() -> 문자열에서 html과 php태그를 제거한다
// htmlspecialchars() -> 특수 문자를 HTML 엔터티로 변환
// 악의적인 특수문자 삽입에 대비하기 위함
 
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['mail']));
$phone = strip_tags(htmlspecialchars($_POST['mobile']));
$message = strip_tags(htmlspecialchars($_POST['message']));
	
// 이메일을 생성하고 메일을 전송하는 부분
$to = "rladudwl210@naver.com"; // 받는 측의 이메일 주소를 기입하는 부분
$email_subject = "새로운 메세지가 도착하였습니다."; // 메일 제목에 해당하는 부분
$email_body = "본 메일은 포트폴리오 홈페이지 연락페이지에서의 폼메일로부터 전송된 이메일입니다..\n\n"."세부정보는 다음과 같습니다.\n\n내용:\n$message";
$headers = "Return-Path: $email_address\n"; // 답장 주소
$headers .= "From: $name <$email_address>\n";// 사용자 이름 변경

mail($to,'=?UTF-8?B?'.base64_encode($email_subject).'?=',$email_body,$headers,'-f'.$email_address);

echo("<script>location.href='index.html';</script>");
// echo("<script>history.back();</script>"); // 이전페이지로 
// echo("<script>history.go(-2);</script>"); // 이전 이전 페이지로 
?>

