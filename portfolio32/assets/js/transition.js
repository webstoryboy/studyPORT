// width page transition
function startMove(){
    // 페이지 이동 완료 후에 애니메이션 동작 중 보더 색깔 설정
    gsap.set(".contents > div", {borderColor: "#000"})

    document.querySelectorAll("#container > div").forEach((box, index) => {
        // 시간 설정 및 액티브 비활성화
        setTimeout(() => {
            box.classList.remove("active")
        }, 1000 * Math.random(index))
        
    })
    // 페이지 이동 시 시간 설정, div 박스 애니메이션 시간 및 보더 설정 
    setTimeout(() => {
        gsap.to(".contents > div", {duration: 1, borderColor: "#dbdbdb"});
    }, 2500);
}
startMove();

function pageMove(){
    document.querySelectorAll(".link").forEach((el) => {
        el.addEventListener("click", (e) => {
             // 페이지 이동 방지
            e.preventDefault();
            const hrefName = el.getAttribute("href");
            
            gsap.to(".contents > div", {duration: 0.3, border: 0})
            
            // avtive 활성화, 시간 설정
            document.querySelectorAll("#container > div").forEach((box, index) => {
                setTimeout(() => {
                    box.classList.add("active")
                }, 1000 * Math.random(index))
            })

            // 몇 초 후 페이지 이동
            setTimeout(() => {
                window.location.href = hrefName;
            }, 2500)
        })
    })
}
pageMove();

// height page transition
function startMove2(){
    gsap.set(".contents > div", {borderColor: "#000"})

    document.querySelectorAll("#container > div").forEach((box, index) => {
        setTimeout(() => {
            box.classList.remove("active2")
        }, 1200 * Math.random(index))
        
    })

    setTimeout(() => {
        gsap.to(".contents > div", {duration: 1, borderColor: "#dbdbdb"});
    }, 2500);
}
startMove2();

function pageMove2(){
    document.querySelectorAll(".link").forEach((el) => {
        el.addEventListener("click", (e) => {
            e.preventDefault();
            const hrefName = el.getAttribute("href");

            gsap.to(".contents > div", {duration: 0.3, border: 0})
            
            document.querySelectorAll("#container > div").forEach((box, index) => {
                setTimeout(() => {
                    box.classList.add("active2")
                }, 1200 * Math.random(index))
            })

            setTimeout(() => {
                window.location.href = hrefName;
            }, 2500)
        })
    })
}
pageMove2();

