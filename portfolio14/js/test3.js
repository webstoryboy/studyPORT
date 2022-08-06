// open mobile menu
$('.js-toggle-menu').click(function(e){
  e.preventDefault();
  $('.mobile-header-nav').slideToggle();
  $(this).toggleClass('open');
});



let slider = document.querySelector('.slider');
let wrapper = document.querySelector('.wrapper');
let next = document.querySelector('.arrow-next');
let prev = document.querySelector('.arrow-prev');
let items = document.querySelectorAll('.items');
let currdeg  = 0;
let actives = 0;

next.addEventListener('click', () => {
    slider.classList.toggle('zoom');

    currdeg = currdeg - 120;

    if (actives === items.length - 1) {
        actives = 0;
    } else {
        actives++;
    }

    toggle();
});

prev.addEventListener('click', () => {
    slider.classList.toggle('zoom');

    currdeg = currdeg + 120;

    if (actives === 0) {
        actives = items.length - 1;
    } else {
        actives--;
    }

    toggle();
});

let toggle = () => {
    setTimeout(() => {
        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove('actives');
        }

        items[actives].classList.add('actives')
        wrapper.style.transform = 'rotateY(' + currdeg + 'deg)';
    }, 900);

    setTimeout(() => {
        slider.classList.toggle('zoom');
    }, 1900);
}
