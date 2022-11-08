//운영체제 정보 알아내기
// 에이전트를 사용해서 접속한 브라우저 확인
function mobile() {
  let os = navigator.userAgent.toLowerCase();

  if (os.indexOf("iphone") >= 0) {
    // alert("iphone");
    history.pushState(null, null, "http://kes7364.com/portfolio03/index2.html");
  } else if (os.indexOf("android") >= 0) {
    history.pushState(null, null, "http://kes7364.com/portfolio03/index2.html");
  } else if (os.indexOf("macintosh") >= 0) {
    window.addEventListener("resize", function () {
      var innerWidth = window.innerWidth;
      console.log(innerWidth);
      innerWidth <= "780"
        ? (window.location.href = "http://kes7364.com/portfolio03/index2.html")
        : (window.location.href = "http://kes7364.com/portfolio03/index.html");
    });
  }
}
mobile();
