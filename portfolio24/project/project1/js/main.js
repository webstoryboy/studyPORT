$(document).ready(function(){


     
// gnb
$(".gnb>li.menu1").mouseenter(function(){
  $(this).children(".menuBox").stop().slideDown(200);
});
$(".gnb>li.menu1").mouseleave(function(){
  $(this).children(".menuBox").stop().slideUp(100);
});
$(".gnb>li.menu3").mouseenter(function(){
  $(this).children(".menuBox3").stop().slideDown(200);
});
$(".gnb>li.menu3").mouseleave(function(){
  $(this).children(".menuBox3").stop().slideUp(100);
});



// cart
$(".nav .cart").mouseenter(function(){
  $(this) .children(".cartBox").stop().slideDown(300);
});
$(".nav .cart").mouseleave(function(){
  $(this).children(".cartBox").stop().slideUp(200);
});


// gallery 슬라이드
var visual = $(".newsSlide>ul>li");
var button = $(".gallery>li");
var current = 0;

button.click(function(){
  var tt = $(this);
  var i = tt.index();

  button.removeClass("on");
  tt.addClass("on");

  move(i);
});

function move(i){
  var currentE1 = visual.eq(current);
  var nextE1 = visual.eq(i);

  currentE1.css({"top" : 0}).animate({"top" : "-100%"});
  nextE1.css("top" , "100%").animate({"top" : 0});

  current = i;
};



// 모바일 메뉴 아이콘
$(".icon_menu").click(function(e){
  e.preventDefault();

    $(".m_bg").css({'display':'block'});
    $(".m_box").css({'display':'block'});
    $(".m_box").css({'left':'-100%'});
    $(".m_box").animate({left:'0px'});

    $(".m_close").click(function(e){
      e.preventDefault();
        $(".m_bg").css({'display':'none'});
        $(".m_box").css({'display':'none'});      

  });

  
    

});




});
