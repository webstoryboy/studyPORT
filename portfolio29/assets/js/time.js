setInterval(function(){
    const daylist = ['일', '월', '화', '수', '목', '금', '토'];
    const today = new Date();
    
    const nowH = today.getHours();   //시간 가져오기
    const nowM = today.getMinutes();  //분 가져오기
    const nowS = today.getSeconds();   //초 가져오기
    const nowD = daylist[today.getDay()];  //요일 가져오기
    //변수 nowD를 선언한 후 데이터는 배열값으로 되어있는 daylist를 가져와야 하므로
    //daylist[ ]의 형태에서 대괄호 안에 오늘요일을 넣어 해당되는 값을 가져오게 해야한다.
    //그래서 daylist[ ]안에는 오늘요일을 가져와 주는 메서드인 today.getDay()를 넣어
    //날짜에 맞는 요일을 숫자가 아닌 문자로 출력되게 해준다.

    const degH = nowH * (360 / 12) + nowM * (360 / 12 / 60);
    const degM = nowM * (360 / 60);
    const degS = nowS * (360 / 60);

    //시간표시
    const nowTime = `${today.toLocaleDateString()} ${nowD} ${today.toLocaleTimeString()}`;
    //문자열 메서드 - 문자열결합/템플릿 문자열 참고 : .innerHTML = '`${ 1 } ${ 2 } ${ 3 } `
    //toLocaleString() : 2021. 8. 12. 오후 시:분:초
    //toLocaleDateString() : 2021. 8. 12
    //toLocaleTimeString() : 오후 시:분:초
    //풀이 : `${오늘.날짜} ${오늘요일} ${오늘.시간}` --> 출력 --> 2021. 8. 12 목요일 오후 시:분:초
    //const nowTime = today.toLocaleString();

    const time = document.querySelector(".insta__time");
    time.innerHTML = nowTime;

    //1초 1,000(msc)
    //1분(60s) = 1,000*60 = 60,000(ms)
    //1시간(60m) = 1,000*60*60 = 3,600,000(msc)
    //1일(60m*24h) = 1,000*60*60*24 = 66,400,000(msc)
}, 1000);