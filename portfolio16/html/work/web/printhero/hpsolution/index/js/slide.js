$(document).ready(function() {

  //좌우버튼, 동그라미 버튼 연동 //

  var wid = $(".visual-slider").width();
  var i = $(".visual-controller li.active").index();
  var len = $(".visual-panel li").length;

  

  $(".visual-controller li").click(function() {

    i = $(this).index();

    showSlide();


  });

  function showSlide() {
    $(".visual-controller li").removeClass("on");
    $(".visual-controller li").eq(i).addClass("on");
    $(".visual-panel li").stop(true, true).fadeOut();
    $(".visual-panel li").eq(i).stop(true, true).fadeIn();
  }


});



//테이블 움직이기

function tick2(){
		$('#ticker_02 div:first').slideUp( function () { $(this).appendTo($('#ticker_02')).slideDown(); });
	}
	setInterval(function(){ tick2 () }, 3000);

//테이블 움직이기

function tick(){
		$('#ticker_01 li:first').slideUp( function () { $(this).appendTo($('#ticker_01')).slideDown(); });
	}
	setInterval(function(){ tick () }, 4000);

function tick4(){
		$('#ticker_04 li:first').slideUp( function () { $(this).appendTo($('#ticker_04')).slideDown(); });
	}
	setInterval(function(){ tick4 () }, 4000);

function tick3(){
		$('#ticker_03 li:first').slideUp( function () { $(this).appendTo($('#ticker_03')).slideDown(); });
	}
	setInterval(function(){ tick3 () }, 3000);

function tick5(){
		$('#ticker_05 li:first').animate({'opacity':0}, 500, function () { $(this).appendTo($('#ticker_05')).css('opacity', 1); });
	}
	setInterval(function(){ tick5 () }, 4500);	
function tick6(){
		$('#ticker_06 li:first').animate({'opacity':0}, 500, function () { $(this).appendTo($('#ticker_06')).css('opacity', 1); });
	}
	setInterval(function(){ tick6 () }, 3000);	

//롤링


var roller;
var roller2;
var roller3;

function roll(rows) {
	var table = $('#scroll-01');
	var allRows = table[0].rows;
	table.animate (
		{ 'marginTop': '-37px'}, 
		1500, 
		function () {
			for (var i = 0; i < rows; i++) {
				var targetRow = allRows[0];
				table[0].tBodies[0].appendChild(targetRow);
			}
			$(this).css("marginTop", 0);
  });
  
}

function roll2(rows) {
	var table = $('#scroll-02');
	var allRows = table[0].rows;
	table.animate (
		{ 'marginTop': '-37px'}, 
		1500, 
		function () {
			for (var i = 0; i < rows; i++) {
				var targetRow = allRows[0];
				table[0].tBodies[0].appendChild(targetRow);
			}
			$(this).css("marginTop", 0);
  });
  
}
function roll3(rows) {
	var table = $('#scroll-03');
	var allRows = table[0].rows;
	table.animate (
		{ 'marginTop': '-37px'}, 
		1900, 
		function () {
			for (var i = 0; i < rows; i++) {
				var targetRow = allRows[0];
				table[0].tBodies[0].appendChild(targetRow);
			}
			$(this).css("marginTop", 0);
  });
  
}


function startRepeat() {
	roller = setInterval(function () { roll(1); }, 2000);
}

function startRepeat2() {
	roller2 = setInterval(function () { roll2(1); }, 2000);
}

function startRepeat3() {
	roller3 = setInterval(function () { roll3(1); }, 2500);
}

function stopRepeat() {
	clearInterval(roller);
	
}
function stopRepeat2() {
	clearInterval(roller2);
}

function stopRepeat3() {
	
	clearInterval(roller3);
}
function init() {
	roller = setInterval(function () { roll(1); }, 2000);
	roller2 = setInterval(function () { roll2(1); }, 2000);
	roller3 = setInterval(function () { roll3(1); }, 2000);
}

startRepeat();
startRepeat2();
startRepeat3();


$( document ).ready(function( $ ) {
		$( '#example1' ).sliderPro({
			width: 960,
			height: 500,
			arrows: true,
			buttons: false,
			waitForLayers: true,
			thumbnailWidth: 200,
			thumbnailHeight: 100,
			thumbnailPointer: true,
			autoplay: true,
			autoScaleLayers: false,
			breakpoints: {
				500: {
					thumbnailWidth: 120,
					thumbnailHeight: 50
				}
			}
		});
	});
