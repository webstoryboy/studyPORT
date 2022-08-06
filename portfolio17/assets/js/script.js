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
    let blueLine2 = document.getElementById("blue-line2")
     tl.to("#header", {x:0, y:0, duration:0.5, ease: "back.out(2)"})
    tl.to("#script .script-title h2 span", {className:"+=fade-box-white"})
    bluePath.classList.add("dash");
    blueLine2.classList.add("dash");
  },2000)
 
 
 window.addEventListener("scroll", function(){
   let pageYOffset = window.pageYOffset + screen.height/2; 

   if( pageYOffset > document.querySelector(".script-title").offsetTop){
        let tl = gsap.timeline();
        tl.to("#script .script1 .script---sub h4 span", {className:"+=fade-box-white"})
        .to("#script .script1 .script---sub h3 span", {className:"+=fade-box-blue"})
    }
   if( pageYOffset > document.querySelector(".script-box1").offsetTop + 800 ){
        let tl = gsap.timeline();
        tl.to("#script .script-box1 .script-sub h3 span",{className:"+=fade-box-white"})
        .to("#script .script-box1 .script-iframe", {x:0, y:0, opacity:1, duration: 0.5, stagger:0.3})
    }
    if( pageYOffset > document.querySelector(".script-box2").offsetTop + 800 ){
        let tl = gsap.timeline();
        tl.to("#script .script-box2 .script-sub h3 span",{className:"+=fade-box-white"})
        .to("#script .script-box2 .script-iframe", {x:0, y:0, opacity:1, duration: 0.5, stagger:0.3})
    }
    if( pageYOffset > document.querySelector(".script-box3").offsetTop + 800 ){
        let tl = gsap.timeline();
        tl.to("#script .script-box3 .script-sub h3 span",{className:"+=fade-box-white"})
        .to("#script .script-box3 .script-iframe", {x:0, y:0, opacity:1, duration: 0.5, stagger:0.3})
    }
  
    if( pageYOffset > document.querySelector(".script2 .script---sub").offsetTop +300){
        let tl = gsap.timeline();
        tl.to("#script .script2 .script---sub h4 span", {className:"+=fade-box-white"})
        .to("#script .script2 .script---sub h3 span", {className:"+=fade-box-blue"})
    }
 
   if( pageYOffset > document.querySelector(".script-box4").offsetTop + 800 ){
        let tl = gsap.timeline();
        tl.to("#script .script-box4 .script-sub h3 span",{className:"+=fade-box-white"})
        .to("#script .script-box4 .script-iframe", {x:0, y:0, opacity:1, duration: 0.5, stagger:0.3})
    }
    if( pageYOffset > document.querySelector(".script-box5").offsetTop + 800 ){
        let tl = gsap.timeline();
        tl.to("#script .script-box5 .script-sub h3 span",{className:"+=fade-box-white"})
        .to("#script .script-box5 .script-iframe", {x:0, y:0, opacity:1, duration: 0.5, stagger:0.3})
    }
    if( pageYOffset > document.querySelector(".script-box6").offsetTop + 800 ){
        let tl = gsap.timeline();
        tl.to("#script .script-box6 .script-sub h3 span",{className:"+=fade-box-white"})
        .to("#script .script-box6 .script-iframe", {x:0, y:0, opacity:1, duration: 0.5, stagger:0.3})
    } 
    if( pageYOffset >  document.querySelector("#contact").offsetTop){
      let tl = gsap.timeline();
      tl.to("#contact .contact-svg.fade-in", {x:0, y:0, opacity:1, duration: 0.5, stagger:0.3})
      .to("#contact .contact-sub.ani-right",{x:0, y:0, opacity:1, duration: 0.5, stagger:0.3})
      .to("#contact p.ani-right",{x:0, y:0, opacity:1, duration: 0.5, stagger:0.3, ease: "power3.inout"})
      .to("#contact .btn.ani-top", {x:0, y:0, opacity:1, duration: 0.5, stagger:0.3, ease: "bounce.inout"})
      .to("#footer", {x:0, y:0, opacity:1, duration: 0.5, stagger:0.3})
    }
 });