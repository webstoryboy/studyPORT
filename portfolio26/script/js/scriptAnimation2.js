var s = skrollr.init();

const infoInner = document.querySelectorAll(".infoInner");

function scroll() {
  let scrollTop =
    window.pageYOffset || document.documentElement.scrollTop || window.scrollY;

  let wrapWidth = document.getElementById("wrap").offsetWidth;
  document.body.style.height = `${wrapWidth}px`;

  let viewWidth = wrapWidth - window.innerWidth;
  let viewHeight = wrapWidth - window.innerHeight;
  let goLeft = scrollTop * (viewWidth / viewHeight);

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
    translateX: -goLeft * 0.8 + viewWidth / 8,
    ease: "linear",
  });
  gsap.to(".infoInner3 .bgText", {
    duration: 3,
    translateX: -goLeft * 0.8 + viewWidth / 4.5,
    ease: "linear",
  });
  gsap.to(".infoInner4 .bgText", {
    duration: 3,
    translateX: -goLeft * 0.8 + viewWidth / 2.5,
    ease: "linear",
  });
  gsap.to(".infoInner5 .bgText", {
    duration: 3,
    translateX: -goLeft * 0.8 + viewWidth / 2,
    ease: "linear",
  });
  gsap.to(".infoInner6 .bgText", {
    duration: 3,
    translateX: -goLeft * 0.8 + viewWidth / 1.5,
    ease: "linear",
  });

  // infoInner.forEach((el, index) => {
  //   if (
  //     infoInner[index].getBoundingClientRect().left <
  //     (window.innerWidth * 2) / 3
  //   ) {
  //     gsap.to(infoInner[index], {
  //       opacity: 0,
  //     });
  //   }
  // });

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
