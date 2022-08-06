(function(){

    setTimeout(() => {
        let load = gsap.timeline();
        load.set("#loading", {className:"+=start"})
        .to("#loading", {duration:2.5, display:"none"})
        .fromTo(".sec1>span", {opacity:0, x:-100}, {opacity:1, x:0, duration:0.5 })
        .set(".tit", {className:"+=show"})
        .set(".text-box p:nth-child(3) .tit span", {className:"+=line"})
        .fromTo("#header .logo a", {scale: 0}, {opacity:1, scale: 1, duration:1, ease: "back.out(2)"})
        .to("#header .menu-line", {x:0, duration:1},"-=1.9");
    },2000)
            
    window.addEventListener("scroll", () => {
        let scrollTop = window.pageYOffset;

        let workImg = (scrollTop - document.querySelector("#section2.work").offsetTop + window.innerHeight/2)*0.1;
       
        if( scrollTop > document.querySelector("#section2.work").offsetTop - window.innerHeight/2 ){
            gsap.to("#section2.work figure img", {opacity:1, y:0, stagger:0.5})
            if(workImg > 0) {
                //$("#section2.work figure img").eq(1).css("bottom",workImg+"px");
                document.querySelector("#section2.work figure img:nth-child(2)").style.bottom = `${workImg}px`;
                //$("#section2.work .workImg1 img").css("top",-workImg/2+"px");
                document.querySelector("#section2.work .workImg1 img").style.top = `${-workImg/2}px`
            }
            let work2 = gsap.timeline();
            work2.to("#section2.work .script-text-wrap h2 span", {opacity:1, x:0, stagger:0.1})
            .to("#section2.work .script-text-wrap>p", {opacity:1, x:0, duration:0.5})
        }

        for(let a=0; a < document.querySelectorAll("#section3.work li").length; a++ ){
            let workNum = a+1;
            if(scrollTop > document.querySelector("#section3.work li:nth-child("+workNum+")").offsetTop - window.innerHeight/2 ){
                let workText = gsap.timeline();
                workText.to("#section3.work li:nth-child("+workNum+") .script-tit > span:nth-child(1)", {opacity:1, x:0, duration:0.5})
                .to("#section3.work li:nth-child("+workNum+") .script-tit h3", {opacity:1, x:0, stagger:0.1})
                .set("#section3.work li:nth-child("+workNum+") .script-img > div", {className:"+=show"},"-=0.5")
                .to("#section3.work li:nth-child("+workNum+") .script-text div:nth-child(1)", {x:0, opacity:1, duration:0.6})
                .to("#section3.work li:nth-child("+workNum+") .script-text div:nth-child(2)", {x:0, opacity:1, duration:0.6},"-=0.6")
                .set("#section3.work li:nth-child("+workNum+")", {className:"+=show"},"-=0.5")
            }
        }

        if( scrollTop > document.querySelector("footer").offsetTop - window.innerHeight/2 ){
            gsap.to("footer .foot h2 > span span", {opacity:1, y:0, stagger:0.1});
        }

    });

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