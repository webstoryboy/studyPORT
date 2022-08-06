<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">

<head>
	<%@ include file="../include/head.jsp"%>
</head>
<body>

 <div class="main error_page">
	 <div class="text-center">
	        <div class="text-center mb30">
	             <div class="logo-tit"> <img src="/statics/images/logo.svg" class="pb10">  국가기념관 스마트 전시안내 시스템</div>
	        </div>

		    <div class="error-box bg-white shadow-lg">
		        <div class="errorTitle"><i class="xi-warning xi-3x"></i><br>404 - Internal Server Error</div>
		        <div class="errorText">요청하신 파일 또는 디렉터리를 찾을 수 없습니다.</div>
		        <div class="erroeBtn">
			        <a href="javascript:history.back();" class="btn btn-secondary btn-lg mr-2 px-3 rounded"><i class="xi-angle-left"></i> 이전으로 돌아가기</a>
			        <a href="/" class="btn btn-primary btn-lg px-3 rounded"><i class="xi-home"></i> 메인으로 이동</a>
		        </div>
		    </div>

	</div>
</div>
	<%@ include file="../include/footer.jsp"%>
</body>
