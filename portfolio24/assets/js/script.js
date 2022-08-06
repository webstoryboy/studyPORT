// 가로 영역 스크롤
window.addEventListener("scroll", function(){

  let scroll = window.pageYOffset;
  document.querySelector(".scroll").innerText = parseInt(scroll);

  let offset = scroll - document.getElementById("site").offsetTop;
  let offset1 = scroll - document.getElementById("ani").offsetTop;
  let offset2 = scroll - document.getElementById("script").offsetTop;
  let offset3 = scroll - document.getElementById("php").offsetTop;
  
  let menuTitle =  document.querySelector(".title h1");
  let menuBar =  document.querySelectorAll(".burger__patty");
  
  
  if( scroll > document.getElementById("home").offsetTop) {
    menuTitle.style.color = "#112F97";
    for (i = 0; i < menuBar.length; i++) {
      menuBar[i].style.backgroundColor = "#112F97";
    };
  }
  if( scroll > document.getElementById("site").offsetTop) {
      document.querySelector(".site-row").style.transform = "translatex("+ -offset+"px)";
      document.querySelector(".site-row .row-title").style.transform = "translatex("+offset+"px)";
      menuTitle.style.color = "#BB6C83";
      for (i = 0; i < menuBar.length; i++) {
        menuBar[i].style.backgroundColor = "#BB6C83";
      };
  }
  if( scroll > document.getElementById("ani").offsetTop) {
      document.querySelector(".ani-row").style.transform = "translatex("+ -offset1+"px)";
      document.querySelector(".ani-row .row-title").style.transform = "translatex("+offset1+"px)";
      menuTitle.style.color = "#50789B";
      for (i = 0; i < menuBar.length; i++) {
        menuBar[i].style.backgroundColor = "#50789B";
      };
  }
  if( scroll > document.getElementById("script").offsetTop) {
      document.querySelector(".script-row").style.transform = "translatex("+ -offset2+"px)";
      document.querySelector(".script-row .row-title").style.transform = "translatex("+offset2+"px)";
      menuTitle.style.color = "#816994";
      for (i = 0; i < menuBar.length; i++) {
        menuBar[i].style.backgroundColor = "#816994";
      };
  }
  if( scroll > document.getElementById("php").offsetTop) {
      document.querySelector(".php-row").style.transform = "translatex("+ -offset3+"px)";
      document.querySelector(".php-row .row-title").style.transform = "translatex("+offset3+"px)";
      menuTitle.style.color = "#65785F";
      for (i = 0; i < menuBar.length; i++) {
        menuBar[i].style.backgroundColor = "#65785F";
      };
  }
  if( scroll > document.getElementById("contact").offsetTop) {
    menuTitle.style.color = "#069695";
    for (i = 0; i < menuBar.length; i++) {
      menuBar[i].style.backgroundColor = "#069695";
    };
  }
});


{//메뉴 클릭시
  (function() {
  
    var Menu = (function() {
      var burger = document.querySelector('.burger');
      var menu = document.querySelector('.menu');
      var menuList = document.querySelector('.menu__list');
      var brand = document.querySelector('.menu__brand');
      var menuItems = document.querySelectorAll('.menu__list li');
      
      var active = false;
      
      var toggleMenu = function() {
        if (!active) {
          menu.classList.add('menu--active');
          menuList.classList.add('menu__list--active');
          brand.classList.add('menu__brand--active');
          burger.classList.add('burger--close');
          for (var i = 0, ii = menuItems.length; i < ii; i++) {
            menuItems[i].classList.add('menu__item--active');
          }
          
          active = true;
        } else {
          menu.classList.remove('menu--active');
          menuList.classList.remove('menu__list--active');
          brand.classList.remove('menu__brand--active');
          burger.classList.remove('burger--close');
          for (var i = 0, ii = menuItems.length; i < ii; i++) {
            menuItems[i].classList.remove('menu__item--active');
          }
          
          active = false;
        }
      };
      
      var bindActions = function() {
        burger.addEventListener('click', toggleMenu, false);
      };
      
      var init = function() {
        bindActions();
      };
      
      return {
        init: init
      };
      
    }());
    
    Menu.init();
    
  }());
}

{//메인 텍스트 효과
  document.querySelectorAll(".split").forEach(elem => {
    let splitText = elem.innerText;
    let splitWrap = splitText.split("").join("</span><span aria-hidden:'true'>");
        splitWrap = "<span aria-hidden:'true'>" + splitWrap + "</span>";
    elem.innerHTML = splitWrap;
    elem.setAttribute("aria-label", splitText);
  });

  setTimeout(function(){
    gsap.to(".text-area div:nth-child(1) span", {duration: 0.3, y: 0, rotate:0, opacity: 1, stagger: 0.1, ease: "circ.out"})
    gsap.to(".text-area div:nth-child(2) span", {duration: 0.3, y: 0, rotate:0, opacity: 1, stagger: 0.1, ease: "circ.out", delay: 0.5})
    gsap.to(".text-area div:nth-child(3) span", {duration: 0.3, y: 0, rotate:0, opacity: 1, stagger: 0.1, ease: "circ.out", delay: 0.7})
    gsap.to(".text-area div:nth-child(4) span", {duration: 0.3, y: 0, rotate:0, opacity: 1, stagger: 0.1, ease: "circ.out", delay: 0.9})
    gsap.to(".text-area div:nth-child(5) span", {duration: 0.3, y: 0, rotate:0, opacity: 1, stagger: 0.1, ease: "circ.out", delay: 1.2})
  }, 2000);
}


