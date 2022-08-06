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
  .to("#contact-main h2 span", {className:"+=fade-box-white"})
  .to("#contact-main .form-box", {x:0, y:0, opacity:1, rotate:0, duration: 0.5, stagger:0.3}, "+=0.7")
  .to("#contact-main #waves", {x:0, y:0, opacity:1, rotate:0, duration: 0.5, stagger:0.3}, "-=0.3")
  .to("#contact-main #flg", {x:0, y:0, opacity:1, rotate:0, duration: 0.5, stagger:0.3}, "-=0.3")
  .to("#contact-main #sun", {x:0, y:0, opacity:1, rotate:0, duration: 0.5, stagger:0.3}) 
  .to("#contact-main #bird1, #contact-main #bird2", {x:0, y:0, opacity:1, rotate:0, duration: 0.5, stagger:0.3}, "-=0.3") 
  .to("#contact-main #contact-person", {opacity:1, rotate:0, duration: 1, stagger:0.3}, "-=0.3")
  .to("#contact-main .float-email", {opacity:1, rotate:0, duration: 0.5, stagger:0.3}, "-=0.3")
  setTimeout(() => {
    let typing = document.querySelector("#contact-main .float-email");
    typing.classList.add("typing")
  },3900)
},2000)

window.addEventListener("scroll", function(){
  let pageYOffset = window.pageYOffset + screen.height/2; 
  if( pageYOffset >  document.querySelector("#contact").offsetTop){
    let tl = gsap.timeline();
    tl.to("#contact .contact-svg.fade-in", {x:0, y:0, opacity:1, duration: 0.5, stagger:0.3})
    .to("#contact .contact-sub.ani-right",{x:0, y:0, opacity:1, duration: 0.5, stagger:0.3})
    .to("#contact p.ani-right",{x:0, y:0, opacity:1, duration: 0.5, stagger:0.3, ease: "power3.inout"})
    .to("#contact .btn", {x:0, y:0, opacity:1, duration: 0.5, ease: "bounce.inout"})
    .to("#footer", {x:0, y:0, opacity:1, duration: 0.5, stagger:0.3})
  }
});