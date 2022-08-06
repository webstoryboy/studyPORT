'use strict';

const $body = $('body');
const $header = $('.header');
const $section1 = $('#section1');
const $section2 = $('#section2');
const $section3 = $('#section3');
const $section4 = $('#section4');
const $section5 = $('#section5');
const $section6 = $('#section6');
const $section7 = $('#section7');
const $section8 = $('#section8');
const $section9 = $('#section9');
const $section10 = $('#section10');
const $section12 = $('#section12');
let skillBarExecuted = false;


//imageProgress
imagesProgress(); 
spliceText();

function imagesProgress(){
  var preload = $('.preload'),
      $progressText = preload.find('.progress-text'),
      imgLoad = imagesLoaded('body'),	
      imgTotal = imgLoad.images.length,	
      imgLoaded = 0,										
      current = 0,							
      progressTimer = setInterval(updateProgress, 1000 / 60);

  imgLoad.on('progress', function(){
      imgLoaded++;
});

function updateProgress(){
    var target = ( imgLoaded / imgTotal) * 100;

    current += ( target - current) * 0.1;
    $progressText.text( Math.floor(current) + '%' );

    if(current >= 100){
      clearInterval(progressTimer);
      preload.addClass('preload-finish');
      $progressText
          .delay(1000)
          .animate({opacity: 0},function(){
              preload.fadeOut();
          });
          imageLoadingAfter();
    }
    if(current > 99.9){
      current = 100;
    }
  }	
}

function imageLoadingAfter(){
  gsap.to($section1.find('.title span'), {opacity: 1, y: 0, duration: 1, delay: 0, stagger: 0.1, ease: "elastic.out(0.3, 0.3)"});
  gsap.to($section1.find('.left p'), {opacity: 1, y: 0, duration: 1, delay: 1.8, ease: "easeInOut"});
  gsap.to($section1.find('.planet > img'), {opacity: 1, marginLeft: "0", duration: 1, delay: 2.3, stagger: 0.3, ease: "easeIn"});
  gsap.to($section1.find('.react_btn'), {opacity: 1, right: "0", bottom: "0", duration: 1, delay: 3, ease: "easeIn"});
  $section1.find('.react_btn img').addClass('active');
  $header.find('.nav').addClass('active');
  $section1.find('.gallery_cont').addClass('active');
}

// 모바일 네비게이션
if($('.header .nav').hasClass('visible')){
    $('.header .nav ul li a').click(function(){
        $('.header .nav').removeClass('visible');
    });
}

// 토글버튼
$('.togglebtn').click(function(){
    $header.find('nav').toggleClass('visible');
});


// 네비게이션
document.querySelectorAll("a[href^='#section']").forEach(elem => {
  elem.addEventListener("click", e => {
      e.preventDefault();
      let targetLink = e.target.getAttribute('href');
      if(targetLink == "#section9"){
        $section9.addClass('visible');
        smoothScroll(elem);
      }
      smoothScroll(elem);
  });
});

function smoothScroll(elem){
  document.querySelector(elem.getAttribute("href")).scrollIntoView({
   behavior: "smooth"
});
}


