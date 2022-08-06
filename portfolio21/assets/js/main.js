//loading
$(window).load(function() {
    $(".loading").addClass("spin");

    setTimeout(function() {
      var currentPositon = $(".loading").css("transform");
    //   console.log(currentPositon)
      $(".loading").addClass("class").css("transform", currentPositon).css("transform", "none")
      $(".loading").animate({
  
      }, 500, function() {
        increaseWidth();
      });
    }, 1985);
  
    function increaseWidth() {
      $(".loading").animate({
  
        width: "+=100%",
      }, 800, function() {
        slide();
        removeLine();
        // moveTextRight();
        // moveTextLeft();
      });
    }
  
    function removeLine() {
      $(".loading").animate({
  
        width: "0%",
      }, 800, function() {});
    }
  
    function goUp() {
      $(".up").show();
      $(".up").animate({
        top: "-=50%"
      }, 800, function() {
        $(this).hide();
      });
    }
  
    function goDown() {
      $(".down").show();
      $(".down").animate({
        bottom: "-=50%"
      }, 800, function() {
        $(this).hide();
      });
    }
  
    function slide() {
      goUp();
      goDown();
    }

    setTimeout(function() {
        $(".wrapper").delay(4000).css("display","none");
    },3500);
        
  });


  

// gsap
let tl = gsap.timeline();

tl.to(".main_3rd img", {
  duration: 1,
  delay: 7,
  x: 0,
  opacity: 1,
  ease: Back.easeOut.config(1.7)
});

tl.to("#main .top_title span", {
  duration: 1,
  delay: -0.5,
  y: 0,
  opacity: 1,
  stagger: 0.1,
  ease: Back.easeOut.config(1.7)
});

tl.to(".menu_btn, .site_btn_a", {
  duration: 1,
  delay: -1.5,
  x: 0,
  opacity: 1,
  ease: Back.easeOut.config(1.7)
});

tl.to(".repeat_title h1", {
  duration: 2,
  delay: -1,
  opacity: 1,
  ease: Back.easeOut.config(1.7)
});

gsap.to(".intro_circle", {
  scrollTrigger: {
    trigger:  ".intro_circle",
    start: "top 80%",
//    markers: true,
    toggleActions: "restart none none none"
  },
  x: 0,
  rotation: -360,
  duration: 2
});

gsap.to(".next_container ", {
  scrollTrigger: {
    trigger:  "#intro .next_container",
    start: "top 50%",
    // markers: true,
    toggleActions: "restart none none none"
    },
  // delay: 1,
  duration: 1,
  y: 0,
  opacity: 1,
  ease: Back.easeOut.config(1.7)
});





