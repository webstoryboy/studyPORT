(function () {

    // overlay menu
    function overlayMenu() {
        document.querySelector(".hamburger").addEventListener("click", () => {
            if (document.querySelector(".nav-bg").classList.contains("active")) {
                setTimeout(() => {
                    document.querySelector(".nav-bg").classList.remove("active");
                    document.querySelector(".hamburger").classList.remove("hBtnToggle");
                    hide();
                }, 1200);
                navLinkHide();
            } else {
                document.querySelector(".nav-bg").classList.add("active");
                document.querySelector(".hamburger").classList.add("hBtnToggle");
                show();
                setTimeout(() => {
                    navLinkShow();
                }, 1000);
            }
        });
    }

    function show() {
        let navTl = new TimelineMax();
        // navTl.to(".nav-bg", { visibility: "visible" });
        navTl.to(".nav-bg > div", { duration: 0.5, width: "25%", stagger: 0.08 });
        document.querySelector(".nav-bg").style.visibility = "visible";
    }

    function hide() {
        let navTl = new TimelineMax();
        navTl.to(".nav-bg > div", { duration: 0.5, width: "0", stagger: 0.08 });
        setTimeout(() => {
            // navTl.to(".nav-bg", { visibility: "hidden" });
            document.querySelector(".nav-bg").style.visibility = "hidden";
        }, 1000);
    }

    function navLinkShow() {
        let navTl = new TimelineMax();
        navTl.to(".main-menu__link", { duration: 0.5, opacity: 1, y: 0, stagger: 0.05 });
        document.querySelector(".main-menu").style.visibility = "visible";
    }

    function navLinkHide() {
        let navTl = new TimelineMax();
        navTl.to(".main-menu__link", { duration: 0.5, opacity: 0, y: 50, stagger: 0.05 });
        setTimeout(() => {
            document.querySelector(".main-menu").style.visibility = "hidden";
        }, 1000);
    }


    // link menu
    function linkMenu() {
        document.querySelectorAll('.page__link').forEach(elem => {
            elem.addEventListener("click", e => {
                e.preventDefault();

                if (window.innerWidth <= 768) {

                    if (document.querySelector(".nav-bg").classList.contains("active")) {
                        setTimeout(() => {
                            document.querySelector(".nav-bg").classList.remove("active");
                            document.querySelector(".hamburger").classList.remove("hBtnToggle");
                            hide();
                        }, 1000);
                        navLinkHide();

                        const srcName = elem.innerText;

                        setTimeout(() => {
                            window.location.href = "https://webstoryboy.github.io/portfolio2/portfolio19/pages/" + srcName + ".html";
                        }, 1800);
                    }
                }

                const srcName = elem.innerText;

                window.location.href = "https://webstoryboy.github.io/portfolio2/portfolio19/pages/" + srcName + ".html";

            })
        })
    }

    function phpLinkMenu() {

        document.querySelector(".page__link-php").addEventListener("click", () => {
            e.preventDefault();


            if (document.querySelector(".nav-bg").classList.contains("active")) {
                setTimeout(() => {
                    document.querySelector(".nav-bg").classList.remove("active");
                    document.querySelector(".hamburger").classList.remove("hBtnToggle");
                    hide();
                }, 1000);
                navLinkHide();

                const srcName = elem.innerText;

                setTimeout(() => {
                    window.location.href = "http://hyojudev.dothome.co.kr/port02/pages/" + srcName + ".php";
                }, 1800);
            }
        })
    }

    overlayMenu();
    linkMenu();
    phpLinkMenu();

}())



