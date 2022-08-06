//cursor
var cursor = $(".cursor"),
		mouseX = 0,
		mouseY = 0;

$(document).mousemove(function(e){
	mouseX = e.pageX;
	mouseY = e.pageY;
});

TweenMax.to({}, 0.016, {
	repeat: -1,
	onRepeat: function(){
		TweenMax.set(cursor,{
			css:{
				left: mouseX-20,
				top: mouseY-20
			}
		})
	}
});



//햄버거 메뉴
$("#mNav > a").click(function(){
    $(".gnb_menu").addClass("show");
    return false;
});  
$(".close").click(function(){
    $(".gnb_menu").removeClass("show");
});
//메뉴 이동 자연스럽
$('.menu_list li a').click(function(){
    $(".gnb_menu").css({"display":"none"});
});




//header_list animation
var list = $(".header_list ul li");
var contents = $("#contents > section");

$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	if(wScroll >= contents.eq(0).offset().top){
		list.removeClass("active");
		list.eq(0).addClass("active");
        $(".header_list ul li a").css("color", "#000");
	}
	if(wScroll >= contents.eq(2).offset().top){
		list.removeClass("active");
		list.eq(1).addClass("active");
        $(".header_list ul li a").css("color", "#fff");
	}
	if(wScroll >= contents.eq(3).offset().top){
		list.removeClass("active");
		list.eq(2).addClass("active");
        $(".header_list ul li a").css("color", "#000");
	}
	if(wScroll >= contents.eq(4).offset().top){
		list.removeClass("active");
		list.eq(3).addClass("active");
        $(".header_list ul li a").css("color", "#fff");
	}
	if(wScroll >= contents.eq(5).offset().top){
		list.removeClass("active");
		list.eq(4).addClass("active");
        $(".header_list ul li a").css("color", "#000");
	}
    if(wScroll >= contents.eq(6).offset().top){
		$(".header_list ul li a").css("color", "#fff");
	}
    if(wScroll >= contents.eq(7).offset().top){
		list.removeClass("active");
		list.eq(5).addClass("active");
        $(".header_list ul li a").css("color", "#000");
	}

});








$(".sec1 .title h1 strong").mouseenter(function(){
	cursor.addClass("active");
});
$(".sec1 .title h1 strong").mouseleave(function(){
	cursor.removeClass("active");
});


//section1 텍스트 애니메이션
 $(".splice").each(function(){
    let txt = $(this).text();
    let split = txt.split("").join("</span><span aria-hidden='true'>");
    split = "<span aria-hidden='true'>" + split + "</span>";
    $(this).html(split).attr("aria-label", txt);
});


setTimeout(function(){
    gsap.to(".title h1 strong span",{duration: 1.8, y:0, opacity: 1, stagger:0.1, ease: Back.easeOut.config(1.7)});
});


//skrollr
var s = skrollr.init({
    edgeStrategy: 'set',
    easing: 'linear'
});

