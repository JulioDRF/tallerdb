<template>
  <v-app-bar
    app
    clipped-left
    flat
    :color="color"
  >
  <v-app-bar-nav-icon @click.stop="toggleDrawer"></v-app-bar-nav-icon>
    <v-img :src="logoSource" max-width="150px" class="ml-5"></v-img>
  </v-app-bar>
</template>

<script>
export default {
  name: 'TheNavigationBar',
  props: {
    toggleDrawer: Function
  },
  computed: {
    color() {
      const theme = this.$vuetify.theme.dark ? 'dark' : 'light';
      return this.$vuetify.theme.themes[theme].background
    },
    logoSource() {
      return this.$vuetify.theme.dark ? require('../assets/images/taller-db-logo-inverted.svg') : require('../assets/images/taller-db-logo.svg');
    }
  },
}
</script>
