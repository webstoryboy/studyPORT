$(".split").each(function () {
  let text = $(this).text();
  let split = text.split("").join("</span><span aria-hidden='true'>");
  split = "<span aria-hidden='true'>" + split + "</span>";
  $(this).html(split).attr("aria-label", text);
});

setTimeout(function () {
  document.getElementById("cover").classList.add("cover-left");
});

//page transition
function pageClick() {
  document.querySelectorAll(".page__click").forEach((elem) => {
    elem.addEventListener("click", (e) => {
      e.preventDefault();
      const dataName = elem.getAttribute('data-name');
      console.log(dataName);
      document.getElementById("cover").classList.add("cover-right");
      setTimeout(() => {
        window.location.href =
          "https://webstoryboy.github.io/portfolio2/portfolio21/pages/" + dataName + ".html";
      }, 2000);
    });
  });
}
pageClick();