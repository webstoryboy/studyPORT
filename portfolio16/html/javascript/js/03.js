$(document).ready(function() {
	var gift;
    var  present =[ '짜장면','파전','해물된장찌게','떡볶이','짬뽕','비빔국수']

	iniGame = function(num){
		gift = num;
		TweenLite.killTweensOf($(".board_on"));
        TweenLite.to($(".board_on"), 0, {css:{rotation:rotationPos[gift]}});
        //돌린판 돌아가는 바퀴/속도
		TweenLite.from($(".board_on"),2, {css:{rotation:-500}, onComplete:endGame, ease:Sine.easeOut});
               console.log("gift 숫자 : "+ (gift +1) +"rotationPos" + rotationPos );
	}

	var rotationPos = new Array(60,120,180,240,300,360);

	TweenLite.to($(".board_on"), 360, {css:{rotation:-5000}, ease: Linear.easeNone});
	function endGame(){
              var  copImg= "./img/menu"+( gift +1) + ".png";
                console.log("이미지 : " + copImg );

                  	 $("#popup_gift .lottery_present" ).text(function( ) { return "오늘 점심은 " +present[gift]  + " 먹으러 고고씽!";    });
                          $( '<img  src="' + copImg+ '" />' ).prependTo("#popup_gift .lottery_present");
  setTimeout(function() {openPopup("popup_gift");	}, 100);
  
   }

	$(".popup .btn").on("click",function(){
		location.reload();
	});
	function openPopup(id) {
		closePopup();
		$('.popup').slideUp(0);
		var popupid = id
		$('body').append('<div id="fade"></div>');
		$('#fade').css({
		'filter' : 'alpha(opacity=60)'
		}).fadeIn(300);
		var popuptopmargin = ($('#' + popupid).height()) / 2;
		var popupleftmargin = ($('#' + popupid).width()) / 2;
		$('#' + popupid).css({
			'margin-left' : -popupleftmargin
		});
		$('#' + popupid).slideDown(500);
	}
	function closePopup() {
		$('#fade').fadeOut(500, function() {
			// $(".player").html('');
		});
		$('.popup').slideUp(500);
		return false
	}
    $(".close").click(closePopup);

    function reset() {
		$('#fade').fadeOut(500, function() {
			// $(".player").html('');
		});
        $('.popup').slideUp(500);
        location.reload();
	}
    $(".reset").click(reset);
    
});



$(function() {
	var clicked  =0;
	for(i=1; i<7; i++){
	
	  var  pictures = "./img/menu"+ i + ".png";
	  $(".board_on").append('<img  src="' + pictures + '" />');
	}

	$(".join").on("mousedown",function(){
	  if( clicked <= 0){    
          iniGame(Math.floor(Math.random() *6)
          );    
        }
	  else  if( clicked >=1 ){    
          event.preventDefault(); 
          alert( "다시뽑기는 안되요! 오늘 점심은 확정되었습니다."); 
        }
	  clicked ++
	});
})
