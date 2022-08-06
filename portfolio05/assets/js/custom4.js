$(function(){
   

    //스크롤 구하기
    $(window).scroll(function(){    
        let wScroll = $(this).scrollTop();
        $(".ScrollTop span").text(wScroll);

        if(wScroll >= 2000){
            $(".ham").addClass("color");
            $("#nav").addClass("color");
            $(".main .text .text_change .tx.t1").css("display","none") ;
        }else{
            $(".ham").removeClass("color");
            $("#nav").removeClass("color");
            $(".main .text .text_change .tx.t1").css("display","block") ;
        }   
        if(wScroll >= $("#section3").offset().top){
            $(".ham").removeClass("color");
            $("#nav").removeClass("color");
        }
        if(wScroll >= $("#section5").offset().top){
            $(".ham").addClass("color");
            $("#nav").addClass("color");
        }
    });    

    //메인 텍스트 변경
    let set = setInterval(function(){
        if($("#tChange").text() == "coding"){
            $("#tChange").text("magic");
        }else if($("#tChange").text() == "magic"){
            $("#tChange").text("game");
        }else if($("#tChange").text() == "game"){
            $("#tChange").text("me");
        }else if($("#tChange").text() == "me"){
            $("#tChange").text("u");
        }else {
            $("#tChange").text("coding");
        }
    },2500)       
    

    //햄버거메뉴
    $(".ham").click(function(){
        $(this).stop().toggleClass("on");
        $("#nav").delay(650).slideToggle("on");
    });
    document.querySelectorAll("a[href^='#']").forEach(elem => {
        elem.addEventListener("click", e =>{
            e.preventDefault();
            const nav = document.querySelector(elem.getAttribute('href'));
            nav.scrollIntoView({behavior:'smooth'})
        });
    });

    //메인 마우스값 계산
    $(".main").mousemove(function(e){
        let mouseX= Math.max(-400, Math.min(400, $(window).width()/2 - e.pageX));
        let mouseY= Math.max(-400, Math.min(400, $(window).width()/2 - e.pageY));
        let fmouseX = 0;
        let fmouseY = 0;
        let friction =1/15;
        fmouseX += (mouseX - fmouseX) * friction ;
        fmouseY += (mouseY - fmouseY) * friction ;

        $(".main_back .mb").css({"transform":" rotateY("+ -fmouseX +"deg)  rotateX("+ fmouseY +"deg) "  });
    });
    
    //물음표
    var tl = new TimelineLite;
    tl.fromTo (".question",.4,{"opacity": "0"},{"opacity": "1", yoyo:true, repeat:-1, ease: "bounce.out"});

    //애니메이션 마우스오버
    $(".ani_svg > image").mouseover(function(){
        let target = $(this);
        let index = target.index();
        let at = $(".ani_text > div").eq(index-5);
        $(".ani_text > div").removeClass("show");
        at.addClass("show");
    });       

    // //contact
    let contact01 = $(".contact_txt").find("strong").eq(0).text().split("").join("</span><span class='color'>");
        contact01 = "<span class='color'>" + contact01 +"</span>";
    let contact02 = $(".contact_txt").find("strong").eq(1).text().split("").join("</span><span class='color'>");
        contact02 = "<span class='color'>" + contact02 +"</span>";
    let contact03 = $(".contact_txt").find("strong").eq(2).text().split("").join("</span><span class='color'>");
        contact03 = "<span class='color'>" + contact03 +"</span>";
    $(".contact_txt").html(contact01 +"<br>" +contact02 +"<br>" + contact03 );

    $(".contact_txt").find("span").mouseover(function(){
        $(this).removeClass("color");
    });
    $(".contact_txt").find("span").mouseout(function(){
        $(this).addClass("color");
    });
 
});