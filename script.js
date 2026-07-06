gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



var loading = gsap.timeline();
loading.from("#load",{
  width:"0vw",
  height:"0vh",
  duration:0.7,
  delay:1,
  rotate:"10deg",
   ease: "power2.out"

})

loading.from(".txt",{
  bottom:"-50%",

},"<1")
loading.to(".txt",{
  bottom:"105%",
  duration:0.7

},"<1.7")

loading.from(".ld-up-txt ",{
top:"50%",
  duration:0.4,
  display:"none",
  

})
loading.from(".ld-dw-txt ",{
top:"50%",
  duration:0.4,
  display:"none",
  delay:0.3
  

})
loading.to(".ld-dw-txt ",{
top:"50%",
  duration:0.7,
  display:"none",
  delay:0.6
  

})
loading.to(".ld-up-txt ",{
top:"50%",
  duration:0.7,
  display:"none",
  
  

},"<")

loading.to("#load",{
  scale:6,
  duration:2,
  delay:0.5,

   ease: "power2.out"

})
loading.to("#load-white",{
  scale:110,
  duration:1.8,
  delay:0.1,
  display:"flex",

   ease: "power2.out"

},"<")
loading.set("#load", {
    display: "none",
    duration:0.1
})

loading.set("#load-white", {
    display: "none",
    duration:0.4

},"<")
loading.to("#main", {
   backgroundColor:"#C2E9E7",
   duration:4,
   ease:"power2.out"

})
loading.to("#nav", {
   opacity:1,
   ease:"power2.out",
   duration:2},"<")


   loading.to("#page1", {
   opacity:1,
   ease:"power2.out",
   duration:3},"<")


   loading.to(".banner", {
   opacity:1,
   ease:"power2.out",
   duration:3},"<")

     loading.to("#page2", {
   opacity:1,
   ease:"power2.out",
   duration:3},"<")


 var pointer = document.querySelector("#pointer");
var main = document.querySelector("#main");
main.addEventListener("mousemove",function(dets){
    gsap.to(pointer,{
       top:"0%",
       opacity:1
    })
    gsap.to(pointer,{
        x:dets.x,
        y:dets.y,
        duration:0.3,
      duration:0.8,
      ease:"power3.out"
    })
   
})
main.addEventListener("mouseleave",function(dets){
    gsap.to(pointer,{
       opacity:0                                  
    })
  })

  var portal = document.querySelector(".right");
  portal.addEventListener("click",function(){
     window.location.href = "login.html"
  })
   var pbtn = document.querySelector(".p2-btn");
  pbtn.addEventListener("click",function(){
     window.location.href = "login.html"
  })


  if (window.innerWidth < 768) {
  // Mobile → Locomotive OFF
} else {
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
}