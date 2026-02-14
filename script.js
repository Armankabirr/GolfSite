// custom cursar
var cursor = document.querySelector("#cursor")
var cursor_blur = document.querySelector("#cursor_blur")

document.addEventListener("mousemove", function(dets) {
    cursor.style.left = dets.x+10 + "px"
    cursor.style.top = dets.y + "px"
    cursor_blur.style.left = dets.x - 250 + "px"
    cursor_blur.style.top = dets.y - 250 + "px"
})
var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem) {
    elem.addEventListener("mouseenter", function() {
        cursor.style.scale = 3
        cursor.style.border = "1px solid #fff"
        cursor.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function() {
        cursor.style.scale = 1
        cursor.style.border = "0px solid #95C11E"
        cursor.style.backgroundColor = "#95C11E"
    })
})

var arrow = document.querySelector("#arrow")
var page2 = document.querySelector("#page2")
if (arrow && page2) {
  var smoothScrollTo = function(targetY, duration) {
    var startY = window.pageYOffset
    var distance = targetY - startY
    var startTime = null
    var easeInOutCubic = function(t) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
    }

    var step = function(timestamp) {
      if (!startTime) {
        startTime = timestamp
      }
      var elapsed = timestamp - startTime
      var progress = Math.min(elapsed / duration, 1)
      var eased = easeInOutCubic(progress)
      window.scrollTo(0, startY + distance * eased)
      if (elapsed < duration) {
        window.requestAnimationFrame(step)
      }
    }

    window.requestAnimationFrame(step)
  }

  arrow.addEventListener("click", function() {
    var targetY = page2.getBoundingClientRect().top + window.pageYOffset
    smoothScrollTo(targetY, 1400)
  })
}



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


gsap.from("#about-us img,#about-us-in", {
  y: 90,
  opacity: 0,
  duration: 1,
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});
// gsap.from(".cards", {
//   scale: 0.8,
//   // opacity:0,
//   duration: 1,
//   stagger: 0.1,
//   scrollTrigger: {
//     trigger: ".cards",
//     scroller: "body",
//     // markers:false,
//     start: "top 70%",
//     end: "top 65%",
//     scrub: 1,
//   },
// });

gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});