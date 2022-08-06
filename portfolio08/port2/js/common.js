// cursor
const $cursor1 = $('.cursor1');
const $cursor2 = $('.cursor2');

function moveCircle(e) {
  TweenLite.to($cursor1, 0.3, {
    css: {
      left: e.pageX,
      top: e.pageY
    }
  });
  TweenLite.to($cursor2, 0.7, {
    css: {
      left: e.pageX,
      top: e.pageY
    }
  });
}

$(window).on('mousemove', moveCircle);