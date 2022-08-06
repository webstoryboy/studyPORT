
//로또js
const lot_btn = document.querySelector('.lot_btn');
const pick = document.querySelector('.pick');

// //버튼 클릭시 함수실행

//     lot_btn.addEventListener('click',function(){
        
//         lot_btn.classList.remove('active');
//         pick.classList.add('active');
//         const candidate = Array(45).fill().map((v, i) => i + 1);
//         const shuffle = [];
//         while (candidate.length > 0) {
//         const random = Math.floor(Math.random() * candidate.length);
//         const spliceArray = candidate.splice(random, 1);
//         const value = spliceArray[0];
//         shuffle.push(value);
//         }
//         //오름차순 정렬
//         const winBalls = shuffle.slice(0, 6).sort((p, c) => p - c);

//         const bonus = shuffle[6];

//         //뽑힌 공의 숫자에 따라 색상 클래스 지정
//         function colorize(number, tag) {
//             if(number <= 10){
//                 tag.className += " yellow";
//             } else if (number <= 20) {
//                 tag.className += " blue";
//             } else if (number <= 30) {
//                 tag.className += " red";
//             } else if (number <= 40) {
//                 tag.className += " black";
//             } else {
//                 tag.className += " green";
//             }
//         }

//         //당첨번호
//         const resultTag = document.querySelector('.winnum');
//         for (let i = 0; i < 6; i++){
//         //비동기 처리
//         setTimeout(() => {
//             const ball = document.createElement('div');
//             ball.className = 'ball';
//             colorize(winBalls[i], ball);
//             ball.textContent = winBalls[i];
//             resultTag.appendChild(ball);
//         },500 * (i + 1));
//         }

//         //보너스번호
//         const bonusTag = document.querySelector('.bonus');
//         setTimeout(() => {
//             const bonusBall = document.createElement('div');
//             bonusBall.className = 'ball';
//             colorize(bonus, bonusBall);
//             bonusBall.textContent = bonus;
//             bonusTag.appendChild(bonusBall);
//         },3300);
        
//         //리셋버튼
//         setTimeout(() => {
//             const resetBtn = document.querySelector('input');
//             resetBtn.className = 'on';
//             pick.appendChild(resetBtn);
//         },3800);
        
//     });

function lottoStart(){
    lot_btn.classList.remove('active');
        pick.classList.add('active');
        const candidate = Array(45).fill().map((v, i) => i + 1);
        const shuffle = [];
        while (candidate.length > 0) {
        const random = Math.floor(Math.random() * candidate.length);
        const spliceArray = candidate.splice(random, 1);
        const value = spliceArray[0];
        shuffle.push(value);
        }
        //오름차순 정렬
        const winBalls = shuffle.slice(0, 6).sort((p, c) => p - c);

        const bonus = shuffle[6];

        //뽑힌 공의 숫자에 따라 색상 클래스 지정
        function colorize(number, tag) {
            if(number <= 10){
                tag.className += " yellow";
            } else if (number <= 20) {
                tag.className += " blue";
            } else if (number <= 30) {
                tag.className += " red";
            } else if (number <= 40) {
                tag.className += " black";
            } else {
                tag.className += " green";
            }
        }

        //당첨번호
        const resultTag = document.querySelector('.winnum');
        for (let i = 0; i < 6; i++){
        //비동기 처리
        setTimeout(() => {
            const ball = document.createElement('div');
            ball.className = 'ball';
            colorize(winBalls[i], ball);
            ball.textContent = winBalls[i];
            resultTag.appendChild(ball);
        },500 * (i + 1));
        }

        //보너스번호
        const bonusTag = document.querySelector('.bonus');
        setTimeout(() => {
            const bonusBall = document.createElement('div');
            bonusBall.className = 'ball';
            colorize(bonus, bonusBall);
            bonusBall.textContent = bonus;
            bonusTag.appendChild(bonusBall);
        },3300);
        
        //리셋버튼
        setTimeout(() => {
            const resetBtn = document.querySelector('input');
            resetBtn.className = 'on';
            pick.appendChild(resetBtn);
        },3800);
        
}
function lottoRestart(){
    
    const resultTag1 = document.querySelector('.winnum');
    const bonusTag1 = document.querySelector('.bonus');
    console.log(resultTag);
    console.log(bonusTag);

    resultTag1.className = 'hidden';
    bonusTag1.className = 'hidden';
    
    lottoStart();
   
}

