var cursor = document.querySelector("#blur-cursor");
document.addEventListener("mousemove", function (dets) {
    cursor.style.left = dets.x - 48 + "px";
    cursor.style.top = dets.y - 48 + "px";
})


gsap.to("#main", {
    backgroundColor: "#151922",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -15%",
        end: "top -85%",
        scrub: 2.5
    }
})

gsap.to("header", {
    backgroundColor: "#151922",
    height: 60,
    scrollTrigger: {
        trigger: "header",
        scroller: "body",
        start: "top -15%",
        end: "top -16%",
        scrub: 2.5
    }
})

gsap.to("img", {
    height: 60,
    width: 60,
    rotation: 360,
    scrollTrigger: {
        trigger: "img",
        scroller: "body",
        start: "top -15%",
        end: "top -16%",
        
        scrub: 3
    }
})
