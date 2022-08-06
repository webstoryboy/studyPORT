// 어바웃밋 커서효과
var $cursor = $('.cursor');
var $cursorHover = $('.cursorHover');
// var $webCursor = $('.cursor-next'); //웹
var $cursorHover1 = $('.cursor1');
var $cursorHover2 = $('.cursor2');
var $cursorHover3 = $('.cursor3');
var $cursorHover4 = $('.cursor4');

//mover cusor
function cursorMover(e) {
    gsap.to($cursor, {
        x: e.clientX,
        y: e.clientY,
        stagger: 0.004,
    });
    gsap.to($cursorHover, {
        x: e.clientX,
        y: e.clientY,
    });
    gsap.to($cursorHover1, {
        x: e.clientX,
        y: e.clientY,
    });
    gsap.to($cursorHover2, {
        x: e.clientX,
        y: e.clientY,
    });
    gsap.to($cursorHover3, {
        x: e.clientX,
        y: e.clientY,
    });
    gsap.to($cursorHover4, {
        x: e.clientX,
        y: e.clientY,
    });
    gsap.to($webCursor, {
        x: e.clientX,
        y: e.clientY,
    });
}

//hover cusor
function cursorhover1(e) {
    gsap.to($cursor, {
        scale: 0,
    });
    gsap.to($cursorHover, {
        scale: 1.2,
    });
    gsap.to($cursorHover1, {
        scale: 1.2,
    });
}
function cursorhover2(e) {
    gsap.to($cursor, {
        scale: 0,
    });
    gsap.to($cursorHover, {
        scale: 1.2,
    });
}
function cursorhover3(e) {
    gsap.to($cursor, {
        scale: 0,
    });
    gsap.to($cursorHover, {
        scale: 1.2,
    });
}
function cursorhover4(e) {
    gsap.to($cursor, {
        scale: 0,
    });
    gsap.to($cursorHover, {
        scale: 1.2,
    });
}

//normal cusor
function cursor(e) {
    gsap.to($cursor, {
        scale: 1,
    });
    gsap.to($cursorHover, {
        scale: 1,
    });
}

$(window).on('mousemove', cursorMover);

// $('.web-hover').hover(cursorhover1, cursor, function () {
//     $webCursor.addClass('active').siblings().removeClass('active');
// });

$('.mobile-hover').hover(cursorhover2, cursor, function () {
    $cursorHover2.addClass('active').siblings().removeClass('active');
});

$('.js-hover').hover(cursorhover3, cursor, function () {
    $cursorHover2.addClass('active').siblings().removeClass('active');
});

$('.animation-hover').hover(cursorhover4, cursor, function () {
    $cursorHover1.addClass('active').siblings().removeClass('active');
});
