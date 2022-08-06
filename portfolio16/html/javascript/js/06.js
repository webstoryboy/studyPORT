
// memu 클래스 바로 하위에 있는 태그를 클릭했을때

var sexClass = ['female','male'];


var i = 0;


function changeSex(){
    i++;
    if(i>= sexClass.length){
        i = 0;
    }

    var sexBtn = document.querySelector("button"),
        transBtn  = event.currentTarget;
        transBtn.className = sexClass[i] + " sex" ;
    

        if(i == 0){
            transBtn.innerText = '여자';
            transBtn.setAttribute('value','여자');
        }else{
            transBtn.innerText = '남자';
            transBtn.setAttribute('value','남자');
        }
}
//타이틀 시간
    const titleDate = document.getElementById("date");
   
    var date = new Date();
    var year = date.getFullYear();
    var month = ("0" + (1 + date.getMonth())).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);

    titleDate.innerText = year + "." + month + "." + day;



//체크박스 갯수 체크해서 출석체크하기
function getCheckedCnt()  {
    // 선택된 목록 가져오기
    const query = 'input[name="atta"]:checked';
    const selectedElements = document.querySelectorAll(query);
    // const td = selectedElements.parentNode;
    // // const tdd = td.previousSibling;

    // const selectSexF = tdd.getElmentByClassName('female')
    // const selectSexM = tdd.getElmentByClassName('male')


    // const selectedMan = 'female input[name="atta"]:checked';
    // const selectedWoman = 'input[name="atta"]:checked';
    
    

    // 선택된 목록의 갯수 세기
    const selectedElementsCnt = selectedElements.length;
    // const selectedManCnt = selectSexM.length;
    // const selectedWomanCnt = selectSexF.length;

    // 출력
    document.getElementById('tot').innerText = selectedElementsCnt;
    // document.getElementById('mNum').innerText = selectedManCnt;
    // document.getElementById('wNum').innerText = selectedWomanCnt;
    
    }