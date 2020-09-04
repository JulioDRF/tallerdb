<template>
  <div id="the-navigation-wrapper">
    <TheNavigationBar
      :toggle-menu="toggleMenu"
      :show-menu="menuIsVisible"
    />
    <TheNavigationOverlay
      :toggle-menu="toggleMenu"
      :show-menu="menuIsVisible"
    />
  </div>
</template>

<script>
import TheNavigationBar from '@/components/TheNavigationBar';
import TheNavigationOverlay from '@/components/TheNavigationOverlay';
export default {
  name: 'TheNavigationWrapper',
  components: {
    TheNavigationBar,
    TheNavigationOverlay
  },
  data() {
    return {
      menuIsVisible: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuIsVisible = !this.menuIsVisible;
    }
  }
}
</script>
