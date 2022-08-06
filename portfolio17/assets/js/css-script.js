// main-loading
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
   let bluePath = document.getElementById("blue-path")
   let blueStar = document.getElementById("blue-star")
   let blueLine = document.getElementById("blue-line")
    tl.to("#header", {x:0, y:0, duration:0.5, ease: "back.out(2)"})
   tl.to("#css-ani .proj-sub h2 span", {className:"+=fade-box-white"})
   bluePath.classList.add("dash");
   blueStar.classList.add("dash");
   blueLine.classList.add("dash");
 },2000)


window.addEventListener("scroll", function(){
  let pageYOffset = window.pageYOffset + screen.height/2; 

  if( pageYOffset > document.querySelector(".css-ani1").offsetTop + 800 ){
    let tl = gsap.timeline();
    tl.to("#css-ani .css-ani.css-ani1 h3 span", {className:"+=fade-box-blue"})
    
    .to("#css-ani .css-ani.css-ani1 .css-svg",{x:0, y:0, opacity:1, duration: 0.5, stagger:0.3})
    .to("#css-ani .css-ani.css-ani1 .ani-iframe",{x:0, y:0, opacity:1, duration: 0.5, stagger:0.3, ease: "power3.inout"})
    .to("#css-ani .css-ani.css-ani1 p", {x:0, y:0, opacity:1, duration: 0.5, stagger:0.3})
  }
  if( pageYOffset >  document.querySelector(".css-ani2").offsetTop + 800){
    let tl = gsap.timeline();
    tl.to("#css-ani .css-ani.css-ani2 h3 span", {className:"+=fade-box-blue"})
    
    .to("#css-ani .css-ani.css-ani2 .css-svg",{x:0, y:0, opacity:1, duration: 0.5, stagger:0.3})
    .to("#css-ani .css-ani.css-ani2 .ani-iframe",{x:0, y:0, opacity:1, duration: 0.5, stagger:0.3, ease: "power3.inout"})
    .to("#css-ani .css-ani.css-ani2 p", {x:0, y:0, opacity:1, duration: 0.5, stagger:0.3})
  }
  if( pageYOffset > document.querySelector(".css-ani3").offsetTop + 800){
    let tl = gsap.timeline();
    tl.to("#css-ani .css-ani.css-ani3 h3 span", {className:"+=fade-box-blue"})
    .to("#css-ani .css-ani.css-ani3 .css-svg",{x:0, y:0, opacity:1, duration: 0.5, stagger:0.3})
    .to("#css-ani .css-ani.css-ani3 .ani-iframe",{x:0, y:0, opacity:1, duration: 0.5, stagger:0.3, ease: "power3.inout"})
    .to("#css-ani .css-ani.css-ani3 p", {x:0, y:0, opacity:1, duration: 0.5, stagger:0.3})
  }
  if( pageYOffset >  document.querySelector(".css-ani4").offsetTop + 800){
    let tl = gsap.timeline();
    tl.to("#css-ani .css-ani.css-ani4 h3 span", {className:"+=fade-box-blue"})
    .to("#css-ani .css-ani.css-ani4 .css-svg",{x:0, y:0, opacity:1, duration: 0.5, stagger:0.3})
    .to("#css-ani .css-ani.css-ani4 .ani-iframe",{x:0, y:0, opacity:1, duration: 0.5, stagger:0.3, ease: "power3.inout"})
    .to("#css-ani .css-ani.css-ani4 p", {x:0, y:0, opacity:1, duration: 0.5, stagger:0.3})
  }
  if( pageYOffset >  document.querySelector(".css-ani5").offsetTop + 800){
    let tl = gsap.timeline();
    tl.to("#css-ani .css-ani.css-ani5 h3 span", {className:"+=fade-box-blue"})
    .to("#css-ani .css-ani.css-ani5 .css-svg",{x:0, y:0, opacity:1, duration: 0.5, stagger:0.3})
    .to("#css-ani .css-ani.css-ani5 .ani-iframe",{x:0, y:0, opacity:1, duration: 0.5, stagger:0.3, ease: "power3.inout"})
    .to("#css-ani .css-ani.css-ani5 p", {x:0, y:0, opacity:1, duration: 0.5, stagger:0.3})
  }
  if( pageYOffset >  document.querySelector(".css-ani6").offsetTop + 800){
    let tl = gsap.timeline();
    tl.to("#css-ani .css-ani.css-ani6 h3 span", {className:"+=fade-box-blue"})
    .to("#css-ani .css-ani.css-ani6 .css-svg",{x:0, y:0, opacity:1, duration: 0.5, stagger:0.3})
    .to("#css-ani .css-ani.css-ani6 .ani-iframe",{x:0, y:0, opacity:1, duration: 0.5, stagger:0.3, ease: "power3.inout"})
    .to("#css-ani .css-ani.css-ani6 p", {x:0, y:0, opacity:1, duration: 0.5, stagger:0.3})
  }

  if( pageYOffset >  document.querySelector("#contact").offsetTop){
    let tl = gsap.timeline();
    tl.to("#contact .contact-svg.fade-in", {x:0, y:0, opacity:1, duration: 0.5, stagger:0.3})
    .to("#contact .contact-sub.ani-right",{x:0, y:0, opacity:1, duration: 0.5, stagger:0.3})
    .to("#contact p.ani-right",{x:0, y:0, opacity:1, duration: 0.5, stagger:0.3, ease: "bounce.inout"})
    .to("#contact .btn.ani-top", {x:0, y:0, opacity:1, duration: 0.5, stagger:0.3})
    .to("#footer", {x:0, y:0, opacity:1, duration: 0.5, stagger:0.3})
  }
});


