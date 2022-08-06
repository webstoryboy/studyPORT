$(document).ready(function () {
    //로딩
    function loading() {
        let $progress = $(".progress"),
            $progressText = $(".progress-text");

        let imgLoad = imagesLoaded("body"),
            imgTotal = imgLoad.images.length,
            imgLoaded = 0,
            imgCurrent = 0,
            progressTimer = setInterval(updateProgress, 1000 / 60);

        imgLoad.on("progress", function () {
            imgLoaded++;
        });

        function updateProgress() {
            let target = (imgLoaded / imgTotal) * 100;
            imgCurrent += (target - imgCurrent) * 0.1;
            $progressText.text(parseInt(imgCurrent));

            if (imgCurrent >= 100) {
                clearInterval(progressTimer);

                $("body").addClass("active");
                gsap.to($progress, {
                    duration: 1,
                    top: "-110%",
                    ease: "power4.out"
                });

                //메인 애니메이션
                let tl = gasp.timeline();
            }

            if (imgCurrent > 99) {
                imgCurrent = 100;
            }
        }
    }
    loading();


    //section5 스크롤
    var s = skrollr.init();

    $(window).scroll(function () {

        var wScroll = $(this).scrollTop();

        //메인화면 scroll down
        $(".txt1").css("transform", "translateX(" + -wScroll + "px");
        $(".txt2").css("transform", "translateX(" + wScroll + "px");
        $(".txt3").css("transform", "translateX(" + -wScroll + "px");
        $(".scroll_down").css("transform", "rotate(" + wScroll + "deg)");

        var offset = wScroll - $("#section5").offset().top;


        //사이트 스크롤
        var offset1 = (wScroll - $("#section6 .web_side svg").offset().top) * 0.2
        var offset2 = (wScroll - $(".deco1").offset().top) * 0.2;
        var offset3 = (wScroll - $(".deco2").offset().top) * 0.4;
        var offset4 = (wScroll - $(".deco3").offset().top) * 0.3;
        var offset5 = (wScroll - $(".deco4").offset().top) * 0.2;
        var offset6 = (wScroll - $("#section6 .side_drop").offset().top) * 0.2;

        var offset7 = (wScroll - $("#section7 .web_side svg").offset().top) * 0.2
        var offset8 = (wScroll - $("#section7 .deco1").offset().top) * 0.2;
        var offset9 = (wScroll - $("#section7 .deco2").offset().top) * 0.4;
        var offset10 = (wScroll - $("#section7 .deco3").offset().top) * 0.3;
        var offset11 = (wScroll - $("#section7 .deco4").offset().top) * 0.2;
        var offset12 = (wScroll - $("#section7 .side_drop").offset().top) * 0.2;


        var offset13 = (wScroll - $("#section8 .web_side svg").offset().top) * 0.2
        var offset14 = (wScroll - $("#section8 .deco1").offset().top) * 0.2;
        var offset15 = (wScroll - $("#section8 .deco2").offset().top) * 0.4;
        var offset16 = (wScroll - $("#section8 .deco3").offset().top) * 0.3;
        var offset17 = (wScroll - $("#section8 .deco4").offset().top) * 0.2;
        var offset18 = (wScroll - $("#section8 .side_drop").offset().top) * 0.2;

        var offset19 = (wScroll - $("#section9 .web_side svg").offset().top) * 0.2
        var offset20 = (wScroll - $("#section9 .deco1").offset().top) * 0.2;
        var offset21 = (wScroll - $("#section9 .deco2").offset().top) * 0.4;
        var offset22 = (wScroll - $("#section9 .deco3").offset().top) * 0.3;
        var offset23 = (wScroll - $("#section9 .deco4").offset().top) * 0.2;
        var offset24 = (wScroll - $("#section9 .side_drop").offset().top) * 0.2;


        //section5 skill
        $(".skill_word1").css("transform", "translateX(" + offset + "px)");
        $(".skill_word2").css("transform", "translateX(" + -offset + "px)");
        $(".skill_word3").css("transform", "translateX(" + offset + "px)");
        $(".skill_word4").css("transform", "translateX(" + -offset + "px)");

        //section6
        $("#section6 .web_side svg").css("transform", "translatey(" + offset1 + "px)");
        $(".deco1").css("transform", "translateY(" + offset2 + "px)");
        $(".deco2").css("transform", "translateY(" + offset3 + "px)");
        $(".deco3").css("transform", "translateY(" + offset4 + "px)");
        $(".deco4").css("transform", "translateY(" + offset5 + "px)");
        $("#section6 .side_drop").css("transform", "translateY(" + offset6 + "px)");

        //section7
        $("#section7 .web_side svg").css("transform", "translatey(" + offset7 + "px)");
        $("#section7 .deco1").css("transform", "translateY(" + offset8 + "px)");
        $("#section7 .deco2").css("transform", "translateY(" + offset9 + "px)");
        $("#section7 .deco3").css("transform", "translateY(" + offset10 + "px)");
        $("#section7 .deco4").css("transform", "translateY(" + offset11 + "px)");
        $("#section7 .side_drop").css("transform", "translateY(" + offset12 + "px)");

        //section8
        $("#section8 .web_side svg").css("transform", "translatey(" + offset13 + "px)");
        $("#section8 .deco1").css("transform", "translateY(" + offset14 + "px)");
        $("#section8 .deco2").css("transform", "translateY(" + offset15 + "px)");
        $("#section8 .deco3").css("transform", "translateY(" + offset16 + "px)");
        $("#section8 .deco4").css("transform", "translateY(" + offset17 + "px)");
        $("#section8 .side_drop").css("transform", "translateY(" + offset18 + "px)");

        //section9
        $("#section9 .web_side svg").css("transform", "translatey(" + offset19 + "px)");
        $("#section9 .deco1").css("transform", "translateY(" + offset20 + "px)");
        $("#section9 .deco2").css("transform", "translateY(" + offset21 + "px)");
        $("#section9 .deco3").css("transform", "translateY(" + offset22 + "px)");
        $("#section9 .deco4").css("transform", "translateY(" + offset23 + "px)");
        $("#section9 .side_drop").css("transform", "translateY(" + offset24 + "px)");
    });






})







