//메인 전체메뉴
$('.side-menu-btn').click(function () {
    $('.side-menu-btn').toggleClass('close-btn');
    $('.side-menu-btn').toggleClass('open');
    $('.top-menu-btn').toggleClass('close-btn');
    $('.top-menu-btn').toggleClass('open');
    $('.side-menu').toggleClass('on');
});

//모바일 메인 전체메뉴
$('.top-menu-btn').click(function () {
    $('.side-menu-btn').toggleClass('close-btn');
    $('.side-menu-btn').toggleClass('open');
    $('.top-menu-btn').toggleClass('close-btn');
    $('.top-menu-btn').toggleClass('open');
    $('.side-menu').toggleClass('on');
});

// /* 메뉴버튼 */
tl = new TimelineMax({ paused: true });

tl.from('.side-menu header', 1, {
    y: -100,
    // opacity: 0,
    ease: Expo.easeOut,
});
tl.to(
    '.menu-text',
    1,
    {
        left: 0,
        ease: Expo.easeInOut,
    },
    '-=1'
);

tl.to(
    '.menu-img',
    1,
    {
        right: 0,
        ease: Expo.easeInOut,
    },
    '-=1'
);
tl.staggerFrom(
    '.menu-text > ul > li',
    0.8,
    {
        x: -2000,
        // opacity: 0,
        ease: Expo.easeOut,
    },
    '0.1',
    '-=0.4'
);
tl.staggerFrom(
    '.menu-text > ul > li >h3',
    0.8,
    {
        y: 100,
        opacity: 0,
        ease: Expo.easeOut,
    },
    '0.1',
    '-=0.4'
);

tl.from('.hover-menu', 1, {
    // scale: 2,
    opacity: 1,
    ease: Expo.easeInOut,
});

tl.reverse();

$(document).on('click', '.open', function () {
    tl.reversed(!tl.reversed());
});
$(document).on('click', '.close-btn', function () {
    tl.reversed(!tl.reversed());
});

//메뉴버튼

$('.side-menu ul li').click(function () {
    $('.side-menu-btn').removeClass('close-btn');
    $('.side-menu-btn').addClass('open');
    $('.top-menu-btn').removeClass('close-btn');
    $('.top-menu-btn').addClass('open');
    $('.side-menu').removeClass('on');
    tl.reversed(!tl.reversed());
});

//메인 글씨 효과
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
//
TweenMax.from('.main-text h1 .hide-text.i2', 1.5, {
    delay: 0.1,
    y: '100%',
    ease: Expo.easeInOut,
});
//
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
//
TweenMax.from('.main-text h2 .hide-text.i1', 1.5, {
    delay: 0.1,
    y: '100%',
    ease: Expo.easeInOut,
});
//
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
// TweenMax.from('.send-message', 1.5, {
//     delay: 0.8,
//     opacity: 0,
//     y: '20',
//     ease: Expo.easeInOut,
// });

//text-무한 슬라이딩
//옆으로 가는 애니메이션
let $text = $('.rolling-text .rolling-text__text');
let $wrap = $('.rolling-text');

$text.clone().appendTo($wrap);

TweenMax.to($wrap, 10, {
    x: -$text.width(),
    ease: Linear.easeNone,
    repeat: -1,
});

let $text2 = $('.rolling-text2 .rolling-text__text2');
let $wrap2 = $('.rolling-text2');

$text2.clone().prependTo($wrap2);

TweenMax.to($wrap2, 10, {
    x: $text2.width(),
    ease: Linear.easeNone,
    repeat: -1,
});

//career 애니메이션
gsap.to('.scroll-btn', {
    x: 100,
    duration: 5,
    opacity: 0,
    scrollTrigger: {
        trigger: '.sec2',
        start: 'top 80%',
        // end: '+=1800',
        // pin: true,
        scrub: true,
        // markers: true,
        toggleAction: 'restart reverse none none',
        // toggleAction: "restart reverse none reset"
        //onEnter //onLeave //onEnterBack //onLeaveBack
        //play pause resume reverse restart reset complete none
    },
});
