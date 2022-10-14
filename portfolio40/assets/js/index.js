var s = skrollr.init();
// AOS.init();

//새로고침 스크롤
// history.scrollRestoration = "manual"  

//메인 화면 고정
let main = gsap.timeline({
    scrollTrigger: {
        trigger: "#main",
        pin: true,
        scrub: 0.3,
        start: "top top",
        end: "+=1300"
    }
});

// //메인에서 해 트리거
// main.to(".sun", {
//     scrollTrigger: {
//         trigger: ".sun",
//         start: "bottom center",
//         scrub: 2,
//     },
// y: 600, duration: 2,
// }); 


// //스크롤 탑 값
// window.addEventListener("scroll", function () {
//     let scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY; //스크롤 크로스 브라우징
//     // let value = window.scrollY;
//     // let hippocampus = document.querySelector('.hippocampus');

//     document.querySelector(".paraScroll span").innerText = parseInt(scrollTop);


//     // hippocampus.style.left = value * 8 + 'px';

// });


//아메바 정의
const blob = createBlob({
    element: document.querySelector('.blob'),
    numPoints: 10, //아메바 점 개수
    centerX: 490, //중심점
    centerY: 490,
    minRadius: 360, //테두리 굴곡
    maxRadius: 420,
    minDuration: 1, //지속 시간
    maxDuration: 2
});

function createBlob(options) {

    var points = [];
    var path = options.element;
    var slice = (Math.PI * 2) / options.numPoints; //파이 * 2 / 점 개수
    var startAngle = random(Math.PI * 2);

    var tl = new TimelineMax({
        onUpdate: update
    });

    for (var i = 0; i < options.numPoints; i++) {

        var angle = startAngle + i * slice;
        var duration = random(options.minDuration, options.maxDuration);
        var point = {
            x: options.centerX + Math.cos(angle) * options.minRadius,
            y: options.centerY + Math.sin(angle) * options.minRadius
        };
        var tween = TweenMax.to(point, duration, {
            x: options.centerX + Math.cos(angle) * options.maxRadius,
            y: options.centerY + Math.sin(angle) * options.maxRadius,
            repeat: -1,
            yoyo: true,
            ease: Sine.easeInOut
        });

        tl.add(tween, -random(duration));
        points.push(point);
    }

    options.tl = tl;
    options.points = points;

    function update() {
        path.setAttribute("d", cardinal(points, true, 1));
    }

    return options;
}

function cardinal(data, closed, tension) {

    if (data.length < 1) return "M0 0";
    if (tension == null) tension = 1;

    var size = data.length - (closed ? 0 : 1);
    var path = "M" + data[0].x + " " + data[0].y + " C";

    for (var i = 0; i < size; i++) {

        var p0, p1, p2, p3;

        if (closed) {
            p0 = data[(i - 1 + size) % size];
            p1 = data[i];
            p2 = data[(i + 1) % size];
            p3 = data[(i + 2) % size];

        } else {
            p0 = i == 0 ? data[0] : data[i - 1];
            p1 = data[i];
            p2 = data[i + 1];
            p3 = i == size - 1 ? p2 : data[i + 2];
        }

        var x1 = p1.x + (p2.x - p0.x) / 6 * tension;
        var y1 = p1.y + (p2.y - p0.y) / 6 * tension;

        var x2 = p2.x - (p3.x - p1.x) / 6 * tension;
        var y2 = p2.y - (p3.y - p1.y) / 6 * tension;

        path += " " + x1 + " " + y1 + " " + x2 + " " + y2 + " " + p2.x + " " + p2.y;
    }

    return closed ? path + "z" : path;
}

function random(min, max) {
    if (max == null) {
        max = min;
        min = 0;
    }
    if (min > max) {
        var tmp = min;
        min = max;
        max = tmp;
    }
    return min + (max - min) * Math.random();
}
//아메바



