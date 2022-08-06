/* ---------- loading ---------- */
let mainLoader = document.getElementById("main-loader");
let body = document.getElementsByTagName("body");
function mainLoading() {
  setTimeout(function() {
    mainLoader.classList.remove("active")
    mainLoader.classList.add("noactive")
  },1700);
}
mainLoading();

/* ---------- cursor ------------ */
const cursor = document.querySelector("#cursor");

document.addEventListener("mousemove", e => {
  cursor.setAttribute("style", "top: " + e.pageY +"px; left: "+ e.pageX+"px;")
})
// 커서 클릭이벤트
document.addEventListener("click", () => {
  cursor.classList.add("mouse")
  setTimeout(() => {
    cursor.classList.remove("mouse")
  }, 500)
})
// 커서 호버이벤트
const a = document.getElementsByTagName("a")
for (let i=0; i<a.length; i++){
  a[i].addEventListener("mouseenter", function(){
    cursor.classList.add("mouse")
  })
  a[i].addEventListener("mouseleave", function(){
    cursor.classList.remove("mouse")
  })
}

/* ---------- scroll animation ---------- */
setTimeout(() => {
  let tl = gsap.timeline();
  tl.to("#header", {x:0, y:0, duration:0.5, ease: "back.out(2)"})
  .to("#about .about1-intro h3", {x:0, y:0, opacity:1, duration: 0.5, stagger:0.3})
  .to("#about .about1-intro h2 span", {className:"+=fade-box-blue"})
  .to("#about .about1-intro p", {x:0, y:0, opacity:1, duration: 0.5, stagger:0.3}, "+=0.8")
  .to("#about #about-imgs", {className:"+=img-rotate"}) 
  let img = document.querySelectorAll("#about .about-img");
    for (let i=0; i<img.length; i++){
      setTimeout(() => {
        img[i].classList.add("scatter")
      }, 3400)
      // 이미지 호버시 마우스 반응
      img[i].addEventListener("mouseenter", function(){
        cursor.classList.add("mouse")
      })
      img[i].addEventListener("mouseleave", function(){
        cursor.classList.remove("mouse")
      })
    }
},2000)

window.addEventListener("scroll", function(){
  let pageYOffset = window.pageYOffset + screen.height/2; 

  if( pageYOffset > document.querySelector(".about2").offsetTop){
    let tl = gsap.timeline();
    tl.to("#forest", {x:0, y:0, duration:1, opacity:1, ease: "power3.out"})
    .to("#people",{opacity:1, duration: 1, stagger:0.3}, "-=0.5")
    .to(".about2 .about-info h4",{className:"+=fade-box-white"}, "-=1.7")
    .to(".about2 .about-info p",{x:0, y:0, opacity:1, duration: 0.5, stagger:0.3}, "-=0.5")
  }
  if( pageYOffset > document.querySelector(".scroll-text").offsetTop + 100){
    let tl = gsap.timeline();
    tl.to(".scroll-text",{opacity:1, duration: 0.5})
  }
  if( pageYOffset > document.querySelector(".about3").offsetTop){
    let tl = gsap.timeline();
    tl.to(".about3 .about-info h4",{className:"+=fade-box-white"}, "-=1")
    .to(".about3 .about-info p",{x:0, y:0, opacity:1, duration: 0.5, stagger:0.3}, "+=0.5")
    .to("#yoga", {x:0, y:0, duration:1, opacity:1, ease: "power3.out"}, "-=0.5")
    .to("#mountain",{x:0, y:0, opacity:1, duration: 1, stagger:0.3}, "-=0.5")  
  }
  if( pageYOffset > document.querySelector("#skills").offsetTop){
    let tl = gsap.timeline();
    tl.to("#skills .skill-sub h2 span",{className:"+=fade-box-white"}, "-=1")
    let bluePath = document.getElementById("blue-path")
    bluePath.classList.add("dash");
    tl.to("#skills .skill-svg", {x:0, y:0, duration:1, opacity:1, ease: "power3.out"})
    .to("#skills .skill-container", {x:0, y:0, duration:0.5, opacity:1, ease: "power2.out"})

  }
  if( pageYOffset >  document.querySelector("#contact").offsetTop){
    let tl = gsap.timeline();
    tl.to("#contact .contact-svg.fade-in", {x:0, y:0, opacity:1, duration: 0.5, stagger:0.3})
    .to("#contact .contact-sub.ani-right",{x:0, y:0, opacity:1, duration: 0.5, stagger:0.3})
    .to("#contact p.ani-right",{x:0, y:0, opacity:1, duration: 0.5, stagger:0.3, ease: "power3.inout"})
    .to("#contact .btn", {x:0, y:0, opacity:1, duration: 0.5, ease: "bounce.inout"})
    .to("#footer", {x:0, y:0, opacity:1, duration: 0.5, stagger:0.3})
  }
});