{//code 클릭시

  const codeBtn = document.querySelector('.code-btn');
  const codeView = document.querySelector('.code-view');
  const CLICKED_CLASS = "clicked";

  function handleClick(){
    codeView.classList.toggle(CLICKED_CLASS);
    if(codeView.classList==CLICKED_CLASS){
      codeBtn.innerText="CLOSE";
    }
  }

  function init(){
    codeBtn.addEventListener("click", handleClick);
  }

  init();
}


{ // 2. 카드

  gsap.timeline().
set('.logo', { x: 215, y: 482 }).
set('.chip', { x: 148, y: 66 }).
set('.knot', { x: 22, y: 250 }).
set('.numTxt', { x: 22, y: 375 }).
set('.nameTxt', { x: 22, y: 410 }).
add(centerMain(), 0.2).
from('.ball', { duration: 2,
  transformOrigin: '50% 50%',
  scale: 0,
  opacity: 0,
  ease: 'elastic',
  stagger: 0.2 },
0).
fromTo('.script-card', { x: 200,
  y: 40,
  transformOrigin: '50% 50%',
  rotation: -4,
  skewX: 10,
  skewY: 4,
  scale: 2,
  opacity: 0 },
{
  duration: 1.3,
  skewX: 0,
  skewY: 0,
  scale: 1,
  opacity: 1,
  ease: 'power4.inOut' },
0.2);



function centerMain() {gsap.set('.card-main', { x: '50%', xPercent: -50, y: '50%', yPercent: -50 });}
window.onresize = centerMain;

window.onmousemove = e => {
  let winPercent = { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight },
  distFromCenter = 1 - Math.abs((e.clientX - window.innerWidth / 2) / window.innerWidth * 2);

  gsap.timeline({ defaults: { duration: 0.5, overwrite: 'auto' } }).
  to('.script-card', { rotation: -7 + 9 * winPercent.x }, 0).
  to('.fillLight', { opacity: distFromCenter }, 0).
  to('.card-bg', { x: 100 - 200 * winPercent.x, y: 20 - 40 * winPercent.y }, 0);
};
//# sourceURL=pen.js

}


{// 3. 계산기
  
(function() {
  "use strict";

  // Shortcut to get elements
  var el = function(element) {
    if (element.charAt(0) === "#") { // If passed an ID...
      return document.querySelector(element); // ... returns single element
    }

    return document.querySelectorAll(element); // Otherwise, returns a nodelist
  };

  // Variables
  var viewer = el("#viewer"), // Calculator screen where result is displayed
    equals = el("#equals"), // Equal button
    nums = el(".num"), // List of numbers
    ops = el(".ops"), // List of operators
    theNum = "", // Current number
    oldNum = "", // First number
    resultNum, // Result
    operator; // Batman

  // When: Number is clicked. Get the current number selected
  var setNum = function() {
    if (resultNum) { // If a result was displayed, reset number
      theNum = this.getAttribute("data-num");
      resultNum = "";
    } else { // Otherwise, add digit to previous number (this is a string!)
      theNum += this.getAttribute("data-num");
    }

    viewer.innerHTML = theNum; // Display current number

  };

  // When: Operator is clicked. Pass number to oldNum and save operator
  var moveNum = function() {
    oldNum = theNum;
    theNum = "";
    operator = this.getAttribute("data-ops");

    equals.setAttribute("data-result", ""); // Reset result in attr
  };

  // When: Equals is clicked. Calculate result
  var displayNum = function() {

    // Convert string input to numbers
    oldNum = parseFloat(oldNum);
    theNum = parseFloat(theNum);

    // Perform operation
    switch (operator) {
      case "plus":
        resultNum = oldNum + theNum;
        break;

      case "minus":
        resultNum = oldNum - theNum;
        break;

      case "times":
        resultNum = oldNum * theNum;
        break;

      case "divided by":
        resultNum = oldNum / theNum;
        break;

        // If equal is pressed without an operator, keep number and continue
      default:
        resultNum = theNum;
    }

    // If NaN or Infinity returned
    if (!isFinite(resultNum)) {
      if (isNaN(resultNum)) { // If result is not a number; set off by, eg, double-clicking operators
        resultNum = "You broke it!";
      } else { // If result is infinity, set off by dividing by zero
        resultNum = "Look at what you've done";
        el('#calculator').classList.add("broken"); // Break calculator
        el('#reset').classList.add("show"); // And show reset button
      }
    }

    // Display result, finally!
    viewer.innerHTML = resultNum;
    equals.setAttribute("data-result", resultNum);

    // Now reset oldNum & keep result
    oldNum = 0;
    theNum = resultNum;

  };

  // When: Clear button is pressed. Clear everything
  var clearAll = function() {
    oldNum = "";
    theNum = "";
    viewer.innerHTML = "0";
    equals.setAttribute("data-result", resultNum);
  };

  /* The click events */

  // Add click event to numbers
  for (var i = 0, l = nums.length; i < l; i++) {
    nums[i].onclick = setNum;
  }

  // Add click event to operators
  for (var i = 0, l = ops.length; i < l; i++) {
    ops[i].onclick = moveNum;
  }

  // Add click event to equal sign
  equals.onclick = displayNum;

  // Add click event to clear button
  el("#clear").onclick = clearAll;

}());
}