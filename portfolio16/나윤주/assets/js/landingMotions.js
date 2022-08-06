//page Tansition animaiton
function transitionAnimation() {
    gsap.to('.loader-overlay.one', {
        duration: 1,
        scaleX: 1,
        transformOrigin: 'left',
        ease: 'power1.inOut',
    });
    gsap.to('.loader-overlay.one', {
        duration: 1,
        scaleX: 0,
        transformOrigin: 'right',
        ease: 'power1.inOut',
        delay: 2,
    });
    gsap.to('.loader-overlay.two', {
        duration: 1.4,
        scaleX: 1,
        transformOrigin: 'left',
        ease: 'power1.inOut',
    });
    gsap.to('.loader-overlay.two', {
        duration: 1.4,
        scaleX: 0,
        transformOrigin: 'right',
        ease: 'power1.inOut',
        delay: 1.6,
    });
}

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