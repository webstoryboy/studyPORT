(function(){

    setTimeout(() => {
        let load = gsap.timeline();
        load.set("#loading", {className:"+=start"})
        .to("#loading", {duration:2.5, display:"none"})
        .fromTo(".main-img", {scale: 0}, {opacity: 1, scale: 1, duration:1, ease: "elastic.out(1.35, 0.75)"})
        .fromTo(".main-title span:nth-child(1)", {x: -2000}, {x:0, duration:3, ease: "slow(0.1, 0.1, false)"})
        .fromTo(".main-title span:nth-child(2)", {x: 2000}, {x:0, duration:3, ease: "slow(0.1, 0.1, false)"},"-=3")
        .fromTo(".main-sub-title span",{y:10}, {opacity:1, y:0, stagger:0.1})
        .fromTo(".main-sub-title2 span",{y:10}, {opacity:1, y:0, stagger:0.1},"-=2.1")
        .set(".main-text-wrap p", {className:"+=show"})
        .fromTo("#header .logo a", {scale: 0}, {opacity:1, scale: 1, duration:1, ease: "back.out(2)"})
        .to("#header .menu-line", {x:0, duration:1},"-=1.9")
    },2000)
            

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


}())