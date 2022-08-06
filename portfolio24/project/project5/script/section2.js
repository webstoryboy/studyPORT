$(document).ready(function(){		
	
		$("#section2>.title").find("div:last-child").click(function(e){
			e.preventDefault();
			$(this).find("a").addClass("on");
			$("#section2>.title").find("div:first-child>a").removeClass("on");
			$("#section2>.text>.text1").fadeOut();
			$("#section2>.text>.text2").fadeIn();
			$("#section2>.effect>div.on").removeClass("on");
			$("#section2>.effect>div:last-child").addClass("on");

		});
		$("#section2>.title").find("div:first-child").click(function(e){
			e.preventDefault();
			$(this).find("a").addClass("on");
			$("#section2>.title").find("div:last-child>a").removeClass("on");
			$("#section2>.text>.text2").fadeOut();
			$("#section2>.text>.text1").fadeIn();
			$("#section2>.effect>div.on").removeClass("on");
			$("#section2>.effect>div:first-child").addClass("on");
			
		});

	
	
});