// 햄버거 버튼
$('.js-toggle-menu').click(function (e) {
    $('.mobile-header-nav').slideToggle();
});


$('.mobile-header-nav li a').click(function (e) {
    $(".mobile-header-nav").slideUp();

});




// 무한로딩텍스트
let speed = 0;
let acc = 0;
let hover = false;
let width;
let times;
let cloned = [];

const item = document.querySelector('.menu--item');
const word = item.querySelector('.menu--word');


/*--------------------
Calculate
--------------------*/
const calculate = () => {
    /* console.log('cloned', cloned);*/
    cloned.forEach(i => {
        i.parentNode.removeChild(i);
    });
    cloned = [];

    width = Math.ceil(word.clientWidth);
    times = Math.ceil(window.innerWidth / width);

    item.style.width = `${(times + 1) * width}px`;

    for (let i = 0; i < times + 1; i++) {
        const clone = word.cloneNode(true);
        word.parentNode.appendChild(clone);
        cloned.push(clone);
    }
};


/*--------------------
Listeners
--------------------*/
const handleMouse = bool => hover = bool;
item.addEventListener('mouseenter', () => {
    handleMouse(true);
});
item.addEventListener('touchstart', () => {
    handleMouse(true);
});
item.addEventListener('mouseleave', () => {
    handleMouse(false);
});
item.addEventListener('touchend', () => {
    handleMouse(false);
});
window.addEventListener('resize', calculate);
window.addEventListener('load', calculate);


/*--------------------
Animate
--------------------*/
const animate = () => {
    // Acceleration
    acc += 0.1;
    if (hover) {
        acc -= 0.35;
    }

    // Min/Max accelearion
    acc = Math.min(3, Math.max(0, acc));

    // Add acceleration to speed
    speed += acc;

    // Text Loop
    if (speed >= width) {
        speed = 0;
    }

    // CSS Text
    item.style.transform = `translateX(${-speed}px) skewX(${-2 * acc}deg)`;

    // RaF
    requestAnimationFrame(animate);
};
animate();



// section1 갤러리
const gallery = document.querySelector("#js-gallery");
const imgArray = [];

function createImgArray() {
    const galleryItem = document.querySelectorAll(".self_box .about_item");
    galleryItem.forEach(function (item) {
        const itemId = item.getAttribute("id");
        imgArray.push(itemId);
    });
}

createImgArray();

function getRandomInt(max) { // 랜덤숫자
    return Math.floor(Math.random() * Math.floor(max));
};

