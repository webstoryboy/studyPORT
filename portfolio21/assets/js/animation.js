// gsap
let tl = gsap.timeline();

tl.to(".repeat_title h1", {
    duration: 2,
    delay: 1.5,
    opacity: 1,
    ease: Back.easeOut.config(1.7)
});

tl.to(".menu_btn, .site_btn_a", {
    duration: 1,
    delay: -1.5,
    x: 0,
    opacity: 1,
    ease: Back.easeOut.config(1.7)
});

setTimeout(function(){
    $(".grid-wrap").addClass("active");
},2000);


tl.to(".content__top_title", {
    duration: 1,
    delay: 1,
    opacity: 1,
    ease: Back.easeOut.config(1.7)
});

gsap.to(".next_container .container", {
    scrollTrigger: {
      trigger: ".next_container .container",
      start: ".next_container 80%",
      toggleActions: "restart none none none",
    },
    duration: 1,
    y: 0,
    opacity: 1,
    ease: Back.easeOut.config(1.7)
});

// $(window).scroll(function () {
//     let pageYOffset = $(window).scrollTop();

//     $(".grid__item").each(function(){
//         if (pageYOffset > $(this).offset().top - $(window).height() / 2) {
    
//             let tl = gsap.timeline();
           
//             tl.to(this, {
//                 duration: 1,
//                 delay: 0,
//                 y: 0,
//                 opacity: 1,
//                 ease: Back.easeOut.config(1.7)
//             });
//         } 
//     });
// });


// $(window).scroll(function () {
//     let pageYOffset = $(window).scrollTop();

//     $(".grid__item").each(function(){
//         if (pageYOffset > $(this).offset().top - $(window).height() / 2) {
    
//             let tl = gsap.timeline();
//             let thisOdd = $(this).children(".grid__item:odd");
//             let thisEven = $(this).children(".grid__item:even");
            
//             tl.to(thisOdd, {
//                 duration: 1,
//                 delay: 0,
//                 y: 0,
//                 opacity: 1,
//                 ease: Back.easeOut.config(1.7)
//             });

//             tl.to(thisEven, {
//                 duration: 1,
//                 delay: 0.3,
//                 y: 0,
//                 opacity: 1,
//                 ease: Back.easeOut.config(1.7)
//             });
//         } 
//     });
// });