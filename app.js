const app = Vue.createApp({
  data() {
    return {
      showVideo: false,
      videoUrl: 'https://www.youtube.com/embed/NYzqGc2xBaw?autoplay=1&start=3921',
    };
  },
  methods: {
    playVideo() {
      this.showVideo = true;
    },
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    let sections = gsap.utils.toArray(".horizontal-scroll");

    let scrollTween = gsap.to(sections, {
        xPercent: -73 * (sections.length - 1),
        ease: "none", // <-- IMPORTANT!
        scrollTrigger: {
          trigger: ".scroll-container",
          pin: true,
          scrub: true,
          //snap: directionalSnap(1 / (sections.length - 1)),
          end: "+=3000"
        }
      });

    // green section
    ScrollTrigger.create({
      trigger: ".last",
      containerAnimation: scrollTween,

      onEnter: () => console.log("enter"),
      onLeave: () => console.log("leave"),
      onEnterBack: () => console.log("enterBack"),
      onLeaveBack: () => console.log("leaveBack"),
      onToggle: self => console.log("active", self.isActive),
      id: "4"
    });

    // only show the relevant section's markers at any given time
    gsap.set(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end", {autoAlpha: 0});
    ["first","second","third","last"].forEach((triggerClass, i) => {
      ScrollTrigger.create({
        trigger: "." + triggerClass,
        containerAnimation: scrollTween,
        start: "left 30%",
        end: i === 3 ? "right right" : "right 30%",
        markers: false,
        onToggle: self => gsap.to(".marker-" + (i+1), {duration: 0.25, autoAlpha: self.isActive ? 1 : 0})
      });
    });
  }
});

app.mount('#app');
