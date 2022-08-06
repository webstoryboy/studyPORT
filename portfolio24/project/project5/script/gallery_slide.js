$(document).ready(function(){

	var wid = $(".gallerySlide>li").outerWidth();
	var num = $(".gallerySlide>li").length;
	var totalWid = wid*num;
	$(".gallerySlide").width(totalWid);
	var mleft = 0;
	
	var timer = setInterval(move,20);
	
	$(".gallery").on("mouseenter",function(){
		clearInterval(timer);
	});
	
	$(".gallery").on("mouseleave",function(){
		timer = setInterval(move,20);
	});
	
	$(".btnPrev").on("click",function(e){
		e.preventDefault();
		$(".gallerySlide>li").last().prependTo(".gallerySlide");
	});
	
	$(".btnNext").on("click",function(e){
		e.preventDefault();
		$(".gallerySlide>li").first().appendTo(".gallerySlide");
	});
	
	function move(){
		mleft -=2;
		if(mleft < -wid){
			$(".gallerySlide>li").first().appendTo(".gallerySlide");
			mleft = 0;
		}
		$(".gallerySlide").css({"left":mleft});
	}
	

	
});
