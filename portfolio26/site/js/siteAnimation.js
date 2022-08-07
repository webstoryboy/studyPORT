gsap.set("#wrap, .star1, .pinkBall", {
  opacity: 1,
});
var s = skrollr.init();

const infoInner = document.querySelectorAll(".infoInner");

function scroll() {
  let scrollTop =
    window.pageYOffset || document.documentElement.scrollTop || window.scrollY;
  // document.querySelector(".scrollTop").innerText = Math.round(scrollTop);

  let wrapWidth = document.getElementById("wrap").offsetWidth;
  document.body.style.height = `${wrapWidth}px`;

  let viewWidth = wrapWidth - window.innerWidth;
  let viewHeight = wrapWidth - window.innerHeight;
  let goLeft = scrollTop * (viewWidth / viewHeight);
  // console.log(viewWidth);
  // console.log(viewHeight);
  // console.log(scrollTop);

  gsap.to(".star1", {
    duration: 5,
    translateX: -goLeft * 0.17,
    ease: "linear",
  });
  gsap.to(".pinkBall", {
    duration: 3,
    translateX: -goLeft * -0.13,
    ease: "linear",
  });
  gsap.to(".eyes", {
    duration: 1,
    translateX: goLeft * 0.1,
    translateY: (viewHeight - scrollTop) * 0.7,
    ease: "linear",
  });
  gsap.to(".flag", {
    duration: 1,
    translateX: goLeft * 0.65,
    translateY: -(viewHeight - scrollTop) * 0.15,
    ease: "linear",
  });

  gsap.to("#wrap", {
    duration: 1,
    translateX: -goLeft,
    ease: "linear",
  });

  // console.log(document.querySelector("#main h1").getBoundingClientRect().left);
  if (
    document.querySelector("#main h1").getBoundingClientRect().left <
    window.innerWidth / 10
  ) {
    gsap.to("#main h1 .title1", {
      duration: 1,
      y:
        (document.querySelector("#main h1").getBoundingClientRect().left -
          window.innerHeight / 2) *
        0.2,
      ease: "ease-out",
    });
    gsap.to("#main h1 .title2", {
      duration: 1,
      x:
        (document.querySelector("#main h1").getBoundingClientRect().left -
          window.innerHeight / 2) *
        0.2,
      ease: "ease-out",
    });
    gsap.to("#main h1 .title3", {
      duration: 1,
      y:
        -(
          document.querySelector("#main h1").getBoundingClientRect().left -
          window.innerHeight / 2
        ) * 0.2,
      ease: "ease-out",
    });
  } else {
    gsap.to("#main h1 > div", {
      duration: 1,
      x: 0,
      y: 0,
      ease: "linear",
    });
  }

  infoInner.forEach((el, index) => {
    if (infoInner[index].getBoundingClientRect().left < window.innerWidth / 4) {
      let xxxx =
        infoInner[index].getBoundingClientRect().left - window.innerHeight / 2;
      if (index == 0) {
        gsap.to(infoInner[0], {
          duration: 1,
          y: xxxx * 0.7,
          rotateZ: -xxxx * 0.05,
          ease: "ease-out",
        });
      }
      if (index == 1) {
        gsap.to(infoInner[1], {
          duration: 1,
          y: xxxx * 0.05,
          rotateZ: xxxx * 0.02,
          ease: "ease-out",
        });
      }
      if (index == 2) {
        gsap.to(infoInner[2], {
          duration: 1,
          y: -xxxx * 0.03,
          rotateZ: -xxxx * 0.015,
          ease: "ease-out",
        });
      }
      if (index == 3) {
        gsap.to(infoInner[3], {
          duration: 1,
          y: -xxxx * 0.4,
          rotateZ: 0,
          ease: "ease-out",
        });
      }
      if (index == 4) {
        gsap.to(infoInner[4], {
          duration: 1,
          y: xxxx * 0.4,
          rotateZ: 0,
          ease: "ease-out",
        });
      }
      if (index == 5) {
        gsap.to(infoInner[5], {
          duration: 1,
          y: xxxx * 0.3,
          rotateZ: xxxx * 0.01,
          ease: "ease-out",
        });
      }
      if (index == 6) {
        gsap.to(infoInner[6], {
          duration: 1,
          y: -xxxx * 0.25,
          rotateZ: xxxx * 0.01,
          ease: "ease-out",
        });
      }
      if (index == 7) {
        gsap.to(infoInner[7], {
          duration: 1,
          y: xxxx * 0.4,
          rotateZ: xxxx * 0.01,
          ease: "ease-out",
        });
      }
      if (index == 8) {
        gsap.to(infoInner[8], {
          duration: 1,
          y: -xxxx * 0.3,
          rotateZ: xxxx * 0.01,
          ease: "ease-out",
        });
      }
      if (index == 9) {
        gsap.to(infoInner[9], {
          duration: 1,
          y: -xxxx * 0.4,
          rotateZ: 0,
          ease: "ease-out",
        });
      }
      if (index == 10) {
        gsap.to(infoInner[10], {
          duration: 1,
          y: xxxx * 0.4,
          rotateZ: 0,
          ease: "ease-out",
        });
      }
      if (index == 11) {
        gsap.to(infoInner[11], {
          duration: 1,
          y: xxxx * 0.25,
          rotateZ: -xxxx * 0.01,
          ease: "ease-out",
        });
      }
    } else {
      gsap.to(infoInner[index], {
        duration: 1,
        y: 0,
        rotateZ: 0,
        ease: "ease-out",
      });
    }
  });

  gsap.to(".script", {
    duration: 1,
    x: document.querySelector("#section2").getBoundingClientRect().left,
    y: -document.querySelector("#section2").getBoundingClientRect().left,
    ease: "ease-out",
  });
  gsap.to(".about", {
    duration: 1,
    x: document.querySelector("#section2").getBoundingClientRect().left,
    y: document.querySelector("#section2").getBoundingClientRect().left,
    ease: "ease-out",
  });
  requestAnimationFrame(scroll);
}
scroll();
window.addEventListener("resize", scroll);

