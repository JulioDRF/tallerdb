<template>
  <v-app-bar
    app
    clipped-left
    flat
    :color="color"
  >
  <v-btn to="/" :link="false" text active-class="logo">
    <v-img id="navbar-logo" :src="logoSource"></v-img>
  </v-btn>
  <v-spacer></v-spacer>
  <v-tabs right class="hidden-sm-and-down">
    <v-tab to="/about">{{ $t('aboutUs') }}</v-tab>
    <v-tab to="/projects">{{ $t('projects') }}</v-tab>
    <v-tab to="/contact">{{ $t('contact') }}</v-tab>
    <v-tab to="/blog">{{ $t('blog') }}</v-tab>
  </v-tabs>
  <v-app-bar-nav-icon @click.stop="toggleDrawer"></v-app-bar-nav-icon>
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
<style>
#navbar-logo {
  max-width: 10rem;
}
.logo, .logo::before {
  background-color: transparent !important;
}
</style>