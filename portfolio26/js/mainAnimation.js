gsap.set("#bgBox", {
  display: "none",
  scale: 0,
});
function loadingA() {
  gsap.to(".loadingBG", {
    duration: 2,
    height: "100vh",
    ease: "ease-out",
  });
}

function mainA() {
  gsap.set("#section1", {
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

  gsap.set("#section1 .goBtn", {
    y: "-60vh",
    scale: 2,
    opacity: 0,
    pointerEvents: "none",
  });
  gsap.to("#section1 .goBtn", {
    duration: 0.5,
    delay: 1,
    y: 0,
    scale: 1,
    opacity: 1,
    ease: "back.out(1.2)",
  });
  gsap.to("#section1 .goBtn", {
    duration: 0,
    delay: 3,
    pointerEvents: "auto",
    ease: "back.out(1.2)",
  });

  gsap.set("#section1 .o1", {
    x: "-30vw",
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

  gsap.set("#section1 .o2", {
    x: "10vw",
    y: "60vh",
    scale: 2,
    opacity: 0,
  });
  gsap.to("#section1 .o2", {
    duration: 0.5,
    delay: 1.5,
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    ease: "back.out(2.5)",
  });

  gsap.set("#section1 .o3", {
    x: "20vw",
    y: "50vh",
    scale: 2,
    opacity: 0,
  });
  gsap.to("#section1 .o3", {
    duration: 0.5,
    delay: 1.4,
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
  gsap.to("#bgBox", {
    duration: 0,
    delay: 2.5,
    display: "block",
  });
  gsap.to("#bgBox", {
    duration: 1,
    delay: 2.6,
    scale: 1,
  });
  setTimeout(() => {
    update();
  }, 2400);
  document.querySelector(".goBtn").addEventListener("click", (e) => {
    document.querySelector(".goBtn").style.pointerEvents = "none";
    gsap.to("#section1 h1, #section1 h1 > span, #section1 p", {
      duration: 0,
      animationName: "",
    });
    gsap.to("#section1 .o3", {
      duration: 0.5,
      x: "20vw",
      y: "50vh",
      scale: 2,
      opacity: 0,
      ease: "back.in(1.7)",
    });
    gsap.to("#section1 .o2", {
      duration: 0.5,
      delay: 0.1,
      x: "10vw",
      y: "60vh",
      scale: 2,
      opacity: 0,
      ease: "back.in(1.7)",
    });
    gsap.to("#section1 .o1", {
      duration: 0.5,
      delay: 0.2,
      x: "-30vw",
      y: "60vh",
      scale: 2,
      opacity: 0,
      ease: "back.in(1.7)",
    });
    gsap.to("#section1 .goBtn", {
      duration: 0.5,
      delay: 0.5,
      y: "-60vh",
      scale: 2,
      opacity: 0,
      userSelect: "none",
      ease: "back.in(1.2)",
    });
    gsap.to("#section1 p", {
      duration: 0.7,
      delay: 0.8,
      y: "60vh",
      scale: 2,
      ease: "back.in(1.2)",
    });
    gsap.to("#section1 h1", {
      duration: 0.7,
      delay: 1.3,
      y: "-60vh",
      scale: 2,
      ease: "back.in(1.4)",
    });
    gsap.to("#wrap", {
      duration: 0.7,
      delay: 2,
      scale: 1.35,
    });

    //section2
    gsap.set("#section2", {
      scale: 0.7,
    });
    gsap.set(".box", {
      scale: 0.001,
      pointerEvents: "none",
    });
    gsap.set(".ball", {
      scale: 2,
      opacity: 0,
    });
    gsap.set(".ball1", {
      x: "-15vw",
      y: "40vh",
    });
    gsap.set(".ball2", {
      x: "25vw",
      y: "10vh",
    });
    gsap.set(".ball3", {
      x: "15vw",
      y: "20vh",
    });
    gsap.set("#section2 .box1 h3", {
      scale: 3,
      x: "-150vw",
    });
    gsap.set("#section2 .box2 h3", {
      scale: 3,
      x: "150vw",
    });
    gsap.set(".octo", {
      opacity: 0,
    });
    setTimeout(() => {
      document.querySelector("#section1").style.display = "none";
      document.querySelector("#section2").style.display = "flex";

      gsap.to(".octo", {
        duration: 0.4,
        opacity: 1,
      });
      gsap.to(".box1", {
        duration: 0.1,
        delay: 1.3,
        scale: 1,
        ease: "back.out(2)",
      });
      gsap.to(".box2", {
        duration: 0.1,
        delay: 1.2,
        scale: 1,
        ease: "back.out(2)",
      });
      gsap.to(".ball1", {
        duration: 0.7,
        delay: 1.7,
        scale: 1,
        opacity: 1,
        x: 0,
        y: 0,
        ease: "back.out(1.7)",
      });
      gsap.to(".ball2", {
        duration: 0.7,
        delay: 1.8,
        scale: 1,
        opacity: 1,
        x: 0,
        y: 0,
        ease: "back.out(1.7)",
      });
      gsap.to(".ball3", {
        duration: 0.7,
        delay: 1.6,
        scale: 1,
        opacity: 1,
        x: 0,
        y: 0,
        ease: "back.out(1.7)",
      });
      gsap.to(".ball", {
        duration: 0,
        delay: 2.6,
        animationName: "rotateBall",
      });
      gsap.to("#section2 .box1 h3", {
        duration: 0.5,
        scale: 1,
        x: 0,
        y: "-50%",
        delay: 2.7,
        ease: "back.out(1.2)",
      });
      gsap.to("#section2 .box2 h3", {
        duration: 0.5,
        scale: 1,
        x: 0,
        y: "-50%",
        delay: 2.7,
        ease: "back.out(1.2)",
      });
      setTimeout(() => {
        document.querySelector("#section2 .box1").style.transform = "";
        document.querySelector("#section2 .box2").style.transform = "";
        document.querySelector("#section2 .box1 h3").style.transform = "";
        document.querySelector("#section2 .box2 h3").style.transform = "";
        gsap.set(".box", {
          pointerEvents: "auto",
        });
      }, 3700);
    }, 2000);
  });

  document.querySelector(".box1").addEventListener("click", () => {
    gsap.to(".octo", {
      duration: 0.5,
      opacity: 0,
    });
    gsap.set(".ball", {
      animationName: "",
    });
    gsap.to(".ball1", {
      duration: 0.7,
      delay: 0.7,
      scale: 3,
      opacity: 0,
      x: "-15vw",
      y: "-40vh",
      ease: "back.in(1.2)",
    });
    gsap.to(".ball2", {
      duration: 0.7,
      delay: 0.9,
      scale: 3,
      opacity: 0,
      x: "-25vw",
      y: "25vh",
      ease: "back.in(1.2)",
    });
    gsap.to(".ball3", {
      duration: 0.7,
      delay: 0.5,
      scale: 3,
      opacity: 0,
      x: "15vw",
      y: "20vh",
      ease: "back.in(1.2)",
    });
    gsap.to(".box2 h3", {
      duration: 0.5,
      delay: 1.1,
      scale: 0.3,
      x: "150vw",
      y: "-50%",
      ease: "back.in(2)",
    });
    gsap.to(".box2", {
      duration: 0.1,
      delay: 1.7,
      scale: 0.001,
      ease: "back.in(2)",
    });
    gsap.to(".box1", {
      duration: 0.8,
      delay: 2,
      scale: 5,
      opacity: 0,
    });
    gsap.to("#wrap", {
      duration: 0.5,
      delay: 2.4,
      background: "#E3FE78",
    });
    gsap.to("#bgBox", {
      duration: 0.5,
      delay: 2.1,
      opacity: 0,
    });
    setTimeout(() => {
      location.href = "site/index.html";
    }, 2800);
  });

  document.querySelector(".box2").addEventListener("click", () => {
    gsap.to(".octo", {
      duration: 0.5,
      opacity: 0,
    });
    gsap.set(".ball", {
      animationName: "",
    });
    gsap.to(".ball1", {
      duration: 0.7,
      delay: 0.7,
      scale: 3,
      opacity: 0,
      x: "-15vw",
      y: "-40vh",
      ease: "back.in(1.2)",
    });
    gsap.to(".ball2", {
      duration: 0.7,
      delay: 0.9,
      scale: 3,
      opacity: 0,
      x: "-25vw",
      y: "25vh",
      ease: "back.in(1.2)",
    });
    gsap.to(".ball3", {
      duration: 0.7,
      delay: 0.5,
      scale: 3,
      opacity: 0,
      x: "15vw",
      y: "20vh",
      ease: "back.in(1.2)",
    });
    gsap.to(".box1 h3", {
      duration: 0.5,
      delay: 1.1,
      scale: 0.3,
      x: "-150vw",
      y: "-50%",
      ease: "back.in(2)",
    });
    gsap.to(".box1", {
      duration: 0.1,
      delay: 1.7,
      scale: 0.001,
      ease: "back.in(2)",
    });
    gsap.to(".box2", {
      duration: 0.8,
      delay: 2,
      scale: 5,
      opacity: 0,
    });
    gsap.to("#wrap", {
      duration: 0.5,
      delay: 2.4,
      background: "#aee3ff",
    });
    gsap.to("#bgBox", {
      duration: 0.5,
      delay: 2.1,
      opacity: 0,
    });
    setTimeout(() => {
      location.href = "script/index.html";
    }, 2800);
  });
}
mainA();
// loadingA();
// let loaded = false;
// window.addEventListener("DOMContentLoaded", () => {
//   loaded = true;
//   setTimeout(() => {
//     loaded = true;
//   }, 4000);
//   setTimeout(() => {
//     gsap.to(".loadingText", {
//       duration: 0.3,
//       opacity: 0,
//       ease: "linear",
//     });
//     gsap.to("#loading", {
//       duration: 0.5,
//       opacity: 0,
//       ease: "linear",
//       delay: 0.5,
//     });
//     setTimeout(() => {
//       document.querySelector("#loading").style.display = "none";
//       if (loaded) {
//         mainA();
//       }
//     }, 1000);
//   }, 2000);
// });
