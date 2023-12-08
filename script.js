let parts = document.querySelectorAll(".parts");
parts.forEach(function(val){
    let img = val.children[1];
    val.addEventListener("mousemove",function(dets){
        img.style.left = dets.x + "px";
        img.style.top = dets.y + "px";
    })

    val.addEventListener("mouseleave",function(){
        img.style.opacity = 0;
    })

    val.addEventListener("mouseenter",function(){
        img.style.opacity = 1;
    })

})
