(function(){

    setTimeout(() => {
        let load = gsap.timeline();
        load.set("#loading", {className:"+=start"})
        .to("#loading", {duration:2.5, display:"none"})
        .to("#contact .contact .contact-left img", {scale:1, duration:1})
        .to("#contact .contact .contact-left", {width:"50%", duration:0.5})
        .set("body", {className:"-=scroll"}) // removeclass 가 안되서 클래스 대체로 추가하기...
        .fromTo("#header .logo a", {scale: 0}, {opacity:1, scale: 1, duration:1, ease: "back.out(2)"})
        .to("#header .menu-line", {x:0, duration:1},"-=1.9")
        .to(".contact-right h2 span", {x:0, opacity:1, stagger:0.1},"-=1.3")
        .set(".contact-right h2", {className:"+=line"})
    },2000)
            
    window.addEventListener("scroll", () => {
        let scrollTop = window.pageYOffset;

        if( scrollTop > document.querySelector("footer").offsetTop - window.innerHeight ){
            //$(".contact-left").css({"position":"relative","z-index":0})
            document.querySelector(".contact-left").style.position = "relative";
            document.querySelector(".contact-left").style.zIndex = 0;
        } else {
            //$(".contact-left").css({"position":"fixed"})
            document.querySelector(".contact-left").style.position = "fixed";
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