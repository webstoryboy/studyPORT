
/*----------------------
    Text Split
------------------------*/

profile_split();

function profile_split() {
    document.querySelectorAll(".profile-split").forEach(elem => {
        let splitText = elem.innerText;
        let splitWrap = splitText.split("").join("</span><span aria-hidden:'true'>");
        splitWrap = "<span aria-hidden:'true'>" + splitWrap + "</span>";
        elem.innerHTML = splitWrap;
        elem.setAttribute("aria-label", splitText);
    });
}

/*----------------------
    GSAP - Timeline
------------------------*/

let about_tl1 = new TimelineMax(),
    about_tl2 = new TimelineMax(),
    about_tl3 = new TimelineMax(),
    about_tl4 = new TimelineMax();

about_tl1.to(".about__main-title__text", .8, { opacity: 1, y: 0, stagger: .06, ease: "power1.out" });
about_tl1.from(".main-bubble", .5, { opacity: 0, stagger: .05, ease: "power1.out" })

about_tl2.from(".main-subTitle__text", .5, { opacity: 0, y: 50, stagger: 0.05, ease: "power1.out" });
about_tl2.from(".main-icon-smile", .5, { opacity: 0, y: 50, ease: "power1.out" }, "-=.3");

about_tl3.from(".profile-photo__img", .8, { opacity: 0, scale: 0, ease: Bounce.easeOut });
about_tl3.from(".profile-photo__text", .8, { opacity: 0, scale: 0, ease: Bounce.easeOut });

about_tl4.from(".profile-title span", .4, { y: 50, opacity: 0, stagger: .04 });
about_tl4.from(".profile-intro", .8, { y: 50, opacity: 0, stagger: .04 });


const about_controller = new ScrollMagic.Controller();


const about_scene1 = new ScrollMagic.Scene({
    triggerElement: ".main-subTitle",
    reverse: false
})
    .setTween(about_tl2)
    .addTo(about_controller);

const about_scene2 = new ScrollMagic.Scene({
    triggerElement: ".about__profile-photo",
    reverse: false
})
    .setTween(about_tl3)
    .addTo(about_controller);

const about_scene3 = new ScrollMagic.Scene({
    triggerElement: ".about__profile-introduction",
    reverse: false
})
    .setTween(about_tl4)
    .addTo(about_controller);
