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
  tl.to("#header", {x:0, y:0, duration:0.5, ease: "back.out(2)"})
  .to("#project-title .proj-sub h2 span", {className:"+=fade-box-white"})
  bluePath.classList.add("dash");
  tl.to(".proj-img-slider", {x:0, y:0, opacity:1, duration:0.8}, "+=2")
},2000)

window.addEventListener("scroll", function(){
  let pageYOffset = window.pageYOffset + screen.height/2; 

  if( pageYOffset > document.querySelector(".proj1").offsetTop ){
    let tl = gsap.timeline();
    tl.to("#project .proj1 .top-view", {x:0, y:0, opacity:1, duration: 0.8, stagger:0.3})
    .to("#project .proj1 .float-img1 .float---img",{x:0, y:0, opacity:1, rotate:0, duration: 0.5, stagger:0.3}, "-=0.3")
    .to("#project .proj1 .float-img2 .float---img",{x:0, y:0, opacity:1, rotate:0, duration: 0.5, stagger:0.3}, "-=0.3")
    .to("#project .proj1 .proj-info-sub h4",{x:0, y:0, opacity:1, duration: 0.6, stagger:0.3}, "-=0.3")
    .to("#project .proj1 .proj-info-sub h3 span",{className:"+=fade-box-white"}, "-=1.3")
    .to("#project .proj1 .short-info",{x:0, y:0, opacity:1, rotate:0, duration: 0.6, stagger:0.3}, "-=0.3")
    .to("#project .proj1 .proj-profile",{x:0, y:0, opacity:1, rotate:0, duration: 0.6, stagger:0.3}, "-=0.3")
    .to("#project .proj1 .details",{x:0, y:0, opacity:1, rotate:0, duration: 0.6, stagger:0.3}, "-=0.3")
    .to("#project .proj1 .btn",{x:0, y:0, opacity:1, duration: 0.6, ease: "bounce.out"})
  }
  if( pageYOffset > document.querySelector(".proj2").offsetTop ){
    let tl = gsap.timeline();
    tl.to("#project .proj2 .top-view", {x:0, y:0, opacity:1, duration: 0.8, stagger:0.3})
    .to("#project .proj2 .float-img1 .float---img",{x:0, y:0, opacity:1, rotate:0, duration: 0.5, stagger:0.3}, "-=0.3")
    .to("#project .proj2 .float-img2 .float---img",{x:0, y:0, opacity:1, rotate:0, duration: 0.5, stagger:0.3}, "-=0.3")
    .to("#project .proj2 .proj-info-sub h4",{x:0, y:0, opacity:1, duration: 0.6, stagger:0.3}, "-=0.3")
    .to("#project .proj2 .proj-info-sub h3 span",{className:"+=fade-box-white"}, "-=1.3")
    .to("#project .proj2 .short-info",{x:0, y:0, opacity:1, rotate:0, duration: 0.6, stagger:0.3}, "-=0.3")
    .to("#project .proj2 .proj-profile",{x:0, y:0, opacity:1, rotate:0, duration: 0.6, stagger:0.3}, "-=0.3")
    .to("#project .proj2 .details",{x:0, y:0, opacity:1, rotate:0, duration: 0.6, stagger:0.3}, "-=0.3")
    .to("#project .proj2 .btn",{x:0, y:0, opacity:1, duration: 0.6, ease: "bounce.out"})
  }
  if( pageYOffset > document.querySelector(".proj3").offsetTop ){
    let tl = gsap.timeline();
    tl.to("#project .proj3 .top-view", {x:0, y:0, opacity:1, duration: 0.5, stagger:0.3})
    .to("#project .proj3 .float-img2 .float---img",{x:0, y:0, opacity:1, rotate:0, duration: 0.5, stagger:0.3}, "-=0.3")
    .to("#project .proj3 .proj-info-sub h4",{x:0, y:0, opacity:1, duration: 0.6, stagger:0.3}, "-=0.3")
    .to("#project .proj3 .proj-info-sub h3 span",{className:"+=fade-box-white"}, "-=1.3")
    .to("#project .proj3 .short-info",{x:0, y:0, opacity:1, rotate:0, duration: 0.6, stagger:0.3}, "-=0.3")
    .to("#project .proj3 .proj-profile",{x:0, y:0, opacity:1, rotate:0, duration: 0.6, stagger:0.3}, "-=0.3")
    .to("#project .proj3 .details",{x:0, y:0, opacity:1, rotate:0, duration: 0.6, stagger:0.3}, "-=0.3")
    .to("#project .proj3 .btn",{x:0, y:0, opacity:1, duration: 0.6, ease: "bounce.out"})
  }
  if( pageYOffset > document.querySelector(".proj4").offsetTop ){
    let tl = gsap.timeline();
    tl.to("#project .proj4 .top-view", {x:0, y:0, opacity:1, duration: 0.8, stagger:0.3})
    .to("#project .proj4 .float-img1 .float---img",{x:0, y:0, opacity:1, rotate:0, duration: 0.5, stagger:0.3}, "-=0.3")
    .to("#project .proj4 .proj-info-sub h4",{x:0, y:0, opacity:1, duration: 0.6, stagger:0.3}, "-=0.3")
    .to("#project .proj4 .proj-info-sub h3 span",{className:"+=fade-box-white"}, "-=1.3")
    .to("#project .proj4 .short-info",{x:0, y:0, opacity:1, rotate:0, duration: 0.6, stagger:0.3}, "-=0.3")
    .to("#project .proj4 .proj-profile",{x:0, y:0, opacity:1, rotate:0, duration: 0.6, stagger:0.3}, "-=0.3")
    .to("#project .proj4 .details",{x:0, y:0, opacity:1, rotate:0, duration: 0.6, stagger:0.3}, "-=0.3")
    .to("#project .proj4 .btn",{x:0, y:0, opacity:1, duration: 0.6, ease: "bounce.out"})
  }
  if( pageYOffset > document.querySelector(".proj5").offsetTop ){
    let tl = gsap.timeline();
    tl.to("#project .proj5 .top-view", {x:0, y:0, opacity:1, duration: 0.8, stagger:0.3})
    .to("#project .proj5 .proj-info-sub h4",{x:0, y:0, opacity:1, duration: 0.6, stagger:0.3}, "-=0.3")
    .to("#project .proj5 .proj-info-sub h3 span",{className:"+=fade-box-white"}, "-=1.3")
    .to("#project .proj5 .short-info",{x:0, y:0, opacity:1, rotate:0, duration: 0.6, stagger:0.3}, "-=0.3")
    .to("#project .proj5 .proj-profile",{x:0, y:0, opacity:1, rotate:0, duration: 0.6, stagger:0.3}, "-=0.3")
    .to("#project .proj5 .details",{x:0, y:0, opacity:1, rotate:0, duration: 0.6, stagger:0.3}, "-=0.3")
    .to("#project .proj5 .btn",{x:0, y:0, opacity:1, duration: 0.6, ease: "bounce.out"})
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

window.addEventListener("scroll", ()=> {
  let scrollYOffset = (window.pageYOffset || document.documentElement.scrollTop)
  //스크롤 효과          
  document.getElementById("contents").style.left = -scrollYOffset + "px";
  
  let scrollArea = scrollYOffset - document.querySelector(".scroll").offsetLeft;
  let levelXMinus2 = "translateX("+(scrollArea)*-0.2+"px)";

  document.querySelector(".slider-inner").style.transform = levelXMinus2;
});