function setImgPosition(elImg) { // 랜덤위치
    const randomVal = getRandomInt(2);
    elImg.style.left = randomVal + '%';
    elImg.style.top = randomVal + '%';
};

let currentIndex = imgArray.length - 1;

// 갤러리 클릭
gallery.addEventListener("click", toggleImgVisibility);

function toggleImgVisibility() {
    const $this = this;
    const hasImgsClass = "has-imgs";
    const hasImgsClassExists = $this.classList.contains(hasImgsClass);
    const img = {
        first: document.querySelector(`#${imgArray[0]}`),
        last: document.querySelector(`#${imgArray[imgArray.length - 1]}`),
        current: document.querySelector(`#${imgArray[currentIndex]}`),
        hiddenClass: 'is-hidden'
    };

    if (currentIndex === -1) {
        showImg(img.first, img.hiddenClass);
        $this.classList.add(hasImgsClass);
    }

    if (currentIndex === imgArray.length) {
        hideImg(img.last, img.hiddenClass);
        $this.classList.remove(hasImgsClass);
    }

    return hasImgsClassExists ? showImg(img.current, img.hiddenClass) : hideImg(img.current, img.hiddenClass);

} //toggleImgVisibility

function hideImg(elImg, elClass) {
    currentIndex--;
    if (currentIndex === -1)
        return
    if (elImg) {
        elImg.classList.add(elClass);
    }
} //hideImg

function showImg(elImg, elClass) {
    currentIndex++;
    if (elImg) {
        elImg.classList.remove(elClass);
        setImgPosition(elImg);
    }
} //showImg




/* 자기소개 팝업 */

$(".publisher").click(function () {
    $(".pop_publisher").addClass("show");
});
$(".pop_publisher .closePop").click(function () {
    $(".pop_publisher").removeClass("show");
});

$(".travel").click(function () {
    $(".pop_travel").addClass("show");
});
$(".pop_travel .closePop").click(function () {
    $(".pop_travel").removeClass("show");
});

$(".movie").click(function () {
    $(".pop_movie").addClass("show");
});
$(".pop_movie .closePop").click(function () {
    $(".pop_movie").removeClass("show");
});

$(".developper").click(function () {
    $(".pop_developper").addClass("show");
});
$(".pop_developper .closePop").click(function () {
    $(".pop_developper").removeClass("show");
});

$(".fashion").click(function () {
    $(".pop_fashion").addClass("show");
});
$(".pop_fashion .closePop").click(function () {
    $(".pop_fashion").removeClass("show");
});

$(".cosmetic").click(function () {
    $(".pop_cosmetic").addClass("show");
});
$(".pop_cosmetic .closePop").click(function () {
    $(".pop_cosmetic").removeClass("show");
});

$(".france").click(function () {
    $(".pop_france").addClass("show");
});
$(".pop_france .closePop").click(function () {
    $(".pop_france").removeClass("show");
});

$(".cafe").click(function () {
    $(".pop_cafe").addClass("show");
});
$(".pop_cafe .closePop").click(function () {
    $(".pop_cafe").removeClass("show");
});

$(".youtube").click(function () {
    $(".pop_youtube").addClass("show");
});
$(".pop_youtube .closePop").click(function () {
    $(".pop_youtube").removeClass("show");
});

$(".music").click(function () {
    $(".pop_music").addClass("show");
});
$(".pop_music .closePop").click(function () {
    $(".pop_music").removeClass("show");
});

$(".nature").click(function () {
    $(".pop_nature").addClass("show");
});
$(".pop_nature .closePop").click(function () {
    $(".pop_nature").removeClass("show");
});

$(".netflix").click(function () {
    $(".pop_netflix").addClass("show");
});
$(".pop_netflix .closePop").click(function () {
    $(".pop_netflix").removeClass("show");
});

$(".perfume").click(function () {
    $(".pop_perfume").addClass("show");
});
$(".pop_perfume .closePop").click(function () {
    $(".pop_perfume").removeClass("show");
});

$(".jolly").click(function () {
    $(".pop_jolly").addClass("show");
});
$(".pop_jolly .closePop").click(function () {
    $(".pop_jolly").removeClass("show");
});

$(".diary").click(function () {
    $(".pop_diary").addClass("show");
});
$(".pop_diary .closePop").click(function () {
    $(".pop_diary").removeClass("show");
});