// let windowHeight,
//     section;
// function init() {
//   windowHeight = window.innerHeight;
//   section = document.querySelectorAll(".section");
//   header = document.getElementById("header");
// }
// function checkPosition() {
//   for (let i = 0; i < section.length; i++) {
//     let sectionAA = section[i];
//     let positionFromTop = section[i].getBoundingClientRect().top;
//     let item = document.querySelectorAll(".item" + i);
//     if (positionFromTop - windowHeight <= 0) {
        
//       if (i === 0 ) { 
//       setTimeout(() => {
//         header.classList.remove('hidden');
//         header.classList.add('fade-top');
//       }, 2000)
//       setTimeout(() => {
//         item[0].classList.remove("hidden");
//         item[0].classList.add("fade-box");
//         item[1].classList.remove("hidden");
//         item[1].classList.add("fade-box");
//       }, 1500)
//       setTimeout(() => {
//         item[2].classList.remove("hidden");
//         item[2].classList.add("dash");
//         item[3].classList.remove("hidden");
//         item[3].classList.add("dash");
//         item[4].classList.remove("hidden");
//         item[4].classList.add("dash");
//       }, 3500)
//       }
//       else if (i === 1) {
//         setTimeout(() => {
//           item[0].classList.remove("hidden");
//           item[0].classList.add("fade-right100");
//         }, 500)
//         setTimeout(() => {
//           item[1].classList.remove('hidden');
//           item[1].classList.add('fade-box');
//         }, 0)
//         setTimeout(() => {
//           item[2].classList.remove('hidden');
//           item[2].classList.add('fade-left100'); 
//         }, 2000)
//         setTimeout(() => {
//           item[3].classList.remove('hidden');
//           item[3].classList.add('fade-top-left');
//         }, 2500)
//       }
//       else if (i === 2) {
//           setTimeout(() => {
//             item[0].classList.remove("hidden");
//             item[0].classList.add("fade-left100");
//           }, 500)
//           setTimeout(() => {
//             item[1].classList.remove('hidden');
//             item[1].classList.add('fade-box');
//           }, 0)
//           setTimeout(() => {
//             item[2].classList.remove('hidden');
//             item[2].classList.add('fade-left100'); 
//           }, 2000)
//           setTimeout(() => {
//             item[3].classList.remove('hidden');
//             item[3].classList.add('fade-bottom-right');
//           }, 2500)
//         }
//         else if (i === 3) {
//           setTimeout(() => {
//             item[0].classList.remove("hidden");
//             item[0].classList.add("fade-right100");
//           }, 500)
//           setTimeout(() => {
//             item[1].classList.remove('hidden');
//             item[1].classList.add('fade-box');
//           }, 0)
//           setTimeout(() => {
//             item[2].classList.remove('hidden');
//             item[2].classList.add('fade-left100'); 
//           }, 2000)
//           setTimeout(() => {
//             item[3].classList.remove('hidden');
//             item[3].classList.add('fade-bottom-left');
//           }, 2500)
//         }
//         else if (i === 4) {
//         setTimeout(() => {
//           item[0].classList.remove("hidden");
//           item[0].classList.add("fade-left100");
//         }, 500)
//         setTimeout(() => {
//           item[1].classList.remove('hidden');
//           item[1].classList.add('fade-box');
//         }, 0)
//         setTimeout(() => {
//           item[2].classList.remove('hidden');
//           item[2].classList.add('fade-left100'); 
//         }, 2000)
//         setTimeout(() => {
//           item[3].classList.remove('hidden');
//           item[3].classList.add('fade-top-right');
//         }, 2500)
//         }
//         else if (i === 5) {
//           setTimeout(() => {
//             item[0].classList.remove("hidden");
//             item[0].classList.add("fade-right100");
//           }, 500)
//           setTimeout(() => {
//             item[1].classList.remove('hidden');
//             item[1].classList.add('fade-box');
//           }, 0)
//           setTimeout(() => {
//             item[2].classList.remove('hidden');
//             item[2].classList.add('fade-left100'); 
//           }, 2000)
//           setTimeout(() => {
//             item[3].classList.remove('hidden');
//             item[3].classList.add('fade-top-left');
//           }, 2500)
//         }
//         else if (i === 6) {
//           setTimeout(() => {
//             item[0].classList.remove("hidden");
//             item[0].classList.add("fade-left100");
//           }, 500)
//           setTimeout(() => {
//             item[1].classList.remove('hidden');
//             item[1].classList.add('fade-box');
//           }, 0)
//           setTimeout(() => {
//             item[2].classList.remove('hidden');
//             item[2].classList.add('fade-left100'); 
//           }, 2000)
//           setTimeout(() => {
//             item[3].classList.remove('hidden');
//             item[3].classList.add('fade-bottom-right');
//           }, 2500)
//         }
//         else if (i === 7) {
//           item[0].classList.remove("hidden");
//           item[0].classList.add("fade-in");
//         }
//         else if (i === 8) {
//           setTimeout(() => {
//             item[0].classList.remove("hidden");
//             item[0].classList.add("fade-box");
//             item[1].classList.remove("hidden");
//             item[1].classList.add("fade-box");
//           }, 0)
//           setTimeout(() => {
//             item[2].classList.remove("hidden");
//             item[2].classList.add("dash");
//             item[3].classList.remove("hidden");
//             item[3].classList.add("dash");
//           }, 2500)
//         }
//         else if (i === 9) {
//           setTimeout(() => {
//             item[0].classList.remove("hidden");
//             item[0].classList.add("fade-bottom");
//             item[1].classList.remove("hidden");
//             item[1].classList.add("fade-top100");
//           }, 500)
//         }
//         else if (i === 10) {
//           setTimeout(() => {
//             item[1].classList.remove("hidden");
//             item[1].classList.add("fade-bottom-left");
//           }, 500)
//           setTimeout(() => {
//             item[0].classList.remove("hidden");
//             item[0].classList.add("fade-box");
//           }, 0)
//         }
//         else if (i === 11) {
//           setTimeout(() => {
//             item[1].classList.remove("hidden");
//             item[1].classList.add("fade-top-right");
//           }, 500)
//           setTimeout(() => {
//             item[0].classList.remove("hidden");
//             item[0].classList.add("fade-box");
//           }, 0)
//         }
//         else if (i === 12) {
//           setTimeout(() => {
//             item[1].classList.remove("hidden");
//             item[1].classList.add("fade-top-left");
//           }, 500)
//           setTimeout(() => {
//             item[0].classList.remove("hidden");
//             item[0].classList.add("fade-box");
//           }, 0)
//         }
//         else if (i === 13) {
//           setTimeout(() => {
//             item[0].classList.remove("hidden");
//             item[0].classList.add("fade-bottom");
//             item[1].classList.remove("hidden");
//             item[1].classList.add("fade-top100");
//           }, 500)
//         }
//         else if (i === 14) {
//           setTimeout(() => {
//             item[1].classList.remove("hidden");
//             item[1].classList.add("fade-bottom-right");
//           }, 500)
//           setTimeout(() => {
//             item[0].classList.remove("hidden");
//             item[0].classList.add("fade-box");
//           }, 0)
//         }
//         else if (i === 15) {
//           setTimeout(() => {
//             item[1].classList.remove("hidden");
//             item[1].classList.add("fade-top-left");
//           }, 500)
//           setTimeout(() => {
//             item[0].classList.remove("hidden");
//             item[0].classList.add("fade-box");
//           }, 0)
//         }
//         else if (i === 16) {
//           setTimeout(() => {
//             item[1].classList.remove("hidden");
//             item[1].classList.add("fade-bottom-right");
//           }, 500)
//           setTimeout(() => {
//             item[0].classList.remove("hidden");
//             item[0].classList.add("fade-box");
//           }, 0)
//         }
//         else if (i === 17) {
//           setTimeout(() => {
//             item[0].classList.remove('hidden');
//             item[0].classList.add('fade-in');
//           }, 1000)
//           setTimeout(() => {
//             item[1].classList.remove("hidden"); 
//             item[1].classList.add('fade-left100');
//           }, 2000)
//           setTimeout(() => {
//             item[2].classList.remove("hidden"); 
//             item[2].classList.add('fade-left100');
//           }, 2200)
//           setTimeout(() => {
//             item[3].classList.remove("hidden"); 
//             item[3].classList.add('fade-left100');
//           }, 3000)
//           setTimeout(() => {
//             item[4].classList.remove("hidden"); 
//             item[4].classList.add('fade-bottom100');
//           }, 3500)
//          }
//          else  {setTimeout(() => {
//             sectionAA.classList.remove('hidden');
//             sectionAA.classList.add('fade-in');
//           }, 1500)
//          }
//       }
//     }
//   }
//   window.addEventListener('scroll', checkPosition);
//   window.addEventListener('resize', init);
//   init();
//   checkPosition();


