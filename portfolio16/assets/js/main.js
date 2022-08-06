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

//모바일 스크롤효과
function changeImage(img) {
    document.getElementById('slideImg').style.backgroundImage = img;
}

$(document).ready(function () {
    TweenMax.set('#slideImg', { width: 0 });

    var tl = new TimelineLite();

    $(document)
        .on('mouseover', '.menu-text h3', function (evt) {
            tl = new TimelineLite();
            tl.to($('#slideImg'), 1, {
                width: '100%',
                ease: Expo.easeInOut,
            });
        })
        .on('mouseout', '.menu-text h3', function (evt) {
            tl = new TimelineLite();
            tl.to($('#slideImg'), 0.5, {
                width: 0,
                ease: Expo.easeInOut,
            });
        });
});

function sideMenu() {
    TweenMax.set('.menu-text li:nth-child(1)', {
        delay: 0.1,
        width: 0,
        ease: Expo.easeInOut,
    });
}

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

//aboutme 이미지전환
new hoverEffect({
    parent: document.querySelector('.sec2'),
    intensity: 0.2,
    image1: './assets/img/profile-b.png',
    image2: './assets/img/profile.png',
    displacementImage: './assets/img/diss.png',
    imagesRatio: 200 / 300,
});

//스크롤애니메이션 보여주기
$('.top-btn').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 400);
    return false;
});

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

//더보기 버튼
let $text3 = $('.rolling-text3 .rolling-text__text3');
let $wrap3 = $('.rolling-text3');

$text3.clone().prependTo($wrap3);
$text3.clone().prependTo($wrap3);
$text3.clone().prependTo($wrap3);
$text3.clone().prependTo($wrap3);

TweenMax.to($wrap3, 2, {
    x: $text3.width() * 2,
    ease: Linear.easeNone,
    repeat: -1,
});
