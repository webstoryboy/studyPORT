$(document).ready(function(){		

    showSlide(0);

	var total = $(".slideWrap>.castSlide>li").length; //요소 갯수 

	//다음버튼 클릭 시
	$(".next").on("click",function(e){
		e.preventDefault();
		
		if(currentIndex==total - 1){
			currentIndex=0;
		}else{
			currentIndex++;
		}
		showSlide(currentIndex);
	});
	
	//이전버튼 클릭시
	$(".prev").on("click",function(e){
		e.preventDefault();
		
		 
		if(currentIndex==0){
			currentIndex=total - 1;
		}else{
			currentIndex--;
		}
		showSlide(currentIndex);
	});
	


	
	//슬라이더 패널정의 함수
	function showSlide(index){
		$(".slideWrap>ul>li").fadeOut().removeClass("on");
		$(".slideWrap>ul>li").eq(index).fadeIn().addClass("on");

		currentIndex = index;
	}
	
});