$(window).scroll(function(){

    //
    let wScroll = $(this).scrollTop();
    console.log(wScroll)

    $(".scroll").text(wScroll);

    //sec2
    let offset1 = (wScroll - $(".sec2 .s2Img .right .right_img").offset().top) * 0.4;
    $(".sec2 .s2Img .right .right_img").css({"transform":"translateY("+offset1+"px)"});
    
    //section2 skill애니메이션
    var skills = {
        ht: 95,
        cs: 95,
        jq: 90,
        jv: 75,
        pt: 90,
        il: 90,
    };
    
    if(wScroll >= $("#section2").offset().top*1.05){
        //.s2Img .left h3(about-tit)
        setTimeout(function(){
            gsap.to(".sec2 .s2Img .left .about-tit",{duration: 1.5, opacity: 1, stagger:0.1, ease: Power4.easeOut});
        });
        //.s2Img .left p
        TweenMax.to('.sec2 .s2Img .left p', 2, {
            x: (0), ease: Power4.easeOut, delay:0.5,
        });
        //.s2Img .left line
        TweenMax.to('.sec2 .s2Img .left .left-line span', 1.5, {
            x: (0), ease: Power4.easeOut, delay:1,
        });
        //.s2Img .left h3(skill-tit)
        setTimeout(function(){
            gsap.to(".sec2 .s2Img .left .skill-tit",{duration: 1.5, opacity: 1, stagger:0.1, ease: Power4.easeOut});
        },1600);
        //.bar-all
        TweenMax.to('.bar-all', 1.5, {
            opacity: 1, ease: Power4.easeOut, delay:2.4,
        });
        
        
        
        $.each(skills, function(key, value){
          var skillbar = $("." + key);
          
            skillbar.delay(2800).animate(
            {
              width: value + "%"
            },
            3000,
            function(){
              $(".speech-bubble").fadeIn();
            }
          );
        });  
    }


    if(wScroll >= $(".list").offset().top*0.9){
        //divide.d1 애니메이션
        TweenMax.to('.list .divide.d1 .list-desc span', 1.2, {
            y: (0), opacity: 1, ease: Power4.easeOut, delay:0.2,
        });
        TweenMax.to('.list .line.d1 span', 1.2, {
            x: (0), opacity: 1, ease: Power4.easeOut,
        });
        TweenMax.to('.list .divide.d1 .list-tit span', 1.2, {
            y: (0), opacity: 1, ease: Power4.easeOut, delay:0.4,
        });

    }

    if(wScroll >= $(".list").offset().top*1.0){
        //divide.d2 애니메이션
        TweenMax.to('.list .divide.d2 .list-desc span', 1.5, {
            y: (0), opacity: 1, ease: Power4.easeOut, delay:0.6,
        });
        TweenMax.to('.list .line.d2 span', 1.2, {
            x: (0), opacity: 1, ease: Power4.easeOut,
        });
        TweenMax.to('.list .divide.d2 .list-tit span', 1, {
            y: (0), opacity: 1, ease: Power4.easeOut, delay: 0.2,
        });

    }

    if(wScroll >= $(".list").offset().top*1.05){
        //divide.d3 애니메이션
        TweenMax.to('.list .divide.d3 .list-desc span', 1.5, {
            y: (0), opacity: 1, ease: Power4.easeOut, delay:0.6,
        });
        TweenMax.to('.list .line.d3 span', 1.2, {
            x: (0), opacity: 1, ease: Power4.easeOut,
        });
        TweenMax.to('.list .divide.d3 .list-tit span', 1, {
            y: (0), opacity: 1, ease: Power4.easeOut, delay: 0.2,
        });
    }

    if(wScroll >= $(".list").offset().top*1.08){
        //divide.d4 애니메이션
        TweenMax.to('.list .divide.d4 .list-desc span', 1.5, {
            y: (0), opacity: 1, ease: Power4.easeOut, delay:1.2,
        });
        TweenMax.to('.list .line.d4 span', 2.5, {
            x: (0), opacity: 1, ease: Power4.easeOut,
        });
        TweenMax.to('.list .divide.d4 .list-tit span', 1.5, {
            y: (0), opacity: 1, ease: Power4.easeOut, delay: 0.5,
        });
    }

    if(wScroll >= $(".list").offset().top*1.11){
        //divide.d5 애니메이션
        TweenMax.to('.list .divide.d5 .list-desc span', 1.5, {
            y: (0), opacity: 1, ease: Power4.easeOut, delay:1.2,
        });
        TweenMax.to('.list .line.d5 span', 2.5, {
            x: (0), opacity: 1, ease: Power4.easeOut,
        });
        TweenMax.to('.list .divide.d5 .list-tit span', 1.5, {
            y: (0), opacity: 1, ease: Power4.easeOut, delay: 0.5,
        });
    }

    if(wScroll >= $(".list").offset().top*1.14){
        //divide.d6 애니메이션
        TweenMax.to('.list .divide.d6 .list-desc span', 1.5, {
            y: (0), opacity: 1, ease: Power4.easeOut, delay:1.2,
        });
        TweenMax.to('.list .line.d6 span', 2.5, {
            x: (0), opacity: 1, ease: Power4.easeOut,
        });
        TweenMax.to('.list .divide.d6 .list-tit span', 1.5, {
            y: (0), opacity: 1, ease: Power4.easeOut, delay: 0.5,
        });
    }


    //section3 애니메이션
    if(wScroll >= $("#section3").offset().top/1.05){
        setTimeout(function(){
            gsap.to(".all h2 strong.c1 span",{duration: 1, y:0, opacity: 1, stagger:0.1, ease: Power4.easeOut});
        });
    }
    if(wScroll >= $("#section3").offset().top/1.03){
        setTimeout(function(){
            gsap.to(".all h2 strong.c2 span",{duration: 1, y:0, opacity: 1, stagger:0.1, ease: Power4.easeOut});
        },100);
    }
    if(wScroll >= $("#section3").offset().top){
        setTimeout(function(){
            gsap.to(".all h2 strong.c3 span",{duration: 1, y:0, opacity: 1, stagger:0.1, ease: Power4.easeOut});
        },100);
        //section3 img 애니메이션
        TweenMax.to('.sec3 h2 img', 1.2, {
            opacity: 1, ease: Power4.easeOut, delay:0.1,
        });
        //section3 intro 애니메이션
        TweenMax.to('.sec3 .intro h3 span', 1.2, {
            opacity: 1, y: 0, ease: Power4.easeOut, delay:0.7,
        });
        TweenMax.to('.sec3 .intro .intro-line span', 1.2, {
            opacity: 1, x: 0, ease: Power4.easeOut, delay:1,
        });
        TweenMax.to('.sec3 .intro .desc span', 1, {
            opacity: 1, y: 0, ease: Power4.easeOut, delay:1.3,
        });
        //1024px이 되었을때 .intro
        TweenMax.to('.sec3 .intro .d2 span', 2, {
            opacity: 1, y: 0, ease: Power4.easeOut, delay:1.3,
        }); 
    }

    //section4 애니메이션
    //section4 웹사이트1
    if(wScroll >= $("#section4").offset().top/1.05){
        TweenMax.to('.sico.s1 .line-l1 span', 0.8, {
            opacity: 1, x: 0, ease: Power4.easeOut,
        });
        TweenMax.to('.site.s1 .site-num', 0.5, {
            opacity: 1, y: 0, ease: Power4.easeOut, delay: 0.3,
        });
        setTimeout(function(){
            gsap.to(".site.s1 .site-tit strong span",{duration: 0.5, y:0, opacity: 1, stagger:0.1, ease: Power4.easeOut});
        },600);
        
        TweenMax.to('.site.s1 .site-desc span', 0.5, {
            y: 0, ease: Power4.easeOut, delay: 1.5,
        });
        TweenMax.to('.site.s1 .site-btn', 0.5, {
            opacity: 1, y: 0, ease: Power4.easeOut, delay: 1.8,
        });
        TweenMax.to('.stie-wrap .site.s1 .site-img', 0.8, {
            opacity: 1, ease: Power4.easeOut, delay: 2.1,
        });
        TweenMax.to('.sico.s1 .code', 0.8, {
            x: 0, opacity: 1, ease: Power4.easeOut, delay: 2.4,
        });
        TweenMax.to('.sico.s1 .line-l2 span', 0.8, {
            x: 0, opacity: 1, ease: Power4.easeOut, delay: 2.4,
        });   
    }
    
    
    //section4 웹사이트2
    if(wScroll >= $(".sico.s2").offset().top/1.05){
        TweenMax.to('.sico.s2 .line-l1 span', 0.8, {
            opacity: 1, x: 0, ease: Power4.easeOut,
        });
        TweenMax.to('.site.s2 .site-num', 0.5, {
            opacity: 1, y: 0, ease: Power4.easeOut, delay: 0.3,
        });
        setTimeout(function(){
            gsap.to(".site.s2 .site-tit strong span",{duration: 0.5, y:0, opacity: 1, stagger:0.1, ease: Power4.easeOut});
        },600);
        TweenMax.to('.site.s2 .site-desc span', 0.5, {
            y: 0, ease: Power4.easeOut, delay: 1.5,
        });
        TweenMax.to('.site.s2 .site-btn', 0.5, {
            opacity: 1, y: 0, ease: Power4.easeOut, delay: 1.8,
        });
        TweenMax.to('.site.s2 .site-img', 0.8, {
            opacity: 1, ease: Power4.easeOut, delay: 2.1,
        });
        TweenMax.to('.sico.s2 .code', 0.8, {
            x: 0, opacity: 1, ease: Power4.easeOut, delay: 2.4,
        });
        TweenMax.to('.sico.s2 .line-l2 span', 0.8, {
            x: 0, opacity: 1, ease: Power4.easeOut, delay: 2.4,
        });  
    }
    
    //section4 웹사이트3
    if(wScroll >= $(".sico.s3").offset().top/1.05){
        TweenMax.to('.sico.s3 .line-l1 span', 0.8, {
            opacity: 1, x: 0, ease: Power4.easeOut,
        });
        TweenMax.to('.site.s3 .site-num', 0.5, {
            opacity: 1, y: 0, ease: Power4.easeOut, delay: 0.3,
        });
        setTimeout(function(){
            gsap.to(".site.s3 .site-tit strong span",{duration: 0.5, y:0, opacity: 1, stagger:0.1, ease: Power4.easeOut});
        },600);
        TweenMax.to('.site.s3 .site-desc span', 0.5, {
            y: 0, ease: Power4.easeOut, delay: 1.5,
        });
        TweenMax.to('.site.s3 .site-btn', 0.5, {
            opacity: 1, y: 0, ease: Power4.easeOut, delay: 1.8,
        });
        TweenMax.to('.site.s3 .site-img', 0.8, {
            opacity: 1, ease: Power4.easeOut, delay: 2.1,
        });
        TweenMax.to('.sico.s3 .code', 0.8, {
            x: 0, opacity: 1, ease: Power4.easeOut, delay: 2.4,
        });
        TweenMax.to('.sico.s3 .line-l2 span', 0.8, {
            x: 0, opacity: 1, ease: Power4.easeOut, delay: 2.4,
        });  
    }
    
    //section4 웹사이트4
    if(wScroll >= $(".sico.s4").offset().top/1.05){
        TweenMax.to('.sico.s4 .line-l1 span', 0.8, {
            opacity: 1, x: 0, ease: Power4.easeOut,
        });
        TweenMax.to('.site.s4 .site-num', 0.5, {
            opacity: 1, y: 0, ease: Power4.easeOut, delay: 0.3,
        });
        setTimeout(function(){
            gsap.to(".site.s4 .site-tit strong span",{duration: 0.5, y:0, opacity: 1, stagger:0.1, ease: Power4.easeOut});
        },600);
        TweenMax.to('.site.s4 .site-desc span', 0.5, {
            y: 0, ease: Power4.easeOut, delay: 1.5,
        });
        TweenMax.to('.site.s4 .site-btn', 0.5, {
            opacity: 1, y: 0, ease: Power4.easeOut, delay: 1.8,
        });
        TweenMax.to('.site.s4 .site-img', 0.8, {
            opacity: 1, ease: Power4.easeOut, delay: 2.1,
        });
        TweenMax.to('.sico.s4 .code', 0.8, {
            x: 0, opacity: 1, ease: Power4.easeOut, delay: 2.4,
        });
        TweenMax.to('.sico.s4 .line-l2 span', 0.8, {
            x: 0, opacity: 1, ease: Power4.easeOut, delay: 2.4,
        });  
    }
    
    
    //section5 애니메이션
    //section5 애니메이션1
    if(wScroll >= $("#section5").offset().top/1.05){
        TweenMax.to('.at.a1 .animation .line-l1', 0.8, {
            opacity: 1, left: 0, ease: Power4.easeOut,
        });
        TweenMax.to('.ani.a1', 0.8, {
            opacity: 1, ease: Power4.easeOut, delay: 0.3,
        });
        TweenMax.to('.at.a1 .ani-num span', 0.5, {
            opacity: 1, y: 0, ease: Power4.easeOut, delay: 0.6,
        });
        setTimeout(function(){
            gsap.to(".at.a1 .ani-tit strong span",{duration: 0.5, y:0, opacity: 1, stagger:0.1, ease: Power4.easeOut});
        },1000);
        setTimeout(function(){
            gsap.to(".at.a1 .tit strong span",{duration: 0.5, y:0, opacity: 1, stagger:0.1, ease: Power4.easeOut});
        },1000);
        TweenMax.to('.at.a1 .ani-desc span', 0.5, {
            y: 0, ease: Power4.easeOut, delay: 2,
        });
        TweenMax.to('.at.a1 .ani-btn', 0.8, {
            opacity: 1, y: 0, ease: Power4.easeOut, delay: 2.3,
        });
 
        TweenMax.to('.at.a1 .animation .line-l2', 0.8, {
           left: 0, opacity: 1, ease: Power4.easeOut, delay: 2.6,
       });   
    }
    
    //section5 애니메이션2
    if(wScroll >= $(".at.a2").offset().top/1.05){
        TweenMax.to('.at.a2 .animation .line-l1', 0.8, {
            opacity: 1, left: 0, ease: Power4.easeOut,
        });
        TweenMax.to('.ani.a2', 0.8, {
            opacity: 1, ease: Power4.easeOut, delay: 0.3,
        });
        TweenMax.to('.at.a2 .ani-num span', 0.5, {
            opacity: 1, y: 0, ease: Power4.easeOut, delay: 0.6,
        });
        setTimeout(function(){
            gsap.to(".at.a2 .ani-tit strong span",{duration: 0.5, y:0, opacity: 1, stagger:0.1, ease: Power4.easeOut});
        },1000);
        setTimeout(function(){
            gsap.to(".at.a2 .tit strong span",{duration: 0.5, y:0, opacity: 1, stagger:0.1, ease: Power4.easeOut});
        },1000);
        TweenMax.to('.at.a2 .ani-desc span', 0.5, {
            y: 0, ease: Power4.easeOut, delay: 2,
        });
        TweenMax.to('.at.a2 .ani-btn', 0.8, {
            opacity: 1, y: 0, ease: Power4.easeOut, delay: 2.3,
        });
 
        TweenMax.to('.at.a2 .animation .line-l2', 0.8, {
           left: 0, opacity: 1, ease: Power4.easeOut, delay: 2.6,
       });   
    }
    
    //section5 애니메이션3
    if(wScroll >= $(".at.a3").offset().top/1.05){
        TweenMax.to('.at.a3 .animation .line-l1', 0.8, {
            opacity: 1, left: 0, ease: Power4.easeOut,
        });
        TweenMax.to('.ani.a3', 0.8, {
            opacity: 1, ease: Power4.easeOut, delay: 0.3,
        });
        TweenMax.to('.at.a3 .ani-num span', 0.5, {
            opacity: 1, y: 0, ease: Power4.easeOut, delay: 0.6,
        });
        setTimeout(function(){
            gsap.to(".at.a3 .ani-tit strong span",{duration: 0.5, y:0, opacity: 1, stagger:0.1, ease: Power4.easeOut});
        },1000);
        setTimeout(function(){
            gsap.to(".at.a3 .tit strong span",{duration: 0.5, y:0, opacity: 1, stagger:0.1, ease: Power4.easeOut});
        },1000);
        TweenMax.to('.at.a3 .ani-desc span', 0.5, {
            y: 0, ease: Power4.easeOut, delay: 2,
        });
        TweenMax.to('.at.a3 .ani-btn', 0.8, {
            opacity: 1, y: 0, ease: Power4.easeOut, delay: 2.3,
        });
 
        TweenMax.to('.at.a3 .animation .line-l2', 0.8, {
           left: 0, opacity: 1, ease: Power4.easeOut, delay: 2.6,
       });   
    }
    
    //section5 애니메이션4
    if(wScroll >= $(".at.a4").offset().top/1.05){
        TweenMax.to('.at.a4 .animation .line-l1', 0.8, {
            opacity: 1, left: 0, ease: Power4.easeOut,
        });
        TweenMax.to('.ani.a4', 0.8, {
            opacity: 1, ease: Power4.easeOut, delay: 0.3,
        });
        TweenMax.to('.at.a4 .ani-num span', 0.5, {
            opacity: 1, y: 0, ease: Power4.easeOut, delay: 0.6,
        });
        setTimeout(function(){
            gsap.to(".at.a4 .ani-tit strong span",{duration: 0.5, y:0, opacity: 1, stagger:0.1, ease: Power4.easeOut});
        },1000);
        setTimeout(function(){
            gsap.to(".at.a4 .tit strong span",{duration: 0.5, y:0, opacity: 1, stagger:0.1, ease: Power4.easeOut});
        },1000);
        TweenMax.to('.at.a4 .ani-desc span', 0.5, {
            y: 0, ease: Power4.easeOut, delay: 2,
        });
        TweenMax.to('.at.a4 .ani-btn', 0.8, {
            opacity: 1, y: 0, ease: Power4.easeOut, delay: 2.3,
        });
 
        TweenMax.to('.at.a4 .animation .line-l2', 0.8, {
           left: 0, opacity: 1, ease: Power4.easeOut, delay: 2.6,
       });   
    }
    
    //section6 애니메이션1
    if(wScroll >= $("#section6").offset().top/1.05){
        //section6 list 01
        TweenMax.to('.java-list .line.j1 span', 0.8, {
            opacity: 1, x: 0, ease: Power4.easeOut,
        });
        TweenMax.to('.java-list .jl1 .java-num span', 0.8, {
            opacity: 1, y: 0, ease: Power4.easeOut, delay: 0.3,
        });
        TweenMax.to('.java-list .jl1 .java-desc a', 0.8, {
            opacity: 1, y: 0, ease: Power4.easeOut, delay: 0.6,
        });
        TweenMax.to('.java-list .line.j2 span', 0.8, {
            opacity: 1, x: 0, ease: Power4.easeOut, delay: 1.2,
        });
        
        //section6 list 02
        TweenMax.to('.java-list .jl2 .java-num span', 0.8, {
            opacity: 1, y: 0, ease: Power4.easeOut, delay: 1.5,
        });
        TweenMax.to('.java-list .jl2 .java-desc a', 0.8, {
            opacity: 1, y: 0, ease: Power4.easeOut, delay: 1.8,
        });
        TweenMax.to('.java-list .line.j3 span', 0.8, {
            opacity: 1, x: 0, ease: Power4.easeOut, delay: 2.1,
        });
        
        //section6 03
        TweenMax.to('.java-list .jl3 .java-num span', 0.8, {
            opacity: 1, y: 0, ease: Power4.easeOut, delay: 2.4,
        });
        TweenMax.to('.java-list .jl3 .java-desc a', 0.8, {
            opacity: 1, y: 0, ease: Power4.easeOut, delay: 2.7,
        });
        TweenMax.to('.java-list .line.j4 span', 0.8, {
            opacity: 1, x: 0, ease: Power4.easeOut, delay: 3,
        });
        
        //section6 04
        TweenMax.to('.java-list .jl4 .java-num span', 0.8, {
            opacity: 1, y: 0, ease: Power4.easeOut, delay: 3.3,
        });
        TweenMax.to('.java-list .jl4 .java-desc a', 0.8, {
            opacity: 1, y: 0, ease: Power4.easeOut, delay: 3.6,
        });
        TweenMax.to('.java-list .line.j5 span', 0.8, {
            opacity: 1, x: 0, ease: Power4.easeOut, delay: 3.9,
        });
        TweenMax.to('.java .js-at .at-title span', 0.5, {
            opacity: 1, y: 0, ease: Power4.easeOut, delay: 4.2,
        });
        TweenMax.to('.java .js-at .script', 0.8, {
            opacity: 1, ease: Power4.easeOut, delay: 4.4,
        });
        TweenMax.to('.java-at .java-btn a', 0.4, {
            y: 0, ease: Power4.easeOut, delay: 4.6,
        });  
    }
    
    //section7 애니메이션
    if(wScroll >= $("#section7").offset().top){
        $(".sec7 .block-text .block .bg").addClass("show");
    }

});


