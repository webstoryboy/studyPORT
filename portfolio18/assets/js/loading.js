function nav() {
    document.querySelector('#header .menu .nav').classList.remove('active');
    document.querySelector('#header .menu .nav').classList.add('not_active2');
    gsap.to("#header .menu-line", {x:100, duration:1});
}

function navLink1() {
    setTimeout(function() {
        location.href = 'index.html';
    },1700);

    nav();
}
function navLink2() {
    setTimeout(function() {
        location.href = 'about.html';
    },1700);

    nav();
}
function navLink3() {
    setTimeout(function() {
        location.href = 'portfolio.html';
    },1700);

    nav();
}
function navLink4() {
    setTimeout(function() {
        location.href = 'animation.html';
    },1700);

    nav();
}
function navLink5() {
    setTimeout(function() {
        location.href = 'javascript.html';
    },1700);

    nav();
}
function navLink6() {
    setTimeout(function() {
        location.href = 'contact.html';
    },1700);

    nav();
}