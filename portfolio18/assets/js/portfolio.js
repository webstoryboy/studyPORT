(function(){

    setTimeout(() => {
        let load = gsap.timeline();
        load.set("#loading", {className:"+=start"})
        .to("#loading", {duration:2.5, display:"none"})
        .fromTo(".sec1>span", {opacity:0, x:-100}, {opacity:1, x:0, duration:0.5 })
        .set(".tit", {className:"+=show"})
        .set(".text-box p:nth-child(2)", {className:"+=line"})
        .fromTo("#header .logo a", {scale: 0}, {opacity:1, scale: 1, duration:1, ease: "back.out(2)"})
        .to("#header .menu-line", {x:0, duration:1},"-=1.9");
    },2000)
            
    window.addEventListener("scroll", () => {
        let scrollTop = window.pageYOffset;

        if( scrollTop > document.querySelector(".port1").offsetTop - window.innerHeight/2 ){
            let port1 = gsap.timeline();
            port1.to(".port1 .port-text-wrap span", {y:0, opacity:1, stagger:0.3})
            .to(".port1 .port-text-wrap h2", {y:0, opacity:1, duration:0.3})
            $(".port1 .port-code-wrap").css({"opacity":1,"visibility":"inherit", "transform":"translate(0px, 0px)"})
            $(".port1 .port-img-wrap").css({"opacity":1,"visibility":"inherit", "transform":"translate(0px, 0px)"})
        }
        if( scrollTop > document.querySelector(".port2").offsetTop - window.innerHeight/2 ){
            let port2 = gsap.timeline();
            port2.to(".port2 .port-text-wrap span", {y:0, opacity:1, stagger:0.3})
            .to(".port2 .port-text-wrap h2", {y:0, opacity:1, duration:0.3})
            $(".port2 .port-code-wrap").css({"opacity":1,"visibility":"inherit", "transform":"translate(0px, 0px)"})
            $(".port2 .port-img-wrap").css({"opacity":1,"visibility":"inherit", "transform":"translate(0px, 0px)"})
        }
        if( scrollTop > document.querySelector(".port3").offsetTop - window.innerHeight/2 ){
            let port3 = gsap.timeline();
            port3.to(".port3 .port-text-wrap span", {y:0, opacity:1, stagger:0.3})
            .to(".port3 .port-text-wrap h2", {y:0, opacity:1, duration:0.3})
            $(".port3 .port-code-wrap").css({"opacity":1,"visibility":"inherit", "transform":"translate(0px, 0px)"})
            $(".port3 .port-img-wrap").css({"opacity":1,"visibility":"inherit", "transform":"translate(0px, 0px)"})
        }
        if( scrollTop > document.querySelector(".port4").offsetTop- window.innerHeight/2 ){
            let port4 = gsap.timeline();
            port4.to(".port4 .port-text-wrap span", {y:0, opacity:1, stagger:0.3})
            .to(".port4 .port-text-wrap h2", {y:0, opacity:1, duration:0.3})
            $(".port4 .port-code-wrap").css({"opacity":1,"visibility":"inherit", "transform":"translate(0px, 0px)"})
            $(".port4 .port-img-wrap").css({"opacity":1,"visibility":"inherit", "transform":"translate(0px, 0px)"})
        }
        if( scrollTop > document.querySelector(".port5").offsetTop - window.innerHeight/2 ){
            let port5 = gsap.timeline();
            port5.to(".port5 .port-text-wrap span", {y:0, opacity:1, stagger:0.3})
            .to(".port5 .port-text-wrap h2", {y:0, opacity:1, duration:0.3})
            $(".port5 .port-code-wrap").css({"opacity":1,"visibility":"inherit", "transform":"translate(0px, 0px)"})
            $(".port5 .port-img-wrap").css({"opacity":1,"visibility":"inherit", "transform":"translate(0px, 0px)"})
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
    // for(let num=0; num < $(".sec2 div > ul li").length; num++){
    //     for(let i = 0; i< $(".port"+num+" .port-code-wrap li").length; i++ ){
    //         $('.port'+num+' .port-code-wrap li').eq(i).children("span").on("click", function () {
    //             $(".port"+num+" .port-img-wrap figure").removeClass("show");
    //             $(".port"+num+" .code-tab li").eq(i).addClass("show").siblings().removeClass("show");
    //         });
    //     }

    //     $('.port'+num+' .port-code-wrap > span').on("click", function () {
    //         $(".port"+num+" .port-img-wrap figure").addClass("show");
    //         $(".port"+num+" .code-tab li").removeClass("show");
    //     });
    // }

    const codeContents = document.querySelectorAll(".code-tab");
    const tabMenu = document.querySelectorAll(".port-code-wrap");
    const tabImg = document.querySelectorAll(".port-code-link");
     // website code-view tab menu
     codeContents.forEach(el => {
        //el.children[0].style.display = "block";
    })
    tabMenu.forEach((el, index)=>{
        el.children[1].addEventListener('click',(e)=>{
            //e.preventDefault();
            let btnTarget = e.target.parentNode;
            let idx = btnTarget.dataset.indexNumber;
            console.log(btnTarget)
            for(let i=0; i<el.children.length; i++){
                el.children[i].classList.remove("active");
                codeContents[index].children[i].classList.remove("show");
                codeContents[index].previousElementSibling.classList.remove("show");
            }
            btnTarget.classList.add("active");
            codeContents[index].children[idx-1].classList.add("show");
        })
        el.children[2].addEventListener('click',(e)=>{
            for(let i=0; i<el.children.length; i++){
                codeContents[index].children[i].classList.remove("show");
                codeContents[index].previousElementSibling.classList.add("show");
            }
        })
    })

    
   
    
}())