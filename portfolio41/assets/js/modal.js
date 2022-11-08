//highlight
const highlight = function () {
  hljs.highlightAll();
};

//modal -> for문
const modal = function () {
  for (let i = 1; i <= 7; i++) {
    document
      .querySelector(".source-btn" + i)
      .addEventListener("click", function () {
        document.querySelector("#modal" + i).classList.add("show");
        document.querySelector("#modal" + i).classList.remove("hide");
      });
    document.querySelector(".modal-close" + i).addEventListener("click", () => {
      document.querySelector("#modal" + i).classList.add("hide");
    });
  }
};

//하나씩 구현할거면 index.html에 script부분에가서  modal2();이렇게 호출해줘야함!!!

// const modal1 = function () {
//   document.querySelector(".source-btn1").addEventListener("click", () => {
//     document.querySelector("#modal1").classList.add("show");
//     document.querySelector("#modal1").classList.remove("hide");
//   });
//   document.querySelector(".modal-close1").addEventListener("click", () => {
//     document.querySelector("#modal1").classList.add("hide");
//   });
// };

// const modal2 = function () {
//   document.querySelector(".source-btn2").addEventListener("click", () => {
//     document.querySelector("#modal2").classList.add("show");
//     document.querySelector("#modal2").classList.remove("hide");
//   });
//   document.querySelector(".modal-close2").addEventListener("click", () => {
//     document.querySelector("#modal2").classList.add("hide");
//   });
// };

// const modal3 = function () {
//   document.querySelector(".source-btn3").addEventListener("click", () => {
//     document.querySelector("#modal3").classList.add("show");
//     document.querySelector("#modal3").classList.remove("hide");
//   });
//   document.querySelector(".modal-close3").addEventListener("click", () => {
//     document.querySelector("#modal3").classList.add("hide");
//   });
// };

// const modal4 = function () {
//   document.querySelector(".source-btn4").addEventListener("click", () => {
//     document.querySelector("#modal4").classList.add("show");
//     document.querySelector("#modal4").classList.remove("hide");
//   });
//   document.querySelector(".modal-close4").addEventListener("click", () => {
//     document.querySelector("#modal4").classList.add("hide");
//   });
// };

// const modal5 = function () {
//   document.querySelector(".source-btn5").addEventListener("click", () => {
//     document.querySelector("#modal5").classList.add("show");
//     document.querySelector("#modal5").classList.remove("hide");
//   });
//   document.querySelector(".modal-close5").addEventListener("click", () => {
//     document.querySelector("#modal5").classList.add("hide");
//   });
// };

// const modal6 = function () {
//   document.querySelector(".source-btn6").addEventListener("click", () => {
//     document.querySelector("#modal6").classList.add("show");
//     document.querySelector("#modal6").classList.remove("hide");
//   });
//   document.querySelector(".modal-close6").addEventListener("click", () => {
//     document.querySelector("#modal6").classList.add("hide");
//   });
// };

//tabmenu
const tabMenu = function () {
  const tabBtn = document.querySelectorAll(".view-title ul li");
  const tabCont = document.querySelectorAll(".view-cont > div");

  //btn은 요소, btni는 index
  tabBtn.forEach((btn, btni) => {
    btn.addEventListener("click", () => {
      //내가 클릭한건 active추가
      tabBtn.forEach((btn) => {
        btn.classList.remove("active");
      }); //모든 클래스 active 삭제
      btn.classList.add("active"); //클릭한 tabBtn에만 클래스 active 추가

      //모든 컨텐츠 박스 안보이게(이게 있어야 탭을 눌렀을 때 내용들이 바뀌어짐)
      tabCont.forEach((cont) => {
        cont.style.display = "none";
      });

      //내가 클릭한 콘텐츠 박스를 보이게
      tabCont.forEach((cont, conti) => {
        if (conti == btni) {
          cont.style.display = "block";
        }
      });
      // 이게 있으면 그 모달을 눌렀을때 다른 모달에서는 내용이 없어짐
      // 없으면 모달의 내용이 다 보임
      // tabCont[btni].style.display = "block";
    });
  });
};
