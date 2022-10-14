

let s = skrollr.init({
  smoothScrolling: true,
});

// scroll
function scroll() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  document.querySelector(".scroll").innerHTML = Math.trunc(scrollTop);

  if (scrollTop < 2700) {
    document.querySelector(".cover").style.display = "block";
  } else {
    document.querySelector(".cover").style.display = "none";
  }

  if (scrollTop >= 10500) {
    document.querySelector(
      ".section2 .sub_desc_wrap:first-child p .text_line:first-child"
    ).style.animation = "textLine 0.5s ease-in-out 0s forwards";

    document.querySelector(
      ".section2 .sub_desc_wrap:first-child p .text_line:last-child"
    ).style.animation = "textLine 0.5s ease-in-out 1s forwards";

    document.querySelector(
      ".section2 .sub_desc_wrap:last-child p .text_line"
    ).style.animation = "textLine 0.5s ease-in-out 2s forwards";
  } else {
    document.querySelector(
      ".section2 .sub_desc_wrap:first-child p .text_line:first-child"
    ).style.animation = "none";

    document.querySelector(
      ".section2 .sub_desc_wrap:first-child p .text_line:last-child"
    ).style.animation = "none";

    document.querySelector(
      ".section2 .sub_desc_wrap:last-child p .text_line"
    ).style.animation = "none";
  }

  // (header, section1) z-index 변화
  if (scrollTop < 8100 && scrollTop > 2600) {
    document.querySelector(".header").style.display = "flex";
    document.querySelector(".sec1").style.zIndex = "9001";
  } else {
    document.querySelector(".header").style.display = "none";
    document.querySelector(".sec1").style.zIndex = "1000";
  }

  // (section4) z-index 변화 : 버튼 활성
  if (scrollTop < 24000 && scrollTop > 19900) {
    document.querySelector(".section4").style.zIndex = "9001";
  } else {
    document.querySelector(".section4").style.zIndex = "4000";
  }

  // nav.change
  if (scrollTop >= 13500 && scrollTop < 24400) {
    document.querySelector("#nav").classList.add("change");
  } else {
    document.querySelector("#nav").classList.remove("change");
  }
  requestAnimationFrame(scroll);
}

// typing loading
let typed = new Typed(".auto-type", {
  strings: ["Thinking", "Drawing", "Coding"],
  typeSpeed: 50,
  backSpeed: 40,
  loop: true
});

// image loder
function imagesProgress() {
  var $container = $("#progress"),
    $progressText = $container.find(".progress-text"),
    imgLoad = imagesLoaded("body"),
    imgTotal = imgLoad.images.length,
    imgLoaded = 0,
    current = 0,
    progressTimer = setInterval(updateProgress, 2000 / 60);

  imgLoad.on("progress", function () {
    imgLoaded++;
  });

  function updateProgress() {
    var target = (imgLoaded / imgTotal) * 100;


    current += (target - current) * 0.1;
    $progressText.text(Math.floor(current) + '%');

    if (current >= 100) {
      clearInterval(progressTimer);
      $container.animate({ opacity: '0' }, 1000, 'easeInOutQuint').animate({ top: '-100%' }, 1000);
    }
    if (current > 99.9) {
      current = 100;
    };
  };
};

imagesProgress();

scroll();
