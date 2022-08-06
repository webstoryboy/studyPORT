
// 가로 스크롤 (ES6)

window.addEventListener("scroll", function () {
    let scroll = window.pageYOffset;

    // document.querySelector('.scroll').textContent = parseInt(scroll);

    let scrollTop = window.scrollY;
    let scrollLeft = window.scrollX;
    let winWidth = window.innerWidth;

    const page__ani = document.querySelector(".page__animation");
    const page__script = document.querySelector(".page__script");
    const page__footer = document.querySelector(".page__footer");
    const animation_slider = document.querySelector(".animation-slider");
    const script_slider = document.querySelector(".script-slider");

    let aniOffset = scrollTop - page__ani.offsetTop;
    let scriptOffset = scrollTop - page__script.offsetTop;
    let FooterOffset = page__footer.offsetTop;

    let scriptColorChange2 = (winWidth * 3) + page__script.offsetTop;
    let scriptColorChange1 = page__script.offsetTop;
    let aniColorChange = (winWidth * 2) + page__ani.offsetTop;

    if (winWidth <= 768) {
        // Change Style
        animation_slider.style.position = "relative";
        animation_slider.style.left = "0px";
        script_slider.style.position = "relative"
        script_slider.style.right = "0px";

    } else if (winWidth >= 768) {
        // Change Style
        animation_slider.style.position = "fixed";
        animation_slider.style.left = -aniOffset + winWidth + "px";
        script_slider.style.position = "fixed";
        script_slider.style.right = -scriptOffset + winWidth + "px";

        // Change Scroll
        animation_slider.style.left = -aniOffset + winWidth + "px";
        script_slider.style.right = -scriptOffset + winWidth + "px";

        // Change Background-color
        if (scrollTop > (FooterOffset - winWidth)) {
            page__script.style.backgroundColor = "#48506F";
            page__script.style.transition = "0.5s";
        } else if (scrollTop > scriptColorChange2 - winWidth) {
            page__script.style.backgroundColor = "#F3C57E";
            page__script.style.transition = "0.5s";
        } else if (scrollTop > scriptColorChange1 - winWidth) {
            page__ani.style.backgroundColor = "#F3EEE8";
            page__ani.style.transition = "0.5s";
            page__script.style.backgroundColor = "#F3EEE8";
            page__script.style.transition = "0.5s";
        } else if (scrollTop > aniColorChange) {
            page__ani.style.backgroundColor = "#88B2C4";
            page__ani.style.transition = "0.5s";
        } else {
            page__ani.style.backgroundColor = "#F3EEE8";
        }

    }
});