window.onload = function () {
    agentCheck(); //버전 체크
    overMenu(); //오버레이 메뉴
    textSplit(); //글씨 쪼개기
    pageClick(); //페이지 애니메이션
    start(function () {
      second(); //메인 로딩
    });
  };
  
  //mozilla/5.0 (windows nt 6.1; win64; x64) applewebkit/537.36 (khtml, like gecko) chrome/88.0.4324.150 safari/537.36 edg/88.0.705.63
  //mozilla/5.0 (windows nt 6.1; win64; x64) applewebkit/537.36 (khtml, like gecko) chrome/88.0.4324.150 safari/537.36
  //mozilla/5.0 (macintosh; intel mac os x 11_2_1) applewebkit/537.36 (khtml, like gecko) chrome/88.0.4324.150 safari/537.36
  //mozilla/5.0 (macintosh; intel mac os x 10_16_0) applewebkit/537.36 (khtml, like gecko) chrome/83.0.4103.106 whale/2.8.108.15 safari/537.36
  //mozilla/5.0 (macintosh; intel mac os x 10_15_6) applewebkit/605.1.15 (khtml, like gecko) version/14.0.3 safari/605.1.15
  
  //mozilla/5.0 (windows nt 10.0; wow64; trident/7.0; .net4.0c; .net4.0e; .net clr 2.0.50727; .net clr 3.0.30729; .net clr 3.5.30729; zoom 3.6.0; rv:11.0) like gecko
  //mozilla/5.0 (compatible; msie 10.0; windows nt 6.1; wow64; trident/7.0; slcc2; .net clr 2.0.50727; .net clr 3.5.30729; .net clr 3.0.30729; media center pc 6.0; .net4.0c; infopath.3; .net4.0e)
  //mozilla/5.0 (compatible; msie 9.0; windows nt 6.1; wow64; trident/7.0; slcc2; .net clr 2.0.50727; .net clr 3.5.30729; .net clr 3.0.30729; media center pc 6.0; .net4.0c; infopath.3; .net4.0e)
  //mozilla/4.0 (compatible; msie 8.0; windows nt 6.1; wow64; trident/7.0; slcc2; .net clr 2.0.50727; .net clr 3.5.30729; .net clr 3.0.30729; media center pc 6.0; .net4.0c; infopath.3; .net4.0e)
  //mozilla/4.0 (compatible; msie 7.0; windows nt 6.1; wow64; trident/7.0; slcc2; .net clr 2.0.50727; .net clr 3.5.30729; .net clr 3.0.30729; media center pc 6.0; .net4.0c; infopath.3; .net4.0e)
  
  //mozilla/5.0 (iphone; cpu iphone os 14_4 like mac os x) applewebkit/605.1.15 (khtml, like gecko) version/14.0.3 mobile/15e148 safari/604.1
  //Mozilla/5.0 (Linux; Android 9; SM-G955N Build/PPR1.180610.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.89 Mobile Safari/537.36
  //Mozilla/5.0 (Ipad; CPU OS 13_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/79.0.3945.73 Mobile/15E148 Safari/ 604.1
  //Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/24.1 Safari/605.1.15
  //Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Safari/605.1.15
  //호환성 체크
  function agentCheck() {
    var agent = navigator.userAgent.toLowerCase();
    console.log(agent);
    var browserList = {
      mac: agent.match(/macintosh/i),
      window: agent.match(/windows/i),
      iphone: agent.match(/iphone/i),
      android: agent.match(/android/i),
      ipad: agent.match(/like Mac OS X/i),
      ie7: agent.match(/msie 7.0/i),
      ie8: agent.match(/msie 8.0/i),
      ie9: agent.match(/msie 9.0/i),
      ie10: agent.match(/msie 10.0/i),
      ie11: agent.match(/rv:11.0/i),
      edge: agent.match(/edge/i),
      chrome: agent.match(/chrome/i),
      safari: agent.match(/safari/i),
      firefox: agent.match(/firefox/i),
      opera: agent.match(/opera/i),
      whale: agent.match(/whale/i),
    };
    for (prop in browserList) {
      if (browserList[prop]) {
        //return prop;
        console.log(prop);
        //document.getElementsByTagName('body')[0].classList.add(prop);
        var classNames = prop + " ";
        document.getElementsByTagName("body")[0].className += classNames;
      }
    }
  }
  //오버레이 메뉴
  function overMenu() {
    document
      .querySelector(".header__inner__menu")
      .addEventListener("click", () => {
        if (document.querySelector(".header__bg").classList.contains("active")) {
          document.querySelector(".header__bg").classList.remove("active");
          hide();
        } else {
          document.querySelector(".header__bg").classList.add("active");
          show();
        }
      });
  }
  function show() {
    let tl = gsap.timeline();
    tl.set(".header__bg, .header__nav", { visibility: "visible" });
    tl.to(".header__bg > div", { duration: 0.5, width: "13vw", stagger: 0.05 });
    tl.to(".header__nav li a", { duration: 0.5, y: 0, stagger: 0.05 });
  }
  function hide() {
    let tl = gsap.timeline();
    tl.to(".header__nav li a", { duration: 0.5, y: "90%", stagger: 0.05 });
    tl.to(".header__bg > div", { duration: 0.5, width: 0, stagger: 0.05 });
    tl.set(".header__bg, .header__nav", { visibility: "hidden" });
  }
  
  //로딩
  function start(callback) {
    setTimeout(() => {
      document.getElementById("loader").classList.remove("loader__active");
      console.log("1차 호출");
      callback();
    }, 2000);
  }
  function second() {
    setTimeout(() => {
      document.getElementById("loader").style.visibility = "hidden";
      document.getElementById("wrap").classList.remove("lock");
      console.log("2차 호출");
      pageInfo();
    }, 1500);
  }
  
  function pageInfo() {
    const pageLink = document.location.href;
  
    if (pageLink.indexOf("webstoryboy") >= 0) {
      mainStart();
    } else if (pageLink.indexOf("portfolio") >= 0) {
      portStart();
    }
  }
  
  function portStart() {
    var tl = gsap.timeline();
    tl.to(".header__inner", { duration: 0.5, top: 0, ease: "power4.out" });
    tl.to(".site__title h1 strong span", {
      duration: 0.5,
      y: 0,
      ease: "power4.out",
      stagger: 0.05,
    });
    tl.to(".site__title h1 em span", {
      duration: 0.5,
      y: 0,
      ease: "power4.out",
      stagger: 0.05,
    });
    tl.to("#contents", {
      duration: 0.5,
      opacity: 1,
      y: 0,
      ease: "power4.out",
    });
  }
  
  function mainStart() {
    setTimeout(function () {
      var tl = gsap.timeline();
      tl.to(".main__cont__title div:nth-child(1) span", {
        duration: 0.5,
        y: 0,
        ease: "expo.out",
        stagger: 0.05,
      });
      tl.to(
        ".main__cont__title div:nth-child(2) span",
        {
          duration: 0.5,
          y: 0,
          ease: "expo.out",
          stagger: 0.05,
        },
        "-=0.5"
      );
      tl.to(
        ".main__cont__title div:nth-child(3) span",
        {
          duration: 0.5,
          y: 0,
          ease: "expo.out",
          stagger: 0.05,
        },
        "-=0.5"
      );
      tl.to(
        ".main__cont__title div:nth-child(4) span",
        {
          duration: 0.5,
          y: 0,
          ease: "expo.out",
          stagger: 0.05,
        },
        "-=0.5"
      );
      tl.to(".header__inner", { duration: 0.5, top: 0, ease: "expo.out" }, "abc");
      tl.to(
        ".header__footer",
        { duration: 0.5, bottom: 0, ease: "expo.out" },
        "abc"
      );
    }, 100);
  }
  
  //글씨 쪼개기
  function textSplit() {
    document.querySelectorAll(".split").forEach((elem) => {
      let splitText = elem.innerText;
      let splitWrap = splitText
        .split("")
        .join("</span><span aria-hidden:'true'>");
      splitWrap = "<span aria-hidden:'true'>" + splitWrap + "</span>";
      elem.innerHTML = splitWrap;
      elem.setAttribute("aria-label", splitText);
    });
  }
  
  //페이지 애니메이션
  function pageClick() {
    document.querySelectorAll(".page__click").forEach((elem) => {
      elem.addEventListener("click", (e) => {
        e.preventDefault();
        const hrefName = elem.innerText.toLowerCase();
        //alert(hrefName);
        document.getElementById("loader").style.visibility = "visible";
        document.getElementById("loader").classList.add("loader__active");
        setTimeout(() => {
          window.location.href =
            "http://127.0.0.1:5500/portfolio3/pages/" + hrefName + ".html";
        }, 2400);
      });
    });
  }