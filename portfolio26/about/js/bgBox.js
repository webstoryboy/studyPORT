// const heart = "<img src='img/eyes1.png' alt='이미지'>";
const smile = "<img class='bgSmile' src='../img/smiley1.png' alt='이미지'> ";
const ball = "<img class='bgBall' src='../img/basketball2.png' alt='이미지'>";
const flower = "<img class='bgFlower' src='../img/flower1.png' alt='이미지'>";
const blob = "<img class='bgBlob' src='../img/purpleblob1.png' alt='이미지'>";
const blob2 = "<img class='bgBlob2' src='../img/yellowblob1.png' alt='이미지'>";

const data = [smile, ball, flower, blob, blob2, smile, ball, flower];
const max = 8;
let particles = [];

class Ball {
  constructor(shape) {
    this.shape = $(shape);
    this.speed = 5 + Math.random() * 4;
    this.vx = Math.random() * this.speed - Math.random() * this.speed;
    this.vy = Math.random() * this.speed - Math.random() * this.speed;
    this.radius = 50 + Math.round(Math.random() * 200);
    this.w = window.innerWidth;
    this.h = window.innerHeight;
    this.x = (this.w - this.radius) / 2;
    this.y = (this.h - this.radius) / 2;

    $(window).on("resize", this.resize.bind(this));
    this.render();
  }

  render() {
    $(this.shape).css({
      width: this.radius,
      height: this.radius,
    });
    $("#bgBox").append(this.shape);
  }

  resize() {
    this.w = window.innerWidth;
    this.h = window.innerHeight;
  }

  move() {
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    this.shape.css({
      left: this.x / 2,
      top: this.y / 2,
      transform: "rotate(" + this.y + "deg)",
    });

    if (this.x < 0 || this.x > this.w - this.radius) {
      this.vx = -this.vx;
      $(this.shape).toggleClass("highlight");
    }
    if (this.y < 0 || this.y > this.h - this.radius) {
      this.vy = -this.vy;
      $(this.shape).toggleClass("highlight");
    }
    return this;
  }
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

for (let i = 0; i < max; i++) {
  particles.push(new Ball(data[i]));
}

function update() {
  particles = particles.filter(function (p) {
    return p.move();
  });
  requestAnimationFrame(update.bind(this));
}
// update();
