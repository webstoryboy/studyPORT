//text-무한 슬라이딩
let $text = $('.slideText h2');
let $wrap = $('.slideText');

$text.clone().appendTo($wrap);

TweenMax.to($wrap, 10, {
    x: -$text.width(),
    ease: Linear.easeNone,
    repeat: -1,
});

//모바일 그림 움직이기

function scrollImg() {}

let mobileUl = $('.mobile-cont ul');
let mobileli = $('.mobile-cont ul li');

$text.clone().appendTo($wrap);

TweenMax.to($wrap, 10, {
    x: -$text.width(),
    ease: Linear.easeNone,
    repeat: -1,
});
