

// onclick 이벤트

function dropClose(){
    $(".search_dropbox").css("display" ,"none");   
};

function del_btn(el){
    $(el).parent().css("display" ,"none");
}
function mini(){
    $(".miniwing").css("display" ,"block");
}

function del_total_word(){
    $(".autolist").css("display" ,"none");
    $(".nolist").css("display" ,"block");
}

//search 마우스 포커스시

$(document).ready(function(){

    var autocomplete = $(".ui-autocomplete-input"); //search 값 포커스
    var text1 = $('.ui-autocomplete-input');
    text1.focus(function(){
    text1.val('');//search-input을 빈칸으로 만들기
    $('.autolist').css("display" ,"block"); //search-input 아래 자동완성기능 목록 키기
    });
   

        
   

    
});
