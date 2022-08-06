$(document).ready(function(){

    
    $(".slideImg1").find("li:gt(0)").hide();
    var current1=0;
    setInterval(function(){
        var next1=(current1+1)%3;
        $(".slideImg1").find("li").eq(current1).fadeOut();
        $(".slideImg1").find("li").eq(next1).fadeIn(2500);
        current1=next1;
    },3000);

    $(".slideImg2").find("li:gt(0)").hide();
    var current2=0;
    setInterval(function(){
        var next2=(current2+1)%3;
        $(".slideImg2").find("li").eq(current2).fadeOut();
        $(".slideImg2").find("li").eq(next2).fadeIn(2500);
        current2=next2;
    },3000);

    $(".slideImg3").find("li:gt(0)").hide();
    var current3=0;
    setInterval(function(){
        var next3=(current3+1)%2;
        $(".slideImg3").find("li").eq(current3).fadeOut();
        $(".slideImg3").find("li").eq(next3).fadeIn(2500);
        current3=next3;
    },3000);
    

});