//------------------------------스크롤이벤트-----------------------------------
$(window).scroll(function () {

  const wScroll = $(this).scrollTop();
  const wHeight = $(this).height();

  
  //each section scroll
  $("section").add('.web').each(function(){
    if( wScroll > $(this).offset().top - wHeight * 2/7 ){
      $(this).addClass('active');
    }else{
      $(this).removeClass('active');
    }
  });//--x--each section scroll

    
  //section3 skillbar
  if(!skillBarExecuted){

    if(wScroll > $section3.offset().top - wHeight * 2/7 ){
      skillBar();
      // bodycolor
      $section3.find('.water').each(function(){
        var dataColor = $(this).data("color");
        var dataClass = $(this).data("class");

        $(this).mouseover(function(){
          $body.addClass(dataClass);
          $section3.find('.box').css(
            "border-color", dataColor
          );
        });
        $(this).mouseout(function(){
          $body.removeClass(dataClass);
          $section3.find('.box').css(
            "border-color", 'var(--color-sky)'
          );
        });
      });  
      skillBarExecuted = true;
    } 
  }//--x--//section3 skillbar
    
    
  //section5 웹사이트
  $('.web').each(function(){
    if(wScroll > $(this).offset().top - (3/5 * wHeight) ){
      $(this).addClass('active');
    }else if(wScroll < $section5.offset().top || wScroll > $section5.offset().top + $section5.height()){
      $(this).removeClass('active');
    }
  });

  if(wScroll > $section8.find('.bullon').offset().top - wHeight  && wScroll < $section8.find('.bullon').offset().top +  $section8.height() /2 ){
    $section8.find('.bullon').addClass('active');
  }else{
    $section8.find('.bullon').removeClass('active');
  }
  //--x--section5 웹사이트
    
    
  //section9 스크립트 - 가로 슬라이드
  if( wScroll > $section8.offset().top ){
    $section9.addClass('visible');
  }else{
    $section9.removeClass('visible');
  }

  var offsetLeft = (wScroll - $section9.offset().top);
  if(wScroll > $section9.offset().top + 1000){
    gsap.to($section9.find('.sec9'), {left:-offsetLeft + 1000 +"px"});
  }else{
    $section9.find('.sec9').css("left",+ 0 +"px");
  }
  //--x--section9 스크립트 - 가로 슬라이드

  //section10
  if(wScroll > $section10.offset().top + 1.5 * wHeight  ){
    $section10.find('.right_cloud').addClass('active');
  }else{
    $section10.find('.right_cloud').removeClass('active');
  }//--x--section10


  //section12 - splice
  if( wScroll > $section12.offset().top - wHeight * 2/7){
    gsap.to($section12.find('h2 span'), {opacity: 1, y: 0, duration: 1, delay: 0, stagger: 0.1, ease: "elastic.out(0.3, 0.3)"});
  }//--x-- section12 - splice

  //----------body배경 스크롤이벤트----------
  if(wScroll >= $section5.offset().top - wHeight/2 && wScroll < $section5.offset().top - wHeight/2 + $section5.height()/2) {
    $body.addClass('orange');
  }else if( wScroll >= $section5.offset().top - wHeight/2 + $section5.height()/2 && wScroll < $section6.offset().top){
    $body.removeClass();
    $body.addClass('blue');
  }else if(wScroll >= $section6.offset().top && wScroll < $section8.offset().top){
    $body.removeClass();
    $body.addClass('lightpurple');
  }else if( wScroll >= $section8.offset().top + $section8.height()){
    $body.removeClass();
    $body.addClass('darkpurple');
  }
  else{
    $body.removeClass();
    $section3.find('.box').addClass('bgc');
  } //--x--body배경 스크롤이벤트

});//-------------------x----스크롤이벤트 끝------------------------------------


// text splice(section1, section12)

function spliceText(){
  $(".splice").each(function () {
      let txt = $(this).text();
      let split = txt.split("").join("</span><span aria-hidden='true'>");
      split = "<span aria-hidden='true'>" + split + "</span>";
      $(this).html(split).attr("aria-label", txt);
  });
}//--x-- text splice(section1, section12)


// ----------------  section1 갤러리  --------------

const gallery = document.querySelector("#js-gallery");
const imgArray = [];
function createImgArray() {
  const galleryItem = document.querySelectorAll(".gallery_cont .item");
  galleryItem.forEach(function (item) {
    const itemId = item.getAttribute("id");
    imgArray.push(itemId);
  });
}

createImgArray();

function getRandomInt(max){ // 랜덤숫자
  return Math.floor(Math.random() * Math.floor(max));
};

function setImgPosition(elImg){ // 랜덤위치
  const randomVal = getRandomInt(2);
  elImg.style.left = randomVal+'%';
  elImg.style.top =  randomVal+'%';
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
        hiddenClass: 'is-hidden' };

  if (currentIndex === -1) {
    showImg(img.first, img.hiddenClass);
    $this.classList.add(hasImgsClass);
  }

  if (currentIndex === imgArray.length) {
    hideImg(img.last, img.hiddenClass);
    $this.classList.remove(hasImgsClass);
  }

  return hasImgsClassExists ? showImg(img.current, img.hiddenClass) : hideImg(img.current, img.hiddenClass);
  
}//toggleImgVisibility

function hideImg(elImg,elClass){
  currentIndex--;
  if(currentIndex === -1 )
  return
  if(elImg){
    elImg.classList.add(elClass);
  }
}//hideImg

function showImg(elImg,elClass){
  currentIndex++;
  if(elImg){
    elImg.classList.remove(elClass); 
    setImgPosition(elImg);
  }
}//showImg

//--x------------------------ section1 갤러리 ---------------------------

// -------------------------- section3--------------------------
// skillbar
function skillBar(){
  $section3.find('.sec3 .box').each(function () {

    const $current = $(this);
    const $currentPercent = $current.find('.percentNum');
    const $targetData = $currentPercent.attr('data-percent');
    const $water = $current.find('.water');
    let now;

    $({ rate: 0 }).animate(
      { rate: $targetData },
      {
        duration: 2000,
        progress: function () {
          now = this.rate;
          $currentPercent.text(Math.ceil(now));
          $water.css({"transform":"translate(0px,"+now+"px)"})
        }
      }
    );

    $({ rate: 100 }).animate(
        { rate: 100 - $targetData },
        {
          duration: 2000,
          progress: function () {
            now = this.rate;
            $water.css({"transform":"translate(0px,"+now+"%)"})
        }
      }
    );

  });//skillbar each
}
$section3.find('.bottle .box.c .water').mouseover(function(){
  $(this).addClass('hover');
});
// ----------X---------------- section3--------------------------


