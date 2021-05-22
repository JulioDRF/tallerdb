<template>
  <div class="the-home-slideshow">
    <v-container
      class="fill-height"
      fluid
    >
      <v-row
        justify="center"
        align="start"
        no-gutters
      >
        <v-col
          md="8"
          class="relative"
        >
          <v-hover v-slot:default="{ hover }">
            <transition
              name="fade"
            >
              <v-img
                :key="currentProject.projectId"
                min-height="1vh"
                height="80vh"
                min-width="1vw"
                width="100%"
                class="home-img"
                :src="currentProject.mainImage.src"
                @click="handleClick"
              >
                <v-fade-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out info-overlay white--text"
                  >
                    <span>{{ $t('project.' + currentProject.projectId + '.name') }}</span>
                  </div>
                </v-fade-transition>
              </v-img>
            </transition>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'TheHomeSlideshow',
  data() {
    return {
      currentProjectIndex: 0,
      intervalId: null
    }
  },
  computed: {
    ...mapGetters({
      projects: "sortedProjects",
    }),
    currentProject() {
      return this.projects[this.currentProjectIndex];
    }
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
  methods:{
    handleClick() {
      this.$router.push(`/project/${this.currentProject.slug}`)
    }
  }
}
</script>

<style scoped>
.relative {
  position: relative;
}
.home-img {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  mask-image: url('../assets/images/taller-db-mask.svg');
  mask-size: 100%;
  mask-repeat: no-repeat;
  mask-position: center;
}
.fade-leave-active, .fade-enter-active {
  transition: opacity 1s ease-in;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.info-overlay {
  position: absolute;
  align-items: center;
  justify-content: start;
  bottom: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.5);
}
.info-overlay > span {
  padding-left: 1rem;
  font-size: 1.5rem;
  font-weight: 300;
}
@media only screen and (min-width: 1264px) {
  .info-overlay > span {
    padding-left: 2rem;
    font-size: 3rem;
  }
}
</style>