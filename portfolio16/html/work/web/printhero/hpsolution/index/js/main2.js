$(document).ready(function() {
    slide(); // 슬라이드 상단
    slideLeftNav(); // 슬라이드 좌단
  });
  
  // 슬라이드 상단
  function slide() {
    var wid = 0;
    var now_num = 0;
    var slide_length = 0;
    var auto = null;
    var $dotli = $('.dot>li');
    var $panel = $('.main-panel');
    var $panelLi = $panel.children('li');
  
    // 변수 초기화
    function init() {
      wid = $('.main-slide').width();
      now_num = $('.dot>li.on').index();
      slide_length = $dotli.length;
    }
  
    // 이벤트 묶음
    function slideEvent() {
  
      // 슬라이드 하단 dot버튼 클릭했을때
      $dotli.click(function() {
        now_num = $(this).index();
        slideMove();
      });
  
      // 이후 버튼 클릭했을때
      $('.next').click(function() {
        nextChkPlay();
      });
  
      // 이전 버튼 클릭했을때
      $('.prev').click(function() {
        prevChkPlay();
      });
  
      // 오토플레이
      autoPlay();
  
      // 오토플레이 멈춤
      autoPlayStop();
  
      // 오토플레이 재시작
      autoPlayRestart();
  
      // 화면크기 재설정 되었을때
      resize();
    }
  
    // 자동실행 함수
    function autoPlay() {
      auto = setInterval(function() {
        nextChkPlay();
      }, 7000);
    }
  
    // 자동실행 멈춤
    function autoPlayStop() {
      $panelLi.mouseenter(function() {
        clearInterval(auto);
      });
    }
  
  
    // 자동실행 멈췄다가 재실행
    function autoPlayRestart() {
      $panelLi.mouseleave(function() {
        auto = setInterval(function() {
          nextChkPlay();
        }, 7000);
      });
    }
  
    // 이전 버튼 클릭시 조건 검사후 슬라이드 무브
    function prevChkPlay() {
      if (now_num == 0) {
        now_num = slide_length - 1;
      } else {
        now_num--;
      }
      slideMove();
    }
  
    // 이후 버튼 클릭시 조건 검사후 슬라이드 무브
    function nextChkPlay() {
      if (now_num == slide_length - 1) {
        now_num = 0;
      } else {
        now_num++;
      }
      slideMove();
    }
  
    // 슬라이드 무브
    function slideMove() {
      $panel.stop().animate({
        'margin-left': -wid * now_num
      });
      $dotli.removeClass('on');
      $dotli.eq(now_num).addClass('on');
    }
  
    // 화면크기 조정시 화면 재설정
    function resize() {
      $(window).resize(function() {
        init();
        $panel.css({
          'margin-left': -wid * now_num
        });
      });
    }
    init();
    slideEvent();
  }
  
  // 슬라이드 좌단
  function slideLeftNav() {
    var wid = 0;
    var wid2 = 0;
    var now_num = 0;
    var slide_length = 0;
    var contentTop = document.querySelector('.right-nav-box');
    var $dotli = $('.left-nav > .box');
    var $contentli = $('li[name="right-contents"]');
    var $panel = $('.slide-nav');
    var $panel2 = $('.slide-nav2');
  
    // 변수 초기화
    function init() {
      wid = $('.slide-nav').width();
      wid2 = $('.slide-nav2').width();
      now_num = $('.left-nav > .box.active').index();
      slide_length = $dotli.length;
    }
  
    // 이벤트 묶음
    function slideEvent() {
  
      // 슬라이드 하단 dot버튼 클릭했을때
      $dotli.click(function() {
        now_num = $(this).index();
        slideMove();
      });
  
      // 이후 버튼 클릭했을때
      $('.tit-next').click(function() {
        nextChkPlay();
      });
  
      // 이전 버튼 클릭했을때
      $('.tit-prev').click(function() {
        prevChkPlay();
      });
  
      // 화면크기 재설정 되었을때
      resize();
      slideMove();
    }
  
    // 이전 버튼 클릭시 조건 검사후 슬라이드 무브
    function prevChkPlay() {
      if (now_num == 0) {
        now_num = slide_length - 1;
      } else {
        now_num--;
      }
      slideMove();
    }
  
    // 이후 버튼 클릭시 조건 검사후 슬라이드 무브
    function nextChkPlay() {
      if (now_num == slide_length - 1) {
        now_num = 0;
      } else {
        now_num++;
      }
      slideMove();
    }
  
    // 슬라이드 무브
    function slideMove() {
      $panel.stop().animate({
        'margin-left': -wid / 4 * now_num
      });
      $panel2.stop().animate({
        'margin-left': -wid2 / 4 * now_num
      });
      $dotli.removeClass('active');
      $dotli.eq(now_num).addClass('active');
      $contentli.removeClass('active').hide();
      $contentli.eq(now_num).addClass('active').fadeIn();
      // if mdetect
      _mdetect = mdetect.mobile();
      if (MobileDetect) {
          _mdetect = (new MobileDetect(window.navigator.userAgent)).mobile();
      }
      if (_mdetect && now_num != 3) {
          var y = contentTop.getBoundingClientRect().top + window.scrollY;
          window.scroll({
              top: y,
              behavior: 'smooth'
          });
      }
    }
  
    // 화면크기 조정시 화면 재설정
    function resize() {
      $(window).resize(function() {
        init();
        $panel.css({
          'margin-left': -wid / 4 * now_num
        });
        $panel2.css({
          'margin-left': -wid2 / 4 * now_num
        });
      });
    }
    init();
    slideEvent();
  }
  
  
  // 그림 바꾸기
  
  