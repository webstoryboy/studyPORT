(function($){
 
  //스크롤 구하기
  $(window).scroll(function(){
    let wScroll = $(this).scrollTop();
    $(".ScrollTop span").text(wScroll);
});

 //햄버거메뉴 열리고닫히는거 + 색바뀌기
 $(".ham").click(function(){
  $(this).stop().toggleClass("on");
  $("#nav").delay(650).slideToggle("on");
});


//자기소개 텍스트오버시 이미지 바뀌기
$(".me_txt_01").mouseenter(function(){
  $(".me_per .me_img").css("background-image","url(assets/img/show02.png)")
});
$(".me_txt_02").mouseenter(function(){
  $(".me_per .me_img").css("background-image","url(assets/img/show03.png)")
});
$(".me_txt_03").mouseenter(function(){
  $(".me_per .me_img").css("background-image","url(assets/img/show04.png)")
});


//메인 텍스트 효과
$(".main_back").mousemove(function(e){
  mouseX = (e.pageX - this.offsetLeft-$(this).width()/2);
  mouseY = (e.pageY - this.offsetTop-$(this).height()/2);
  $(".main_txt").css('text-shadow', +mouseX/10+'px '+mouseY/30+'px rgba(227,6,19,.8), '+mouseX/30+'px '+mouseY/20+'px rgba(255,237,0,1), '+mouseY/10+'px '+mouseX/12+'px rgba(0,159,227,.7)')
});

//물음표
var tl = new TimelineLite;
tl.fromTo (".question",.4,{"opacity": "0"},{"opacity": "1", yoyo:true, repeat:-1, ease: "bounce.out"});


//스크롤시
$(window).scroll(function(){
  let wScorll = $(window).scrollTop();  //윈도우 스크롤값
  let wHeight = $(window).height();   //윈도우 높이값
 if(wScorll > 6045){
  $(".ham").addClass("color");
  $("#nav").addClass("color");
 }else {
     $(".ham").removeClass("color");
     $("#nav").removeClass("color");
 }  


 //모바일 사이트  fixed
 if(wScorll >= $("#section7").offset().top){
  $(".mobile_device .device").addClass("fixed");
  $(".mApple").addClass("fixed");
 }else {
  $(".mobile_device .device").removeClass("fixed");
  $(".mApple").removeClass("fixed");
 }

 if(wScorll >= $("#section7").offset().top + 2000){
  $(".mMillie").addClass("fixed");
 }else {
  $(".mMillie").removeClass("fixed");
 }
 if (wScorll >= 20000){
  $(".mobile_device .device").removeClass("fixed");
  $(".mApple").removeClass("fixed");
  $(".mMillie").removeClass("fixed");
 }


});

})(jQuery);