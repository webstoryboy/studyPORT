gsap.set("#wrap, .purple, .wing", {
  opacity: 1,
});
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
    x: -goLeft,
    ease: "linear",
  });
  gsap.to(".wingBox", {
    duration: 3,
    x: -goLeft * 0.08,
    y: -goLeft * 0.03,
    ease: "linear",
  });
  gsap.to(".purple", {
    duration: 4,
    x: goLeft * 0.07,
    y: goLeft * 0.02,
    ease: "linear",
  });
  gsap.to(".spiral", {
    duration: 1.5,
    x: goLeft * 0.07,
    ease: "linear",
  });

  if (
    document.querySelector("#main h1").getBoundingClientRect().left <
    window.innerWidth / 12
  ) {
    gsap.to("#main h1 .title1", {
      duration: 1,
      y:
        (document.querySelector("#main h1").getBoundingClientRect().left -
          window.innerHeight / 2) *
        0.15,
      ease: "ease-out",
    });
    gsap.to("#main h1 .title2", {
      duration: 1,
      x:
        (document.querySelector("#main h1").getBoundingClientRect().left -
          window.innerHeight / 2) *
        0.1,
      ease: "ease-out",
    });
    gsap.to("#main h1 .title3", {
      duration: 1,
      y:
        -(
          document.querySelector("#main h1").getBoundingClientRect().left -
          window.innerHeight / 2
        ) * 0.15,
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
    if (index % 2 == 1) {
      gsap.to(infoInner[index], {
        duration: 1,
        y: (scrollTop - infoInner[index].offsetLeft) * 0.15,
        ease: "linear",
      });
    } else {
      gsap.to(infoInner[index], {
        duration: 1,
        y: -(scrollTop - infoInner[index].offsetLeft) * 0.15,
        ease: "linear",
      });
    }

    let yyy =
      infoInner[index].getBoundingClientRect().left / window.innerWidth - 0.2;
    if (yyy < 0) {
      yyy = yyy * -1;
    }
    let yyyy = Math.max(
      -15,
      Math.min(
        15,
        10 -
          30 *
            (infoInner[index].getBoundingClientRect().left / window.innerWidth)
      )
    );
    gsap.to(infoInner[index].querySelector(".img"), {
      duration: 0.5,
      backgroundColor: `rgba(0,0,0,${yyy})`,
      y: `${-yyyy}%`,
    });
  });

  gsap.to(".site", {
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

gsap.set(".wingBox", {
  translateX: "100vw",
});
gsap.set(".purple", {
  translateX: "-100vw",
});

document.querySelector(".site").addEventListener("click", () => {
  gsap.to(document.querySelector("body"), {
    duration: 2,
    background: "#e3fe78",
  });
  gsap.to("body", {
    duration: 1.5,
    opacity: 0,
  });
  gsap.to(".site", {
    duration: 1.5,
    opacity: 0,
    scale: 6,
  });

  setTimeout(() => {
    location.href = "../site/index.html";
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
