<template>
  <div id="the-navigation-wrapper">
    <TheNavigationBar
      :toggle-drawer="toggleDrawer"
    />
    <TheNavigationDrawer
      :drawer-is-visible="drawerIsVisible"
    />
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