// --------- section5 mokeup ------------

$section5.find('.keyboard').each(function(){
  $(this).mousedown(function(){
    $(this).addClass('active');
  });
  $(this).mouseout(function(){
    $(this).removeClass('active');
  });
});

$section5.find('.pgdn').each(function(){
  $(this).mouseover(function(){
    $(this).closest('.mokeup').addClass('active');
  });
  $(this).mouseout(function(){
    $(this).closest('.mokeup').removeClass('active');
  });
});

$section5.find('.full').each(function(){
  $(this).mouseover(function(){
    $(this).closest('.mokeup').addClass('active');
  });
  $(this).mouseout(function(){
    $(this).closest('.mokeup').removeClass('active');
  });
});

$section5.find('.web_btn').each(function(){
  $(this).mouseover(function(){
    $(this).closest('.web').addClass('heart');
  });
  $(this).mouseout(function(){
    $(this).closest('.web').removeClass('heart');
  });
});
//--x---section5 mokeup --

//---------------------------- 모바일 슬라이드 ---------------------------------------
const phone = $('.sec7 .slide_list li');
const phoneLength = $('.sec7 .slide_list li').length;
const dots = $('.sec7 .slide_dot li');
const nav = $('.sec7 .slide_nav span');

let mobile_current_index = 0;

function followingProduct(index) {
   
  mobile_current_index = index;

  phone.each(function (i) {
      let offset = i - mobile_current_index;
      if (offset < 0) offset += phoneLength;
      let index;
          
      for (index = 0; index < phoneLength + 1; index++) {
          $(this).removeClass('item' + index).addClass('item'+ (offset + 1));
      }
  });
    dots.eq(index).addClass('active').siblings('li').removeClass('active');
}

/* Arrow clicks */
nav.click(function () {
  const delta = $(this).hasClass('prev') ? -1 : 1;
  let delta_product_index = (mobile_current_index + delta) % phoneLength;
  if(delta_product_index < 0){
    delta_product_index = (mobile_current_index + delta) % phone.length + phoneLength;
  }
  followingProduct(delta_product_index);
});

/*Pagination */
dots.click(function () {
  followingProduct($(this).index());
    $(this).addClass('active').siblings('li').removeClass('active');
});

//------------------x--------- 모바일 슬라이드 ---------------------------------------

// -------- 스크립트 모달 -----------

const modal = $('.modal');

modal.each(function(){
  const tabCont =  $(this).find('.tab_cont > div');
  const tabBtn = $(this).find('.tab_btn > a');

    tabBtn.each(function(){
      $(this).click(function(e){
        e.preventDefault();
        var idx = $(this).index();
        tabBtn.removeClass('active');
        $(this).addClass('active');
        tabCont.hide().eq(idx).show();
      });
  });//tabBtn.each

  });//modal.each

$('.scriptcont').each(function(i){
    $(this).find('.codebtn').click(function(e){
      e.preventDefault();
      modal.eq(i).removeClass("out").addClass("one");
      $header.css('visibility','hidden');
    });
});

$(".modal .close_btn").click(function(){
    $(this).closest(".modal").addClass("out")
    setTimeout(de,1000)
    function de(){
      $(this).closest(".modal").removeClass("one out");
      $header.css('visibility','visible')
    }
});
// ---x ------- 스크립트 모달 -----------

// section12
const $surface = $('.surface');
const $bus = $('.bus');
const $busImg = $('.busimg');
const $driveBtn = $('.driveBtn');
const $lightBtn = $('.lightBtn');
let light = false;
let drive = false;

$(document).on('keypress', function (e) {
  console.log(e.which);
  if (e.which == 13 || e.which == 32) {
    $surface.toggleClass('moveRight');
    $bus.toggleClass('carMove');
  }
});

$driveBtn.click(function () {
  if (!drive) {
    $(this).text('Stop');
    $surface.removeClass('moveRight');
    $bus.removeClass('carMove');
    drive = true;
  } else {
    $(this).text('Drive');
    $surface.addClass('moveRight');
    $bus.addClass('carMove');
    drive = false;
  }
});

$lightBtn.click(function () {
  if (!light) {
    $(this).text('Headlight Off');
    $busImg.attr('src', '../../assets/img/bus_light.png');
    light = true;
  } else {
    $(this).text('Headlight On');
    $busImg.attr('src', '../../assets/img/bus.png');
    light = false;
  }
});
// --x-- section12

// 반응형
if($(window).width() < 800) { 
  $header.find('.nav').removeClass('active');
}
$(window).resize(function() { 
  if($(window).width() < 800 ) { 
    $header.find('.nav').removeClass('active');
   } 
});