//글씨 쪼개기
let text = document.querySelectorAll("h1 div");
text.forEach((el) => {
  let splitText = el.innerText;
  let splitWrap = splitText.split("").join("</span><span aria-hidden='true'>");
  splitWrap = "<span aria-hidden='true'>" + splitWrap + "</span>";
  el.innerHTML = splitWrap;
  el.setAttribute("aria-label", splitText);
});
setTimeout(() => {
  document.querySelector("#main h1").style.opacity = "1";
  document.querySelectorAll(".title1 span").forEach((span, index) => {
    setTimeout(() => {
      span.classList.add("show");
    }, 100 * (index + 1));
  });
}, 500);
setTimeout(() => {
  document.querySelectorAll(".title2 span").forEach((span, index) => {
    setTimeout(() => {
      span.classList.add("show");
    }, 100 * (index + 1));
  });
}, 1500);
setTimeout(() => {
  document.querySelectorAll(".title3 span").forEach((span, index) => {
    setTimeout(() => {
      span.classList.add("show");
    }, 500 * (index + 1));
  });
}, 3000);

gsap.set(".star1", {
  translateX: "100vw",
});
gsap.set(".pinkBall", {
  translateX: "-100vw",
});
gsap.to(".pinkBall", {
  duration: 15,
  rotateZ: "360deg",
  repeat: -1,
  ease: "linear",
});
// gsap.to(".smile", {
//   duration: 10,
//   rotateZ: "-360deg",
//   ease: "linear",
//   repeat: -1,
// });
// gsap.to(".basketball", {
//   duration: 80,
//   rotateZ: "360deg",
//   ease: "linear",
//   repeat: -1,
// });
gsap.to(".eyes", {
  duration: 5,
  rotateZ: "360deg",
  ease: "linear",
  repeat: -1,
});

document.querySelector(".script").addEventListener("click", () => {
  gsap.to(document.querySelector("body"), {
    duration: 2,
    background: "#aee3ff",
  });
  gsap.to("body", {
    duration: 1.5,
    opacity: 0,
  });
  gsap.to(".script", {
    duration: 1.5,
    opacity: 0,
    scale: 6,
  });

  setTimeout(() => {
    location.href = "../script/index.html";
  }, 2000);
});

document.querySelector(".about").addEventListener("click", () => {
  gsap.to(document.querySelector("body"), {
    duration: 2,
    background: "#71F78F",
  });
  gsap.to("body", {
    duration: 1.5,
    opacity: 0,
  });
  gsap.to(".about", {
    duration: 1.5,
    opacity: 0,
    scale: 6,
  });

  setTimeout(() => {
    location.href = "../about/index.html";
  }, 2000);
});