// 애니메이션 슬라이드
$(".ani_box .iframe .frame_box").hide();
$(".ani_box .iframe .frame_box").eq(0).show();
$(".ani_box .iframe .plus").click(function () {
    $(this).toggleClass("on")
    $(this).next(".frame_box").slideToggle(400);
});

// 자바스크립트 슬라이더

$('.slider').each(function () {
    var $this = $(this);
    var $group = $this.find('.slide_group');
    var $slides = $this.find('.slide');
    var bulletArray = [];
    var currentIndex = 0;
    var timeout;

    function move(newIndex) {
        var animateLeft, slideLeft;

        advance();

        if ($group.is(':animated') || currentIndex === newIndex) {
            return;
        }

        bulletArray[currentIndex].removeClass('active');
        bulletArray[newIndex].addClass('active');

        if (newIndex > currentIndex) {
            slideLeft = '100%';
            animateLeft = '-100%';
        } else {
            slideLeft = '-100%';
            animateLeft = '100%';
        }

        $slides.eq(newIndex).css({
            display: 'block',
            left: slideLeft
        });
        $group.animate({
            left: animateLeft
        }, function () {
            $slides.eq(currentIndex).css({
                display: 'none'
            });
            $slides.eq(newIndex).css({
                left: 0
            });
            $group.css({
                left: 0
            });
            currentIndex = newIndex;
        });
    }

    function advance() {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            if (currentIndex < ($slides.length - 1)) {
                move(currentIndex + 1);
            } else {
                move(0);
            }
        }, 8000);
    }

    $('.next_btn').on('click', function () {
        if (currentIndex < ($slides.length - 1)) {
            move(currentIndex + 1);
        } else {
            move(0);
        }
    });

    $('.previous_btn').on('click', function () {
        if (currentIndex !== 0) {
            move(currentIndex - 1);
        } else {
            move(3);
        }
    });


    $.each($slides, function (index) {
        var $button = $('<a class="slide_btn"></a>');

        if (index === currentIndex) {
            $button.addClass('active');
        }
        $button.on('click', function () {
            move(index);
        }).appendTo('.slide_buttons');
        bulletArray.push($button);
    });

    advance();
});


//section9
let rid = null;
const spring = 0.09;
const friction = 0.8;
let divs = Array.from(document.querySelectorAll(".innerdiv"));

class Chart {
    constructor(path, text, target) {
        this.path = path;
        this.text = text;
        this.text.textContent = target + "%";
        this.R = 10;
        this.start = .01;
        this.divisions = 100;
        this.vel = 0;
        this.stylePath(target)
    }

    stylePath(target) {
        let d = `M${this.R},0  A${this.R},${this.R} 0 1,1 ${this.R},-.01z`;
        this.path.setAttributeNS(null, "d", d);
        this.pathLength = this.path.getTotalLength();
        this.unit = this.pathLength / this.divisions;
        this.strokeLength = this.start * this.unit;
        this.target = target * this.unit;
        this.path.style.strokeDasharray = `${this.strokeLength},${this.pathLength -
this.strokeLength}`;
    }

    updateStrokeLength() {
        this.dist = this.target - this.strokeLength;
        this.acc = this.dist * spring;
        this.vel += this.acc;
        this.vel *= friction;
        this.strokeLength += this.vel;
        this.path.style.strokeDasharray = `${this.strokeLength},${this.pathLength -
this.strokeLength}`;
    }
}

let charts = [];

charts.push(new Chart(aPath, aText, 85));
charts.push(new Chart(bPath, bText, 60));
charts.push(new Chart(gPath, gText, 85));
charts.push(new Chart(cPath, cText, 80));
charts.push(new Chart(dPath, dText, 70));

function Frame() {
    rid = window.requestAnimationFrame(Frame);
    charts.map((c) => c.updateStrokeLength())
}
Frame();

divs.map((div) => {
    div.addEventListener("input", function () {
        charts.map((c) => {
            if (isNaN(parseInt(c.text.textContent))) {
                c.text.textContent = 0 + "%";
            }
            if (parseInt(c.text.textContent) > 100) {
                c.text.textContent = 100 + "%";
            }
            if (rid) {
                window.cancelAnimationFrame(rid)
            }
            c.target = (parseInt(c.text.textContent) || 0) * c.unit;
            if (!c.text.textContent.match("%")) {
                c.text.textContent += "%";
            }
            Frame();
        });
    });
});
