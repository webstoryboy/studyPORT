$(document).ready(function(){		
		
	var speed = 1500;
	var ease = 'easeOutExpo';
	var $wrap_div = $('#wrap>div');

	match_height();
	$(window).on('resize',match_height);

	function match_height(){
		var ht = $(window).height();
		$wrap_div.height(ht);
	};	

	$wrap_div.on("mousewheel",function(event,delta){    
		event.preventDefault();	

		//마우스 휠을 올렸을때	
		if (delta > 0) {  
			console.log('up');
			var prev_target = $(this).prev().offset().top;
			$('html,body').stop().animate({'scrollTop':prev_target},speed,ease);
			 
		//마우스 휠을 내렸을때	 
		}else if (delta < 0) {  
			console.log('down');		
			var next_target = $(this).next().offset().top;
			$('html,body').stop().animate({'scrollTop':next_target},speed,ease);
		}          
     });		
	
	
	
});















