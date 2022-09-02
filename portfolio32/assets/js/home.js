        // resize
        const resize = document.querySelector(".resize");

        window.onresize = function(event){
        var innerHeight = window.innerHeight;
        innerHeight <= "850" ? resize.style.display = "block" : resize.style.display = "none";
        }        

        // black bar
        const rightMove = document.querySelectorAll('.box_hover');
        const hoverBg = document.querySelectorAll('.hover_bg');
        const desc = document.querySelectorAll('.box_hover .desc');

        function blackBar(){
            for(var i=0; i<rightMove.length; i++) right(i);
            function right(i){
                rightMove[i].addEventListener("mouseover", () => {
                    hoverBg[i].style.left = "0";
                    desc[i].style.marginLeft = "10px";   
                })       
            }

            for(var e=0; e<rightMove.length; e++) left(e);
            function left(e){
                rightMove[e].addEventListener("mouseout", () => {
                    hoverBg[e].style.left = "-0.625rem";
                    desc[e].style.marginLeft = "0";   
                })       
            }   
        }   
        blackBar();

            //text move
        //     const textMoveTop = document.querySelectorAll('.move_top');
        //     const textMoveLeft = document.querySelectorAll('.move_left');
        //     const textMoveBottom = document.querySelectorAll('.move_bottom');

        //     function textMove(){

        //     Array.from(textMoveTop).forEach(function(e, index){
        //         setTimeout(() => {
        //             e.style.opacity = "1";
        //             e.style.marginTop = "0";
        //         },1000 * Math.random(index))  
        //     })

        //     Array.from(textMoveLeft).forEach(function(e, index){
        //         setTimeout(() => {
        //             e.style.opacity = "1";
        //             e.style.marginLeft = "0";
        //         },1000 * Math.random(index))  
        //     })

        //     Array.from(textMoveBottom).forEach(function(e, index){
        //         setTimeout(() => {
        //             e.style.opacity = "1";
        //             e.style.marginBottom = "0";
        //         },1000 * Math.random(index))  
        //     })   
        //     textMove(); 
        // }




        // image loder
        function imagesProgress(){
            var $container = $("#progress"),
                $progressText = $container.find(".progress-text"),
                imgLoad = imagesLoaded("body"),	
                imgTotal = imgLoad.images.length,	
                imgLoaded = 0,										
                current = 0,							
                progressTimer = setInterval(updateProgress, 2000 / 60);	
        
                imgLoad.on("progress", function(){
                    imgLoaded++;
                });
        
            function updateProgress(){
                var target = ( imgLoaded / imgTotal) * 100;

                const textMoveTop = document.querySelectorAll('.move_top');
                const textMoveLeft = document.querySelectorAll('.move_left');
                const textMoveBottom = document.querySelectorAll('.move_bottom');         
                const boxImg = document.querySelector('.box11 img');   
            
        
                current += ( target - current) * 0.1;
                $progressText.text( Math.floor(current) + '%' );
        
                if(current >= 100){
                    clearInterval(progressTimer);
                    $container.animate({opacity: '0'},1500,'easeInOutQuint').animate({top: '-100%'},1500);

                    gsap.to(".move_top", {opacity: 1, duration: 0.5, delay:0.8, marginTop: 0, stagger: {each: 0.1, from: "random"}});
                    gsap.to(".move_left", {opacity: 1, duration:0.4, delay:0.8, marginLeft: 0, stagger: {each: 0.1, from: "random"}});
                    gsap.to(".move_bottom", {opacity: 1, duration:0.4, delay:0.8, marginBottom: 0,  stagger: {each: 0.1, from: "random"}});
                    gsap.to(".box11 img", {opacity: 1, duration:1.2, delay:1.2,});
                }
                if(current > 99.9){
                    current = 100;
                };
            };
        };
        
        imagesProgress();