/*  
let windowHeight,
      section;

  function init() {
    windowHeight = window.innerHeight;
    section = document.querySelectorAll(".section");
    header = document.getElementById("header");
  }

  function checkPosition() {
    for (let i = 0; i < section.length; i++) {
      let sectionAA = section[i];
      let positionFromTop = section[i].getBoundingClientRect().top;
      let item = document.querySelectorAll(".item" + i);
      if (positionFromTop - windowHeight <= 0) {
        
       if (i === 0 ) { 
        setTimeout(() => {
          header.classList.remove('hidden');
          header.classList.add('fade-top');
        }, 2000)
        setTimeout(() => {
          item[0].classList.remove("hidden");
          item[0].classList.add("fade-left100");
        }, 3000)
        setTimeout(() => {
          item[1].classList.remove("hidden");
          item[1].classList.add("fade-box");
        }, 3000)
        setTimeout(() => {
          item[2].classList.remove("hidden");
          item[2].classList.add("fade-box");
        }, 3500)
        setTimeout(() => {
          item[3].classList.remove("hidden");
          item[3].classList.add("fade-box");
        }, 4000)
        setTimeout(() => {
          item[4].classList.remove("hidden");
          item[4].classList.add("fade-left100");
        }, 6000)
        setTimeout(() => {
          item[7].classList.remove("hidden");
          item[7].classList.add("fade-in");
        }, 6000)
        setTimeout(() => {
          item[6].classList.remove("hidden");
          item[6].classList.add("fade-in");
        }, 6300)
        setTimeout(() => {
          item[9].classList.remove("hidden");
          item[9].classList.add("fade-in");
        }, 6600)  
        setTimeout(() => {
          item[5].classList.remove("hidden");
          item[5].classList.add("fade-in");
        }, 6900)
        setTimeout(() => {
          item[8].classList.remove("hidden");
          item[8].classList.add("fade-in");
        }, 7200)
       }
       else if (i === 1) {
        setTimeout(() => {
          item[0].classList.remove('hidden');
          item[0].classList.add('fade-in');
        }, 500)
        setTimeout(() => {
          item[1].classList.remove('hidden');
          item[1].classList.add('fade-in');
        }, 1000)
        setTimeout(() => {
          item[2].classList.remove('hidden');
          item[2].classList.add('fade-box');
        }, 0)
        setTimeout(() => {
          item[3].classList.remove('hidden');
          item[3].classList.add('fade-left');
        }, 2000)
      }
       else if (i === 2) {
        setTimeout(() => {
          item[0].classList.remove('hidden');
          item[0].classList.add('fade-in');
        }, 500)
       }
       else if (i === 3) {
        setTimeout(() => {
          item[0].classList.remove('hidden');
          item[0].classList.add('fade-box');
        }, 0)
        setTimeout(() => {
          item[1].classList.remove("hidden"); 
          item[1].classList.add('fade-left100');
        }, 2000)
        setTimeout(() => {
          item[2].classList.remove("hidden"); 
          item[2].classList.add('fade-top100');
        }, 2500)
        setTimeout(() => {
          item[3].classList.remove("hidden"); 
          item[3].classList.add('fade-bottom100');
        }, 3000)
       }
       else if (i === 4) {
        setTimeout(() => {
          item[0].classList.remove('hidden');
          item[0].classList.add('fade-box');
        }, 0)
        setTimeout(() => {
          item[1].classList.remove("hidden"); 
          item[1].classList.add('dash');
        }, 1500)
        setTimeout(() => {
          item[2].classList.remove("hidden"); 
          item[2].classList.add('fade-left100');
        }, 2500)
        setTimeout(() => {
          item[3].classList.remove("hidden"); 
          item[3].classList.add('fade-right100');
        }, 3500)
        setTimeout(() => {
          item[4].classList.remove("hidden"); 
          item[4].classList.add('fade-box');
        }, 3000)
        setTimeout(() => {
          item[5].classList.remove("hidden"); 
          item[5].classList.add('fade-in');
        }, 5000)
       }
       else if (i === 5) {
        setTimeout(() => {
          item[0].classList.remove('hidden');
          item[0].classList.add('fade-in');
        }, 1000)
        setTimeout(() => {
          item[1].classList.remove("hidden"); 
          item[1].classList.add('fade-left100');
        }, 2000)
        setTimeout(() => {
          item[2].classList.remove("hidden"); 
          item[2].classList.add('fade-left100');
        }, 2200)
        setTimeout(() => {
          item[3].classList.remove("hidden"); 
          item[3].classList.add('fade-left100');
        }, 3000)
        setTimeout(() => {
          item[4].classList.remove("hidden"); 
          item[4].classList.add('fade-bottom100');
        }, 3500)
       }
       else  {setTimeout(() => {
          sectionAA.classList.remove('hidden');
          sectionAA.classList.add('fade-in');
        }, 1500)
       }
      }
    }
  }
  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);
  init();
  checkPosition();

  /* -------- 스크롤에 따라 transform 변경 -------- */
