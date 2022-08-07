$(".nav ul li").click(function(e){
    e.preventDefault();
    let target = $(this);
    let index = target.index();
    let section = $(".paraCont > section").eq(index);
    let offset = section.offset().top;
    $("html, body").animate({ scrollTop: offset }, 600);
});