//section7 애니메이션
$("#txt > div:gt(0)").hide();

setInterval(function() {
  $('#txt > div:first')
    .hide(200)
    .next()
    .show(200)
    .end()
    .appendTo('#txt');
}, 2000);



//탭메뉴
//웹사이트탭메뉴1
var tabBtn = $(".code-btn > ul > li"); 
var tabCont = $(".code-view > div");      

    //컨텐츠 내용을 숨겨주세요!
    tabCont.hide().eq(0).show();

    tabBtn.click(function(e){
      e.preventDefault();
      var target = $(this);         //버튼의 타겟(순서)을 변수에
      var index = target.index();   //버튼의 순서를 변수에 저장
      tabBtn.removeClass("active");    //버튼의 클래스를 삭제
      target.addClass("active");       //타겟의 클래스를 추가
      tabCont.css("display","none");
      tabCont.eq(index).css("display","block");
    });

//웹사이트탭메뉴2
var tabBtn2 = $(".code-btn2 > ul > li"); 
var tabCont2 = $(".code-view2 > div");      

    //컨텐츠 내용을 숨겨주세요!
    tabCont2.hide().eq(0).show();

    tabBtn2.click(function(e){
      e.preventDefault();
      var target = $(this);         //버튼의 타겟(순서)을 변수에
      var index = target.index();   //버튼의 순서를 변수에 저장
      tabBtn2.removeClass("active");    //버튼의 클래스를 삭제
      target.addClass("active");       //타겟의 클래스를 