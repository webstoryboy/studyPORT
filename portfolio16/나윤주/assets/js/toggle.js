    // html dom 이 다 로딩된 후 실행된다.
    $(document).ready(function(){
        // memu 클래스 바로 하위에 있는 태그를 클릭했을때
        $(".part-year").click(function(){
            $(this).toggleClass("on");
            $(this).siblings().removeClass("on");
        });

        $(".btn-work").click(function(){
            $(this).addClass("active");
            $(this).siblings().removeClass("active");

            var activeTab = $(this).attr('data-tab');
            $('main').removeClass('on');
            $('.' + activeTab).addClass('on');
        });
        
    });

//햄버거
$(".cont-num").click(function (e) { 
    $('.quick-menu input:checkbox').attr("checked", false);
    var hbg2 = gsap.to("label ul.cont-num h2 a",1, {opacity:0, y:100, stagger:0.1});
        hbg2.restart();
});


var qInput = $(".quick-menu input")
qInput.click(function(){
        gsap.to("label ul.cont-num h2 a",1, {opacity:1, y:0, stagger:0.1});
        gsap.to(".sns ul li a", 1, {opacity:1, y:0, stagger:0.1, delay:.1});
  });
  $('label input:checked').click(function(){
    gsap.to("label ul.cont-num h2 a",1, {opacity:0, y:0, stagger:0.1});
    gsap.to(".sns ul li a", 1, {opacity:0, y:0, stagger:0.1, delay:.1});
});
 





