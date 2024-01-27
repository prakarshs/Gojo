var cursor = document.querySelector("#blur-cursor");
document.addEventListener("mousemove", function (dets) {
    cursor.style.left = dets.x - 48 + "px";
    cursor.style.top = dets.y - 48 + "px";
})

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

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

gsap.to("#logo img", {
    height: 60,
    width: 60,
    rotation: 360,
    scrollTrigger: {
        trigger: "#logo img",
        scroller: "body",
        start: "top -15%",
        end: "top -16%",
        
        scrub: 3
    }
})

gsap.from(".img",{
    y:50,
    opacity:0,
    duration:1,
    stagger: 0.8,
    scrollTrigger:{
        trigger:".img",
        scroller:"body",
        start:"top 70%",
        start:"top 68%",
        scrub:3
    }
})
