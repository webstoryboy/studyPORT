/*------------------------------
    script__animation__slider
-------------------------------*/

$(function () {

    var sliderContainer = $(".script__animation__slider");
    var container = $(".st__ani__slide__wrap");
    var slideGroup = container.find(".st__ani__slide");
    var slides = slideGroup.find("li");
    var nav = sliderContainer.find(".animation__btn");
    var indicator = sliderContainer.find(".st__ani__indicator ul");

    // 슬라이드의 개수
    var slideCount = slides.length;
    // 현재 보여지는 슬라이드의 인덱스를 담을 변수
    var currentIndex = 0;
    // 슬라이드가 움직이는데 걸리는 시간
    var duration = 500;
    // 슬라이드가 움직이는 방식(이징)
    var easing = "swing";
    // 슬라이드가 자동으로 몇 초에 한 번씩 움직일지 세팅
    var interval = 3000;
    // 아래쪽에서 interval을 걸어 줄 변수를 선언
    var timer;

    /* 슬라이드 위치 설정 및 인디케이터 생성 */

    for (i = 0; i < slideCount; i++) {

        // 각 슬라이드의 위치 설정(left값에 0,100%,200%,300%....를 넣어서 일렬로 놓는다.)
        slides.eq(i).css({
            left: 100 * i + "%"
        });

        // 1. 슬라이드 개수만큼 for문이 돌면서 반복하며 인디케이터에 li(dot)를 추가
        // indicator.append("<li></li>");

        // 2. 썸네일 이미지 인디케이터 만들기(해당 이미지 가져와 작게 만들어 넣기)
        var slideImgSrc = slides.eq(i).find("iframe").attr("title");
        indicator.append("<li>" + slideImgSrc + "</li>");
        // indicator.append("<li><img src='" + slideImgSrc + "'></li>");

    };


    /* 슬라이드 실행 함수 */

    function goToSlide(index) {

        // 전체 슬라이드를 움직이는 함수
        slideGroup.animate({ left: -100 * index + "%" }, duration, easing);

        // 현재 슬라이드의 인덱스 값을 저장
        currentIndex = index;

        // 내비게이션과 인디케이터 상태 업데이트
        updateNav();

    };


    /* 슬라이더 상태에 따라 내비게이션, 인디케이터 업데이트 하는 함수 */

    function updateNav() {
        var navPrev = nav.filter(".animation__btn__prev"); // .btn이지만 .prev를 가지고 있는 것
        var navNext = nav.filter(".animation__btn__next");

        // 첫 번째 슬라이드면 이전 버튼 없앰
        if (currentIndex === 0) {
            navPrev.addClass("animation__btn__disabled");
        } else {
            navPrev.removeClass("animation__btn__disabled");
        }

        // 마지막 슬라이드면 다음 버튼 없앰
        if (currentIndex === slideCount - 1) {
            navNext.addClass("animation__btn__disabled");
        } else {
            navNext.removeClass("animation__btn__disabled");
        }

        // 현재 슬라이드의 인덱스에 맞는 인디케이터에 .active 클래스 추가
        indicator.find("li").removeClass("indicator__active").eq(currentIndex).addClass("indicator__active");
    };

    /* 내비게이션 버튼 클릭 이벤트 */

    // .btn을 클릭하면 
    nav.click(function () {

        // 클릭한 요소가 prev클래스를 가지고 있는 경우
        // (prev 버튼을 눌렀을 때)
        if ($(this).hasClass("animation__btn__prev")) {

            // goToSlide 함수를 실행(currentIndex에서 1을 뺀다)
            goToSlide(currentIndex - 1);

            // next 버튼을 눌렀을 때
        } else {
            goToSlide(currentIndex + 1);
        }
    });

    /* 오토플레이 실행 함수 */
    function startTimer() {
        // timer 변수에 반복실행 시켜주는 setInterval 함수를 적용
        timer = setInterval(function () {

            // nextIndex 변수에 현재 인덱스 번호에 1을 더한 값을 슬라이드 개수로 나눈 나머지 값을 이용해 아래의 goToSlide에 적용시킨다.
            // 1 % 5 = 1
            // 2 % 5 = 2
            // 3 % 5 = 3
            // 4 % 5 = 4
            // 5 % 5 = 0
            var nextIndex = (currentIndex + 1) % slideCount;

            // 해당 인덱스 슬라이드로 이동(반복)
            goToSlide(nextIndex);

        }, interval);
    };

    /* 오토플레이 멈춤 함수 */
    function stopTimer() {

        // 반복 실행을 만들어 줄 때는 setInterval(실행될 함수);
        // 반복 실행을 멈출 때는 clearInterval(인터벌 되고 있는 함수(setInterval));
        clearInterval(timer);
    };

    /* 마우스 오버 타이머 작동 */
    // container.on({
    //     mouseenter : stopTimer,
    //     mouseleave : startTimer
    // });

    // 첫 번째 index의 슬라이드부터 시작
    goToSlide(currentIndex);

    // 오토
    // startTimer();

});

