 //전체 카테고리 표시
 $(".bestcate_icon_nav a").click(function () {
    $(this).addClass("on");
 });

 //메뉴바 일정 위치 고정


 $(window).scroll(function() {
     var $scroll2 = $(window).scrollTop();

     var $fixNav = $('.bestcate_icon_nav');
     var $contents = $('.content');
     
     var $contNavOffset = $contents.offset().top ;
     var innerHeight = $('.brand').offset().top - $fixNav.height();


     if ( $scroll2 >= $contNavOffset) {
         //console.log('a');
         $fixNav.addClass("on");
         
     }else{
         $fixNav.removeClass("on");
        }
 

});


var iconNav = $('.bestcate_icon_nav').find('a')

//$fixNav가 해당 된 인덱스 때 addclass on하기

iconNav.click(function(){

   var idx = $(this).index();

   console.log(idx);
});
