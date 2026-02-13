

// custom cursar
var cursor = document.querySelector("#cursor")
document.addEventListener("mousemove", function(dets) {
    cursor.style.left = dets.x + "px"
    cursor.style.top = dets.y + "px"
})


gsap.to("#nav", {
    backgroundColor: "#000",
    height: "70px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})

