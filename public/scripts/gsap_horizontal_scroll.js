let scroll_tl = gsap.timeline({
 scrollTrigger: {
   trigger: '.trigger-image',
   start: "center center",
   //pin: true,
   scrub: true,
   end: "+=900",
   //markers: {startColor: "yellow", endColor: "purple", fontSize: "12px"}
 }
}),

facts = [...document.querySelectorAll('.fact')]

scroll_tl.to(facts, {
 xPercent: -100 * (facts.length - 1),
 scrollTrigger: {
   trigger: ".horizontalScroll",
   start: "center center",
   pin: true,
   //markers: {startColor: "red", endColor: "blue", fontSize: "22px"},
   scrub: 1,
   //snap: 1 / (facts.length - 1),
   // base vertical scrolling on how wide the container is so it feels more natural.
   //end: () => "+=" + document.querySelector("page3").offsetWidth,
   end: () => `+=4000`
 }
});