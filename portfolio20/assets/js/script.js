// 로딩이후 실행
function loading() {
    const progress = $(".progress"),
        progressText = progress.find(".progress-text");

    let imgLoad = imagesLoaded("body"),
        imgTotal = imgLoad.images.length,
        imgLoaded = 0,
        imgCurrent = 0,
        progressTimer = setInterval(updateProgress, 500 / 60);

    imgLoad.on("progress", function () {
        imgLoaded++;
    })

    function updateProgress() {
        let target = (imgLoaded / imgTotal) * 100;

        imgCurrent += (target - imgCurrent) * 0.1;
        progressText.text(Math.floor(imgCurrent) + "%");

        if (imgCurrent >= 100) {
            clearInterval(progressTimer)
            progress.delay(1300).fadeOut(1000)
            setTimeout(function () {
                //2초후 등장 애니메이션
                gsap.to("#header", { duration: .8, opacity: 1, y: 0 })
                gsap.to(".home-title > div", { duration: 1, opacity: 1, y: 0, stagger: 0.04, ease: "power1.out" })
                gsap.to(".home__subText > div", { duration: 1, opacity: 1, y: 0, stagger: 0.3, ease: "power1.out" })
                gsap.to(".home__scroll", { duration: .5, scale: 1, delay: .8, ease: "bounce.out" })
            }, 2200);
        }
        if (imgCurrent > 99) {
            imgCurrent = 100;
        }
    }
}
loading();



// 메뉴 버튼 모션
const hBtn = document.querySelector(".hamburger");
const mainNavLink = document.querySelectorAll(".main-menu__link");
const signNavLink = document.querySelectorAll(".sign-menu__link");

function navToggle() {
    document.querySelector(".navigation").classList.toggle("nav-toggle");
    document.querySelector(".nav-radial").classList.toggle("menu-radial-toggle");
    document.querySelector(".nav-menu-wrap").classList.toggle("nav-menu-toggle");

    if (document.querySelector(".navigation").classList.contains("nav-toggle")) {
        hBtn.classList.add("hBtnToggle");
    } else {
        hBtn.classList.remove("hBtnToggle");
    }
}

function mainLinkToggle() {
    mainNavLink.forEach((link, index) => {
        setTimeout(() => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `mainLinkFade 0.4s ease-in-out forwards ${index / 7 + 0.04}s`;
            }
        }, 500);
    });
};

function signLinkToggle() {
    signNavLink.forEach((link, index) => {
        setTimeout(() => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `signLinkFade 0.4s ease-in-out forwards ${index / 10 + 0.04}s`;
            }
        }, 1200);
    });
};

function hBtnClick() {
    navToggle();
    mainLinkToggle();
    signLinkToggle();
}

hBtn.addEventListener("click", hBtnClick);

function navLinkToggle() {
    navToggle();
    mainLinkToggle();
    signLinkToggle();
}

mainNavLink.forEach(link => {
    link.addEventListener("click", navLinkToggle)
})


// parallax | pageLoad animation | text split animation

// pageLoad();
parallax();
about_split();

// window.onload = pageLoad;

// function pageLoad() {
//     gsap.to("#header", { duration: .8, opacity: 1, y: 0 })
//     gsap.to(".home-title > div", { duration: 1, opacity: 1, y: 0, stagger: 0.04, ease: "power1.out" })
//     gsap.to(".home__subText > div", { duration: 1, opacity: 1, y: 0, stagger: 0.3, ease: "power1.out" })
//     gsap.to(".home__scroll", { duration: .5, scale: 1, delay: .8, ease: "bounce.out" })
// }

function about_split() {
    document.querySelectorAll(".about-split").forEach(elem => {
        let splitText = elem.innerText;
        let splitWrap = splitText.split("").join("</span><span aria-hidden:'true'>");
        splitWrap = "<span aria-hidden:'true'>" + splitWrap + "</span>";
        elem.innerHTML = splitWrap;
        elem.setAttribute("aria-label", splitText);
    });
}

