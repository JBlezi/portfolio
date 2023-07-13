const app = Vue.createApp({
  data() {
    return {
      title: "Digital Designer & Web Developer",
      description: "My goal is to make your business shine and bring out its true potential, by giving you a website that is as great as your business.",
      words: [],
      isLoaded: false,
    };
  },
  mounted() {
    const words = this.title.split(" ");
    let delay = 0;
    for (const [index, word] of words.entries()) {
      setTimeout(() => {
        this.words.push(word + " ");
        if (index === words.length - 1) {
          this.$nextTick(() => {
            this.isLoaded = true; // Set the flag to indicate the paragraph can be loaded
          });
        }
      }, delay);
      delay += 300; // Adjust the delay between each word (in milliseconds)
    }
  },
});
app.mount("#app");
