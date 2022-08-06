(function($){
 
  let contents = $("#contents");
  let section = $("#contents > section");
  let nav = $("#nav > ul > li");

  //nav 이동하기
  nav.click(function(){
    let target = $(this);
    let index = target.index();
    let secNum = section.eq(index);
    let off = secNum.offset().top;
    let section = $("#contents > section");
    $("html, body").animate({scrollTop : off},700);
    $("#nav").slideUp();
  });

  //메인 동그라미 클릭하면 nav내려오기
  $(".main h1 svg").click(function(){
    $("#nav").slideDown();
   });

 //윈도우 스크롤시
$(window).scroll(function(){
  let wScroll = $(window).scrollTop();
  let wHeight = $(window).height();
  let dHeight = $(document).height();  
  let site = $(".site_intro > div");

  console.log("wScroll : " + wScroll);
  console.log("wHeight : " + wHeight);

    //메인 동그라미 작게만들기
    if(wScroll > wHeight/2 ){
      $(".main").addClass("small")
    }else {
      $(".main").removeClass("small");
      $("#nav").slideUp();
    };

    //who_img 애니메이션
     if(wScroll > section.eq(1).offset().top ){
       $(".who  .who_img > div:nth-child(1)").animate({top:"450px"},1000);
       $(".who  .who_img > div:nth-child(2)").animate({left:"235px"},1000);
       $(".who  .who_img > div:nth-child(3)").animate({right:"25px"},1000);
     };

     if(wScroll > section.eq(2).offset().top -  wHeight/2){
        let svgAnimation = $(".skill_list > p .rect2");
        svgAnimation.each(function(index){
          setTimeout(function(){
            svgAnimation.eq(index).addClass("fill")
          },700*(index+1));
        });
    };

    if(wScroll >section.eq(3).offset().top - wHeight/2 ){
      $(".site_img").addClass("motion");
    };

    if(wScroll > site.eq(0).offset().top){
      $(".site_intro .site01 .site_mockup").addClass("active");
    }
    
   });

})(jQuery);