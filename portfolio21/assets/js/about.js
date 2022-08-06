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

tl.to(".about_arrow", {
    duration: 0.5,
    delay: -1.5,
    x:0,
    y: 0,
    opacity: 1,
    ease: Back.easeOut.config(1.7)
});

tl.to(".cont1_title_wrap", {
    duration: 1,
    delay: -0.5,
    x: 0,
    opacity: 1,
    rotation: 360
});

tl.to(".cont1_title > span ", {
    duration: 0.5,
    delay: -0.5,
    y: 0,
    opacity: 1,
});

tl.to(".cont1_img_wrap", {
    duration: 1,
    delay: 0,
    y: 0,
    opacity: 1
});

tl.to(".cont1_text svg", {
    duration: 1,
    delay: -1,
    y: 0,
    opacity: 1
});

tl.to(".cont1_text p", {
    duration: 0.5,
    delay: 0,
    opacity: 1
});

gsap.to(".cont1_img2", {
    scrollTrigger: {
      trigger:  ".cont1_img2",
      start: "top 50%",
      toggleActions: "restart none none none",
    },
    duration: 1,
    y: 0,
    opacity: 1,
    ease: Back.easeOut.config(1.7)
});

gsap.to(".about_bomb", {
    scrollTrigger: {
      trigger:  ".about_bomb",
      start: ".cont1_img2 20%",
      toggleActions: "restart none none none",
    },
    duration: 1,
    y: 0,
    opacity: 1,
    ease: Back.easeOut.config(1.7)
});

gsap.to(".rotate_smile", {
    scrollTrigger: {
      trigger:  ".rotate_smile",
      start: "top 50%",
      toggleActions: "restart none none none",
    },
    duration: 1,
    x: 0,
    opacity: 1,
    ease: Back.easeOut.config(1.7)
});

gsap.to(".border_text", {
    scrollTrigger: {
      trigger:  ".border_text",
      start: "top 50%",
    },
    duration: 1,
    x: 0,
    ease: Back.easeOut.config(1.7)
});

gsap.to(".about_cont2_text", {
    scrollTrigger: {
      trigger:  ".about_cont2_text",
      start: ".border_text 30%",
      toggleActions: "restart none none none",
    },
    duration: 1,
    opacity: 1,
    y: 0,
    ease: Back.easeOut.config(1.7)
});

gsap.to(".about_cont2_text span", {
    scrollTrigger: {
      trigger:  ".about_cont2_text span",
      start: ".about_cont2_text 65%",
      toggleActions: "restart none none none",
    },
    duration: 0.5,
    opacity: 1,
    y: 0,
    ease: Back.easeOut.config(1.7)
});

gsap.to(".about_cont3_text", {
    scrollTrigger: {
      trigger:  ".about_cont3_text",
      start: "top 50%",
      toggleActions: "restart none none none",
    },
    duration: 1,
    opacity: 1,
    y: 0,
    ease: Back.easeOut.config(1.7)
});

gsap.to(".about_cont3_text h6", {
    scrollTrigger: {
      trigger:  ".about_cont3_text h6",
      start: "top 50%",
      toggleActions: "restart none none none",
    },
    duration: 1,
    x: 0,
    opacity: 1,
    ease: Back.easeOut.config(1.7)
});

$(window).scroll(function () {
    let pageYOffset = $(window).scrollTop();
    //about_cont3
    if (pageYOffset > $(".about_cont3").offset().top - $(window).height() / 2) {
        let tl = gsap.timeline();
        
        tl.to(".about_cont3_text p", {
            duration: 1,
            x: 0,
            opacity: 1,
            ease: Back.easeOut.config(1.7)
        });
        
        setTimeout(function(){
            $(".underline").each(function(){
                $(this).addClass("active");
            });
        },800);
    }
});

gsap.to(".next_container", {
    scrollTrigger: {
      trigger:  ".next_container",
      start: "top 50%",
      toggleActions: "restart none none none",
    },
    duration: 1,
    y: 0,
    opacity: 1,
    ease: Back.easeOut.config(1.7)
});


