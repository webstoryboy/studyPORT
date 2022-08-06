
$(document).ready(function(){

	
   //메뉴 나타나기
   $(".menu-list").click(function(){
      $(".menu").toggleClass('on');
   });
   $("header").mouseleave(function(){
      $(".menu").removeClass('on');
   });

   //top search 토글 btn 
   $(".search-btn").click(function(){
      $(".search-bar-box").toggleClass('on');
      $(".search-bar").toggleClass('on');
   });

   //top search 토글 btn 타겟영역을 제외하고 클릭했을 시 팝업 숨김처리.
   $('.main').on('click', function(e){
      var $tgPoint = $(e.target);
      var $popCallBtn = $tgPoint.hasClass('.search-btn')
      var $popArea = $tgPoint.hasClass('.search-bar')
      if ( !$popCallBtn && !$popArea ) {
         $('.search-bar-box').removeClass('on');
         $('.search-bar').removeClass('on');
      }
   });

   //파일업로드 
 
   var fileTarget = $('.filebox .upload-hidden'); 

   fileTarget.on('change', function(){ // 값이 변경되면 

      if(window.FileReader){ // modern browser 
         var filename = $(this)[0].files[0].name; } 

      else { // old IE 
         var filename = $(this).val().split('/').pop().split('\\').pop(); // 파일명만 추출 
      }  
      // 추출한 파일명 삽입 
         
      $(this).siblings('.upload-name').val(filename); 

   }); 
 

   //왼쪽 서브바 펼치고 접히기
   $('.left-menu > li > .dep1 > .drop-memu').click(function(){
      var $this = $(this)
      $this.parents('li').siblings().removeClass('on');
      $this.parents('li').toggleClass('on');
      
      //$this.parent().toggleClass('on');
      //$(this).parent().find('> ul').toggleClass('on');
      //$(this).parent().siblings().find('>ul').removeClass('on');
   });
   
   $('.dep2 > li > .dep2-menu > .drop-menu2').click(function(){
      
      var $this = $(this)
      $this.parents('.dep2 > li').siblings().removeClass('on');
      $this.parents('.dep2 > li').toggleClass('on');
   
   });

   $('.dep2 > li > a').click(function(){
      
      var $this = $(this)
      $this.parent().removeClass('on');
   
      $this.siblings().slideToggle();
      
      $this.toggleClass('on');
   
   });

   //신규 left 메뉴
   /* lnb */
(function($){
  
   var lnbUI = {
     click : function (target, speed) {
       var _self = this,
           $target = $(target);
       _self.speed = speed || 300;
       
       $target.each(function(){
         if(findChildren($(this))) {
           return;
         }
         $(this).addClass('noDepth');
       });
       
       function findChildren(obj) {
         return obj.find('> ul').length > 0;
       }
       
       $target.on('click','a', function(e){
           e.stopPropagation();
           var $this = $(this),
               $depthTarget = $this.next(),
               $siblings = $this.parent().siblings();
         
         $this.parent('li').find('ul li').removeClass('on');
         $siblings.removeClass('on');
         $siblings.find('ul').slideUp(250);
         
         if($depthTarget.css('display') == 'none') {
           _self.activeOn($this);
           $depthTarget.slideDown(_self.speed);
         } else {
           $depthTarget.slideUp(_self.speed);
           _self.activeOff($this);
         }
         
       })
       
     },
     activeOff : function($target) {
       $target.parent().removeClass('on');
     },
     activeOn : function($target) {
       $target.parent().addClass('on');
     }
   };
   
   // Call lnbUI
   $(function(){
     lnbUI.click('#lnb li', 300)
   });
   
 }(jQuery));
   
  
   
 
   //색상선택하기
	$('.color-option div').click(function(){
		//$('.s-btn').removeClass('on');
      //$(this).addClass('on');
      $('.s-btn span').css({
         border: '1px solid #ddd' 
      });
      $(this).children().css({
         border: '3px solid #5ea0f2' 
      })
	});

    


   //app 버튼 나타내기
   $('.app-type-group button').click(function(){
		$('.app-type').removeClass('on');
		$(this).addClass('on');
	});


   //전시품이미지에 마우스오버시 확대표시 나오기
  
   $('.thumb-img').mouseover(function(){
		$(this).parent().addClass('on');
   });
   $('.dp-img-box').mouseleave(function(){
      $(this).removeClass('on');
	});
   

    //원하는 위치에서부터 스크롤 따라다니는 엘리먼트 생성
  
   $(window).scroll(  
      function(){  
          //스크롤의 위치가 상단에서 300보다 크면  
          if($(window).scrollTop() > 300){  
          /* if(window.pageYOffset >= $('원하는위치의엘리먼트').offset().top){ */  
              $('.left-menu-box').addClass("fix");  
              //위의 if문에 대한 조건 만족시 fix라는 class를 부여함  
          }else{  
              $('.left-menu-box').removeClass("fix");  
              //위의 if문에 대한 조건 아닌경우 fix라는 class를 삭제함  
          }  
      }  
    );  

   //테이블 선택시 색변화
   $('.table-list-t3 > tbody > tr').click(function(){
      var $this = $(this)
      $this.siblings().removeClass('on');
      $this.toggleClass('on');
      
   });

   ///지도정보 열고 닫기 슬라이드 토글
   $('.toggle-btn').click(function(){
      var link = $(this);
      $('.data-toggle').slideToggle(300, function() {
         if ($(this).is(":visible")) {
              link.text('닫기');                
         } else {
              link.text('열기');                
         }        
     });
   });
  //라디오버튼 카테고리 선택시 보여주기
  $("#cat-radio").click(function(){
      if($("#cat-radio").is(':checked')){
           $(".cat-area").show();
           $(".dis-area").hide();
      }
   });
   $("#dis-radio").click(function(){
      if($("#dis-radio").is(':checked')){
           $(".cat-area").hide();
           $(".dis-area").show();
      }
   });
   $("#sev-radio").click(function(){
      if($("#sev-radio").is(':checked')){
           $(".sev-area").show();
           $(".cot-area").hide();
      }
   });
   $("#cot-radio").click(function(){
      if($("#cot-radio").is(':checked')){
           $(".sev-area").hide();
           $(".cot-area").show();
      }
   });
   

   //모바일 미리보기  
   $("#hbg-btn").click(function(){
      $('.sidebar').addClass('on');
      $('.bg-box').addClass('on');
   });
   $(".bg-box").click(function(){
      $('.sidebar').removeClass('on');
      $('.bg-box').removeClass('on');
      

   });

   //전시형 추모형 공원형 빈값 클릭시 보더 선택자
   $(".mobile-box > .inner-box").click(function(){
      var $this = $(this)
      $this.siblings().removeClass('on');
      $this.siblings().children().removeClass('on');
      $this.parent().removeClass('on');
      $this.children().removeClass('on');
      $this.toggleClass('on');
   });
   $(".mobile-box > .inner-box2").click(function(){
      var $this = $(this)
      $this.siblings().removeClass('on');
      $this.siblings().children().removeClass('on');
      $this.parent().removeClass('on');
      $this.children().removeClass('on');
      $this.toggleClass('on');
   });
   $(".mobile-box > .inner-box3").click(function(){
      var $this = $(this)
      $this.siblings().removeClass('on');
      $this.siblings().children().removeClass('on');
      $this.parent().removeClass('on');
      $this.children().removeClass('on');
      $this.toggleClass('on');
   });

   $(".inner-tit-box").click(function(){
      var $this = $(this)
      $this.siblings().removeClass('on');
      $this.toggleClass('on');
   });
   $(".inner-tit-box2").click(function(){
      var $this = $(this)
      $this.siblings().removeClass('on');
      $this.toggleClass('on');
   });
   $(".inner-dep2-box").click(function(){
      var $this = $(this)
      $this.siblings().removeClass('on');
      $this.toggleClass('on');
   });
   $(".depth2-box ").click(function(){
      var $this = $(this)
      $this.siblings().removeClass('on');
      $this.toggleClass('on');
   });
   $(".add-box > div >.inner-box").click(function(){
      var $this = $(this)
      $this.siblings().removeClass('on');
      $this.siblings().children().removeClass('on');
      $this.parent().removeClass('on');
      $this.children().removeClass('on');
      $this.toggleClass('on');
   });

   //공지사항 한줄씩 스크롤

   function tick2(){
      $('#ticker_02 li:first').slideUp( function () { $(this).appendTo($('#ticker_02')).slideDown(); });
   }
   setInterval(function(){ tick2 () }, 2000);
   function tick3(){
		$('#ticker_03 li:first').animate({'opacity':0}, 200, function () { $(this).appendTo($('#ticker_03')).css('opacity', 1); });
	}
	setInterval(function(){ tick3 () }, 4000);	


}); //document ready function

