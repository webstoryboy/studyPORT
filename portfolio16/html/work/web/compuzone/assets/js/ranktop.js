$(document).ready(function() {
    var $bannerTop = $(".popular-list").find('ul');
    // var $bannerTopWidth = $bannerTop.children().outerWidth();//이미지의 폭
    var $bannerTopHeight = $bannerTop.children().outerHeight(); // 높이
    var $Toplength = $bannerTop.children().length;//이미지의 갯수
    var rollingId;
  
    //정해진 초마다 함수 실행
    rollingId = setInterval(function() { rollingStart(); }, 4000);//다음 이미지로 롤링 애니메이션 할 시간차
    
    function rollingStart() {
      // $bannerTop.css("width", $bannerTopWidth + "px");
      $bannerTop.css("height", $bannerTopHeight + "px");
      //alert(bannerHeight);
      //배너의 좌측 위치를 옮겨 준다.
      $bannerTop.animate({top: - $bannerTopHeight + "px"}, 400, function() { //숫자는 롤링 진행되는 시간이다.
        //첫번째 이미지를 마지막 끝에 복사(이동이 아니라 복사)해서 추가한다.
        $(this).append("<li>" + $(this).find("li:first").html() + "</li>");
        //뒤로 복사된 첫번재 이미지는 필요 없으니 삭제한다.
        $(this).find("li:first").remove();
        //다음 움직임을 위해서 배너 좌측의 위치값을 초기화 한다.
        $(this).css("top", 0);
        //이 과정을 반복하면서 계속 롤링하는 배너를 만들 수 있다.
      });
    }
    
  });
  