/*----------------------
    GSAP - Timeline
------------------------*/

let script_tl1 = new TimelineMax(),
    script_tl2 = new TimelineMax(),
    script_tl3 = new TimelineMax(),
    script_tl4 = new TimelineMax(),
    script_tl5 = new TimelineMax(),
    script_tl6 = new TimelineMax(),
    script_tl7 = new TimelineMax();

script_tl1.to(".script__main-title__text", .8, { opacity: 1, y: 0, stagger: .06, ease: "power1.out" });

script_tl2.from(".main-subTitle__text", .5, { opacity: 0, y: 50, stagger: 0.05, ease: "power1.out" });
script_tl2.from(".main-icon-smile", .5, { opacity: 0, y: 50, ease: "power1.out" }, "-=.3");

script_tl3.from(".script__animation", .5, { opacity: 0, y: 50, ease: "power1.out" })
script_tl3.from(".script__animation__title", .5, { opacity: 0, ease: "power1.out" })
script_tl3.from(".script__animation__slider", .5, { opacity: 0, y: 50, ease: "power1.out" }, "-=.3")

script_tl4.from(".script__01 .st__content__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" })
script_tl4.from(".script__01 .st__text__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" }, "-=.3")
script_tl4.from(".script__01 .st__card__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" }, "-=.3")

script_tl5.from(".script__02 .st__content__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" })
script_tl5.from(".script__02 .st__text__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" }, "-=.3")
script_tl5.from(".script__02 .st__card__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" }, "-=.3")

script_tl6.from(".script__03 .st__content__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" })
script_tl6.from(".script__03 .st__text__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" }, "-=.3")
script_tl6.from(".script__03 .st__card__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" }, "-=.3")

script_tl7.from(".script__04 .st__content__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" })
script_tl7.from(".script__04 .st__text__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" }, "-=.3")
script_tl7.from(".script__04 .st__card__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" }, "-=.3")

const script_controller = new ScrollMagic.Controller();

const script_scene1 = new ScrollMagic.Scene({
    triggerElement: ".script__main",
    reverse: false
})
    .setTween(script_tl1)
    .addTo(script_controller);

const script_scene2 = new ScrollMagic.Scene({
    triggerElement: ".main-subTitle",
    reverse: false
})
    .setTween(script_tl2)
    .addTo(script_controller);


const script_scene3 = new ScrollMagic.Scene({
    triggerElement: ".script__animation",
    reverse: false
})
    .setTween(script_tl3)
    .addTo(script_controller);

const script_scene4 = new ScrollMagic.Scene({
    triggerElement: ".script__01",
    reverse: false
})
    .setTween(script_tl4)
    .addTo(script_controller);

const script_scene5 = new ScrollMagic.Scene({
    triggerElement: ".script__02",
    reverse: false
})
    .setTween(script_tl5)
    .addTo(script_controller);

const script_scene6 = new ScrollMagic.Scene({
    triggerElement: ".script__03",
    reverse: false
})
    .setTween(script_tl6)
    .addTo(script_controller);

const script_scene7 = new ScrollMagic.Scene({
    triggerElement: ".script__04",
    reverse: false
})
    .setTween(script_tl7)
    .addTo(script_controller);


