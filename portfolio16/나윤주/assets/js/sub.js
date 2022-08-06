window.onload = function () {
    pageClick(); //페이지 애니메이션
  };
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

//페이지네이션
function pageClick(){
    document.querySelectorAll(".page__click").forEach((elem) => {
        elem.addEventListener("click", (e) => {
        e.preventDefault();
        const hrefName2 = elem.getAttribute('data-name');
        console.log(hrefName2);
        tl.reverse();
        setTimeout(() => {
            window.location.href =
            "../sub/"+ hrefName2 +".html";
        }, 1000);
        });
    });
}

//메뉴버튼
$('.side-menu ul li').click(function () {
    $('.side-menu-btn').removeClass('close-btn');
    $('.side-menu-btn').addClass('open');
    $('.top-menu-btn').removeClass('close-btn');
    $('.top-menu-btn').addClass('open');
    $('.side-menu').removeClass('on');
    tl.reversed(!tl.reversed());
});

//website 토글
$('.cont-text li h3').click(function () {
    $(this).parent('li').toggleClass('active');
    $(this).parent('li').siblings('li').removeClass('active');
});
function liActive() {
    if ($('.cont-text li').hasClass('active')) {
        $(this).chilren('p').addClass('.aos-init.aos-animate');
    } else {
        $(this).chilren('p').removeClass('.aos-init.aos-animate');
    }
}

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
//aboutme 이미지전환
new hoverEffect({
    parent: document.querySelector('.sec2'),
    intensity: 0.2,
    image1: '../assets/img/profile-b.png',
    image2: '../assets/img/profile.png',
    displacementImage: '../assets/img/diss.png',
    imagesRatio: 200 / 300,
});
