(function () {

    // loading
    setTimeout(() => {
        let load = new TimelineMax();
        load.to(".is-animation", 1.5, { opacity: 0, display: "none" })

        /*--- index__page ---*/
        load.from(".main__star", .8, { opacity: 0, scale: 0, ease: Elastic.easeOut });
        load.from(".main__planet", .07, { opacity: 0, scale: 0, stagger: 0.09, ease: Circ.easeOut });
        load.to(".main-title__text-bg1", .2, { scaleX: 1, delay: .5 })
            .to(".main-title__text-bg2", .2, { scaleX: 1 })
            .to(".main-title__text", 0.1, { opacity: 1 }, "-=0.1")
            .to(".main-title__text-bg1", 0.2, { scaleX: 0 })
            .to(".main-title__text-bg2", 0.2, { scaleX: 0 });
        load.from(".header__stagger", 1, { opacity: 0, x: 10, y: 50, delay: 0.4, stagger: 0.2, ease: "elastic.out(1.2, 0.5)" });
    }, 1500)

}())