window.addEventListener("scroll", ()=> {
  let scrollYOffset = (window.pageYOffset || document.documentElement.scrollTop)
  //스크롤 효과          
  document.getElementById("contents").style.left = -scrollYOffset + "px";
  
  let scrollArea = scrollYOffset - document.querySelector(".scroll").offsetLeft;
 
  let levelX0 = "translateX("+(scrollArea)*0.07+"px)",
      levelX1 = "translateX("+(scrollArea)*0.1+"px)",
      levelX2 = "translateX("+(scrollArea)*0.2+"px)",
      levelX3 = "translateX("+(scrollArea)*0.3+"px)";
  let levelXMinus0 = "translateX("+(scrollArea)*-0.04+"px)",
      levelXMinus1 = "translateX("+(scrollArea)*-0.1+"px)",
      levelXMinus2 = "translateX("+(scrollArea)*-0.2+"px)",
      levelXMinus3 = "translateX("+(scrollArea)*-0.3+"px)";
  let levelYMinus1 = "translateY("+(scrollArea)*-0.1+"px)",
      levelY1 = "translateY("+(scrollArea)*0.1+"px)",
      levelY2 = "translateY("+(scrollArea)*-0.2+"px)",
      levelY3 = "translateY("+(scrollArea)*0.3+"px)";

  document.querySelector("#people").style.transform = levelX3;
  document.querySelector("#forest").style.transform = levelYMinus1;
  document.querySelector(".scroll-text .text").style.transform = levelXMinus2;
  document.querySelector("#skills #cloud1").style.transform = levelX0;
  document.querySelector("#skills #cloud2").style.transform = levelX0;
  document.querySelector("#skills #cloud3").style.transform = levelXMinus0;
});

// 프로필 클릭시 나타나기
const gallery = document.querySelectorAll("#about-imgs .about-img")
for (let i=0; i< gallery.length; i++){
gallery[i].addEventListener ("click", () => {
  if (gallery[i].classList.contains("appear") === true){
    gallery[i].classList.remove("appear")
  } else if (gallery[i].classList.contains("appear") === false){
    gallery[i].classList.add("appear")
  }
})
}