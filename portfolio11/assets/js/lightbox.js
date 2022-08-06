document.addEventListener ("click", function(ev){
    let btn = document.getElementById("lightbox-btn"),
        popup = document.getElementById("popup"),
        target = ev.target,
        targetClass = target.parentNode.getAttribute("class"),
        targetId = target.parentNode.getAttribute("id");
    
    if(targetClass == "code-btn-inner" || targetClass == "code-view"){
        popup.classList.add("visible")
        gsap.to("#popup.visible", {duration: 1, x: 0, y: 0, opacity: 1})
    } else{
        popup.classList.remove("visible")
         gsap.to("#popup.visible", {duration: 0.5, x: 0, y: 1000, opacity: 1})
    } 

    if(targetId == "pop1"){
            popup.src = "https://codepen.io/lwnubnrc/embed/GRjayqp?height=265&theme-id=dark&default-tab=html,result";
    }    
    if(targetId == "pop2"){
            popup.src = "https://codepen.io/lwnubnrc/embed/rNMgpMK?height=265&theme-id=dark&default-tab=css,result";
    } 
    if(targetId == "pop3"){
            popup.src = "https://codepen.io/lwnubnrc/embed/vYXwpyY?height=265&theme-id=dark&default-tab=css,result";
    } 
    if(targetId == "pop4"){
            popup.src = "https://codepen.io/lwnubnrc/embed/WNGBdoj?height=265&theme-id=dark&default-tab=html,result";
    } 
    if(targetId == "pop5"){
            popup.src = "https://codepen.io/lwnubnrc/embed/XWjwVNP?height=265&theme-id=dark&default-tab=css,result";
    } 
    if(targetId == "pop6"){
            popup.src = "https://codepen.io/lwnubnrc/embed/oNzRoXE?height=265&theme-id=dark&default-tab=css,result";
    } 
    console.log(targetId)
});