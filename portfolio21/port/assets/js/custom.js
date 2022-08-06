//skrollr
// var s = skrollr.init({
//    edgeStrategy: 'set',
//    easing: 'linear'
// });

$(".split").each(function () {
    let text = $(this).text();
    let split = text.split("").join("</span><span aria-hidden='true'>");
    split = "<span aria-hidden='true'>" + split + "</span>";
    $(this).html(split).attr("aria-label", text);
});

$("#main").addClass("show");

let tl = gsap.timeline();
tl.to("#main .text_wrap h1 span", {
    duration: 1,
    delay: 0.5,
    y: 0,
    opacity: 1,
    stagger: 0.1,
    ease: Back.easeOut.config(1.7)
})

tl.to("#header, .pageYOffset, .php", {
    duration: 1,
    y: 0,
    opacity: 1,
    ease: Back.easeOut.config(1.7)
}, "-=1");

$(window).scroll(function () {

    let pageYOffset = $(window).scrollTop();
    $(".pageYOffset").text(pageYOffset);

    if (pageYOffset > $("#about").offset().top - $(window).height() / 2) {
        let tl = gsap.timeline();
        tl.to("#about .title_line", {
            duration: 1,
            width: "100%",
            ease: Back.easeOut.config(1.7)
        });
        tl.to("#about .title h1 span", {
            duration: 0.3,
            delay: -0.5,
            y: 0,
            opacity: 1,
            stagger: 0.1,
            ease: Back.easeOut.config(1.7)
        });

        gsap.to(".about h2 span:nth-child(1)", {duration: 0.4, opacity: 1, y:0, ease: "ease.out", delay: 1.5})
        gsap.to(".about h2 span:nth-child(2)", {duration: 0.4, opacity: 1, y:0, ease: "ease.out", delay: 1.7})
        gsap.to(".about h2 span:nth-child(3)", {duration: 0.4, opacity: 1, y:0, ease: "ease.out", delay: 1.9})
    }

    if (pageYOffset > $(".cont1 .about_text").offset().top - $(window).height() / 2) {
        $(".cont1 .about_dot_right").addClass("about_dot_ani");
        $(".cont1 .about_text p").addClass("about_text_ani");
        $(".cont1 .about_text_line").addClass("about_text_border");
    }

    //반응형때문에 따로 적용시킴
    if (pageYOffset > $(".cont1 .about_img_wrap").offset().top - $(window).height() / 2) {
        $(".cont1 .about_img_wrap").addClass("about_img_ani");
    }

    if (pageYOffset > $(".cont2 .about_text").offset().top - $(window).height() / 2) {
        $(".cont2 .about_dot_left").addClass("about_dot_ani");
        $(".cont2 .about_text p").addClass("about_text_ani");
        $(".cont2 .about_text_line").addClass("about_text_border");
    }

    if (pageYOffset > $(".cont2 .about_img_wrap").offset().top - $(window).height() / 2) {
        $(".cont2 .about_img_wrap").addClass("about_img_ani");
    }

    if (pageYOffset > $(".cont3 .about_text").offset().top - $(window).height() / 2) {
        $(".cont3 .about_dot_right").addClass("about_dot_ani");
        $(".cont3 .about_text p").addClass("about_text_ani");
        $(".cont3 .about_text_line").addClass("about_text_border");
    }

    if (pageYOffset > $(".cont3 .about_img_wrap").offset().top - $(window).height() / 2) {
        $(".cont3 .about_img_wrap").addClass("about_img_ani");
    }

    if (pageYOffset > $(".cont4.about_text").offset().top - $(window).height() / 2) {
        $(".cont4 .about_dot_left").addClass("about_dot_ani");
        $(".cont4 p").addClass("about_text_ani");
        $(".cont4 .about_text_line").addClass("about_text_border");
    }
    
    if (pageYOffset > $(".keyword").offset().top - $(window).height() / 2) {
        $(".keyword h2 span").addClass("keyword_h2_ani");
        $("#keyword_arrow").addClass("keyword_arrow_ani");
        
        //horizon
        gsap.to(".kh_p1", {duration: 0.3, opacity: 1, x:0, ease: "bounce.out", delay: 0}) //진정성
        gsap.to(".kh_t6", {duration: 0.3, opacity: 1, ease: "bounce.out", delay: 2.3}) //진정성
        gsap.to(".kh_p3", {duration: 0.3, opacity: 1, y:0, ease: "bounce.out", delay: 1.3}) //트렌드
        gsap.to(".kh_t5", {duration: 0.3, opacity: 1, ease: "bounce.out", delay: 3.6}) //트렌드
        gsap.to(".kh_p2", {duration: 0.3, opacity: 1, y:0, ease: "bounce.out", delay: 2.3}) //깔끔
        gsap.to(".kh_t4", {duration: 0.3, opacity: 1, ease: "bounce.out", delay: 4.6}) //깔끔
        gsap.to(".kh_p4", {duration: 0.3, opacity: 1, x:0, ease: "bounce.out", delay: 3.3}) //책임감
        gsap.to(".kh_t3", {duration: 0.3, opacity: 1, ease: "bounce.out", delay: 5.6}) //책임감
        gsap.to(".kh_p5", {duration: 0.3, opacity: 1, y:0, ease: "bounce.out", delay: 4.3}) //끈기
        gsap.to(".kh_t2", {duration: 0.3, opacity: 1, ease: "bounce.out", delay: 6.6}) //끈기
        gsap.to(".kh_p6", {duration: 0.3, opacity: 1, x:0, ease: "bounce.out", delay: 5.3}) //정직
        gsap.to(".kh_t1", {duration: 0.3, opacity: 1, ease: "bounce.out", delay: 7.6}) //정직
        gsap.to("#keyword_star.star_h", {duration: 0.3, opacity: 1, ease: "ease.out", delay: 7.8}) //iam
        
        //vertical
        $(".keyword_h2_bg").css("opacity","1");
        $("#keyword_vertical polygon, #keyword_vertical text").css("opacity","1");
        $("#keyword_star.star_v").css("opacity","1");
    }

    if (pageYOffset > $("#make").offset().top - $(window).height() / 2) {
        let tl = gsap.timeline();
        tl.to("#make .title_line", {
            duration: 1,
            width: "100%",
            ease: Back.easeOut.config(1.7)
        });
        tl.to("#make .title h1 span", {
            duration: 0.3,
            delay: -0.5,
            y: 0,
            opacity: 1,
            stagger: 0.1,
            ease: Back.easeOut.config(1.7)
        });
    };
    
    if (pageYOffset > $(".site_index").offset().top - $(window).height() / 2) {
        $(".site_index, .index_half, .index_head, .index_text, .index_li:nth-child(2) .index_title").addClass("show_line");
        $(".index_number div").addClass("index_number_ani");
        
        let tl = gsap.timeline();
        tl.to(".index_head span", {
            duration: 0.5,
            delay: 2,
            y: 0,
            opacity: 1,
            ease: Back.easeOut.config(1.7)
        });
        tl.to(".index_number div span, .index_title span", {
            duration: 0.2,
            y: 0,
            opacity: 1,
            ease: Back.easeOut.config(1.7)
        });
    };
    
    if (pageYOffset > $("#make .subtitle.web").offset().top - $(window).height() / 2) {
        $(".web .subtitle_line").addClass("show_line");
        
        let tl = gsap.timeline();
        tl.to(".subtitle.web h2 span", {
            duration: 0.3,
            delay: 0.3,
            y: 0,
            opacity: 1,
            stagger: 0.1,
            ease: Back.easeOut.config(1.7)
        });

        $(".st1.site_table, .st1 .site_title ul, .st1 .site_text, .st1 .site_img, .st1 .tab_btn, .st1 .tab_btn li, .st1 .site_tabmenu").addClass("show_line");
        
        tl.to(".st1 .site_name span", {
            duration: 0.5,
            delay: 0.3,
            y: 0,
            opacity: 1,
            ease: Back.easeOut.config(1.7)
        });
        
        tl.to(".st1 .site_contents .site_text p, .st1 .site_contents .site_img img, .st1 .site_contents .site_link, .st1 .site_tabmenu .tab_btn li, .st1 .site_tabmenu .tab_btn li.active span, .st1 .site_tabmenu .tab_btn li.active a, .st1 .site_tabmenu .tab_btn li a, .st1 .site_tabmenu .tab_btn li.active, .st1 .site_tabmenu .tab_content, .st1 .site_link_t", {
            duration: 0.5,
            opacity: 1
        });        
    }
   
    if (pageYOffset > $(".st2").offset().top - $(window).height() / 2) {
        let tl = gsap.timeline();

        $(".st2.site_table, .st2 .site_title ul, .st2 .site_text, .st2 .site_img, .st2 .tab_btn, .st2 .tab_btn li, .st2 .site_tabmenu").addClass("show_line");
    
        tl.to(".st2 .site_name span", {
            duration: 0.5,
            delay: 1.3,
            y: 0,
            opacity: 1,
            ease: Back.easeOut.config(1.7)
        });
        
        tl.to(".st2 .site_contents .site_text p, .st2 .site_contents .site_img img, .st2 .site_contents .site_link, .st2 .site_tabmenu .tab_btn li, .st2 .site_tabmenu .tab_btn li.active span, .st2 .site_tabmenu .tab_btn li.active a, .st2 .site_tabmenu .tab_btn li a, .st2 .site_tabmenu .tab_btn li.active, .st2 .site_tabmenu .tab_content, .st2 .site_link_t", {
            duration: 0.5,
            opacity: 1
        });        
    }
    
    if (pageYOffset > $(".st3").offset().top - $(window).height() / 2) {
        $(".st3.site_table, .st3 .site_title ul, .st3 .site_text, .st3 .site_img, .st3 .tab_btn, .st3 .tab_btn li, .st3 .site_tabmenu").addClass("show_line");
        
        let tl = gsap.timeline();
        tl.to(".st3 .site_name span", {
            duration: 0.5,
            delay: 1.3,
            y: 0,
            opacity: 1,
            ease: Back.easeOut.config(1.7)
        });
        
        tl.to(".st3 .site_contents .site_text p, .st3 .site_contents .site_img img, .st3 .site_contents .site_link, .st3 .site_tabmenu .tab_btn li, .st3 .site_tabmenu .tab_btn li.active span, .st3 .site_tabmenu .tab_btn li.active a, .st3 .site_tabmenu .tab_btn li a, .st3 .site_tabmenu .tab_btn li.active, .st3 .site_tabmenu .tab_content, .st3 .site_link_t", {
            duration: 0.5,
            opacity: 1
        });        
    }
    
    if (pageYOffset > $("#make .subtitle.mobile").offset().top - $(window).height() / 2) {
        $(".mobile .subtitle_line").addClass("show_line");
        
        let tl = gsap.timeline();
        tl.to(".subtitle.mobile h2 span", {
            duration: 0.3,
            delay: 0.3,
            y: 0,
            opacity: 1,
            stagger: 0.1,
            ease: Back.easeOut.config(1.7)
        });
    }
    
    if (pageYOffset > $("#make .section_make_mobile").offset().top - $(window).height() / 2) {
        let tl = gsap.timeline();
        tl.to(".phone_img", {
            duration: 1,
            delay: 1.5,
            y: 0,
            opacity: 1,
            ease: Back.easeOut.config(1.7)
        });

        tl.to(".swiper-container", {
            duration: 0.5,
            delay: 0,
            opacity: 1,
            ease: Back.easeOut.config(1.7)
        });

        tl.to(".mobile_text", {
            duration: 1,
            delay: 0,
            y: 0,
            opacity: 1,
            ease: Back.easeOut.config(1.7)
        });
    }
    
    if (pageYOffset > $("#animation").offset().top - $(window).height() / 2) {
        let tl = gsap.timeline();
        tl.to("#animation .title_line", {
            duration: 1,
            width: "100%",
            ease: Back.easeOut.config(1.7)
        });
        tl.to("#animation .title h1 span", {
            duration: 0.3,
            y: 0,
            delay: -0.5,
            opacity: 1,
            stagger: 0.1,
            ease: Back.easeOut.config(1.7)
        });
        tl.to("#animation .list_1", {
            duration: 0.3,
            y: 0,
            opacity: 1,
            ease: Back.easeOut.config(1.7)
        });
        tl.to(".list_1 .ani_tape", {
            duration: 0.3,
            opacity: 1,
            ease: Back.easeOut.config(1.7)
        });
        tl.to(".list_1 .ani_box", {
            duration: 0.3,
            delay: 0.2,
            opacity: 1,
            ease: Back.easeOut.config(1.7)
        });
    };

    if (pageYOffset > $(".list_2").offset().top - $(window).height() / 2) {
        let tl = gsap.timeline();
        tl.to("#animation .list_2", {
            duration: 0.3,
            y: 0,
            opacity: 1,
            ease: Back.easeOut.config(1.7)
        });
        tl.to(".list_2 .ani_tape", {
            duration: 0.3,
            opacity: 1,
            ease: Back.easeOut.config(1.7)
        });
        tl.to(".list_2 .ani_box", {
            duration: 0.3,
            delay: 0.2,
            opacity: 1,
            ease: Back.easeOut.config(1.7)
        });
    };

    //#javascript 가로스크롤
    let jsTop = $("#javascript").offset().top

    let jsOffTop = pageYOffset - $("#javascript").offset().top
    
    if(pageYOffset > jsTop){
        $(".section_js").css("transform","translatex("+ -jsOffTop+"px)");
    }

    if (pageYOffset > $(".section_js").offset().left - $(window).width() / 2) {
        let tl = gsap.timeline();
        tl.to("#javascript .title_line", {
            duration: 3,
            width: "100%",
            opacity: 1,
            ease: Back.easeOut.config(1.7)
        });
        tl.to("#javascript .title h1 span", {
            duration: 0.5,
            delay: -2,
            y: 0,
            opacity: 1,
            stagger: 0.1,
            ease: Back.easeOut.config(1.7)
        });
        tl.to("#javascript .arrow .arrow_right", {
            duration: 0.5,
            delay: -1,
            opacity: 1,
            stagger: 0.5,
            ease: Back.easeOut.config(1.7)
        });
    };

    if (pageYOffset > $("#contact").offset().top - $(window).height() / 2) {
        let tl = gsap.timeline();
        tl.to("#contact .title_line", {
            duration: 1,
            width: "100%",
            ease: Back.easeOut.config(1.7)
        });
        tl.to("#contact .title h1 span", {
            duration: 0.3,
            delay: -0.5,
            y: 0,
            opacity: 1,
            stagger: 0.1,
            ease: Back.easeOut.config(1.7)
        });
    };

    if (pageYOffset > $(".contact_box").offset().top - $(window).height() / 2) {
        $(".contact_box").addClass("on");
    } else {
        $(".contact_box").removeClass("on");
    };

    if (pageYOffset > $(".contact_box_footer").offset().top - $(window).height() / 2) {
        $(".contact_box_footer").addClass("on");
    } else {
        $(".contact_box_footer").removeClass("on");
    };

    if (pageYOffset > $(".thank_box_wrap").offset().top - $(window).height() / 2) {
        $(".thank_box").addClass("on");
    } else {
        $(".thank_box").removeClass("on");
    };

    if (pageYOffset > $(".thank_box p").offset().top - $(window).height()) {
        $(".thank_box p").addClass("on");
    } else {
        $(".thank_box p").removeClass("on");
    }
});


//tabMenu
$(".tab_content .tab_code").hide();
$(".tab_content .tab_code.code_1").show();

 $(".site .site_table").each(function(index){
    $(this).find(".site_tabmenu").attr("data-num",index);
    $(this).find(".site_tabmenu").addClass("num"+index)
    
    $(".tab_btn > li").click(function(e){
        e.preventDefault();
        let target = $(this);
        let num = target.parent().parent().attr("data-num");
        let index = target.index();

        $(".site_tabmenu.num"+num+" .tab_btn > li").removeClass("active");  
        target.addClass("active");  
        
        $(".site_tabmenu.num"+num+" .tab_content > div").css("display","none");
        $(".site_tabmenu.num"+num+" .tab_content > div").eq(index).css("display","block"); 
        $(".tab_btn > li.active span").css("opacity", "1");
    });            
});


new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    autoplay: {
        delay: 500,
        },
    initialSlide: 2,
    speed: 1000,
    spaceBetween: 130,
    loop: true,
    centeredSlides: false,
    slidesOffsetBefore: 0,
    roundLengths: true,
    mousewheel: true,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

$(".php_open_btn").click(function(e){
    e.preventDefault();
    $(".sign").parent().toggleClass("php_open");
});



















