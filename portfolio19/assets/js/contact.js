/*----------------------
    GSAP - Timeline
------------------------*/

let contact_tl1 = new TimelineMax(),
    contact_tl2 = new TimelineMax();

contact_tl1.from(".sun", .8, { opacity: 0, scale: 0, stagger: .1, ease: Elastic.easeOut });
contact_tl1.from(".universe-stagger", 1, { opacity: 0, stagger: .05, ease: Power1.easeOut });
contact_tl1.from(".universe-stagger div", .7, { opacity: 0, scale: 0, stagger: .1, ease: Elastic.easeOut }, "-=.3");

contact_tl2.from(".main-subTitle__text", .5, { opacity: 0, y: 50, stagger: 0.05, ease: "power1.out" });
contact_tl2.from(".main-icon-smile", .5, { opacity: 0, y: 50, ease: "power1.out" }, "-=.3");

const contact_controller = new ScrollMagic.Controller();


const contact_scene1 = new ScrollMagic.Scene({
    triggerElement: ".main-subTitle",
    reverse: false
})
    .setTween(contact_tl2)
    .addTo(contact_controller);