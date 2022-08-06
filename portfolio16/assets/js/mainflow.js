// gsap.to(".main-text h1:nth-child(1)", {
//     x:-800,
//     scrollTrigger: {
//         trigger: ".main-text",
//         start: "top",
//         end:"+=1500",
//         scrub:true,
//         // markers: true,
//         pin: true,
//         toggleAction: "restart none none none"
//         // toggleAction: "restart reverse none reset"
//                       //onEnter //onLeave //onEnterBack //onLeaveBack
//                       //play pause resume reverse restart reset complete none
//     }
// })
// gsap.to(".main-text h2:nth-child(2)", {
//     x:-800,
//     scrollTrigger: {
//         trigger: ".main-text",
//         start: "top",
//         end:"+=1200",
//         scrub:true,
//         // markers: true,
//         pin: true,
//         toggleAction: "restart none none none"
//         // toggleAction: "restart reverse none reset"
//                       //onEnter //onLeave //onEnterBack //onLeaveBack
//                       //play pause resume reverse restart reset complete none
//     }
// })
// gsap.to(".main-text h1:nth-child(3)", {
//     x:-700,
//     scrollTrigger: {
//         trigger: ".main-text",
//         start: "top",
//         end:"+=1000",
//         scrub:true,
//         // markers: true,
//         pin: true,
//         toggleAction: "restart none none none"
//         // toggleAction: "restart reverse none reset"
//                       //onEnter //onLeave //onEnterBack //onLeaveBack
//                       //play pause resume reverse restart reset complete none
//     }
// })
// gsap.to(".main-text h2:nth-child(4)", {
//     x:-900,
//     scrollTrigger: {
//         trigger: ".main-text",
//         start: "top",
//         end:"+=1500",
//         scrub:true,
//         // markers: true,
//         pin: true,
//         toggleAction: "restart none none none"
//         // toggleAction: "restart reverse none reset"
//                       //onEnter //onLeave //onEnterBack //onLeaveBack
//                       //play pause resume reverse restart reset complete none
//     }
// })

// gsap.to('.sec2-container', {
//     scale: 1,
//     duration: 5,
//     scrollTrigger: {
//         trigger: '.sec2',
//         start: 'center center',
//         end: 'bottom top',
//         scrub: true,
//         pin: true,
//         // markers: true,
//         // toggleClass: 'on',
//     },
// });
// gsap.to('.keyword', {
//     scrollTrigger: {
//         trigger: '.sec2',
//         start: 'center center',
//         end: '+=2800',
//         scrub: true,
//         // pin: true,
//         // markers: true,
//         toggleClass: 'on',
//         toggleAction: 'restart none none none',
//     },
// });
//career 애니메이션
gsap.to('.scroll-btn', {
    x: 100,
    duration: 5,
    opacity: 0,
    scrollTrigger: {
        trigger: '.sec2',
        start: 'top 80%',
        // end: '+=1800',
        // pin: true,
        scrub: true,
        // markers: true,
        toggleAction: 'restart reverse none none',
        // toggleAction: "restart reverse none reset"
        //onEnter //onLeave //onEnterBack //onLeaveBack
        //play pause resume reverse restart reset complete none
    },
});
//career 애니메이션
gsap.to('.career-title .bg-box', {
    scrollTrigger: {
        trigger: '.career-title .bg-box',
        start: 'top',
        end: '+=1800',
        scrub: 0.02,
        pin: true,
        // markers: true,
        toggleAction: 'restart none none none',
        // toggleAction: "restart reverse none reset"
        //onEnter //onLeave //onEnterBack //onLeaveBack
        //play pause resume reverse restart reset complete none
    },
});
// gsap.to(".bg-change", {
//     scrollTrigger: {
//         trigger: ".bg-change",
//         start: "top 10%",
//         scrub:0.02,
//         markers: true,
//         toggleClass: "white",
//         toggleAction: "restart none none none"
//     }
// })

//skill 애니메이션
// gsap.to(".sec2", {
//     scrollTrigger: {
//         trigger: ".sec2",
//         start: "-=500",
//         end:"+=2000",
//         scrub:0.2,
//         // markers: true,
//         toggleAction: "restart none none none",
//         toggleClass: "on"
//     }

