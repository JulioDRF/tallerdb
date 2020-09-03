<template>
  <div class="the-home-slideshow">
    <v-img
      v-for="(p, i) in projects"
      :key="p.projectId"
      :class="computeClass(i)"
      :src="p.imgSrc"
      min-height="90vh"
      max-height="100%"
      min-width="75%"
      max-width="90%"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'TheHomeSlideshow',
  data() {
    return {
      currentProjectIndex: 0,
      intervalId: null
    }
  },
  computed: {
    ...mapState([
      'projects'
    ])
  },
  mounted() {
    this.intervalId = window.setInterval(() => {
      this.currentProjectIndex++;
      if (this.currentProjectIndex >= this.projects.length) {
        this.currentProjectIndex = 0;
      }
    }, 5000);
  },
  destroyed() {
    window.clearInterval(this.intervalId);
  },
  methods: {
    computeClass(index) {
      if (index === this.currentProjectIndex) {
        return 'home-img';
      } else {
        return 'home-img hidden';
      }
    }
  }
}
</script>

<style>
.home-img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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