// var isIos = /iPhone|iPad|iPod/i.test(navigator.userAgent);
// var isAppIos = /iPhone|iPad|iPod/i.test(navigator.userAgent) && window.webkit && window.webkit.messageHandlers.oasis;
// var isAndroid = /Android/i.test(navigator.userAgent);
// var isAppAndroid = /Android/i.test(navigator.userAgent) && window.oasis;
// var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Apple/i.test(navigator.userAgent);
// console.log(navigator.userAgent)
// console.log(/iPhone|iPad|iPod|Apple/i.test(navigator.userAgent))

// window.addEventListener('DOMContentLoaded', () => {
//     if (/iPhone|iPad|iPod|Apple/i.test(navigator.userAgent)) {
//         window.open('https://kdong-font-world.web.app/', '_blank');
//         window.location = 'https://kdong-font-world.web.app/'
//     }
//     isMobile ? () => window.open(`https://kdong-font-world.web.app/`, '_self') : () => window.open('https://kdong-font-world.web.app/', '_self');
// })



var j$ = jQuery;

// 아이콘 인스타
const helloEx = document.querySelector(".helloText");
const helloExDot = document.querySelector(".helloText .dot .dot1");
const kdongIcon = document.querySelector(".kdongIcon");
const moreInsta = document.querySelector(".more__insta");
const insta = document.querySelector(".insta");
const moreInstaDot1 = document.querySelector(".insta__top .dot .dot1");
const moreInstaDot2 = document.querySelector(".insta__top .dot .dot2");
const moreInstaDot3 = document.querySelector(".insta__top .dot .dot3");

let totalWidth = j$(window).width();

// setTimeout(() => {
//     helloEx.style.display = "block";
// }, 4000)

// setTimeout(() => {
//     j$(function() {
//     var data = [
//         {
//         action: 'type',
//         strings: [`안녕하세요! 🙌`, `저는 밥값하는 프론트 앤드 강동재 입니다.` , `저의 포트폴리오를 구경하시고 연락주세요~!!`, `gkfl8809@naver.com 아이콘을 클릭해주세요!!!! ------------->`],
//         postDelay: 7500
//         }
//     ];
//     runScripts(data, 0);
//     });

//     function runScripts(data, pos) {
//         var prompt = j$('.prompt'),
//             script = data[pos];
//         if(script.clear === true) {
//         j$('.history').html(''); 
//         }
//         switch(script.action) {
//             case 'type':
//             // cleanup for next execution
//             prompt.removeData();
//             prompt.typed({
//                 strings: script.strings,
//                 typeSpeed: 70
//             });
//             break;
//             case 'view':

//             break;
//         }
//     }
// }, 4000)

const mWidth1 = 620;
const mWidth2 = 480;

helloExDot.addEventListener("click", () => {
    helloEx.style.display = "none";
})

kdongIcon.addEventListener("click", () => {
    moreInsta.style.transition = "all 0.3s";
    // moreInsta.style.transform = "scale(1)";
    // moreInsta.style.right = "10px";
    // moreInsta.style.bottom = "10px";

    gsap.to(moreInsta, {
        duration: 0.5,
        width: 400,
        delay: 0.1,
        x: -10,
        ease: "expo.inOut"
    })
    gsap.to(moreInsta, {
        duration: 0.5,
        height: 620,
        delay: 0.8,
        y: -10,
        ease: "expo.inOut"
    })
})

moreInstaDot1.addEventListener("click", () => {
    moreInsta.style.transition = "all 0.3s";
    gsap.to(moreInsta, {
        duration: 0.5,
        width: 0,
        delay: 0.8,
        x: 3,
        ease: "expo.inOut"
    })
    gsap.to(moreInsta, {
        duration: 0.5,
        height: 0,
        delay: 0.1,
        y: 3,
        ease: "expo.inOut"
    })
})

moreInstaDot2.addEventListener("click", () => {
    const text = confirm("Do you want WORK with Me?");

    if (text === true) {
        alert("Contact Me : 010-2377-2418");
    } else {
        console.log("Contact Me : 010-2377-2418");
    }
})

moreInstaDot3.addEventListener("click", () => {
    const text = confirm("Do you want WORK with Me?");

    if (text === true) {
        alert("Email : gkfl8809@naver.com");
    } else {
        console.log("Email : gkfl8809@naver.com");
    }
})
// } else if ( totalWidth > mWidth1 ){
//     if(totalWidth < mWidth2){
//         moreInstaDot3.addEventListener("click", () => {
//             moreInsta.style.transition = "all 0.3s";
//             moreInsta.style.transform = "scale(1.5)";
//             moreInsta.style.right = "110px";
//             moreInsta.style.bottom = "160px";
//         })  
//     } else {
//         moreInstaDot3.addEventListener("click", () => {
//             alert("모바일에서는 작동하지 않습니다.");
//         })
//     }
// }

moreInstaDot2.addEventListener("click", () => {
    moreInsta.style.transition = "all 0.3s";
    moreInsta.style.transform = "scale(1)";
    gsap.to(moreInsta, {
        scaleX: 1.0,
        scaleY: 1.0,
        x: -10,
        y: -10,
        ease: "expo.inOut"
    })
})

// 아이콘 인스타 슬라이드
const sliderWrap = document.querySelector(".insta__img__wrap");
const sliderImg = document.querySelector(".insta__img__box");
const sliderInner = document.querySelector(".insta__img__inner");
const slider = document.querySelectorAll(".insta__slider");

let currentIndex = 0;
// let sliderWidth = document.querySelector(".insta__slider").offsetWidth;
let sliderWidth = 360;

let sliderCount = slider.length;
let sliderClone = sliderInner.firstElementChild.cloneNode(true);
sliderInner.appendChild(sliderClone);

setInterval(() => {
    currentIndex++; // 0 1 2 3 4 5 6 7 8 9
    sliderInner.style.transition = "all 0.3s";
    sliderInner.style.transform = "translate(" + (-360 * currentIndex) + "px)";
    dotActive()

    if (currentIndex == sliderCount) {
        setTimeout(() => {
            sliderInner.style.transition = "0s";
            sliderInner.style.transform = "translateX(0)";
        }, 300);
        currentIndex = 0;
    };
}, 3000);

const sliderDot = sliderWrap.querySelector(".slider-dot");
let sliderTotalWidth = sliderWidth * sliderCount;
let dotIndex = "";

(() => {
    // 기본 셋팅
    sliderInner.style.width = sliderTotalWidth + "px";
    sliderInner.style.transition = "all 300ms ease-in";
    sliderInner.style.left = 0;

    // 닷 메뉴 셋팅
    slider.forEach((e, i) => {
        let active = "";
        if (i === currentIndex) active = "active";
        dotIndex += `<a href='#' class='dot ${active}'>${i}</a>`;
    })
    sliderDot.innerHTML = dotIndex;
})()

// 이미지 움직이기
const gotoSlider = num => {
    sliderInner.style.left = -sliderWidth * num + "px";

    currentIndex = num;
    dotActive()
}

// 닷 메뉴 활성화 - 간단
function dotActive() {
    sliderDot.querySelectorAll("a").forEach((el, index) => {
        index == currentIndex ? el.classList.add('active') : el.classList.remove('active');
    });
}

// 닷 메뉴 버튼
sliderDot.querySelectorAll("a").forEach((dot, index) => {
    dot.addEventListener("click", (e) => {
        e.preventDefault();
        gotoSlider(index);
        dotActive();
    });
});