$(document).ready(function(){
	

    // header link .lang
    var lang = $(".lang>div");

    lang.on('click', function(){
    
            var isOn = $(this).children('a').hasClass('on');
            if(isOn){
                $(this).children('a').removeClass('on');
                $(this).children("ul").stop().slideUp();
            }else {
                $(this).children('a').addClass('on');
                $(this).children("ul").stop().slideDown();
            }
    }); 

    // nav
    $(".gnb>li").mouseenter(function(){
        $(".gnb>li>ul,.gnb_back").stop().slideDown(300);
    });
    $(".gnb>li").mouseleave(function(){
        $(".gnb>li>ul,.gnb_back").stop().slideUp(300);
    });



	// quick menu

	var topBtn = $(".top_btn");
	var delay = 900;

	topBtn.on('click', function() {
		$('html').stop().animate({scrollTop:0}, delay);
	});





    // mainslide

		// mainslide

    showSlide(0);

	var total = $(".visualSlide>li").length; //요소 갯수 

	//다음버튼 클릭 시
	$(".next").on("click",function(e){
		e.preventDefault();
		
		if(currentIndex==total - 1){
			currentIndex=0;
		}else{
			currentIndex++;
		}
		showSlide(currentIndex);
	});
	
	//이전버튼 클릭시
	$(".prev").on("click",function(e){
		e.preventDefault();
		
		 
		if(currentIndex==0){
			currentIndex=total - 1;
		}else{
			currentIndex--;
		}
		showSlide(currentIndex);
	});
	
	
	//네비버튼 클릭 시
	$(".dot1>li").on("click",function(e){
        e.preventDefault();
		
		var i = $(this).index();
		showSlide(i);
	});	



	
	//슬라이더 패널정의 함수
	function showSlide(index){
		$(".dot1>li>button").removeClass("on");
		$(".dot1>li").eq(index).children("button").addClass("on");
		
		$(".visualSlide>li").fadeOut().removeClass("on");
		$(".visualSlide>li").eq(index).fadeIn().addClass("on");

		currentIndex = index;
	}



		

//    product slide
   $('.next2').on('click', function(e){
		e.preventDefault();
		$('.panel').stop().animate({'margin-left':'-28.57%'},500,function(){
			$('.panel>li').first().appendTo('.panel');
			$('.panel').css({'margin-left':'-14.285%'}); /* 모바일 */
		});
	});


	$('.prev2').on('click', function(e){
		e.preventDefault();
		$('.panel').stop().animate({'margin-left':'0px'},500,function(){
			$('.panel>li').last().prependTo('.panel');
			$('.panel').css({'margin-left':'-14.285%'});
		});
   });
    
    
    $(window).resize(function () {
            var width_size = window.outerWidth; // 윈도우 창크기

            if (width_size >= 1440) {
				$('.next2').on('click', function(e){
					e.preventDefault();
					$('.panel').stop().animate({'margin-left':'-28.57%'},500,function(){
					$('.panel>li').first().appendTo('.panel');
					$('.panel').css({'margin-left':'-14.285%'});
						});
					});
					$('.prev2').on('click', function(e){
					e.preventDefault();
					$('.panel').stop().animate({'margin-left':'0px'},500,function(){
					$('.panel>li').last().prependTo('.panel');
					$('.panel').css({'margin-left':'-14.285%'});
					}		);
					});
                
                
                
       } else {
		$('.next2').on('click', function(e){
			e.preventDefault();
			$('.panel').stop().animate({'margin-left':'-38.971%'},500,function(){
				$('.panel>li').first().appendTo('.panel');
				$('.panel').css({'margin-left':'-19.4855%'}); /* 모바일 */
			});
		});
	
	
		$('.prev2').on('click', function(e){
			e.preventDefault();
			$('.panel').stop().animate({'margin-left':'0px'},500,function(){
				$('.panel>li').last().prependTo('.panel');
				$('.panel').css({'margin-left':'-19.4855%'});
			});
		});
       }
    });


//   tab2 click
$(".tab2 li button").on('click',function(e){
    e.preventDefault();
    $(".tab2 li button").removeClass("on");
    $(this).addClass("on");
    
    
});
    // btn_slide
    var btn = $(".btn");

        btn.on('click', function(e){
            e.preventDefault();
    
            var isOn = $(this).children('a').hasClass('on');
            if(isOn){
                $(this).children('a').removeClass('on');
                $('.bottomBox').stop().slideUp();
            }else {

                $(this).children('a').addClass('on');
                $('.bottomBox').stop().slideDown();
            }
        });  

        // pop
        $(".open").click(function(e){
            e.preventDefault();
            $(".popWrap").show();
        });
        $(".close").click(function(e){
            e.preventDefault();
            $(".popWrap").hide();
        });


        // productNew slide----------------------------------------
        
		

		
		
		

		
        $(".btn_gnb").click(function(e){
			e.preventDefault();
			$(this).hide();
			$(".btn_close").show();
            $(".gnb_box").show();
        });
        $(".btn_close").click(function(e){
			e.preventDefault();
			$(this).hide();
			$(".btn_gnb").show();
            $(".gnb_box").hide();
        });
	

		$(".tab_menu li").click(function(e){
			e.preventDefault();

			$(".tab_list li").removeClass("on");
			$(".tab_menu li").removeClass("on");
			$(this).addClass("on");
			if($(this).hasClass("first")){

				$(".tab_list .list1").addClass("on");

			  }else if($(this).hasClass("second")){

				$(".tab_list .list2").addClass("on");

			  }else if($(this).hasClass("third")){

				$(".tab_list .list3").addClass("on");

			  }else{
				$(".tab_list .list4").addClass("on");
			  }
		
		});
		
		
		var active_index, $panel_li, $navi_li, $prev, $next, len, class_name, speed, isBLock, timer, rolling_gap;


		$(document).ready(function(){	
		
			// visual 슬라이더
			active_index = 0;
			$panel_li = $('.productNew>.slide>ul>li');
			$navi_li = $('.productNew>.dot2>ul>li');
			// $prev = $('.prev');
			// $next = $('.next');
			len = $panel_li.length;
			class_name = 'on';
			speed = 1000; 
			isBlock = true;
			rolling_gap = 3500;
		
		
			timer = setInterval(rolling, rolling_gap);
		
		
			$navi_li.on('click',function(e){
				e.preventDefault();
		
				var $current = $panel_li.filter($('.'+class_name));
				var target_index = $(this).index();
		
				var next_index = target_index;
				var prev_index = target_index;
		
				if(isBlock){
					if(target_index>active_index){
						showNext($current, next_index);
					}else if(target_index<active_index){
						showPrev($current, prev_index);
					}else{
						return;
					}
				}        
			});   
		});
		
		
		//다음패널 함수
		function showNext($current, next_index){ 
			isBlock = false;
		
			$current.stop().animate({left:'-100%'},speed,function(){
				$(this).removeClass(class_name).hide();
			});
			$panel_li.eq(next_index).show().css({left:'100%'}).stop().animate({left:'0%'},speed,function(){
				$(this).addClass(class_name);  
				isBlock = true;     
			});
		
			active_index = next_index;      
			activateBtn(active_index);   
		}
		
		
		//이전패널 함수
		function showPrev($current, prev_index){   
			isBlock = false;
		
			$current.stop().animate({left:'100%'},speed,function(){
				$(this).removeClass(class_name).hide();
			});
			$panel_li.eq(prev_index).show().css({left:'-100%'}).stop().animate({left:'0%'},speed,function(){
				$(this).addClass(class_name);  
				isBlock = true;     
			});
		
			active_index = prev_index;
			activateBtn(active_index);
		}
		
		
		//버튼 활성화 함수
		function activateBtn(i){
			$navi_li.children('button').removeClass(class_name);
			$navi_li.eq(i).children('button').addClass(class_name);
		}  
		
		//롤링 함수
		function rolling(){    
			var $current = $panel_li.filter($('.'+class_name));
			var current_index = $current.index();
			var next_index; 
		
			(current_index != len-1) ? next_index = current_index+1 : next_index = 0;     
			showNext($current, next_index);
		}
		

		$(".bxslider").bxSlider({
			auto: true,
		});


});