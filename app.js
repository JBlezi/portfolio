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
});

app.mount('#app');