// for (var i = 0; i < 20; i++) {  //물방울 수
//     var bubble = document.createElement('div');
//     bubble.className = 'bubble';
//     var set = Math.random() * 30 + 10 + 'px';   //랜덤 픽셀값

//     bubble.style.width = set;
//     bubble.style.height = set;
//     bubble.style.bottom = Math.random() * 4000 + 'px';
//     bubble.style.left = Math.random() * document.querySelector("#contents").offsetWidth + 'px';

//     document.querySelector("#contents").appendChild(bubble);

//     Animate(bubble)
// }

// // 물방울 애니메이션
// function Animate(set) {
//     $(set).animate({
//         bottom: document.querySelector("#contents").offsetHeight + 'px',
//         left: '+=' + ((Math.random() * 100) - 50) + 'px'
//     }, Math.random() * 12000 + 5000, 'linear', function() {
//         set.style.bottom = '0px';
//         Animate(set)
//     });
// }
// 물방울

// const modal = document.querySelector('.modalWrap');
// const standard = document.getElementById('standard');

// standard.addEventListener('click', function(){
//     modal.classList.add('view');
// })


const modal = document.querySelector("#modal");
const modalWrap = document.querySelector(".modalWrap");
const btnModal = document.querySelectorAll(".project");
const projectWrap = document.querySelector(".projectWrap");
const client = document.querySelector(".client");
const description = document.querySelector(".description");
const role = document.querySelector(".role");
const date = document.querySelector(".date");

//모달에 출력되어야할 값들의 배열
const modalInfo = [{
        url: "http://guswjd8694.dothome.co.kr/php/pages/main.php",
        client: "STUDY",
        description: "WEB STANDARD SITE",
        role: "HTML, CSS, JAVASCRIPT, JQUERY",
        date: "2021.10"
    },
    {
        url: "https://guswjd8694.github.io/dothome2021/portfolio/",
        client: "STUDY",
        description: "WEB RESPONSIVE SITE",
        role: "HTML, CSS, JAVASCRIPT, JQUERY",
        date: "2021.10"
    },
    {
        url: "https://guswjd8694.github.io/dothome2021/portfolio/",
        client: "STUDY",
        description: "MEGABOX SITE",
        role: "HTML, CSS, JAVASCRIPT, JQUERY",
        date: "2021.10"
    },
    {
        url: "https://guswjd8694.github.io/dothome2021/portfolio/",
        client: "STUDY",
        description: "REACT SITE",
        role: "HTML, CSS, JAVASCRIPT, JQUERY, REACT",
        date: "2021.10"
    },
    {
        url: "https://guswjd8694.github.io/dothome2021/portfolio/",
        client: "STUDY",
        description: "DOTHOME SITE",
        role: "HTML, CSS, JAVASCRIPT, JQUERY",
        date: "2021.10"
    },
    {
        url: "https://guswjd8694.github.io/dothome2021/portfolio/",
        client: "TEAM PROJECT",
        description: "GOODNIGHT SITE",
        role: "HTML, CSS, JAVASCRIPT, JQUERY, PHP",
        date: "2021.10"
    },
    {
        url: "https://guswjd8694.github.io/dothome2021/portfolio/",
        client: "TEAM PROJECT",
        description: "APPLE SITE",
        role: "HTML, CSS, JAVASCRIPT, JQUERY",
        date: "2021.10"
    },
    {
        url: "https://guswjd8694.github.io/dothome2021/portfolio/",
        client: "STUDY",
        description: "SCRIPT",
        role: "HTML, CSS, JAVASCRIPT, JQUERY",
        date: "2021.10"
    },
]

//프로젝트를 클릭하기 위한 project 반복 
btnModal.forEach((btn, index) => {
    //내가 선택한 프로젝트의 클릭 이벤트 발생
    //모달창 띄우기
    //모달안에 값을 출력시키기 위해서 updateModal함수에 index담아서 실행시킴  
    btn.addEventListener("click", e => {
        modal.style.cssText = "display:block";
        projectWrap.style.display = "none";

        updateModal(index);
    });
});


