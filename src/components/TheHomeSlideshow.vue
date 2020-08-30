<template>
  <div class="the-home-slideshow">
    <v-img
      v-for="(src, i) in images"
      :key="src"
      :class="computeClass(i)"
      :src="src"
      min-height="80vh"
      min-width="80vmin"
    />
  </div>
</template>

<script>
const images = require('@/assets/images/sources.json').images;

export default {
  name: 'TheHomeSlideshow',
  data() {
    return {
      images,
      currentImageIndex: 0,
      intervalId: null
    }
  },
  methods: {
    computeClass(index) {
      if (index === this.currentImageIndex) {
        return 'home-img';
      } else {
        return 'home-img hidden';
      }
    }
  },
  mounted() {
    this.intervalId = window.setInterval(() => {
      this.currentImageIndex++;
      if (this.currentImageIndex >= this.images.length) {
        this.currentImageIndex = 0;
      }
    }, 5000);
  },
  destroyed() {
    window.clearInterval(this.intervalId);
  }
}
</script>

<style>
.home-img {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  mask-image: url('../assets/images/taller-db-mask.svg');
  mask-size: 100%;
  mask-repeat: no-repeat;
  mask-position: center;
  transition: opacity 2s ease-in-out;
}

.hidden {
  opacity: 0;
}
</style>