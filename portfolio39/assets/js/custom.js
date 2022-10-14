(function($){
    
    function loading(){
    let progress = $(".loadings"),
            progressText = $(".ld_text"),
            imgLoad = imagesLoaded("body"),
            imgTotal = imgLoad.images.length,	//전체 이미지 수
            imgLoaded = 0,		//로드한 이미지 수
            imgCurrent = 0,	//진행률
            progressTimer = setInterval(updateProgress, 1000 / 20);
        
    //이미지 로드할 때마다 로드한 이미지 수 늘려준다.
    imgLoad.on("progress", function(){
        imgLoaded++;
    });
        function updateProgress(){
            let target = (imgLoaded/imgTotal) * 100;
            imgCurrent += (target - imgCurrent)* 0.5;
            progressText.text(Math.floor(imgCurrent) + "%")
            
            if(imgCurrent >= 100){
                clearInterval(progressTimer);
                progress.addClass("active");
                $("html").scrollTop(0);
            
            if(imgCurrent > 99){
                imgCurrent = 100;
                }
            }
        }//document ready
    }
    loading();



    //스크롤
    window.addEventListener("scroll", ()=>{
        let scrollTop = document.documentElement.scrollTop || window.pageYOffset || window.scrollY;

        document.querySelector(".scroll").innerHTML = parseInt(scrollTop);
    });

    //메뉴버튼
    $(".hem_menu .hem").click(function(){
        $(".menu").toggleClass("show")
    });

    $(".tep_menu li a").click(function(){
        $(".menu").toggleClass("show")
    });

    //스터디 스크롤
    const slider = document.querySelector('.slide_box');
    let isMouseDown = false;
    let startX, scrollLeft;

    document.querySelectorAll(".study").forEach((element) => {
        let style = element.getAttribute("class");
        element.addEventListener("mouseover", () => {
            document.querySelector(".cursor").classList.add("active");
            document.querySelector(".cursor span").innerText = "Drag"
        });
        element.addEventListener("mouseout", () => {
            document.querySelector(".cursor").classList.remove("active");
            document.querySelector(".cursor span").innerText = ""
        });
    })

    slider.addEventListener('mousedown', (e) => {
        isMouseDown = true;

        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
    
    slider.addEventListener('mouseleave', () => {
        isMouseDown = false;
    });
    
    slider.addEventListener('mouseup', () => {
        isMouseDown = false;
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isMouseDown) return;

        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1;
        slider.scrollLeft = scrollLeft - walk;
    });


    //안경 애니메이션
    const contentWrap = $(".about").height();
    $("body").css("height", contentWrap);
    const scrollHeight = $(window).height();
    let lastScrollTop = 0;

    $(window).scroll(function(){
        let scrollTop = $(window).scrollTop();

        clearTimeout($.data(this, "scrollCheck"));

        $.data(this, "scrollCheck",setTimeout(function(){
            $(".glasses_bg").addClass("stop");
        }, 100))

        if( scrollTop > lastScrollTop ){
            $(".glasses_bg").removeClass("top");
            $(".glasses_bg").removeClass("stop");
            $(".glasses_bg").addClass("recoil");
        } else {
            $(".glasses_bg").removeClass("stop");
            $(".glasses_bg").addClass("top");
            $(".glasses_bg").addClass("recoil");
        }
        lastScrollTop = scrollTop;
    });

    //커리어 바 이동

    const clamp = (value, min, max) => {
        return min < max
            ? (value < min ? min : value > max ? max : value)
            : (value < max ? max : value > min ? min : value);
    }

    // $(function () {
    //     $(".work_drag").draggable({
    //         containment : 'parent',
    //         axis: 'x',
            
    //         drag: function(){
    //             let career = 23 + 2;
    //             career++;
                
    //             //console.log(career)

    //             $(".work_drag span").text(career);
    //             $(".career_img img:nth-child(3)").css("display","none");
    //         }
    //     });
    // });
    


    /* 코드 뷰 */
    for(let i=1; i<=3; i++){
        $(".project_frame .code_bt" + i).click(function(){
            $(".site_view" + i).toggleClass("show");
            $(".code_view" + i).toggleClass("show");
        })
    }

    //code 색상
    document.addEventListener('DOMContentLoaded', (event) => {
        document.querySelectorAll('pre code').forEach((el) => {
            hljs.highlightElement(el);
        });
    });

    // const Vtite = document.querySelectorAll(".view-title ul li");
    // const Vcont = document.querySelectorAll(".view-cont > div");

    // Vtite.forEach((element, index)=>{
    //     element.addEventListener("click", function(){
    //         Vtite.forEach( el => {
    //             el.classList.remove("active");
    //         });
    //         element.classList.add("active");

    //         Vcont.forEach( el =>{
    //             el.style.display="none";
    //         });
    //         Vcont[index].style.display = "block";
    //     });
    // });

    //코드 탭메뉴
    const Vtite1 = $(".code_view1 .view-title ul li");
    const Vcont1 = $(".code_view1 .view-cont > div");

    Vtite1.each(function(index,item){
        $(this).click(function(){
            // Vtite.removeClass("active");
            $(this).addClass("active").siblings().removeClass("active");

            Vcont1.css("display","none");
            Vcont1.eq(index).css("display","block");
        })
    })

    const Vtite2 = $(".code_view2 .view-title ul li");
    const Vcont2 = $(".code_view2 .view-cont > div");

    Vtite2.each(function(index,item){
        $(this).click(function(){
            // Vtite.removeClass("active");
            $(this).addClass("active").siblings().removeClass("active");

            Vcont2.css("display","none");
            Vcont2.eq(index).css("display","block");
        })
    })

    const Vtite3 = $(".code_view3 .view-title ul li");
    const Vcont3 = $(".code_view3 .view-cont > div");

    Vtite3.each(function(index,item){
        $(this).click(function(){
            // Vtite.removeClass("active");
            $(this).addClass("active").siblings().removeClass("active");

            Vcont3.css("display","none");
            Vcont3.eq(index).css("display","block");
        })
    })

    //애니메이션 뷰
    const animabt = $(".show_bt > div");
    const animaVi = $(".anima_img > div");
    const animaGo = $(".anima_img > div span");

    animabt.each(function(index,item){
        $(this).click(function(){
            // Vtite.removeClass("active");
            $(this).addClass("active").siblings().removeClass("active");

            animaVi.css("opacity","0");
            animaVi.eq(index).css("opacity","1");

            animaGo.css("display","none");
            animaGo.eq(index).css("display","block");
        })
    })
    
})(jQuery);
