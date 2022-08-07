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
  gsap.to(".infoInner1 .bgText", {
    duration: 3,
    translateX: -goLeft * 0.8,
    ease: "linear",
  });
  gsap.to(".infoInner2 .bgText", {
    duration: 3,
    translateX: -goLeft * 0.8 + viewWidth / 6,
    ease: "linear",
  });
  gsap.to(".infoInner3 .bgText", {
    duration: 3,
    translateX: -goLeft * 0.8 + viewWidth / 2.7,
    ease: "linear",
  });
  gsap.to(".infoInner4 .bgText", {
    duration: 3,
    translateX: -goLeft * 0.8 + viewWidth / 1.85,
    ease: "linear",
  });

  infoInner.forEach((el, index) => {
    if (
      infoInner[index].getBoundingClientRect().left <
      (window.innerWidth * 2) / 3
    ) {
      infoInner[index].querySelector(".aniBox").style.animationName =
        "moveBox1";
      setTimeout(() => {
        infoInner[index].querySelector(".aniBox").style.opacity = "1";
        if (index == 0) {
          infoInner[index].querySelector(".smile").style.opacity = "1";
        }
        if (index == 3) {
          infoInner[index].querySelector(".basketball").style.opacity = "1";
        }
      }, 1000);
    } else {
      infoInner[index].querySelector(".aniBox").style.animationName =
        "moveBox2";
      if (index == 0) {
        infoInner[index].querySelector(".smile").style.opacity = "0";
      }
      if (index == 3) {
        infoInner[index].querySelector(".basketball").style.opacity = "0";
      }
      setTimeout(() => {
        infoInner[index].querySelector(".aniBox").style.opacity = "0";
      }, 1000);
    }
    if (infoInner[3].getBoundingClientRect().left < 0) {
      document.querySelector(".pinkBall").style.zIndex = "15";
    } else {
      document.querySelector(".pinkBall").style.zIndex = "1";
    }
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
gsap.to(".smile", {
  duration: 10,
  rotateZ: "-360deg",
  ease: "linear",
  repeat: -1,
});
gsap.to(".basketball", {
  duration: 80,
  rotateZ: "360deg",
  ease: "linear",
  repeat: -1,
});
gsap.to(".eyes", {
  duration: 5,
  rotateZ: "360deg",
  ease: "linear",
  repeat: -1,
});

document.querySelector(".next").addEventListener("click", () => {
  gsap.to(document.querySelector("body"), {
    duration: 2,
    background: "#71F78F",
  });
  gsap.to("body", {
    duration: 1.5,
    opacity: 0,
  });
  gsap.to(".next", {
    duration: 1.5,
    opacity: 0,
    scale: 6,
  });

  setTimeout(() => {
    location.href = "../about/index.html";
  }, 2000);
});