/* -------- 스크롤에 따라 transform 변경 -------- */
/*
window.addEventListener("scroll", ()=> {
  let scrollYOffset = (window.pageYOffset || document.documentElement.scrollTop)
  //스크롤 효과          
  document.getElementById("truck").style.left = -scrollYOffset + "px";
  
  let scrollArea = scrollYOffset - document.querySelector(".scroll").offsetLeft;
 
  let levelX0 = "translateX("+(scrollArea)*0.07+"px)",
      levelX1 = "translateX("+(scrollArea)*0.1+"px)",
      levelX2 = "translateX("+(scrollArea)*0.25+"px)",
      levelX3 = "translateX("+(scrollArea)*0.3+"px)";
  

  document.querySelector("#truck").style.transform = levelX2;
});
*/

/*----- script1 slide -----*/
/*let index = 0, setTimeOut;
function currentSlide(auto) {
  // console.log(auto);
  let indexSlide = auto.getAttribute("data-slide");
  // console.log(indexSlide);
  window.clearTimeout(setTimeOut);
  index = indexSlide;
  showSlides();
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName('slide');
  let menu = document.getElementsByClassName('mm');
  index++;
  if (index > slides.length) {
    index = 1;
  }

  if (index < 1) {
    index = slides.length;
  }
  // console.log(222, index);
  // console.log(slides[index-1]);
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  
  for (i = 0; i < menu.length; i++) {
    menu[i].dataset.slide = i;
    menu[i].className = menu[i].className.replace('active', '');
  }

  slides[index-1].style.display = 'block';
  menu[index-1].className += ' active';
  setTimeOut = window.setTimeout(showSlides, 12000);
}

showSlides();*/
