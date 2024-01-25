var cursor = document.querySelector("#blur-cursor");
document.addEventListener("mousemove", function(dets){
    cursor.style.left = dets.x-48+"px";
    cursor.style.top = dets.y-48+"px";
})