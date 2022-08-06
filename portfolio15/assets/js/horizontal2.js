(function(){

    //Latest &nbsp; work 글자 쪼갬
       const spanElement = document.querySelector('#port2 .publi-title span');
       const spans = spanElement.innerText.split('').map((elem) => `<span>${elem}</span>`).join('');

       spanElement.innerHTML = spans;
   //스킬 흐르는 글씨 생성
       for(let i = 1; i <= 6; i++) {
           const skillBanner = document.querySelector('#skill-banner .skill-banner-cont .skill-banner-text-wrap');
           const skillDiv = document.createElement('div');
         
           skillDiv.innerHTML = `<span aria-hidden="true">HTML</span><span aria-hidden="true">CSS</span><span aria-hidden="true">JAVASCRIPT</span><span aria-hidden="true">JQUERY</span><span aria-hidden="true">PHOTOSHOP</span><span aria-hidden="true">ILLUSTRATOR</span>`;
   
           skillBanner.append(skillDiv);
       }
   // 글자 쪼갬
       const port4Ani = document.querySelector('#port4 .ani-title h2 span');
       const port4AniSpan = port4Ani.innerText.split('').map((elem) => `<span>${elem}</span>`).join('');

       port4Ani.innerHTML = port4AniSpan;

       const port4Scr = document.querySelector('#port4 .script-title h2 span');
       const port4ScrSpan = port4Scr.innerText.split('').map((elem) => `<span>${elem}</span>`).join('');

       port4Scr.innerHTML = port4ScrSpan;
   
   //스크롤 등장 gsap
  
        window.addEventListener("scroll", () => {
            let pageYOffset = (window.pageYOffset || document.documentElement.scrollTop);
            console.log(pageYOffset);
            document.querySelector('.scroll').textContent = parseInt(pageYOffset);
            
            document.querySelector("#contents-wrap").style.left = -pageYOffset + "px";
            const about = document.querySelector("#about");

            if( about.offsetLeft < pageYOffset + $(window).width()/2) {
                gsap.to(".about-cont4 .profile-img", {duration: 2, scale: 1, rotation:0, opacity:1 ,ease: "expo.out"})
                let about3 = gsap.timeline();
                about3.to(".about-cont4 .profile-text-wrap h3 span", {opacity:1, y:0, stagger:0.1, ease: "expo.out"})
                .set(".about-cont4 .profile-text-wrap h3", {className:"+=show"})
                .to(".about-cont4 .profile-text-wrap>span", {opacity:1, x:0, duration: 0.5},"-=1")
                .to(".about-cont4 .profile-text>ul>li", {x:0, opacity:1, duration: 1})
                .to(".about-cont4 .profile-text li em", {x:0, opacity:1, duration:1},"-=1")
                .to("#about .about-cont4 .profile-btn", {scale:1, opacity:1, duration:1, ease: "back.out(1.7)"})
            }

            let about2 = ["about-cont2", "about-cont3"]
            for (i = 0; i < about2.length; i++ ) {
                if( document.querySelector("."+about2[i]+"").offsetLeft < pageYOffset + $(window).width()/2) {
                    gsap.to("."+about2[i]+" .advan-img1", {duration: 2, scale: 1, rotation:0, opacity:1 ,ease: "expo.out"})
                    let about1 = gsap.timeline();
                    about1.to("."+about2[i]+" .advan-text-wrap .advan-t"+(i+1)+"", {opacity:1, y:0, stagger:0.1, ease: "expo.out"})
                    .set("."+about2[i]+" .advan-text-wrap h3", {className:"+=show"})
                    .to("."+about2[i]+" .advan-text-wrap>span", {opacity:1, x:0, duration: 0.5},"-=1")
                    .to("."+about2[i]+" .advan-text-wrap div", {opacity:1, x:0, duration:1})
                    .to("."+about2[i]+" .advan-text-wrap div.advan-btn", {y:0, duration:1, ease: "back.out(1.1)"},"-=1");
                }
            }

            if( document.querySelector("#skills").offsetLeft - $(window).width()/2 < pageYOffset ){
                gsap.to("#skills .skills-cont h2", {duration: 1, opacity: 1, scale:1, ease: "back.out(1.7)"})
            }

            let rotate = (pageYOffset - $("#skills .skills-cont").offset().left - $(window).width()*2 ) * 0.2;
            //console.log(rotate, "회전")
            $("#skills .skills-cont .skills-img img").css("transform","rotate("+rotate+"deg)");

            if( rotate > -60 && rotate < 50 || rotate > 695 && rotate < 770  ) {
                $("#skills .skills-cont ul li").eq(0).find(".skill-box").addClass("show");
                $("#skills .skills-cont ul li").eq(2).find(".skill-box").removeClass("show");
                $("#skills .skills-cont ul li").eq(4).find(".skill-box").removeClass("show");
            }else if( rotate > 50 && rotate < 90 || rotate > 416 && rotate < 455 ) {
                $("#skills .skills-cont ul li").eq(2).find(".skill-box").addClass("show");
                $("#skills .skills-cont ul li").eq(0).find(".skill-box").removeClass("show");
                $("#skills .skills-cont ul li").eq(4).find(".skill-box").removeClass("show");
            }else if(rotate > 90 && rotate < 132 || rotate > 456 && rotate < 483 ) {
                $("#skills .skills-cont ul li").eq(4).find(".skill-box").addClass("show");
                $("#skills .skills-cont ul li").eq(2).find(".skill-box").removeClass("show");
                $("#skills .skills-cont ul li").eq(5).find(".skill-box").removeClass("show");
            }else if(rotate > 132 && rotate < 230 || rotate > 484 && rotate < 600 ) {
                $("#skills .skills-cont ul li").eq(5).find(".skill-box").addClass("show");
                $("#skills .skills-cont ul li").eq(4).find(".skill-box").removeClass("show");
                $("#skills .skills-cont ul li").eq(3).find(".skill-box").removeClass("show");
            } else if(rotate > 230 && rotate < 272) {
                $("#skills .skills-cont ul li").eq(3).find(".skill-box").addClass("show");
                $("#skills .skills-cont ul li").eq(5).find(".skill-box").removeClass("show");
                $("#skills .skills-cont ul li").eq(1).find(".skill-box").removeClass("show");
            } else if(rotate > 272 && rotate < 311) {
                $("#skills .skills-cont ul li").eq(1).find(".skill-box").addClass("show");
                $("#skills .skills-cont ul li").eq(3).find(".skill-box").removeClass("show");
                $("#skills .skills-cont ul li").eq(0).find(".skill-box").removeClass("show");
            } else if(rotate > 312 && rotate < 415) {
                $("#skills .skills-cont ul li").eq(1).find(".skill-box").removeClass("show");
                $("#skills .skills-cont ul li").eq(2).find(".skill-box").removeClass("show");
                $("#skills .skills-cont ul li").eq(0).find(".skill-box").addClass("show");
            } else {
                $("#skills .skills-cont ul li").eq(5).find(".skill-box").removeClass("show");
                $("#skills .skills-cont ul li").eq(0).find(".skill-box").removeClass("show");
            }

            //포트폴리오 글씨 커지게
            //console.log($('#port2').offset().left, "포트폴리오")
            if( $('#port1').offset().left < 0 ){
                $('#port1').addClass('fixed');
            } else if ( $('#port1').offset().left > 0 ) {
                $('#port1').removeClass('fixed');
            } 
            if ( $('#port2').offset().left < 0 ) {
                $('#port1').removeClass('fixed');
            } 

            //다시 수정요망
            let scale = ($("#port1").offset().left) * -0.04
            console.log(scale, "스케일");
            if(scale >= 1 && scale <= 52 ) {
                $("#port1 .port-title .port-title-wrap h2").css("transform","scale("+scale+") translateX(-4%)");
            } else if(scale > 52 && scale < 162 ) {
                $("#port1 .port-title .port-title-wrap h2").css("transform","scale(52) translateX(-4%)");
            } else if(scale > 162) {
                $("#port1 .port-title .port-title-wrap h2").css("transform","scale(20) translateX(-4%)");
            } else {
                $("#port1 .port-title .port-title-wrap h2").css("transform","scale(1)");
            }

            //포트폴리오
            if( $('#port2 .publi-title').offset().left < pageYOffset ){
                let publi1 = gsap.timeline();
                publi1.to("#port2 .publi-title>span span", {opacity:1, rotation:0, y:0, stagger:0.1, ease: "power4.out"})
                .set("#port2 .publi-title>span", {className:"+=show"})
            }
     
            for(let i = 0; i < $('.publi-box').length; i++) {
                if( $('.publi-box').eq(i).offset().left - $(window).width() < 0 ) {
                    let portNum = i+2;
                    let port2Box1 = gsap.timeline();
                    port2Box1.to("#port2 .publi-box:nth-child("+portNum+") .publi-text-wrap h3 span", {opacity:1, y:0, stagger:0.1, ease: "back.inOut(1)"})
                             .to("#port2 .publi-box:nth-child("+portNum+") .publi-text-wrap>span", {opacity:1, x:0, duration:1, ease: "expo.out"})
                             .to("#port2 .publi-box:nth-child("+portNum+") .publi-text-wrap .publi-text", {opacity:1, x:0, duration:1, ease: "expo.out"},"-=1")
                             .to("#port2 .publi-wrap .publi-box:nth-child("+portNum+") .publi-btn", {y:0, opacity:1, duration:0.5, ease: "back.out(1.1)"})
               }
            }
     
     
           function viewed(number){
                if( $('.publi-box').eq(number).offset().left - $(window).width()/2 < 0 ){
                    $('.publi-box').eq(number).children('.publi-img').addClass('viewed');
                } 
                console.log( $('.publi-box').eq(number).offset().left,"포폴순서"+number+"")
           }
           viewed(0);
           viewed(1);
           viewed(2);
           viewed(3);
           viewed(4);

        
        });
}())