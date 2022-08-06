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
            if( workImg > 0 ) {
                $("#section2.work figure img").eq(1).css("bottom",workImg+"px");
                $("#section2.work .workImg1 img").css("top",-workImg/2+"px");
            }
            let work1 = gsap.timeline();
            work1.to("#section2.work .ani-text-wrap h2 span", {opacity:1, x:0, stagger:0.1})
            .to("#section2.work .ani-text-wrap>p", {opacity:1, x:0, duration:0.5})
        }

        if( scrollTop > document.querySelector("#section3.work").offsetTop - window.innerHeight/2 ){
            let workText1 = gsap.timeline();
            workText1.to("#section3.work li:nth-child(1) .ani-tit > span:nth-child(1)", {opacity:1, x:0, duration:0.5})
            .to("#section3.work li:nth-child(1) .ani-tit h3 span", {opacity:1, x:0, stagger:0.1})
            .set("#section3.work li:nth-child(1)", {className:"+=show"},"-=2")
            let workText2 = gsap.timeline();
            workText2.to("#section3.work li:nth-child(2) .ani-tit > span:nth-child(1)", {opacity:1, x:0, duration:0.5},"+=0.5")
            .to("#section3.work li:nth-child(2) .ani-tit h3 span", {opacity:1, x:0, stagger:0.1})
            .set("#section3.work li:nth-child(2)", {className:"+=show"},"-=2")
            let workText3 = gsap.timeline();
            workText3.to("#section3.work li:nth-child(3) .ani-tit > span:nth-child(1)", {opacity:1, x:0, duration:0.5},"+=1")
            .to("#section3.work li:nth-child(3) .ani-tit h3 span", {opacity:1, x:0, stagger:0.1})
            .set("#section3.work li:nth-child(3)", {className:"+=show"},"-=2")
            let workText4 = gsap.timeline();
            workText4.to("#section3.work li:nth-child(4) .ani-tit > span:nth-child(1)", {opacity:1, x:0, duration:0.5},"+=1.5")
            .to("#section3.work li:nth-child(4) .ani-tit h3 span", {opacity:1, x:0, stagger:0.1})
            .set("#section3.work li:nth-child(4)", {className:"+=show"},"-=2")
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

    //애니메이션 컨텐츠 클릭
    // $('.ani-tit').on("click", function () {
    //     $(this).next(".ani-cont").slideToggle(500);
    //     $(this).children("span").eq(1).toggleClass("click");
    //     $('.ani-cont').not($(this).next()).slideUp(500);
    //     $(".click").not($(this).children("span")).removeClass("click");
    // });
    // const aniCont = document.querySelector(".ani-cont");
    // document.querySelector(".ani-tit").onclick = () => {
    //     this.next(aniCont).
    // }

    //애니메이션 컨텐츠 클릭
    // variables
    let accordionBtn = document.querySelectorAll('.ani-tit');
    let allTexts = document.querySelectorAll('.ani-cont');
    let accIcon = document.querySelectorAll('.ani-btn');

    // event listener
    accordionBtn.forEach(function (el) {
        el.addEventListener('click', toggleAccordion)
    });

    // function
    function toggleAccordion(el) {
    let targetText = el.currentTarget.nextElementSibling.classList;
    let targetAccIcon = el.currentTarget.children[2];
    let target = el.currentTarget;
    
        if (targetText.contains('show')) {
            targetText.remove('show');
            targetAccIcon.classList.remove('anime');
            target.classList.remove('accordionTitleActive');
        } 
        else {
            accordionBtn.forEach(function (el) {
                el.classList.remove('accordionTitleActive');
                
                allTexts.forEach(function (el) {
                    el.classList.remove('show');
                })
                
                accIcon.forEach(function (el) {
                el.classList.remove('anime');
                }) 
                
            })
            
                targetText.add('show');
                target.classList.add('accordionTitleActive');
                targetAccIcon.classList.add('anime');
        }  
    }

}())