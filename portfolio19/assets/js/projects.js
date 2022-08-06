/*----------------------------
    Projects Bubble Cirlce
-----------------------------*/

document.addEventListener('mousemove', function (e) {
    let ptMainWrap = document.querySelector('.pt__main-circle__wrap');
    let bubble = document.createElement('span');
    bubble.className = 'project-bubble';
    let x = e.offsetX;
    let y = e.offsetY;
    bubble.style.left = x + "px";
    bubble.style.top = y + "px";
    let size = Math.random() * 110;
    bubble.style.width = 30 + size + "px";
    bubble.style.height = 30 + size + "px";
    ptMainWrap.appendChild(bubble);
    setTimeout(function () {
        bubble.remove();
    }, 1800);
});


/*----------------------
    GSAP - Timeline
------------------------*/

let projects_tl1 = new TimelineMax(),
    projects_tl2 = new TimelineMax(),
    projects_tl3 = new TimelineMax(),
    projects_tl4 = new TimelineMax(),
    projects_tl5 = new TimelineMax(),
    projects_tl6 = new TimelineMax(),
    projects_tl7 = new TimelineMax();

projects_tl1.to(".projects__main-title__text", .8, { opacity: 1, y: 0, stagger: .06, ease: "power1.out" });

projects_tl2.from(".main-subTitle__text", .5, { opacity: 0, y: 50, stagger: 0.05, ease: "power1.out" });
projects_tl2.from(".main-icon-smile", .5, { opacity: 0, y: 50, ease: "power1.out" }, "-=.3");

projects_tl3.from(".project__01 .pt__content__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" })
projects_tl3.from(".project__01 .pt__card__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" }, "-=.3")
projects_tl3.from(".project__01 .pt__text__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" }, "-=.3")

projects_tl4.from(".project__02 .pt__content__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" })
projects_tl4.from(".project__02 .pt__card__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" }, "-=.3")
projects_tl4.from(".project__02 .pt__text__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" }, "-=.3")

projects_tl5.from(".project__03 .pt__content__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" })
projects_tl5.from(".project__03 .pt__card__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" }, "-=.3")
projects_tl5.from(".project__03 .pt__text__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" }, "-=.3")

projects_tl6.from(".project__04 .pt__content__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" })
projects_tl6.from(".project__04 .pt__card__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" }, "-=.3")
projects_tl6.from(".project__04 .pt__text__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" }, "-=.3")

projects_tl7.from(".project__05 .pt__content__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" })
projects_tl7.from(".project__05 .pt__card__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" }, "-=.3")
projects_tl7.from(".project__05 .pt__text__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" }, "-=.3")

const porojects_controller = new ScrollMagic.Controller();

const projects_scene1 = new ScrollMagic.Scene({
    triggerElement: ".main-subTitle",
    reverse: false
})
    .setTween(projects_tl2)
    .addTo(porojects_controller);

const projects_scene2 = new ScrollMagic.Scene({
    triggerElement: ".project__01",
    reverse: false
})
    .setTween(projects_tl3)
    .addTo(porojects_controller);

const projects_scene3 = new ScrollMagic.Scene({
    triggerElement: ".project__02",
    reverse: false
})
    .setTween(projects_tl4)
    .addTo(porojects_controller);

const projects_scene4 = new ScrollMagic.Scene({
    triggerElement: ".project__03",
    reverse: false
})
    .setTween(projects_tl5)
    .addTo(porojects_controller);

const projects_scene5 = new ScrollMagic.Scene({
    triggerElement: ".project__04",
    reverse: false
})
    .setTween(projects_tl6)
    .addTo(porojects_controller);

const projects_scene6 = new ScrollMagic.Scene({
    triggerElement: ".project__05",
    reverse: false
})
    .setTween(projects_tl7)
    .addTo(porojects_controller);