$(function(){
    
    
    //skrollr
    var s = skrollr.init(
        smoothScrolling = true
    );

    //로딩
    let mainText = $(".main_tit > h1").text().split('').join("</span><span>");
        mainText ="<span>"+ mainText +"</span>";
        $(".main_tit > h1").html(mainText);
        $(".main_tit > h1").find("span").each(function(index){
            setTimeout(function(){
                $(".main_tit > h1").find("span").eq(index).show();
            },100*(index+1));
        });

        setTimeout(function(){
            $(".main_box > div").each(function(index){
                setTimeout(function(){
                    $(".main_box > div").eq(index).show();
                    $(".main_box > div").eq(-index).show();
                },100*(index+1));
            });    
            setTimeout(function(){
                $(".main_row").fadeIn();
            },2500);
        }, 3000);


    //메인 화살표
    setInterval(down,1000);
    function down(){
        $(".main .main_row").animate({bottom : "5%"},500, 'easeInCubic');
        $(".main .main_row").animate({bottom : "8%"},500,'easeOutCubic');
    };

    //메인 텍스트 지워지기    
    $(".main .main_box .mb_text").mousemove(function(){
        $(this).css("display","none")
    }); 

    //햄버거메뉴
    $(".ham").click(function(){
        $(this).toggleClass("click");
        $(".nav").toggleClass("click");
    });
    $("a[href^='#']").on("click",function(){
        let target = $($(this).attr("href"));
        if(target.length){
          $("html, body").animate({scrollTop: target.offset().top},600,"easeInOutExpo")
        }
      });

    //소개부분 클릭이미지 반짝이기
    setInterval(click, 500);
    function click(){
        $(".click_alerm01").toggleClass("none");
    };
      
     //소개부분 이미지 생성
    $(".who_text_about .who_click").find("span").click(function(){
        let target =$(this);
        let index =target.index();
        let cookies = $(".who_click_img > div").eq(index);
        cookies.css({"opacity":"1", "z-index":"1", "height":"400px"});
    });

     //소개부분 이미지 드래그 가능
     $(function(){
        $( ".who_click_img > div" ).draggable();
      });    
    

     //모바일 사이트 팝업창 
    function popUp(siteUrl){
        let url = siteUrl;
        let option = "height = 900, width = 600, top= 100, left=100,  scroll=no, toolbar=0,menubar=no";
        window.open(url,'mobile',option);
    }
      
    $(".mobile_list01").click(function(e){
        e.preventDefault();    
        popUp('https://dldkfka331.github.io/responsive/mobile.html');
    });
    $(".mobile_list02").click(function(e){
        e.preventDefault();    
        popUp('https://dldkfka331.github.io/nugu/mobile.html');
    });
    $(".mobile_list03").click(function(e){
        e.preventDefault();    
        popUp('https://dldkfka331.github.io/megabox/mobile.html');
    });
    $(".mobile_list04").click(function(e){
        e.preventDefault();    
        popUp('https://dldkfka331.github.io/appleMusic/');
    });
    $(".mobile_list05").click(function(e){
        e.preventDefault();    
        popUp('https://dldkfka331.github.io/Millie/');
    });

    //기록
    if($(".me_right span").is( ":visible" ) ){
        $('.counter').counterUp({
            delay: 100, 
            time: 3000 
        });
    }
});