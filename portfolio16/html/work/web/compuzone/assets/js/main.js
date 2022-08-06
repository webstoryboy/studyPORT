$(document).ready(function() {

  //상단좌측배너
    var $banner = $(".slides_control");
    var $bannerWidth = $banner.children().outerWidth();//이미지의 폭
    var $bannerHeight = $banner.children().outerHeight(); // 높이
    var $length = $banner.children().length;//이미지의 갯수
    var $rolling_prev = $('.bnr_paging a.head_rolling_prev');
    var $rolling_next = $('.bnr_paging a.head_rolling_next');

    var rollingId;

    //정해진 초마다 함수 실행
    rollingId = setInterval(function() { rollingStart(); }, 3000);//다음 이미지로 롤링 애니메이션 할 시간차
    
    function rollingStart() {
      $banner.css("width", $bannerWidth * $length + "px");
      $banner.css("height", $bannerHeight + "px");
      //alert(bannerHeight);
      //배너의 좌측 위치를 옮겨 준다.
      $banner.animate({left: - $bannerWidth + "px"}, 500, function() { //숫자는 롤링 진행되는 시간이다.
        //첫번째 이미지를 마지막 끝에 복사(이동이 아니라 복사)해서 추가한다.
        $(this).append("<a>" + $(this).find("a:first").html() + "</a>");
        //뒤로 복사된 첫번재 이미지는 필요 없으니 삭제한다.
        $(this).find("a:first").remove();
        //다음 움직임을 위해서 배너 좌측의 위치값을 초기화 한다.
        $(this).css("left", 0);
        //이 과정을 반복하면서 계속 롤링하는 배너를 만들 수 있다.
      });
    };
    function rollingStart2(e) {
      $banner.css("left", - $bannerWidth);
      $banner.prepend("<a>" + $banner.find("a:last").html() + "</a>");
      $banner.animate({"left": "0px"}, function() {
          $(this).find("a:last").remove();
      });
  }

    $rolling_prev.click(function () {
      rollingStart2();
    });
    $rolling_next.click(function () {
      rollingStart();
    });




    //전체 카테고리 표시
    $(".hbg").click(function () {
      $(this).toggleClass("on");
      $(".hbg-menu").toggleClass("on");
    });
    $(".hbg-menu > ul >li").hover(function () {
      $(".second-ct").toggleClass("on");
    });
    $(".ct-close").click(function () {
      $(".hbg").toggleClass("on");
      $(".hbg-menu").toggleClass("on");
    });
    
    //카테고리 hover시 보이기
    $(".category_Box .ico").hover(function () {
      $(".sub_list_wrap'").toggleClass("on");
    });

     //top고정헤더
     var $fixHeader = $('.top_fix_head');
     var $category=$('.catbtn');
     var $poplist=$('.popular-list');
 
 
     $(window).scroll(function() {
         var scroll = $(window).scrollTop();
         //console.log(scroll);
         if (scroll >= 130) {
             //console.log('a');
             $fixHeader.addClass("on");
             $category.addClass("on");
             $poplist.addClass("on");
             
         } else {
             //console.log('a');
             $fixHeader.removeClass("on");
             $category.removeClass("on");
             $poplist.removeClass("on");
 
         }
     });
   


    
    

});