modal.addEventListener("click", e => {
    const closeBtn = e.target;
    if (closeBtn.classList.contains("close_btn")) {
        modal.style.display = "none";
        projectWrap.style.display = "flex";
    };
});



function updateModal(index) {
    const input = [];
    input.push(`
            <div class="modalWrap fixed">
                <div class="modalBg">
                    <div class="close_btn">
                        <div class="blackbar eq0"></div>    
                        <div class="blackbar eq1"></div>    
                    </div>

                    <div class="modal goodnight">
                        <div class="frame"><a href="${modalInfo[index].url}"></a></div>
                        <div class="explain">
                            <ul>
                                <li>
                                    <div class="title">CLIENT</div>
                                    <div class="desc client">${modalInfo[index].client}</div>
                                </li>
                                <li>
                                    <div class="title">DESCRIPTION</div>
                                    <div class="desc description">${modalInfo[index].description}</div>
                                </li>
                                <li>
                                    <div class="title">ROLE</div>
                                    <div class="desc role">${modalInfo[index].role}</div>
                                </li>
                                <li>
                                    <div class="title">DATE</div>
                                    <div class="desc date">${modalInfo[index].date}</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `)
    modal.innerHTML = input.join(' ');
};


//출력용
// window.addEventListener("mousemove", function (event) {
//     document.querySelector(".clientX").innerText = event.clientX;
//     document.querySelector(".clientY").innerText = event.clientY;
//     document.querySelector(".offsetX").innerText = event.offsetX;
//     document.querySelector(".offsetY").innerText = event.offsetY;
//     document.querySelector(".pageX").innerText = event.pageX;
//     document.querySelector(".pageY").innerText = event.pageY;
//     document.querySelector(".screenX").innerText = event.screenX;
//     document.querySelector(".screenY").innerText = event.screenY;
// });

window.addEventListener("mousemove", function (e) {
    var closeBtn = document.querySelector(".close_btn");
    if (closeBtn) {
        closeBtn.style.left = e.clientX + "px";
        closeBtn.style.top = e.clientY + "px";
    }

});


$(document).ready(function () {
    var movementStrength = 25;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    $(".mountainBack").mousemove(function (e) {
        var pageX = e.pageX - ($(window).width() / 2);
        var pageY = e.pageY - ($(window).height() / 2);
        var newvalueX = width * pageX * -1 - 25;
        var newvalueY = height * pageY * -1 - 50;
        $('.mountainBack').css("background-position", newvalueX + "px     " + newvalueY + "px");
    });
});

const menu = document.querySelector(".menu");
const menuList = document.querySelector(".menuList");
const list = document.querySelectorAll(".menuList li");
const nav = document.querySelectorAll(".nav");
const activeCont = [0, 5700, 10900, 31550, 34000];
let flag = true;
console.log(list)
var bgm = new Audio("./assets/bgm/wish.mp3");
    bgm.volume = 0.3;
    bgm.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    
document.querySelector(".bgm").addEventListener("click", function(){
    if(flag){
        const promise = bgm.play();
        promise.then(()=>{
            console.log("음악 실행");
        })
        .catch((error)=>{
            console.error("음악 재생실패 : ", error);
        });
        
        flag = false;
    } else {
        bgm.pause();
        flag = true;
    }
    
});

menu.addEventListener("click", function(){
    menuList.classList.toggle("show");
});

for(let i = 0; i < list.length; i++){
    list[i].querySelector('.nav').addEventListener('click', function(e){
        e.preventDefault();

        for(let j = 0; j < list.length; j++){
        // 나머지 버튼 클래스 제거
        list[j].classList.remove('active');
        }

        // 버튼 관련 이벤트
        this.parentNode.classList.add('active');

        // 버튼 클릭시 컨텐츠 전환
        window.scrollTo(0, activeCont[i]);
        // document.querySelector(activeCont).style.display = 'block';
    });
}

console.log(activeCont);