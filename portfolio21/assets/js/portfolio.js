// gsap
let tl = gsap.timeline();

tl.to(".repeat_title h1", {
  duration: 2,
  delay: 1.5,
  opacity: 1,
  ease: Back.easeOut.config(1.7),
});

tl.to(".menu_btn, .site_btn_a", {
  duration: 1,
  delay: -1.5,
  x: 0,
  opacity: 1,
  ease: Back.easeOut.config(1.7),
});

//subtitle - web site
setTimeout(function(){
    $(".web.port_subtitle").addClass("active");
},1500);

tl.to(".web.port_subtitle span", {
  duration: 1,
  delay: -1.5,
  y: 0,
  opacity: 1,
  stagger: 0.1,
  ease: Back.easeOut.config(1.7),
});

tl.to(".web.port_subtitle h6", {
  duration: 0.5,
  delay: -0.5,
  y: 0,
  opacity: 1,
  ease: Back.easeOut.config(1.7),
});

//contents
$(window).scroll(function () {
  let pageYOffset = $(window).scrollTop();

  //contents - cont1
  if (pageYOffset > $(".cont1").offset().top - $(window).height() / 2) {
    let tl = gsap.timeline();

    $(".cont1.port_cont_wrap").addClass("active");

    tl.to(".cont1.port_cont_wrap", {
      duration: 1,
      opacity: 1,
      ease: Back.easeOut.config(1.7),
    });

    tl.to(".cont1 .port_cont_title", {
      duration: 0.5,
      delay: 0,
      x: 0,
      opacity: 1,
      ease: Back.easeOut.config(1.7),
    });

    setTimeout(function () {
      jQuery(".cont1 .port_cont_text").addClass("active");
    }, 1000);

    tl.to(".cont1 .port_cont_text p", {
      duration: 0.5,
      delay: 0.5,
      opacity: 1,
      ease: Back.easeOut.config(1.7),
    });

    tl.to(".cont1 .port_cont_left .view_btn", {
      duration: 1,
      delay: 0,
      opacity: 1,
      ease: Back.easeOut.config(1.7),
    });

    tl.to(".cont1 .port_right_s1", {
      duration: 0.5,
      delay: -0.5,
      y: 0,
      opacity: 1,
      ease: Back.easeOut.config(1.7),
    });

    tl.to(".cont1 .port_keyword", {
      duration: 1,
      delay: -0.5,
      x: 0,
      opacity: 1,
      ease: "circ.easeIn",
    });
  }

  //contents - cont2
  if (pageYOffset > $(".cont2").offset().top - $(window).height() / 2) {
    let tl = gsap.timeline();

    $(".cont2.port_cont_wrap").addClass("active");

    tl.to(".cont2.port_cont_wrap", {
      duration: 1,
      opacity: 1,
      ease: Back.easeOut.config(1.7),
    });

    tl.to(".cont2 .port_cont_title", {
      duration: 0.5,
      delay: 0,
      x: 0,
      opacity: 1,
      ease: Back.easeOut.config(1.7),
    });

    setTimeout(function () {
      jQuery(".cont2 .port_cont_text").addClass("active");
    }, 1000);

    tl.to(".cont2 .port_cont_text p", {
      duration: 0.5,
      delay: 0.5,
      opacity: 1,
      ease: Back.easeOut.config(1.7),
    });

    tl.to(".cont2 .port_cont_left .view_btn", {
      duration: 1,
      delay: 0,
      opacity: 1,
      ease: Back.easeOut.config(1.7),
    });

    tl.to(".cont2 .port_right_s1", {
      duration: 0.5,
      delay: -0.5,
      y: 0,
      opacity: 1,
      ease: Back.easeOut.config(1.7),
    });

    tl.to(".cont2 .port_right_s2", {
      duration: 0.5,
      delay: 0,
      x: 0,
      opacity: 1,
      ease: "circ.easeIn",
    });

    tl.to(".cont2 .port_right_s3", {
      duration: 0.5,
      delay: 0,
      x: 0,
      opacity: 1,
      ease: "circ.easeIn",
    });

    tl.to(".cont2 .port_keyword", {
      duration: 1,
      delay: -0.5,
      x: 0,
      opacity: 1,
      ease: "circ.easeIn",
    });
  }

  //contents - cont3
  if (pageYOffset > $(".cont3").offset().top - $(window).height() / 2) {
    let tl = gsap.timeline();

    $(".cont3.port_cont_wrap").addClass("active");

    tl.to(".cont3.port_cont_wrap", {
      duration: 1,
      opacity: 1,
      ease: Back.easeOut.config(1.7),
    });

    tl.to(".cont3 .port_cont_title", {
      duration: 0.5,
      delay: 0,
      x: 0,
      opacity: 1,
      ease: Back.easeOut.config(1.7),
    });

    setTimeout(function () {
      jQuery(".cont3 .port_cont_text").addClass("active");
    }, 1000);

    tl.to(".cont3 .port_cont_text p", {
      duration: 0.5,
      delay: 0.5,
      opacity: 1,
      ease: Back.easeOut.config(1.7),
    });

    tl.to(".cont3 .port_cont_left .view_btn", {
      duration: 1,
      delay: 0,
      opacity: 1,
      ease: Back.easeOut.config(1.7),
    });

    tl.to(".cont3 .port_right_s1", {
      duration: 0.5,
      delay: -0.5,
      y: 0,
      opacity: 1,
      ease: Back.easeOut.config(1.7),
    });

    tl.to(".cont3 .port_right_s2", {
      duration: 0.5,
      delay: 0,
      x: 0,
      opacity: 1,
      ease: "circ.easeIn",
    });

    tl.to(".cont3 .port_right_s3", {
      duration: 0.5,
      delay: 0,
      x: 0,
      opacity: 1,
      ease: "circ.easeIn",
    });

    tl.to(".cont3 .port_keyword", {
      duration: 1,
      delay: -0.5,
      x: 0,
      opacity: 1,
      ease: "circ.easeIn",
    });
  }

  //subtitle - mobile site
  if (pageYOffset > $(".mobile").offset().top - $(window).height() / 2) {
    let tl = gsap.timeline();
    $(".port_subtitle.mobile").addClass("active");

    tl.to(".mobile.port_subtitle span", {
      duration: 1,
      delay: 0,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: Back.easeOut.config(1.7),
    });

    tl.to(".mobile.port_subtitle h6", {
      duration: 0.5,
      delay: -0.5,
      y: 0,
      opacity: 1,
      ease: Back.easeOut.config(1.7),
    });
  }

  if (
    pageYOffset >
    $(".mobile_page_wrap").offset().top - $(window).height() / 2
  ) {
    let tl = gsap.timeline();
    $(".page_1 img, .page_2 img, .page_3 img").addClass("active");
  }

  gsap.to(".border_text", {
    scrollTrigger: {
      trigger: ".border_text",
      start: "top 50%",
    },
    duration: 1,
    x: 0,
    ease: Back.easeOut.config(1.7),
  });

  gsap.to(".mobile_page_wrap", {
    scrollTrigger: {
      trigger: ".mobile_page_wrap",
      start: "top 40%",
    },
    duration: 1,
    y: 0,
    opacity: 1,
    ease: Back.easeOut.config(1.7),
  });

  gsap.to(".next_container", {
    scrollTrigger: {
      trigger: ".next_container",
      start: "top 50%",
      toggleActions: "restart none none none",
    },
    duration: 1,
    y: 0,
    opacity: 1,
    ease: Back.easeOut.config(1.7),
  });

  if (
    pageYOffset >
    $(".port_mobile_title").offset().top - $(window).height() * 0.7
  ) {
    let tl = gsap.timeline();
    $(".port_mobile_title").addClass("active");

    tl.to(".port_mobile_title h2", {
      duration: 0.5,
      delay: 1,
      y: 0,
      opacity: 1,
      ease: Back.easeOut.config(1.7),
    });

    tl.to(".port_mobile_title .view_btn", {
      duration: 0.5,
      delay: 0,
      y: 0,
      opacity: 1,
      ease: Back.easeOut.config(1.7),
    });
  }
});
