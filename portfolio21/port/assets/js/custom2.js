//skrollr
// $(window).scroll(function () {
//     let pageYOffset = $(window).scrollTop();
//     $(".pageYOffset").text(pageYOffset);

//     if ( pageYOffset < $("#about").offset().top ) {
//         var s = skrollr.init({
//             edgeStrategy: 'set',
//             easing: 'linear'
//          });     
//     } else {
//         return false;
//     }
// });

//text split
$(".split").each(function () {
    let text = $(this).text();
    let split = text.split("").join("</span><span aria-hidden='true'>");
    split = "<span aria-hidden='true'>" + split + "</span>";
    $(this).html(split).attr("aria-label", text);
});

//#main
$(".point").addClass("active");
let tl = gsap.timeline();
tl.to(".text_wrap h1 span", {
    duration: 1,
    delay: 0.5,
    y: 0,
    opacity: 1,
    stagger: 0.1,
    ease: Back.easeOut.config(1.7)
});

tl.to("#header, .pageYOffset", {
    duration: 1,
    y: 0,
    opacity: 1,
    ease: Back.easeOut.config(1.7)
}, "-=1");

//scroll animation
$(window).scroll(function () {
    //scrollTop
    let pageYOffset = $(window).scrollTop();

    //pageOffset number
    $(".pageYOffset").text(pageYOffset);

    $(".point").each(function(){
        if (pageYOffset > $(this).offset().top - $(window).height() / 2) {
            //active
            $(this).add(".act").addClass("active");

            let tl = gsap.timeline();
            let tLine = this.querySelector(".title_line");
            let tSplit = this.querySelectorAll(".title h1 span");
            
            //section title line, split
            // tl.to(tLine, {
            //     duration: 1,
            //     width: "100%",
            //     ease: Back.easeOut.config(1.7)
            // });
            tl.to(tSplit, {
                duration: 0.3,
                delay: 0.5,
                y: 0,
                opacity: 1,
                stagger: 0.1,
                ease: Back.easeOut.config(1.7)
            });
        } else {
            $(this).add(".act").removeClass("active");
        };
    });

    //#javascript 가로스크롤
    let jsTop = $("#javascript").offset().top;
    let jsOffTop = pageYOffset - $("#javascript").offset().top;
    let jsContTop = pageYOffset - $(".js_cont").offset().top;

    if(pageYOffset > jsTop){
        $(".section_js").css("transform","translatex("+ -jsOffTop+"px)");
        tl.to("#javascript .title_line", {
            duration: 2,
            width: "100%",
            opacity: 1,
            ease: Back.easeOut.config(1.7)
        });
        tl.to("#javascript .title h1 span", {
            duration: 0.5,
            delay: -2,
            y: 0,
            opacity: 1,
            stagger: 0.1,
            ease: Back.easeOut.config(1.7)
        });

        if(pageYOffset > jsContTop){
            $(".js_point").add(".js_act").addClass("active");
        } else {
            $(".js_point").add(".js_act").removeClass("active");
        };        
    }        
});