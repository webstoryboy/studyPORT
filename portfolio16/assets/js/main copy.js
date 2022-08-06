// loading
// var percent = document.querySelector('.percent');
// var ico = document.querySelector('.ico');
// var preload = document.querySelector('.loading');
// var count = 4;
// var per = 16;
// var loading = setInterval(animate, 1000 / 100);
// function animate(){
//   if(count >= 100){
//     clearInterval(loading);
//     preload.classList.add('finished');
//     loadingAfter();
//   }else{
//     count = count +1;
//     percent.textContent = count + '%';
//   }
//   if(count > 99.9){
//     count = 100;
//   }
// }

//메인 전체메뉴
$('.side-menu-btn').click( function(){
   $('.side-menu-btn').toggleClass('close-btn');
   $('.side-menu').toggleClass('on');
   $('header').toggleClass('fixed');
});
$('.side-menu ul li').click( function(){
    $('.side-menu-btn').toggleClass('close-btn');
    $('.side-menu').toggleClass('on');
   $('header').toggleClass('fixed');
 });



//모바일 메인 전체메뉴
$('.top-menu-btn').click( function(){
   $('.top-menu-btn').toggleClass('close-btn');
   $('.side-menu').toggleClass('on');
   $('header').toggleClass('fixed');
});

//모바일 스크롤효과
function changeImage(img){
   document.getElementById('slideImg').style.backgroundImage = img;
}

$(document).ready(function() {
   TweenMax.set("#slideImg", { width: 0 });

   var tl = new TimelineLite();

   $(document)
     .on("mouseover", ".menu-text h3", function(evt) {
       tl = new TimelineLite();
       tl.to($("#slideImg"), 1, {
         width: "100%",
         ease: Expo.easeInOut
       });
     })
     .on("mouseout", ".menu-text h3", function(evt) {
       tl = new TimelineLite();
       tl.to($("#slideImg"), 0.5, {
         width: 0,
         ease: Expo.easeInOut
       });
     });
 });

function sideMenu(){
   TweenMax.set(".menu-text li:nth-child(1)", {
       delay: 0.1,
       width: 0,
       ease: Expo.easeInOut
   });
}

//website 토글
$('.cont-text li h3').click( function(){
    $(this).parent('li').toggleClass('active');
    $(this).parent('li').siblings('li').removeClass('active');
 });




//aboutme 이미지전환
new hoverEffect({
    parent: document.querySelector('.sec2'),
    intensity: 0.2,
    image1: './assets/img/profile-b.png',
    image2: './assets/img/profile.png',
    displacementImage: './assets/img/diss.png',
    imagesRatio: 200 / 300
});




//스크롤애니메이션 보여주기
$( '.top-btn' ).click( function() {
	$( 'html, body' ).animate( { scrollTop : 0 }, 400 );
	return false;
} );


//text-무한 슬라이딩
let $text = $('.slideText h2');
let $wrap = $('.slideText');

$text.clone().appendTo($wrap);

TweenMax.to($wrap, 10, {
  x: -($text.width()),
  ease: Linear.easeNone,
  repeat: -1
});    
