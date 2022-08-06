$(function () {


function imagesProgress () {
  var $container    = $('#progress'),            
      $progressBar  = $container.find('.progress-bar'), 
      $progressText = $container.find('.progress-text'), 

      imgLoad       = imagesLoaded('body'),//이미지 로딩을 모니터링
      imgTotal      = imgLoad.images.length,//body 전체 이미지갯수
      imgLoaded     = 0,// 읽은 이미지갯수
      current       = 0,//현재 진행률 
      // 1 초에 60 번씩 읽어 여부 확인
      progressTimer = setInterval(updateProgress, 1000 / 60);

  // imagesLoaded를 통해 이미지로드 할 때마다 카운터증가
  imgLoad.on('progress', function () {
      imgLoaded++;
  });

  function updateProgress () {
    var target = (imgLoaded / imgTotal) * 100;// 로드한 이미지의 비율
    current += (target - current) * 0.1;//부드러운 여유
    $progressBar.css({ width: current + '%' });
    $progressText.text(Math.floor(current) + '%');

    if(current >= 100){
      clearInterval(progressTimer);
      $container.addClass('progress-complete');
      $progressBar.add($progressText) // add는 그룹화
        .delay(500)
        .animate({ opacity: 0 }, 250, function () {
        $container.animate({ top: '-100%' }, 1000, 'easeInOutQuint');
      });
        

        gsap.to(".title h1 strong span",{duration: 1.8, y:0, opacity: 1, stagger:0.1, ease: Back.easeOut.config(1.7), delay:2});

    }
    if (current > 99.9) {
        current = 100;
    }
  }
}
    imagesProgress();

});


