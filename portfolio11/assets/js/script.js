//  MAIN-PAGE
document.querySelectorAll(".split").forEach(elem => {
    let splitText = elem.innerText;
    let splitWrap = splitText.split("").join("</span><span aria-hidden:'true'>");
        splitWrap = "<span aria-hidden:'true'>" + splitWrap + "</span>";

        elem.innerHTML = splitWrap;
        elem.setAttribute("aria-label", splitText);
});
            
setInterval (function(){
    let tl = gsap.timeline();
    //SECTION01
    //header
    tl.to("#header", {x:0, y:0, duration:0.3, delay:2})
    //h1
    tl.to(".text-wrapper h1 span", {x:0, y:0, rotation:0, stagger:0.05, opacity:1, scale:1, delay:0.4, duration: 0.5})
    //year
    tl.to(".year h2 span, .year p span", {duration: 1, x:0, y:0, stagger:0.05, opacity:1, ease: "back.out(1.7)"},'-=0.1')
    //greeting01
    tl.to(".greeting01.g1 span, .greeting01.g2 span, .greeting01.g3 span", {duration:0.5, y:0, rotation:0, stagger:0.05, opacity:1, ease:"back.out(2)"},'-=2')
    //greeting02
    tl.to(".greeting02 .g1 span, .greeting02 .g2 span, .greeting02 .g3 span, .greeting02 .g4 span", {duration:0.2, x:0, y:0, rotation:0, stagger:0.05, opacity:1, ease:"elastic.Out(1, 0.4)"},'+=0.2')
    //name
    tl.to(".sec01 .name h3 span", {duration:1, x:0, y:0, stagger:0.05, opacity:1, ease:"power2"},'+=2')    
},500)
  
