   
    $(document).ready(function() {

        //main slide
        var $slides = $('.banner-list');
        var $slide = $('.banner-list li');
        var $slideWidth = $('.banner-list li').width();
        var $indicator = $('.mainslide_cate');
        var $currentIdx = 0;
        var $slideCount = $('.banner-list li').length;
        var prevBtn = $('.btn_main_prev');
        var nextBtn = $('.btn_main_next');
        var timer; // Auto 롤링 아이디

        auto();


        // 배너 마우스 오버 이벤트
        $slides.mouseover(function() {
            clearInterval(timer);
        });

        // 배너 마우스 아웃 이벤트
        $slides.mouseout(function() {
            auto();
        });

        // 이전 이벤트
        prevBtn.on("click", prev);

        prevBtn.mouseover(function(e) {
            clearInterval(timer);
        });

        prevBtn.mouseout(auto);

        // 다음 이벤트
        nextBtn.on("click", next);

        nextBtn.mouseover(function(e) {
            clearInterval(timer);
        });

        nextBtn.mouseout(auto);


        function auto() {
            timer = setInterval(function() { mainRolling(); }, 4000);//다음 이미지로 롤링 애니메이션 할 시간차
        }
      
   
        function mainRolling(){
            $slides.css("width", $slideWidth * $slideCount + "px");
            //배너의 좌측 위치를 옮겨 준다.
            $slides.animate({left: -$slideWidth + "px"}, function() { //숫자는 롤링 진행되는 시간이다.
                //끝에 이미지를 처음에 복사(이동이 아니라 복사)해서 추가한다.
                $(this).append("<li>"+ $(this).find("li:first").html() + "</li>");
                
                //뒤로 복사된 첫번재 이미지는 필요 없으니 삭제한다.
                $(this).find("li:first").remove();
                //다음 움직임을 위해서 배너 좌측의 위치값을 초기화 한다.
                $(this).css("left", 0);
                //이 과정을 반복하면서 계속 롤링하는 배너를 만들 수 있다.
            });
        };
         
        // $slides.css("width", $slideWidth * $slideCount + "px");
         // 이전 이벤트 실행
         function prev(e) {
            $slides.css("left", - $slideWidth);
            $slides.prepend("<li>" + $slides.find("li:last").html() + "</li>");
            $slides.animate({"left": "0px"}, function() {
                $(this).find("li:last").remove();
            });
        }

        // 다음 이벤트 실행
        function next(e) {
            $slides.animate({"left": - $slideWidth + "px"}, function() {
                $(this).append("<li>" + $(this).find("li:first").html() + "</li>");
                $(this).find("li:first").remove();
                $(this).css("left", 0);
            });
        }
        
      

        
   });
