
var crsr = document.querySelector("#cursor") /* used to select html element in js */
var blr = document.querySelector("#cursor_blur")
document.addEventListener("mousemove", function(dets){ /* it will capture the mouse movements , to show it in y axis then console log det.y or x for x axis*/
   crsr.style.left = dets.x+"px" /* here it is used for showing the cursor movement , point to note that cursor is not inside the main */ 
   crsr.style.top = dets.y+"px" /* this will only track the cursor not that shiny part behind of it */
   blr.style.left = dets.x - 100 +"px" /* here both cursor and blur will move when we move the cursor */
   blr.style.top = dets.y - 100 + "px"
})










gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "100px",      
    scrollTrigger: {    /* workoing of scroll triggers */
      trigger: "#nav",  /* whome we are triggering to */
      scroller: "body",  /* when this action need to happen */
      // markers:true,
      start: "top -10%",  /* when we are scrolling we will see the effect in black, 
      the starting point is within the nav bar -10 per. from the top */
      end: "top -11%",
      scrub: 1,      /* this is to repeat the scrolling option multiple times  */
    },
  });
gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger: {                    /* here we have code , lower part that got darker while scorlling */
        trigger: "#main",                /* thing to note here is we are not able to change back to the video again need to check how it will get back */
        scoller: "body", 
        start: "top -30%",  /* starting from top */
        end: "top -80%",    /*ends at */
        srcub:2   /* repetation , but I dint understand that when we are moving towards up {cursor}, 
        than why it is not working  */
    }
}) ;