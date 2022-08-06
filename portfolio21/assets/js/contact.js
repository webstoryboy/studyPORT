// gsap
let tl = gsap.timeline();

setTimeout(function(){
    $("#contact .repeat_title").addClass("active");
},1500)

tl.to(".repeat_title h1", {
    duration: 2,
    delay: 2.5,
    opacity: 1,
    ease: Back.easeOut.config(1.7)
});

tl.to("#contact .top_title span", {
    duration: 1,
    delay: -1.5,
    y: 0,
    opacity: 1,
    stagger: 0.1,
    ease: Back.easeOut.config(1.7)
  });

tl.to(".menu_btn, .site_btn_a", {
    duration: 1,
    delay: -3,
    x: 0,
    opacity: 1,
    ease: Back.easeOut.config(1.7)
});

tl.to("#contact .rotate_smile, .contact_eye", {
    duration: 1,
    delay: -2,
    x: 0,
    opacity: 1,
    ease: Back.easeOut.config(1.7)
});

tl.to(".contact_bomb", {
    duration: 1,
    delay: -1,
    opacity: 1,
    ease: Back.easeOut.config(1.7)
});

tl.to(".contact_num", {
    duration: 1,
    delay: -1,
    opacity: 1,
    ease: Back.easeOut.config(1.7)
});

$(".contact_bomb").addClass("active");
$(".contact_num").delay(10000).addClass("active");




 
  