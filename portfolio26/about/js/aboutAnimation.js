gsap.set("#wrap", {
  opacity: 1,
});
gsap.set("#section1 h1", {
  y: "-60vh",
  scale: 2,
});
gsap.to("#section1 h1", {
  duration: 0.7,
  y: 0,
  scale: 1,
  ease: "back.out(1.4)",
});

gsap.set("#section1 p", {
  y: "60vh",
  scale: 2,
});
gsap.to("#section1 p", {
  duration: 0.7,
  delay: 0.5,
  y: 0,
  scale: 1,
  ease: "back.out(1.2)",
});
gsap.set("#section1 .o1", {
  x: "30vw",
  y: "60vh",
  scale: 2,
  opacity: 0,
});
gsap.to("#section1 .o1", {
  duration: 0.5,
  delay: 1.3,
  x: 0,
  y: 0,
  scale: 1,
  opacity: 1,
  ease: "back.out(2.5)",
});
gsap.to("#section1 h1", {
  duration: 0,
  delay: 3,
  animationName: "bounce",
});

gsap.to("#section1 h1 > span", {
  duration: 0,
  delay: 3,
  animationName: "shake",
});

gsap.to("#section1 p", {
  duration: 0,
  delay: 3,
  animationName: "bounce",
});

setTimeout(() => {
  update();
  gsap.to("#bgBox", {
    opacity: 1,
    scale: 1,
  });
}, 2000);
let scrollTop;
function scroll() {
  scrollTop =
    window.pageYOffset || document.documentElement.scrollTop || window.scrollY;

  let heightAll = document.querySelector("#wrap").offsetHeight;
  document.body.style.height = `${heightAll}px`;

  //   gsap.to(".picture1", {
  //     y: scrollTop * 0.05,
  //   });
  gsap.to(".picture2", {
    duration: 2.2,
    y: scrollTop * 0.05,
    ease: "linear",
  });
  gsap.to(".picture3", {
    duration: 2.2,
    y: -scrollTop * 0.05,
    ease: "linear",
  });
  gsap.to(".picture4", {
    duration: 2.2,
    y: scrollTop * 0.1,
    ease: "linear",
  });
  gsap.to(".picture5", {
    duration: 2.2,
    y: -scrollTop * 0.05,
    ease: "linear",
  });
  gsap.to(".picture6", {
    duration: 2.2,
    y: scrollTop * 0.05,
    ease: "linear",
  });
  gsap.to(".picture7", {
    duration: 2.2,
    y: scrollTop * 0.15,
    ease: "linear",
  });
  let xxyy = true;
  if (
    scrollTop + window.innerHeight >=
      document.querySelector("#wrap").offsetHeight &&
    xxyy
  ) {
    // document.querySelector(".end").style.animationName = "end";
    gsap.to(".end", {
      duration: 1.5,
      delay: 1,
      x: 0,
      y: 0,
      rotateZ: 0,
      ease: "back.out(1.5)",
    });
    xxyy = false;
  }

  requestAnimationFrame(scroll);
}
scroll();
window.addEventListener("resize", scroll);

window.addEventListener("scroll", () => {
  gsap.to("#wrap", {
    duration: 2,
    y: -scrollTop,
    ease: "back.out(1.4)",
  });
});
