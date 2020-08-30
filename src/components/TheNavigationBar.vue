<template>
  <v-app-bar
    :color="color"
    app
    clipped-left
    flat
  >
    <v-btn
      to="/"
      class="navbar-logo-btn"
      active-class="navbar-logo-btn-active"
      text
    >
      <v-img id="navbar-logo" :src="logoSource"></v-img>
    </v-btn>

    <v-spacer></v-spacer>

    <v-tabs
      class="hidden-sm-and-down"
      right
      optional
    >
      <v-tab to="/about">{{ $t('aboutUs') }}</v-tab>
      <v-tab to="/projects">{{ $t('projects') }}</v-tab>
      <v-tab to="/contact">{{ $t('contact') }}</v-tab>
      <v-tab to="/blog">{{ $t('blog') }}</v-tab>
    </v-tabs>

    <v-app-bar-nav-icon id="hamburger-icon" @click.stop="toggleDrawer"></v-app-bar-nav-icon>
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
.navbar-logo-btn {
  margin-left: 3.5%;
}
#hamburger-icon {
  margin-right: 3.5%;
}
.navbar-logo-btn-active, .navbar-logo-btn-active::before {
  background-color: transparent !important;
}
</style>