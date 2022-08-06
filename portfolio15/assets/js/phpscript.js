//메뉴클릭 이벤트
document.querySelector('#header .menu .hamburger').addEventListener('click', function(){
    document.querySelector('#header .menu').classList.add('close');
    document.querySelector('#header .menu .nav').classList.add('active');
    document.querySelector('#header .menu .nav').classList.remove('not_active');
});
document.querySelector('#header .menu .hamburger-close').addEventListener('click', function(){
    setTimeout(function(){
        document.querySelector('#header .menu').classList.remove('close');
    },2200)
    document.querySelector('#header .menu .nav').classList.remove('active');
    document.querySelector('#header .menu .nav').classList.add('not_active');
});

// 메뉴 목록 클릭이벤트

function nav() {
    setTimeout(function() {
        document.querySelector('#header .menu').classList.remove('close'); 
        document.querySelector('header').style.visibility = 'hidden';
    }, 2200);
        document.querySelector('#header .menu .nav').classList.remove('active');
        document.querySelector('#header .menu .nav').classList.add('not_active');
        document.querySelector('.sec1').style.visibility = 'hidden';
        document.querySelector('.sign').style.visibility = 'hidden';
        document.querySelector('.logo').style.visibility = 'hidden';
}
function navLink1() {
    setTimeout(function() {
        location.href = '../../index3.html#main';
    },2300);

    nav();
}
function navLink2() {
    setTimeout(function() {
        location.href = '../../index3.html#about';
    },2300);

    nav();
}
function navLink3() {
    setTimeout(function() {
        location.href = '../../index3.html#port2T';
    },2300);

    nav();
}
function navLink4() {
    setTimeout(function() {
        location.href = '../../index3.html#contact';
    },2300);

    nav();
}
