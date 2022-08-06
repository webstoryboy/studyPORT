

$(document).ready(function(){

	
	
		//상품상세 이미지 변경
	var $productPictures = $('.product_pictures'),
		$productPicturesMini = $('.product_pictures_mini'),
		$bigImg = $productPictures.find('.big_img'),
		$thumbImgList = $productPicturesMini.find('tr td');

		$thumbImgList.click(function(){
				$(this).addClass('active').siblings().removeClass('active');
			var targetImgPath = '../images/' + $(this).find('img').attr('data-target');
			$bigImg.attr('src',targetImgPath);

		});
	
	    //상품수량 가격변경하기
	var $quantity = $('.quantity'),
	
		$unitprice = $quantity.attr('data-unitprice'),
		$qtyBtn = $quantity.find('.sit_qty'),
		$qtyInput= $quantity.find('input'),
		$targetTotal = $('#tot-price');
	
	$qtyBtn.click(function(){
		
		var currentCount = $qtyInput.val();
		
		if($(this).hasClass('plus')){
			
			$qtyInput.val(++currentCount);
			
		}else{
			if(currentCount > 1){
				$qtyInput.val(--currentCount);
			}
		}
		//수랑*단가 변수 total에 저장하고 그걸 .price 값으로 변경되도록 한다.
		var total = (currentCount * $unitprice).toLocaleString('en') ;
		$targetTotal.text(total);
			
	}); //$qtyBtn.click
	
	
	
	//파일넣기
	var fileTarget = $('.filebox .upload-hidden');

    fileTarget.on('change', function() { // 값이 변경되면 
        if (window.FileReader) { // modern browser 
            var filename = $(this)[0].files[0].name;
        } else { // old IE 
            var filename = $(this).val().split('/').pop().split('\\').pop(); // 파일명만 추출 
        }

        // 추출한 파일명 삽입 
        $(this).siblings('.upload-name').val(filename);
    });
	
	
    var imgTarget = $('.preview-image .upload-hidden');

    imgTarget.on('change', function() {

    var parent = $(this).parent();
    parent.children('.upload-display').remove();


    if (window.FileReader) {
        //image 파일만 

        if (!$(this)[0].files[0].type.match(/image\//)) return;

        var reader = new FileReader();
        reader.onload = function(e) {
            var src = e.target.result;
            parent.prepend('<div class="upload-display"><div class="upload-thumb-wrap"><img src="' + src + '" class="upload-thumb"></div></div>');
        }
        reader.readAsDataURL($(this)[0].files[0]);
    } else {

        $(this)[0].select();
        $(this)[0].blur();

        var imgSrc = document.selection.createRange().text;
        parent.prepend('<div class="upload-display"><div class="upload-thumb-wrap"><img class="upload-thumb"></div></div>');

        var img = $(this).siblings('.upload-display').find('img');
        img[0].style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enable='true',sizingMethod='scale',src=\"" + imgSrc + "\")";
    }

	});
	$(window).scroll(function() {
	 //탑서칭
	var $el = $('.top-search-show-on-scroll');
	if($(this).scrollTop() >= 500) $el.addClass('shown');
	else $el.removeClass('shown');
	
	
    //고정배너 스크립트
	var $el = $('.show-on-scroll');
	if($(this).scrollTop() >= 600) $el.addClass('shown');
	else $el.removeClass('shown');
    });
	 
	
	/*
	//좌측네비 슬라이드
	var container = $('.nav-tit'),
		slideGroup = container.find('.slide-nav'),
		slides = slideGroup.find('li'),
		titPrev = $('.tit-prev'),
		titNext = $('.tit-Next'),
		leftNav = $('.left-nav .box'),
	    slideCount = slides.length,
		leftNavHtml = '',
		currentIndex = 0,
		duration = 500,
		easing = 'easInOutExpo',
		interval= 3500,
		timer;
	    
	
	   //메인에 따른 컨텐츠 변경하기
	
	
	
	   // 슬라이드를 가로로 배열
	   // 슬라이드 마다 할일, left 0%,100%,200%,300%
       // 슬라이드 이동 함수
	   function goToSlide(index){
		   slides.animate({left:-25*index + '%'},duration);
		   currentIndex =index;
	   }

	
	   leftNav.click(function(e){
		   e.preventDefault();
		   var idx = $(this).index();
		   console.log(idx);
		   goToSlide(idx);
		   $(this).addClass('active').siblings().removeClass('active');
		   
	   });
	   
*/
	
		
	slide2();

	// 슬라이드 
		function slide2() {
		  var wid2 = 0;
		  var now_num2 = 0;
		  var slide_length2 = 0;
		  var auto2 = null;
		  var $dotli2 = $('.left-nav >.box');
		  var $panel2 = $('.slide-nav');
		  var $panelLi2 = $panel2.children('li');

		  // 변수 초기화
		  function init2() {
			wid2 = $('.slide-nav').width();
			now_num2 = $('.left-nav >.box.active').index();
			slide_length2 = $dotli2.length;
		  }

		  // 이벤트 묶음
		  function slideEvent2() {

			// 슬라이드 하단 dot버튼 클릭했을때
			$dotli2.click(function() {
			  now_num2 = $(this).index();
			  slideMove2();
			});

			// 이후 버튼 클릭했을때
			$('.tit-next').click(function() {
			  nextChkPlay2();
			});

			// 이전 버튼 클릭했을때
			$('.tit-prev').click(function() {
			  prevChkPlay2();
			});

			// 오토플레이
			//autoPlay2();

			// 오토플레이 멈춤
			//autoPlayStop2();

			// 오토플레이 재시작
			//autoPlayRestart2();

			// 화면크기 재설정 되었을때
			resize2();
		  }

		  // 자동실행 함수
		  function autoPlay2() {
			auto2 = setInterval(function() {
			  nextChkPlay2();
			}, 12000);
		  }

		  // 자동실행 멈춤
		  function autoPlayStop2() {
			$panelLi2.mouseenter(function() {
			  clearInterval(auto2);
			});
		  }


		  // 자동실행 멈췄다가 재실행
		  function autoPlayRestart2() {
			$panelLi2.mouseleave(function() {
			  auto2 = setInterval(function() {
				nextChkPlay2();
			  }, 12000);
			});
		  }

		  // 이전 버튼 클릭시 조건 검사후 슬라이드 무브
		  function prevChkPlay2() {
			if (now_num2 == 0) {
			  now_num2 = slide_length2 - 1;
			} else {
			  now_num2--;
			}
			slideMove2();
		  }

		  // 이후 버튼 클릭시 조건 검사후 슬라이드 무브
		  function nextChkPlay2() {
			if (now_num2 == slide_length2 - 1) {
			  now_num2 = 0;
			} else {
			  now_num2++;
			}
			  slideMove2();
		  }

		  // 슬라이드 무브
		  function slideMove2() {
			$panel2.stop().animate({
			  'margin-left': -wid2/4 * now_num2
			});
			$dotli2.removeClass('active');
			$dotli2.eq(now_num2).addClass('active');
		  }

		  // 화면크기 조정시 화면 재설정
		  function resize2() {
			$(window).resize(function() {
			  init2();
			  $panel2.css({
				'margin-left': -wid2/4 * now_num2
			  });
			});
		  }
		  init2();
		  slideEvent2();
		}

		//컨텐츠 바꾸기
		var leftNav = $('.left-nav .box');
		var rightContents = $('.right-nav-slide .right-nav');
        var rightContentsActive = $('.right-nav-slide .active');
	   
	   rightContents.hide();  
	   rightContentsActive.show();
	
	
		leftNav.click(function(){
			
			var targetValue = [];
			
			$(this).addClass('active').siblings().removeClass('active');
			  var valueId='#' + $(this).attr('value');

			
			 rightContents.hide();
			$(valueId).fadeIn();
	
	 
			
		});

    slide3();

	// 슬라이드 
		function slide3() {
		  var wid3 = 0;
		  var now_num3 = 0;
		  var slide_length3 = 0;
		  var auto3 = null;
		  var $dotli3 = $('.left-nav>.box');
		  var $panel3 = $('.slide-nav2');
		  var $panelLi3 = $panel3.children('li');

		  // 변수 초기화
		  function init3() {
			wid3 = $('.slide-nav2').width();
			now_num3 = $('.left-nav>.box.active').index();
			slide_length3 = $dotli3.length;
		  }

		  // 이벤트 묶음
		  function slideEvent3() {

			// 슬라이드 하단 dot버튼 클릭했을때
			$dotli3.click(function() {
			  now_num3 = $(this).index();
			  slideMove3();
			});

			// 이후 버튼 클릭했을때
			$('.tit-next2').click(function() {
			  nextChkPlay3();
			});

			// 이전 버튼 클릭했을때
			$('.tit-prev2').click(function() {
			  prevChkPlay3();
			});
			// 화면크기 재설정 되었을때
			resize3();
		  }

		  // 자동실행 함수
		  function autoPlay3() {
			auto3 = setInterval(function() {
			  nextChkPlay3();
			}, 12000);
		  }

		  // 자동실행 멈춤
		  function autoPlayStop3() {
			$panelLi3.mouseenter(function() {
			  clearInterval(auto3);
			});
		  }


		  // 자동실행 멈췄다가 재실행
		  function autoPlayRestart3() {
			$panelLi3.mouseleave(function() {
			  auto3 = setInterval(function() {
				nextChkPlay3();
			  }, 12000);
			});
		  }

		  // 이전 버튼 클릭시 조건 검사후 슬라이드 무브
		  function prevChkPlay3() {
			if (now_num3 == 0) {
			  now_num3 = slide_length3 - 1;
			} else {
			  now_num3--;
			}
			slideMove3();
		  }

		  // 이후 버튼 클릭시 조건 검사후 슬라이드 무브
		  function nextChkPlay2() {
			if (now_num3 == slide_length3 - 1) {
			  now_num3 = 0;
			} else {
			  now_num3++;
			}
			  slideMove3();
		  }

		  // 슬라이드 무브
		  function slideMove3() {
			$panel3.stop().animate({
			  'margin-left': -wid3/4 * now_num3
			});
			$dotli3.removeClass('active');
			$dotli3.eq(now_num3).addClass('active');
		  }

		  // 화면크기 조정시 화면 재설정
		  function resize3() {
			$(window).resize(function() {
			  init3();
			  $panel3.css({
				'margin-left': -wid3/4* now_num3
			  });
			});
		  }
		  init3();
		  slideEvent3();
		}

		//컨텐츠 바꾸기
		var leftNav2 = $('.left-nav2 .box');
		var rightContents = $('.right-nav-slide .right-nav');
        var rightContentsActive = $('.right-nav-slide .active');
	   
	   rightContents.hide();  
	   rightContentsActive.show();
	
	
		leftNav2.click(function(){
			
			var targetValue = [];
			
			$(this).addClass('active').siblings().removeClass('active');
			  var valueId='#' + $(this).attr('value');

			
			 rightContents.hide();
			$(valueId).fadeIn();
	
	 
			
		});

	}); //document ready function



   
 
function setCookieMobile ( name, value, expiredays ) {
    var todayDate = new Date();
    todayDate.setDate( todayDate.getDate() + expiredays );
    document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}
function getCookieMobile () {
    var cookiedata = document.cookie;
    if ( cookiedata.indexOf("todayCookier=done") < 0 ){
         $(".modal").show();
    }
    else {
        $(".modal").hide();
    }
}
getCookieMobile();










	
