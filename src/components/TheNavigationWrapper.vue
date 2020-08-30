<template>
  <div id="the-navigation-wrapper">
    <TheNavigationBar
      :toggleDrawer="toggleDrawer"
    >
    </TheNavigationBar>
    <TheNavigationDrawer
      :drawerIsVisible="drawerIsVisible"
    >
    </TheNavigationDrawer>
  </div>
</template>

<script>
import TheNavigationBar from '@/components/TheNavigationBar';
import TheNavigationDrawer from '@/components/TheNavigationDrawer';
export default {
  name: 'TheNavigationWrapper',
  components: {
    TheNavigationBar,
    TheNavigationDrawer
  },
  data() {
    return {
      drawerIsVisible: false
    }
  },
  methods: {
    toggleDrawer() {
      this.drawerIsVisible = !this.drawerIsVisible;
    }
  }
}
</script>
