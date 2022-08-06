function loadingAfter() {
    gsap.to('.loader-overlay.one', {
        duration: 1,
        scaleX: 1,
        transformOrigin: 'left',
        ease: 'power1.inOut',
    });
    gsap.to('.loader-overlay.one', {
        duration: 1,
        scaleX: 0,
        transformOrigin: 'right',
        ease: 'power1.inOut',
        delay: 2,
    });
    gsap.to('.loader-overlay.two', {
        duration: 1.4,
        scaleX: 1,
        transformOrigin: 'left',
        ease: 'power1.inOut',
    });
    gsap.to('.loader-overlay.two', {
        duration: 1.4,
        scaleX: 0,
        transformOrigin: 'right',
        ease: 'power1.inOut',
        delay: 1.6,
    });
}

//메인 글씨 효과
function loadingAfterMain() {
    TweenMax.staggerFrom(
        '.logo',
        1.5,
        {
            delay: 0.5,
            opacity: 0,
            x: '-50',
            ease: Expo.easeInOut,
        },
        0.08
    );

    // NAVBAR
    TweenMax.staggerFrom(
        '.sidebar',
        1.5,
        {
            delay: 0.5,
            opacity: 0,
            y: '20',
            ease: Expo.easeInOut,
        },
        0.08
    );

    TweenMax.staggerFrom(
        'header',
        1.5,
        {
            delay: 0.5,
            opacity: 0,
            x: '20',
            ease: Expo.easeInOut,
        },
        0.08
    );

    TweenMax.staggerFrom(
        '.contact-btn',
        1.5,
        {
            delay: 0.5,
            opacity: 0,
            y: '-20',
            ease: Expo.easeInOut,
        },
        0.08
    );

    TweenMax.staggerFrom('.all-btn', 1.5, {
        delay: 0.7,
        opacity: 0,
        y: '20',
        ease: Expo.easeInOut,
    });

    // TEXT......
    TweenMax.from('.main-text h1 .hide-text.i1', 1.5, {
        delay: 0,
        y: '100%',
        ease: Expo.easeInOut,
    });

    TweenMax.from('.main-text h1 .hide-text.i2', 1.5, {
        delay: 0.1,
        y: '100%',
        ease: Expo.easeInOut,
    });

    TweenMax.from('.main-text h1 .hide-text.i3', 1.5, {
        delay: 0.2,
        y: '100%',
        ease: Expo.easeInOut,
    });

    TweenMax.from('.main-text h1 .hide-text.i4', 1.5, {
        delay: 0.3,
        y: '100%',
        ease: Expo.easeInOut,
    });
    // TEXT......
    TweenMax.from('.main-text h2 .hide-text.i1', 1.5, {
        delay: 0,
        y: '100%',
        ease: Expo.easeInOut,
    });

    TweenMax.from('.main-text h2 .hide-text.i2', 1.5, {
        delay: 0.1,
        y: '100%',
        ease: Expo.easeInOut,
    });

    TweenMax.from('.main-text h2 .hide-text.i3', 1.5, {
        delay: 0.2,
        y: '100%',
        ease: Expo.easeInOut,
    });

    TweenMax.from('.main-text h2 .hide-text.i4', 1.5, {
        delay: 0.3,
        y: '100%',
        ease: Expo.easeInOut,
    });

    TweenMax.from('.right-sec', 1.5, {
        delay: 0.5,
        opacity: 0,
        y: '20',
        ease: Expo.easeInOut,
    });

    TweenMax.from('.top-sec', 1.5, {
        delay: 0.5,
        opacity: 0,
        y: '20',
        ease: Expo.easeInOut,
    });

    TweenMax.from('.scroll-btn', 1.5, {
        delay: 0.5,
        x: '100',
        ease: Expo.easeInOut,
    });

    TweenMax.from('.name', 1.5, {
        delay: 0.6,
        opacity: 0,
        y: '20',
        ease: Expo.easeInOut,
    });
}
