(function(){

    setTimeout(() => {
        let load = gsap.timeline();
        load.set("#loading", {className:"+=start"})
        .to("#loading", {duration:2.5, display:"none"})
        .fromTo(".sec1>span", {opacity:0, x:-100}, {opacity:1, x:0, duration:0.5 })
        .set(".tit", {className:"+=show"})
        .set(".text-box p:nth-child(3)", {className:"+=line"})
        .fromTo("#header .logo a", {scale: 0}, {opacity:1, scale: 1, duration:1, ease: "back.out(2)"})
        .to("#header .menu-line", {x:0, duration:1},"-=1.9");
        //document.querySelector(".loading").classList.add("start");
    },2000)

    document.querySelectorAll(".adv-cont h3 div").forEach(elem => {
        let splitText = elem.innerText;
        let splitWrap = splitText.split("").join("</span><span aria-hidden:'true'>");
            splitWrap = "<span aria-hidden:'true'>" + splitWrap + "</span>";
        
        elem.innerHTML = splitWrap;
        elem.setAttribute("aria-label", splitText);
    });

   
        let footTit = document.querySelector(".foot-tit").innerText;
        let footTitWrap = footTit.split("").join("</span><span aria-hidden:'true'>");
            footTitWrap = "<span aria-hidden:'true'>" + footTitWrap + "</span>";

            document.querySelector(".foot-tit").innerHTML = footTitWrap;
            document.querySelector(".foot-tit").setAttribute("aria-label", footTit);
      
    //스크롤 
    window.addEventListener("scroll", () => {
        let scrollTop = window.pageYOffset;

        //3번째 섹션에 왔을 때 스크롤탑을 0으로 초기화
        let offset2 = scrollTop -  document.querySelector("#section2").offsetTop + window.innerHeight/2;
        
        if( scrollTop > document.querySelector("#section2").offsetTop - window.innerHeight/2 ){
            gsap.to("#section2.about .sec2 figure img", {scale:1, duration:0.5})
            $("#section2.about .sec2 p").eq(0).css("transform", "translateX("+offset2+"px)")
            $("#section2.about .sec2 p").eq(1).css("transform", "translateX("+-offset2+"px)")
        }

        if( scrollTop > document.querySelector("#section3").offsetTop - window.innerHeight/3 ){
            let advText = gsap.timeline();
            advText.to(".sec3-wrap .text-box p:nth-child(1)", {y:0, opacity:1 ,duration:0.5} )
            .to(".sec3-wrap .text-box p:nth-child(2)", {y:0, opacity:1 ,duration:0.5},"-=0.25" )
            .to(".sec3-wrap > div > div > p span", {y:0, opacity:1 , stagger:0.1} )
        }

        if( scrollTop > document.querySelector(".sec3-wrap > div:last-child").offsetLeft + window.innerWidth*0.25 ) {
            let advImg = gsap.timeline();
            advImg.to(".adv1 .adv-img", {duration:1,  rotation:0, opacity:1 ,ease: "expo.out"})
            .to(".adv1 h3 div span", {y:0, opacity:1 , stagger:0.1},"-=1" )
            .set(".adv1 h3 div", {className:"+=show"})
            .to(".adv1 figcaption > span", {y:0, opacity:1, duration:0.5 },"-=1" )
            .to(".adv2 .adv-img", {duration:1,  rotation:0, opacity:1 ,ease: "expo.out"},"-=0.5")
            .to(".adv2 h3 div span", {y:0, opacity:1 , stagger:0.1},"-=1" )
            .set(".adv2 h3 div", {className:"+=show"})
            .to(".adv2 figcaption > span", {y:0, opacity:1, duration:0.5 },"-=1" )
            .to(".adv3 .adv-img", {duration:1,  rotation:0, opacity:1 ,ease: "expo.out"},"-=0.5")
            .to(".adv3 h3 div span", {y:0, opacity:1 , stagger:0.1},"-=1" )
            .set(".adv3 h3 div", {className:"+=show"})
            .to(".adv3 figcaption > span", {y:0, opacity:1, duration:0.5 },"-=1" )
        }

        
        //3번째 섹션에 왔을 때 스크롤탑을 0으로 초기화
        let offset = scrollTop -  document.querySelector("#section3").offsetTop;

        if( scrollTop > document.querySelector("#section3").offsetTop && offset < window.innerWidth*0.51 ){
            //$(".sec3-wrap>div").eq(1).css("left", -offset );
            document.querySelector(".sec3-wrap>div:nth-child(2)").style.left = -offset+"px";
        } else if( scrollTop < document.querySelector("#section3").offsetTop ) {
            //$(".sec3-wrap>div").eq(1).css("left", 0 );
            document.querySelector(".sec3-wrap>div:nth-child(2)").style.left= 0;
        }
        
        if( scrollTop > document.querySelector("footer").offsetTop - window.innerHeight*1.05 ){
            //$(".sec3-wrap>div").eq(1).css("left", -50+"vw" );
            document.querySelector(".sec3-wrap>div:nth-child(2)").style.left = -50+"vw";
        }

        if( scrollTop > document.querySelector("footer").offsetTop - window.innerHeight/2 ){
            gsap.to("footer .foot h2 > span span", {opacity:1, y:0, stagger:0.1});
        }

        
    });

    //이미지 변경

    const aboutImg1 = document.querySelector('.adv1 .adv-img img');
    const aboutImg2 = document.querySelector('.adv2 .adv-img img');


    function advanImg(aboutImg, num) {
        let image = 1;
    setInterval(function(){
        image++;
        if(image>4) {image=1;}
        aboutImg.src = `http://www.yjshop.net/port/assets/img/about-img${num}-${image}.png`
    },500)

    }

    advanImg(aboutImg1, 1);
    advanImg(aboutImg2, 2);

    const profileImg = document.querySelector('.adv3 .adv-img img');
    
    let profileImage = 1;
    setInterval(function(){
        profileImage++;
        if(profileImage>4) {profileImage=1;}
        profileImg.src = `http://www.yjshop.net/port/assets/img/profile-img${profileImage}.png`
    },500);

    //메뉴클릭 이벤트
    document.querySelector('#header .menu .hamburger').addEventListener('click', function(){
        document.querySelector('#header .menu').classList.add('close');
        document.querySelector('#header .menu .nav').classList.add('active');
        document.querySelector('#header .menu .nav').classList.remove('not_active');
    });

    document.querySelector('#header .menu .hamburger-close').addEventListener('click', function(){
        setTimeout(function(){
            document.querySelector('#header .menu').classList.remove('close');
        },3600)
        document.querySelector('#header .menu .nav').classList.remove('active');
        document.querySelector('#header .menu .nav').classList.add('not_active');
    });

      // 마우스 움직임 효과
      let x = 0;
      let y = 0;

    document.querySelector(".foot h2 span").addEventListener('mousemove', (e) => {
        //console.log(document.querySelector(".foot h2 span").offsetHeight*5)
        x =  e.clientX - (window.innerWidth/10);
        y =  e.clientY - (window.innerHeight/2);

        document.querySelector(".cursor").style.display = "block"
        document.querySelector(".cursor").style.transform = "translate("+x+"px, "+y+"px)";
    });
    document.querySelector(".foot h2 span").addEventListener("mouseleave",() => {
        document.querySelector(".cursor").style.display = "none"
    })

}())