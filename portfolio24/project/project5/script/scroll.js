$(document).ready(function(){

    var pos1 = $('.scroll').eq(0).offset().top;
    var pos2 = $('.scroll').eq(1).offset().top;
    var pos3 = $('.scroll').eq(2).offset().top;
    var pos4 = $('.scroll').eq(3).offset().top;

    $(window).on('scroll',function(){
        var scroll = $(this).scrollTop();

        $('.gnb>ul>li>a').removeClass('on');

        if(scroll>=pos1 && scroll<pos2){
            $('.gnb>ul>li').eq(0).children('a').addClass('on');
        }
        if(scroll>=pos2 && scroll<pos3){
            $('.gnb>ul>li').eq(1).children('a').addClass('on');
        }
        if(scroll>=pos3 && scroll<pos4){
            $('.gnb>ul>li').eq(2).children('a').addClass('on');
        }
        if(scroll>=pos4 ){
            $('.gnb>ul>li').eq(3).children('a').addClass('on');
        }
    });
    
    //네비버튼 클릭시 매칭되는 해당박스의 위치값으로 자동 스크롤
    $('.gnb>ul>li>a').on('click',function(e){
        e.preventDefault();

        var target = $(this).attr('href');
        var target_pos = $(target).offset().top;

        $('html,body').stop().animate({'scrollTop':target_pos},1000);
    });
	
});
