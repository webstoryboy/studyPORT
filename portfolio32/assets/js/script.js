        // Arrow Animation
        const arrow = document.querySelector('.arrow');
        const arr = document.querySelector('.arr');

        function arr_ani() {
          arr.addEventListener('mouseover', function(){
            arrow.classList.add('active3');
          })

          arr.addEventListener('mouseout', function(){
            arrow.classList.remove('active3');
          })  
        }
        
        arr_ani();

        function arr_ani2() {
          arrow.addEventListener('mouseover', function(){
            arrow.classList.add('active3');
          })

          arrow.addEventListener('mouseout', function(){
            arrow.classList.remove('active3');
          })  
        }

        arr_ani2();

        // resize
        const resize = document.querySelector(".resize");

        window.onresize = function(event){
          event.preventDefault();
        var innerHeight = window.innerHeight;
        innerHeight <= "850" ? resize.style.display = "block" : resize.style.display = "none";
        }        

        // black bar 
        const upMove = document.querySelectorAll('.box_hover');
        const hoverBg = document.querySelectorAll('.hover_bg');
        const desc = document.querySelectorAll('.box_hover .desc');

        for(var i = 0; i<upMove.length; i++) up(i);
        function up(i){
            upMove[i].addEventListener("mouseover", () => {
                hoverBg[i].style.bottom = "0";
                desc[i].style.marginTop = "-10px";   
            })       
        }

        for(var e = 0; e<upMove.length; e++) down(e);
        function down(e){
            upMove[e].addEventListener("mouseout", () => {
                hoverBg[e].style.bottom = "-2.5rem";
                desc[e].style.marginTop = "0";   
            })       
        }   

        // tab-menu
        const view = document.querySelectorAll('.view');
        const closeTab = document.querySelector('.close');
        const codeView = document.querySelector('.tab_menu');
        const tabMenu = document.querySelectorAll('.tab_menu .menu');
        const tabCon = document.querySelectorAll('.tab');
        const tabCode = document.querySelector('.tab_code');
        const tabBtn = document.querySelectorAll(".tab-button");
        const con1 = document.querySelector(".con1");
        const con2 = document.querySelector(".con2");
        const con3 = document.querySelector(".con3");
        const con4 = document.querySelector(".con4");

        // tab show
        for(var i=0; i<view.length; i++) viewCode(i);
            function viewCode(i){
                view[i].addEventListener('click', () => {
                    codeView.style.display = "block";
                    tabCode.style.display = "block";
                })
            }
        // tab hide
        for(var i=0; i<view.length; i++) closeCode(i);
            function closeCode(i){
                closeTab.addEventListener('click', () => {
                    codeView.style.display = "none";
                    tabCode.style.display = "none";
                })
            }        

        // tab click
        tabBtn[0].addEventListener('click', function(){
            tabBtn.forEach((el) => {
                el.classList.remove('trigger');
            });

            tabBtn[0].classList.add('trigger');

            tabCon.forEach((e) => {
                e.classList.remove('show');
            });

            con1.classList.add('show');
        });

        tabBtn[1].addEventListener('click', function(){
            tabBtn.forEach((el) => {
                el.classList.remove('trigger');
            });

            tabBtn[1].classList.add('trigger');

            tabCon.forEach((e) => {
                e.classList.remove('show');
            });

            con2.classList.add('show');
        });        

        tabBtn[2].addEventListener('click', function(){
            tabBtn.forEach((el) => {
                el.classList.remove('trigger');
            });

            tabBtn[2].classList.add('trigger');

            tabCon.forEach((e) => {
                e.classList.remove('show');
            });

            con3.classList.add('show');
        });    

        tabBtn[3].addEventListener('click', function(){
            tabBtn.forEach((el) => {
                el.classList.remove('trigger');
            });

            tabBtn[3].classList.add('trigger');

            tabCon.forEach((e) => {
                e.classList.remove('show');
            });

            con4.classList.add('show');
        });            