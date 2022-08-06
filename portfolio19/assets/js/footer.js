/*----------------------
    GSAP - Timeline
------------------------*/

let foot_tl1 = new TimelineMax(),
    foot_tl2 = new TimelineMax();

foot_tl1.from(".footer__wrap", .5, { opacity: 0, y: 50, ease: "powe1.out" });
foot_tl1.from(".footer__contact-icon", .5, { opacity: 0, y: 50, ease: "power1.out" }, "-=.2");
foot_tl1.from(".footer__contact-title__text", .5, { opacity: 0, y: 50, stagger: 0.05, ease: "power1.out" }, "-=.2");
foot_tl1.from(".footer__contact-btn", .3, { opacity: 0, y: 50, ease: "power1.out" }, "-=.2");

foot_tl2.from(".social__btn", 1, { opacity: 0, y: 50, stagger: 0.06, ease: "power4.out" });

const foot_controller = new ScrollMagic.Controller();

const scene6 = new ScrollMagic.Scene({
    triggerElement: ".footer",
    reverse: false
})
    .setTween(foot_tl1)
    .addTo(foot_controller);

const scene7 = new ScrollMagic.Scene({
    triggerElement: ".footer__socials",
    reverse: false
})
    .setTween(foot_tl2)
    .addTo(foot_controller);


/*----------------------------
    Footer Button Smile
-----------------------------*/

const footerCont = document.querySelector(".footer__contact");
const winWidth = window.innerWidth;
const winHeight = window.innerHeight;
const easeOutQuart = "cubic-bezier(0.165, 0.84, 0.44, 1)";
const randomNumberInRange = (min, max) => Math.random() * (max - min) + min;
const footerContBtn = document.querySelectorAll(".smile-motion");
const createParticle = (x, y) => {
    // const width = randomNumberInRange(6, 36);
    const tx = randomNumberInRange(-360, 360);
    const ty = randomNumberInRange(-360, 360);
    const rz = randomNumberInRange(0, 480);
    const delay = randomNumberInRange(0, 240);
    const duration = randomNumberInRange(4000, 5000);
    const particle = document.createElement("div");
    particle.className = "cont-btn__smile";
    document.body.appendChild(particle);
    const anime = particle.animate(
        [
            {
                opacity: 1,
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(-45deg)`
            },
            {
                opacity: 0,
                transform: `translate(-50%, -50%) translate(${x + tx}px, ${y + ty}px) rotate(${-45 + rz}deg)`
            }
        ],
        {
            duration,
            delay,
            easing: easeOutQuart
        }
    );
    anime.onfinish = (e) => e.srcElement.effect.target.remove();
};
const createParticles = (x, y, n) => {
    for (let i = 0; i < n; i++) {
        createParticle(x, y);
    }
};
footerContBtn.forEach((btn) => {
    btn.addEventListener("mouseenter", (e) => {
        const x = e.clientX;
        const y = e.clientY + window.scrollY;
        createParticles(x, y, 7);
    });
});


/*----------------------------
    Footer Canvas Bubble
-----------------------------*/

var width = document.body.clientWidth;
var height = document.body.clientHeight;
var canvas = document.getElementById('footer__canvas');
var ctx = canvas.getContext('2d');
var fps = 60;
var frameTime = 1000 / fps;
var objArr = [];
var instanceNum = 0;
var lastTimeRender = +new Date();
var lastTimePushObj = +new Date();
// var imgSmile = new ImageSmile();

var showHeight = 100 + 'vh';

var getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

var motionObj = function (x, y) {
    // this.r = getRandomInt(3, 12);
    this.r = 50;
    this.g = getRandomInt(5, 10) / -1000 / fps;
    this.t = 0;
    this.k = getRandomInt(1, 5) / 1000;
    this.x = x;
    this.px = x;
    this.ax = 0;
    this.vx = 0.5;
    // this.hsl = getRandomInt(60, 120) + ', 45%, 80%';
    this.alpha = getRandomInt(40, 90);
    this.y = y;
};

motionObj.prototype.move = function () {
    this.t += frameTime;
    this.ax = (this.px - this.x) * this.k;
    this.vx += this.ax;
    this.x += this.vx;
    this.y = 1 / 2 * this.g * this.t * this.t + height + this.r * 3;
};

motionObj.prototype.fadeAway = function () {
    if (this.t < 2600) return;
    // 2400
    this.alpha -= 1;
    // this.showHeight = 100 + 'vh';
};

motionObj.prototype.render = function () {
    ctx.beginPath();
    // ctx.shadowBlur = this.r * 3;
    // ctx.shadowColor = 'rgb(255, 255, 255)';
    ctx.fillStyle = 'rgb(136, 178, 196)';
    ctx.strokeStyle = 'rgb(255, 255, 255)';
    // ctx.fillStyle = 'hsla(' + this.hsl + ', ' + (this.alpha / 100) + ')';
    ctx.arc(this.x, this.y, this.r, 0, 360 * Math.PI / 180, false);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
};


motionObj.prototype.isLast = function () {
    if (this.alpha < 0) {
        return true;
    } else {
        return false;
    }
};

var render = function () {
    ctx.clearRect(0, 0, width, height);
    instanceNum = 0;
    for (var i = 0; i < objArr.length; i++) {
        if (objArr[i]) {
            instanceNum++;
            objArr[i].move();
            objArr[i].fadeAway();
            objArr[i].render();
            if (objArr[i].isLast()) {
                delete objArr[i];
            }
        }
    }
};

var renderloop = function () {
    var now = +new Date();
    requestAnimationFrame(renderloop);
    if (now - lastTimeRender > frameTime) {
        render();
        lastTimeRender = +new Date();
    }

    if (now - lastTimePushObj > 500 && instanceNum < 200) {
        for (var i = 0; i < 1; i++) {
            objArr.push(new motionObj(Math.random() * width, 0));
        }
        lastTimePushObj = +new Date();
    }
};
renderloop();

var canvasResize = function () {
    ctx.clearRect(0, 0, width, height);
    width = document.body.clientWidth;
    // height = document.body.clientHeight;
    height = document.querySelector(".footer").clientHeight;
    canvas.width = width;
    canvas.height = height;
};
canvasResize();

var debounce = function (object, eventType, callback) {
    var timer;

    object.addEventListener(eventType, function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            callback();
        }, 500);
    }, false);
};

debounce(window, 'resize', function () {
    canvasResize();
});
