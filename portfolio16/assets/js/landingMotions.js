//page Tansition animaiton
function transitionAnimation() {
    gsap.to('.loader-overlay.one', {
        duration: 1,
        scaleX: 1,
        transformOrigin: 'left',
        ease: 'power1.inOut',
    });
    gsap.to('.loader-overlay.one', {
        duration: 1,
        scaleX: 0,
        transformOrigin: 'right',
        ease: 'power1.inOut',
        delay: 2,
    });
    gsap.to('.loader-overlay.two', {
        duration: 1.4,
        scaleX: 1,
        transformOrigin: 'left',
        ease: 'power1.inOut',
    });
    gsap.to('.loader-overlay.two', {
        duration: 1.4,
        scaleX: 0,
        transformOrigin: 'right',
        ease: 'power1.inOut',
        delay: 1.6,
    });
}

//FADE IN ANIMATION
// function contentInAnimation() {
//     gsap.from(".logo", {
//         duration: 1,
//         y: -100,
//         delay: 1.2
//     })
//     gsap.from("ul li", {
//         duration: 1,
//         y: -100,
//         delay: 1.4,
//         stagger: .2
//     })
//     gsap.from(".cart", {
//         duration: 1,
//         y: -100,
//         delay: 1
//     })
//     gsap.from(".text-inner", {
//         duration: 1,
//         opacity: 0,
//         delay: 1
//     })
// }

//FADE OUT ANIMATION
// function contentOutAnimation() {
//     gsap.from(".logo", {
//         duration: 1,
//         y: -100,
//     })
//     gsap.from("ul li", {
//         duration: 1,
//         y: -100,
//         stagger: .2
//     })
//     gsap.from(".cart", {
//         duration: 1,
//         y: -100,
//         delay: 1
//     })
//     gsap.from(".text-inner", {
//         duration: 1,
//         y: -100,
//         opacity: 0,
//         delay: 1.2
//     })
// }

//PAGE DELAY - PROMISE FUNCTION
// function delay(n) {
//     n = n || 1000; // 4000 is default time set
//     return new Promise((done) => {
//         setTimeout(() => {
//             done();
//         }, n);
//     });
// }
// //BARBA SET UP
// $(function () {
//     barba.init();
//     transitions: [
//         {
//             name: 'default-transition',
//             async leave(data) {
//                 //페이지 떠날때 애니메이션
//                 const done = this.async();

//                 contentInAnimation();

//                 setTimeout(function () {
//                     transitionAnimation();
//                 }, 2000);
//                 await delay(3000); // 3000 = 3sec
//                 done();
//             },
//             async enter(data) {
//                 //페이지 들어올때 애니메이션
//                 contentOutAnimation();
//             },
//         },
//     ];
// });