function parallax() {
    window.addEventListener("scroll", function () {
        let winWidth = window.innerWidth;
        let pageYOffset = window.pageYOffset + screen.height / 3;

        if (pageYOffset > document.querySelector(".about-view").offsetTop) {
            gsap.to(".about-view", { duration: .5, opacity: 1, y: 0, ease: "power1.out" })
            gsap.to(".about-view__img", { duration: 1, opacity: 1, scale: 1, ease: Bounce.easeOut })
            gsap.to(".about-view__circle", { duration: 1, opacity: 1, scale: 1, ease: Bounce.easeOut })
        }

        if (pageYOffset > document.querySelector(".about-title").offsetTop) {
            gsap.to(".about-title span", { duration: 0.4, y: 0, opacity: 1, stagger: .04 })
            gsap.to(".about-desc", { duration: 0.8, y: 0, opacity: 1, delay: .4, stagger: .06 })
        }

        if (pageYOffset > document.querySelector(".project-headline").offsetTop) {
            gsap.to(".project-headline-text", { duration: 0.4, y: 0, opacity: 1, stagger: .04, ease: "power1.out" })

            const projectCirclePath = document.querySelector(".projects-circle-path");

            function projectPathPrepare(el) {
                var lineLength = el.getTotalLength();
                el.style.strokeDasharray = lineLength;
                el.style.strokeDashoffset = lineLength;
            }
            projectPathPrepare(projectCirclePath);

            const tween1 = new TimelineMax()
                .add(TweenMax.to(projectCirclePath, 0.9, { strokeDashoffset: 0, ease: Linear.easeNone }))
                .add(TweenMax.to(projectCirclePath, 1, { stroke: "#88B2C4", ease: Linear.easeNone }), 0);
        }

        if (pageYOffset > document.querySelector(".project--00").offsetTop) {
            gsap.to(".project--00", { duration: .5, y: 0, opacity: 1, ease: "power1.out" })
            gsap.to(".project--00 .project-card-link", { duration: 1, y: 0, opacity: 1, ease: "power1.out" })
            gsap.to(".project--00 .project-text-wrap", { duration: 1, y: 0, opacity: 1, ease: "power1.out" })
        }

        if (pageYOffset > document.querySelector(".project--01").offsetTop) {
            gsap.to(".project--01", { duration: .5, y: 0, opacity: 1, ease: "power1.out" })
            gsap.to(".project--01 .project-card-link", { duration: 1, y: 0, opacity: 1, ease: "power1.out" })
            gsap.to(".project--01 .project-text-wrap", { duration: 1, y: 0, opacity: 1, ease: "power1.out" })
        }

        if (pageYOffset > document.querySelector(".project--02").offsetTop) {
            gsap.to(".project--02", { duration: .5, y: 0, opacity: 1, ease: "power1.out" })
            gsap.to(".project--02 .project-card-link", { duration: 1, y: 0, opacity: 1, ease: "power1.out" })
            gsap.to(".project--02 .project-text-wrap", { duration: 1, y: 0, opacity: 1, ease: "power1.out" })
        }

        if (pageYOffset > document.querySelector(".project--03").offsetTop) {
            gsap.to(".project--03", { duration: .5, y: 0, opacity: 1, ease: "power1.out" })
            gsap.to(".project--03 .project-card-link", { duration: 1, y: 0, opacity: 1, ease: "power1.out" })
            gsap.to(".project--03 .project-text-wrap", { duration: 1, y: 0, opacity: 1, ease: "power1.out" })
        }

        if (pageYOffset > document.querySelector(".project--04").offsetTop) {
            gsap.to(".project--04", { duration: .5, y: 0, opacity: 1, ease: "power1.out" })
            gsap.to(".project--04 .project-card-link", { duration: 1, y: 0, opacity: 1, ease: "power1.out" })
            gsap.to(".project--04 .project-text-wrap", { duration: 1, y: 0, opacity: 1, ease: "power1.out" })
        }

        if (pageYOffset > document.querySelector(".project--05").offsetTop) {
            gsap.to(".project--05", { duration: .5, y: 0, opacity: 1, ease: "power1.out" })
            gsap.to(".project--05 .project-card-link", { duration: 1, y: 0, opacity: 1, ease: "power1.out" })
            gsap.to(".project--05 .project-text-wrap", { duration: 1, y: 0, opacity: 1, ease: "power1.out" })
        }

        if (document.querySelector(".animation-slider").offsetLeft < -(winWidth * 0.5)) {
            gsap.to(".animation--01 .animation-text-wrap", { duration: .8, opacity: 1, y: 0, ease: "power1.out" })
        }
        if (document.querySelector(".animation-slider").offsetLeft < -(winWidth * 0.8)) {
            gsap.to(".animation--01 .animation-card", { duration: .8, opacity: 1, y: 0, ease: "power1.out" })
        }

        if (document.querySelector(".animation-slider").offsetLeft < -(winWidth * 1.5)) {
            gsap.to(".animation--02 .animation-text-wrap", { duration: .8, opacity: 1, y: 0, ease: "power1.out" })
        }
        if (document.querySelector(".animation-slider").offsetLeft < -(winWidth * 1.8)) {
            gsap.to(".animation--02 .animation-card", { duration: .8, opacity: 1, y: 0, ease: "power1.out" })
        }

        if (document.querySelector(".animation-slider").offsetLeft < -(winWidth * 2.5)) {
            gsap.to(".animation--03 .animation-text-wrap", { duration: .8, opacity: 1, y: 0, ease: "power1.out" })
        }
        if (document.querySelector(".animation-slider").offsetLeft < -(winWidth * 2.8)) {
            gsap.to(".animation--03 .animation-card", { duration: .8, opacity: 1, y: 0, ease: "power1.out" })
        }

        if (document.querySelector(".animation-slider").offsetLeft < -(winWidth * 3.5)) {
            gsap.to(".animation--04 .animation-text-wrap", { duration: .8, opacity: 1, y: 0, ease: "power1.out" })
        }
        if (document.querySelector(".animation-slider").offsetLeft < -(winWidth * 3.8)) {
            gsap.to(".animation--04 .animation-card", { duration: .8, opacity: 1, y: 0, ease: "power1.out" })
        }

        if (document.querySelector(".animation-slider").offsetLeft < -(winWidth * 4.5)) {
            gsap.to(".animation--05 .animation-text-wrap", { duration: .8, opacity: 1, y: 0, ease: "power1.out" })
        }
        if (document.querySelector(".animation-slider").offsetLeft < -(winWidth * 4.8)) {
            gsap.to(".animation--05 .animation-card", { duration: .8, opacity: 1, y: 0, ease: "power1.out" })
        }

        if (document.querySelector(".script-slider").offsetLeft > -(winWidth * 2.8)) {
            gsap.to(".script--01 .script-text-wrap", { duration: .8, opacity: 1, y: 0, ease: "power1.out" })

        }
        if (document.querySelector(".script-slider").offsetLeft > -(winWidth * 2.5)) {
            gsap.to(".script--01 .script-card", { duration: .8, opacity: 1, y: 0, ease: "power1.out" })
        }

        if (document.querySelector(".script-slider").offsetLeft > -(winWidth * 1.8)) {
            gsap.to(".script--02 .script-text-wrap", { duration: .8, opacity: 1, y: 0, ease: "power1.out" })

        }
        if (document.querySelector(".script-slider").offsetLeft > -(winWidth * 1.5)) {
            gsap.to(".script--02 .script-card", { duration: .8, opacity: 1, y: 0, ease: "power1.out" })
        }

        if (document.querySelector(".script-slider").offsetLeft > -(winWidth * 0.8)) {
            gsap.to(".script--03 .script-text-wrap", { duration: .8, opacity: 1, y: 0, ease: "power1.out" })

        }
        if (document.querySelector(".script-slider").offsetLeft > -(winWidth * 0.5)) {
            gsap.to(".script--03 .script-card", { duration: .8, opacity: 1, y: 0, ease: "power1.out" })
        }

        if (pageYOffset > document.querySelector(".footer-contact").offsetTop) {
            gsap.to(".ftText--1", { duration: .7, y: 0, opacity: 1, stagger: 0.05, ease: "power1.out" })
            gsap.to(".footer-smile", { duration: .7, y: 0, opacity: 1, ease: "power1.out" })
            gsap.to(".footer-image", { duration: .7, y: 0, opacity: 1, ease: "power1.out" })
            gsap.to(".ftText--2", { duration: .7, y: 0, opacity: 1, stagger: 0.05, ease: "power1.out" })
        }

        if (pageYOffset > document.querySelector(".footer-social").offsetTop) {
            gsap.to(".footer-sns h2", { duration: .5, y: 0, opacity: 1, ease: "power1.out" })
            gsap.to(".footer-sns-nav ul li", { duration: .5, y: 0, opacity: 1, stagger: 0.1, ease: "power1.out" })
            gsap.to(".footer-bottom", { duration: .5, y: 0, opacity: 1, ease: "power1.out" })
        }


    })
}


