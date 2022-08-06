$(function(){

  // sns공유하기
  $(".facebook").click(function(e){
    e.preventDefault();
    window.open('https://www.facebook.com/sharer/sharer.php?u=' +encodeURIComponent(document.URL)+'&t='+encodeURIComponent(document.title), 'facebooksharedialog', 'menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=300, width=600'); 
  });
  $(".twitter").click(function(e){
    e.preventDefault();
    window.open('https://twitter.com/intent/tweet?text=[%EA%B3%B5%EC%9C%A0]%20' +encodeURIComponent(document.URL)+'%20-%20'+encodeURIComponent(document.title), 'twittersharedialog', 'menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=300, width=600');
  });

  // 이미지슬라이더
  $(".slider").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          autoplay:false,
        }
       }
    ]
  });

   //라이트 박스
   $(".lightbox").lightGallery({
    thembnail:true,
    autoplay:true,
    pause: 3000,
    progressBar:true
  }); 

  // 접기/펼치기
  $(".btn").click(function(e){
    e.preventDefault();
    $(".nav").slideToggle();
    $(this).toggleClass("open");
    if($(".btn").hasClass("open")){
      $(this).find("i").attr("class","fa fa-angle-up"); /* attr -> 속성변경 */
    }else {
      $(this).find("i").attr("class","fa fa-angle-down");
    }
 ; })

  $(window).resize(function(){
    var wWidth = $(window).width();
    if(wWidth > 600){
      $(".nav").removeAttr("style");
    }
  })

})