// })

// gsap.to(".about-me", {
//     y:50,
//     scrollTrigger: {
//         trigger: ".sec3",
//         start: "-=400",
//         end:"+=1000",
//         scrub:0.2,
//         // markers: true,
//         toggleAction: "restart none none none",
//         toggleClass: "on"
//     }
// })
// gsap.to(".about-me h3", {
//     x:20,
//     scrollTrigger: {
//         trigger: ".sec3",
//         start: "-=400",
//         end:"+=800",
//         scrub:0.2,
//         // markers: true,
//         toggleAction: "restart none none none"
//     }
// })
//모바일 화면 스크롤시 움직임
gsap.to('.mobile-cont.i-1 .row', {
    x: -50,
    duration: 1,
    scrollTrigger: {
        trigger: '.mobile-cont.i-1',
        start: 'center 80%',
        end: 'bottom center',
        scrub: true,
        // markers: true,
        toggleAction: 'restart reverse none none',
    },
});
gsap.to('.mobile-cont.i-2 .row', {
    x: 50,
    duration: 1,
    scrollTrigger: {
        trigger: '.mobile-cont.i-2',
        start: 'center 80%',
        end: 'bottom center',
        scrub: true,
        // markers: true,
        toggleAction: 'restart reverse none none',
    },
});
gsap.to('.mobile-cont.i-3 .row', {
    x: 50,
    duration: 1,
    scrollTrigger: {
        trigger: '.mobile-cont.i-3',
        start: 'center 80%',
        end: 'bottom center',
        scrub: true,
        // markers: true,
        toggleAction: 'restart reverse none none',
    },
});
gsap.to('.sec6 .w-title', {
    scrollTrigger: {
        trigger: '.sec6 .w-title',
        start: '-=300',
        end: '=+600',
        scrub: 0.2,
        // markers: true,
        toggleAction: 'restart none none none',
        toggleClass: 'on',
    },
});
gsap.to('.sec7 .w-title', {
    scrollTrigger: {
        trigger: '.sec7 .w-title',
        start: '-=300',
        end: '=+600',
        scrub: 0.2,
        // markers: true,
        toggleAction: 'restart none none none',
        toggleClass: 'on',
    },
});
gsap.to('.sec8 .w-title', {
    scrollTrigger: {
        trigger: '.sec8 .w-title',
        start: '-=300',
        end: '=+600',
        scrub: 0.2,
        // markers: true,
        toggleAction: 'restart none none none',
        toggleClass: 'on',
    },
});
gsap.to('.sec9 .w-title', {
    scrollTrigger: {
        trigger: '.sec9 .w-title',
        start: '-=300',
        end: '=+600',
        scrub: 0.2,
        // markers: true,
        toggleAction: 'restart none none none',
        toggleClass: 'on',
    },
});
gsap.to('.sec6 .bg-num .svgWrap text', {
    y: -10,
    scrollTrigger: {
        trigger: '.sec6 .bg-num .svgWrap text',
        start: '-=600',
        end: '=+600',
        scrub: 0.2,
        // markers: true,
        toggleAction: 'restart none none none',
        toggleClass: 'aniText2',
    },
});
gsap.to('.sec7 .bg-num .svgWrap text', {
    y: -10,
    scrollTrigger: {
        trigger: '.sec7 .bg-num .svgWrap text',
        start: '-=600',
        end: '=+600',
        scrub: 0.2,
        // markers: true,
        toggleAction: 'restart none none none',
        toggleClass: 'aniText2',
    },
});
gsap.to('.sec8 .bg-num .svgWrap text', {
    y: -10,
    scrollTrigger: {
        trigger: '.sec8 .bg-num .svgWrap text',
        start: '-=600',
        end: '=+600',
        scrub: 0.2,
        // markers: true,
        toggleAction: 'restart none none none',
        toggleClass: 'aniText2',
    },
});
gsap.to('.sec9 .bg-num .svgWrap text', {
    y: -10,
    scrollTrigger: {
        trigger: '.sec9 .bg-num .svgWrap text',
        start: '-=600',
        end: '=+600',
        scrub: 0.2,
        // markers: true,
        toggleAction: 'restart none none none',
        toggleClass: 'aniText2',
    },
});
