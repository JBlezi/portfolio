
// Create the I18n instance
const i18n = VueI18n.createI18n({
  locale: 'en', // Set the default locale (you can change this based on user preferences)
  messages: {
    en: enMessages,
    de: deMessages,
    // Add more locales here if needed
  },
});

const app = Vue.createApp({
  data() {
    return {
      currentLanguage: 'en', // Set the default language here
      showVideo: false,
      videoUrl: 'https://www.youtube.com/embed/NYzqGc2xBaw?autoplay=1&start=3921',
      currentSection: '',
    };
  },
  methods: {
    playVideo() {
      this.showVideo = true;
    },
    toggleLanguage(language) {
      this.currentLanguage = language;
      this.$i18n.locale = language; // Update the i18n locale when language is toggled
    }
  },
  mounted() {
      // Hide the floating button in the hero section initially

    gsap.set("#floating-button", { autoAlpha: 0 });


    // GSAP ScrollTrigger to show/hide the floating button
    ScrollTrigger.create({
      trigger: "#project-showcase-section", // Set the trigger to the section where you want to show the button
      start: "top 50%", // Adjust this value to control when the button should start showing
      onEnter: () => gsap.to("#floating-button", { autoAlpha: 1 }), // Show the button when the trigger enters the viewport
      onLeaveBack: () => gsap.to("#floating-button", { autoAlpha: 0 }), // Hide the button when the trigger leaves the viewport
      onUpdate: self => {
        // Add this onUpdate callback to update the currentSection property for your other logic if needed
        if (self.isActive && self.direction === -1) {
          this.currentSection = "project-showcase";
        } else {
          // Update the currentSection property based on other sections if needed
          // For example:
          // this.currentSection = "hero";
        }
      },
    });

/*     if (window.matchMedia("(min-width: 900px)").matches){
      gsap.registerPlugin(ScrollTrigger);

      let sections = gsap.utils.toArray(".horizontal-scroll");

      const updateXPercent = () => {
        let xPercent;
        if (window.matchMedia("(max-width: 1000px)").matches) {
          // For small screens (max-width: 767px)
          xPercent = -78 * (sections.length - 1);
        } else if (window.matchMedia("(max-width: 1100px)").matches){
          xPercent = -78 * (sections.length - 1);
        } else if (window.matchMedia("(max-width: 1200px)").matches){
          xPercent = -78 * (sections.length - 1);
        } else if (window.matchMedia("(max-width: 1300px)").matches){
          xPercent = -77 * (sections.length - 1);
        } else if (window.matchMedia("(max-width: 1400px)").matches){
          xPercent = -76 * (sections.length - 1);
        } else if (window.matchMedia("(max-width: 1500px)").matches){
          xPercent = -75.5 * (sections.length - 1);
        } else {
          // For larger screens
          xPercent = -75 * (sections.length - 1);
        }
        return xPercent;
      };

      // Update the xPercent value whenever the window is resized
      window.addEventListener("resize", () => {
        scrollTween.vars.xPercent = updateXPercent();
        scrollTween.invalidate(); // Invalidate the animation for smooth updates
      });

      let scrollTween = gsap.to(sections, {
        xPercent: updateXPercent(),
        ease: "none", // <-- IMPORTANT!
        scrollTrigger: {
          trigger: ".scroll-container",
          start: "top top",
          pin: true,
          scrub: true,
          //snap: directionalSnap(1 / (sections.length - 1)),
          end: "+=3000"
        }
      });


      // green section
      ScrollTrigger.create({

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
    } */
  }
});

app.use(i18n);
app.mount('#app');
