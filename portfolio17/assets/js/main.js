/* ---------- main-loading ------------ */
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
  .to("#main .part1 h2", {className:"+=fade-box-white"})
  .to("#main .part1 #main-img-wrap", {className:"+=wow"}, "+=0.5")
  .to("#main .part1 #main-img-wrap .main-img1", {opacity: 1}, "+=0.4")
  .to("#main .part1 #main-img-wrap", {className:"+=hide", opacity:1}, "+=2")
  .to("#main .text-row", {opacity:1}, "-=2.5")
  .to("#main .part2 #main-img-wrap", {className:"+=wow"}, "-=2")
  .to("#main .part2 #main-img-wrap .main-img2", {opacity: 1}, "-=0.8")
  .to("#main .part2 #main-img-wrap", {className:"+=hide", opacity:1}, "+=1")
  .to("#main .part2 h2", {className:"+=fade-box-white"}, "-=2.5")
  .to("#main .part3 p", {opacity: 1}, "-=2")
  .to("#main .part3 #main-img-wrap", {className:"+=wow"}, "-=1.5")
  .to("#main .part3 #main-img-wrap .main-img3", {opacity: 1}, "-=0.4")
  .to("#main .part3 #main-img-wrap", {className:"+=hide", opacity:1}, "+=1")
},2000)

window.addEventListener("scroll", function(){
  let pageYOffset = window.pageYOffset + screen.height/2; 

  if( pageYOffset > document.querySelector("#main .part3").offsetTop + 400){
    let tl = gsap.timeline();
    tl.to("#mountain", {x:0, y:0, duration:1, opacity:1})
    .to("#main-intro #main-intro-svg",{x:0, y:0, opacity:1, rotate:0, duration: 1, stagger:0.3})
  }
  if( pageYOffset > document.querySelector(".main-intro-inner").offsetTop + 1000){
    let tl = gsap.timeline();
    tl.to(".main-intro-inner .sub-first .small-sub", {x:0, y:0, duration:1, opacity:1})
    .to(".main-intro-inner .sub-first h2 span",{x:0, y:0, opacity:1, duration: 0.5, stagger:0.3})
    .to(".main-intro-inner h2 span.ani-bottom",{x:0, y:0, opacity:1, duration: 0.5, stagger:0.3}, "-=0.5")
    .to(".main-intro-inner .intro-text-sub p",{x:0, y:0, opacity:1, duration: 0.5, stagger:0.3})
    .to(".main-intro-inner .main-introduce",{x:0, y:0, opacity:1, duration: 0.5, stagger:0.3})
    .to(".main-intro-inner .btn",{x:0, y:0, opacity:1, duration: 0.5, ease: "bounce.out"})
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

/* -------- 스크롤에 따라 transform 변경 -------- */
window.addEventListener("scroll", ()=> {
  let scrollYOffset = (window.pageYOffset || document.documentElement.scrollTop)
  //스크롤 효과          
  document.getElementById("contents").style.top = -scrollYOffset + "px";
  let scrollArea2 = scrollYOffset - document.querySelector(".scroll").offsetTop;

  let ToplevelYMinus1 = "translateY("+(scrollArea2)*-0.1+"px)",
  ToplevelY1 = "translateY("+(scrollArea2)*0.15+"px)",
  ToplevelY2 = "translateY("+(scrollArea2)*0.2+"px)",
  TopevelY3 = "translateY("+(scrollArea2)*0.3+"px)";

  document.querySelector(".main-img1").style.transform = ToplevelY1;
  document.querySelector(".main-img2").style.transform = ToplevelY1;
  document.querySelector(".main-img3").style.transform = ToplevelY1;
});

/* -------- #parachute 스크롤 이동 -------- */
function positionTheSvg() {
  var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  console.log(document.body.scrollTop);

  var path = document.getElementById("theMotionPath");
  var pathLen = path.getTotalLength();
  var pt = path.getPointAtLength(scrollPercentage * pathLen);
  
  var parachute = document.getElementById("parachute");
  parachute.setAttribute("transform", "translate("+ pt.x + "," + pt.y + ")");
};
window.addEventListener("scroll", positionTheSvg);
positionTheSvg();