//가로 스크롤
window.addEventListener("scroll", ()=> {
    let scrollYOffset = (window.pageYOffset || document.documentElement.scrollTop)
    //SECTION02 이질감 효과          
    document.getElementById("contents").style.left = -scrollYOffset + "px";
    
    let indexOff1 = (scrollYOffset - document.querySelector(".index-list").offsetLeft) * 0.1;
    let indexOff2 = (scrollYOffset - document.querySelector(".index-list").offsetLeft) * 0.2;
    let indexOff3 = (scrollYOffset - document.querySelector(".index-list").offsetLeft) * 0.3;
    let indexOff4 = (scrollYOffset - document.querySelector(".index-list").offsetLeft) * 0.4;
    
    document.querySelector(".sec02 .list01 h3").style.transform = "translateX("+indexOff1+"px)";
    document.querySelector(".sec02 .list02 h3").style.transform = "translateX("+indexOff2+"px)";
    document.querySelector(".sec02 .list03 h3").style.transform = "translateX("+indexOff3+"px)";
    document.querySelector(".sec02 .list04 h3").style.transform = "translateX("+indexOff2+"px)";
    document.querySelector(".sec02 .list05 h3").style.transform = "translateX("+indexOff1+"px)";
    document.querySelector(".sec02 .list06 h3").style.transform = "translateX("+indexOff3+"px)";
 
    //SECTION011- PART1 이질감 효과          
    let part1Off1 = (scrollYOffset - document.querySelector(".part01 .container").offsetLeft) * 0.1;
    let part1Off2 = (scrollYOffset - document.querySelector(".part01 .container").offsetLeft) * -0.2;

    document.querySelector(".part01 .container-back h4.s1").style.transform = "translateX("+part1Off1+"px)";
    document.querySelector(".part01 .container-back h4.s2").style.transform = "translateX("+part1Off2+"px)";
    document.querySelector(".part01 .container-back h4.s3").style.transform = "translateX("+part1Off1+"px)";
    document.querySelector(".part01 .container-back h4.s4").style.transform = "translateX("+part1Off2+"px)";    
    document.querySelector(".part01 .container-back h4.s5").style.transform = "translateX("+part1Off1+"px)";       
    
    //SECTION011 - PART2 이질감 효과          
    let part2Off1 = (scrollYOffset - document.querySelector(".part02 .container").offsetLeft) * 0.1;
    let part2Off2 = (scrollYOffset - document.querySelector(".part02 .container").offsetLeft) * -0.2;

    document.querySelector(".part02 .container-back h4.s1").style.transform = "translateX("+part2Off1+"px)";
    document.querySelector(".part02 .container-back h4.s2").style.transform = "translateX("+part2Off2+"px)";
    document.querySelector(".part02 .container-back h4.s3").style.transform = "translateX("+part2Off1+"px)";
    document.querySelector(".part02 .container-back h4.s4").style.transform = "translateX("+part2Off2+"px)";    
    document.querySelector(".part02 .container-back h4.s5").style.transform = "translateX("+part2Off1+"px)";    
    
    //SECTION03 이질감 효과          
    let off1 = (scrollYOffset - document.querySelector(".sec03-list").offsetLeft) * 0.1;
    let off2 = (scrollYOffset - document.querySelector(".sec03-list").offsetLeft) * 0.2;
    let off3 = (scrollYOffset - document.querySelector(".sec03-list").offsetLeft) * 0.3;
    let off4 = (scrollYOffset - document.querySelector(".sec03-list").offsetLeft) * 0.4;
    
    document.querySelector(".sec03 .list04 p").style.transform = "translateX("+off1+"px)";
    document.querySelector(".sec03 .list01 p").style.transform = "translateX("+off2+"px)";
    document.querySelector(".sec03 .list05 p").style.transform = "translateX("+off3+"px)";
    document.querySelector(".sec03 .list07 p").style.transform = "translateX("+off1+"px)";
    
    //SECTION04 프로필 이질감 효과
    const sec = document.getElementsByTagName("section");
    
    let imgOff = (scrollYOffset - document.querySelector(".sec04").offsetLeft) * 0.1;
    document.querySelector(".sec04 .profile-img").style.transform = "translateX("+imgOff+"px)";
    
    // SECTION02 - 스크롤 페이드인 
    if( sec[1].offsetLeft < scrollYOffset + 900) {
        let tl = gsap.timeline(); 
        gsap.to(".sec02 .index-sub h2 span", {duration: 0.4, x: 0, rotation:360, stagger:0.2, opacity: 1})
        tl.to(".sec02 .list01 .li-sub.fade-right", {duration: 0.4, x: 0, opacity: 1})
        tl.to(".sec02 .list02 .li-sub.fade-right", {duration: 0.4, x: 0, opacity: 1},'-=0.1')
        tl.to(".sec02 .list03 .li-sub.fade-right", {duration: 0.4, x: 0, opacity: 1},'-=0.1')
        tl.to(".sec02 .list04 .li-sub.fade-right", {duration: 0.4, x: 0, opacity: 1},'-=0.1')
        tl.to(".sec02 .list05 .li-sub.fade-right", {duration: 0.4, x: 0, opacity: 1},'-=0.1')
        tl.to(".sec02 .list06 .li-sub.fade-right", {duration: 0.4, x: 0, opacity: 1},'-=0.1')
    } 
    // SECTION02 - 숫자 페이드인
    if( sec[1].offsetLeft < scrollYOffset - 100) {
        gsap.to(".sec02 p.fade-in", {duration: 0.4, x: 0, opacity: 1})
    } 
    // SECTION03 - 스크롤 페이드인 
    if( sec[2].offsetLeft < scrollYOffset + 900) {
        let tl = gsap.timeline();
        tl.to(".sec03 .list01 .li-inner.fade-left", {duration: 0.4, x: 0, opacity: 1})
        tl.to(".sec03 .list02 .li-inner.fade-left", {duration: 0.4, x: 0, opacity: 1},'-=0.1')
        tl.to(".sec03 .list03 .li-inner.fade-left", {duration: 0.4, x: 0, opacity: 1},'-=0.1')
        tl.to(".sec03 .list04 .li-inner.fade-left", {duration: 0.4, x: 0, opacity: 1},'-=0.1')
        tl.to(".sec03 .list05 .li-inner.fade-left", {duration: 0.4, x: 0, opacity: 1},'-=0.1')
        tl.to(".sec03 .list06 .li-inner.fade-left", {duration: 0.4, x: 0, opacity: 1},'-=0.1')
        tl.to(".sec03 .list07 .li-inner.fade-left", {duration: 0.4, x: 0, opacity: 1},'-=0.1')
    }
    // SECTION04 - 스크롤 페이드인 
    if( sec[3].offsetLeft < scrollYOffset + 1200) {
        let tl = gsap.timeline();
        tl.to(".sec04 h3.fade-left", {duration: 0.5, x: 0, opacity: 1})
        tl.to(".sec04 .intro1.fade-in", {duration: 0.7, x: 0, opacity: 1})
        tl.to(".sec04 .intro2.fade-in", {duration: 0.7, x: 0, opacity: 1},'-=0.4')
        tl.to(".sec04 .profile-img-wrap.fade-right", {duration: 0.4, x: 0, opacity: 1})
        tl.to(".sec04 .pc-sub p span", {duration: 0.5, x: 0, y:0, opacity: 1, stagger:.05, ease: "back.out(1.7)"})
        tl.to(".sec04 #img-btn.fade-in", {duration: 0.7, x: 0, opacity: 1})
    }
    // SECTION05 - 스크롤 페이드인 
    if( sec[4].offsetLeft < scrollYOffset + 400) {
        let tl = gsap.timeline();
        tl.to("svg.fade-in", {duration:0.5,x: 0, opacity: 1})
        tl.to(".ani1.fade-in", {duration:0.5, x: 0, opacity: 1})
        tl.to(".ani2.fade-in", {duration:0.5, x: 0, opacity: 1},'+=0.5')
        tl.to(".ani3.fade-in", {duration:0.5, x: 0, opacity: 1},'+=0.5')
        tl.to(".ani4.fade-in", {duration:0.5, x: 0, opacity: 1},'+=0.5')
        tl.to(".ani5.fade-in", {duration:0.5,  x: 0, opacity: 1},'+=0.5')
        tl.to(".skill-p.fade-in", {duration:0.5,  x: 0, opacity: 1})
        tl.to("#section05 .view-btn.fade-in", {duration:0.5,  x: 0, opacity: 1},'-=0.5')
    } 
    //proj 스크롤 애니메이션
	 if( sec[5].offsetLeft < scrollYOffset + 400) {
         let tl = gsap.timeline();
	     gsap.to(".sec06 .img-overlay", {duration:0.7, x: 3000, ease:'easeInSine'})
	     tl.to(".sec06 h3 span", {duration:0.5, x: 0, y: 0, opacity:1, stagger:0.05, ease:'easeInSine'})
	     tl.to(".sec06 h4", {duration:0.4, x: 0, opacity:1, ease:'easeInSine'})
	     tl.to(".sec06 .proj-p", {duration:0.4, x: 0, opacity:1, ease:'easeInSine'})
	     tl.to(".sec06 .proj-view", {duration:0.4, x: 0, y: 0, opacity:1, ease:'easeInSine'})
	     tl.to(".sec06 .code-view", {duration:0.4, x: 0, y: 0, opacity:1, ease:'easeInSine'})
	 }  
	 if( sec[6].offsetLeft < scrollYOffset + 400) {
         let tl = gsap.timeline();
	     gsap.to(".sec07 .img-overlay", {duration:0.7, x: 3000, ease:'easeInSine'})
	     tl.to(".sec07 h3 span", {duration:0.4, x: 0, y: 0, opacity:1, stagger:0.05, ease:'easeInSine'})
	     tl.to(".sec07 h4", {duration:0.4, x: 0, opacity:1, ease:'easeInSine'})
	     tl.to(".sec07 .proj-p", {duration:0.4, x: 0, opacity:1, ease:'easeInSine'})
	     tl.to(".sec07 .proj-view", {duration:0.4, x: 0, y: 0, opacity:1, ease:'easeInSine'})
	     tl.to(".sec07 .code-view", {duration:0.4, x: 0, y: 0, opacity:1, ease:'easeInSine'})
	 }  
	 if( sec[7].offsetLeft < scrollYOffset + 400) {
         let tl = gsap.timeline();
	     gsap.to(".sec08 .img-overlay", {duration:0.7, x: 3000, ease:'easeInSine'})
	     tl.to(".sec08 h3 span", {duration:0.4, x: 0, y: 0, opacity:1, stagger:0.05, ease:'easeInSine'})
	     tl.to(".sec08 h4", {duration:0.4, x: 0, opacity:1, ease:'easeInSine'})
	     tl.to(".sec08 .proj-p", {duration:0.4, x: 0, opacity:1, ease:'easeInSine'})
	     tl.to(".sec08 .proj-view", {duration:0.4, x: 0, y: 0, opacity:1, ease:'easeInSine'})
	     tl.to(".sec08 .code-view", {duration:0.4, x: 0, y: 0, opacity:1, ease:'easeInSine'})
	 }  
	 if( sec[8].offsetLeft < scrollYOffset + 400) {
         let tl = gsap.timeline();
	     gsap.to(".sec09 .img-overlay", {duration:0.7, x: 3000, ease:'easeInSine'})
	     tl.to(".sec09 h3 span", {duration:0.4, x: 0, y: 0, opacity:1, stagger:0.05, ease:'easeInSine'})
	     tl.to(".sec09 h4", {duration:0.4, x: 0, opacity:1, ease:'easeInSine'})
	     tl.to(".sec09 .proj-p", {duration:0.4, x: 0, opacity:1, ease:'easeInSine'})
	     tl.to(".sec09 .proj-view", {duration:0.4, x: 0, y: 0, opacity:1, ease:'easeInSine'})
	     tl.to(".sec09 .code-view", {duration:0.4, x: 0, y: 0, opacity:1, ease:'easeInSine'})
	 }  
});





 