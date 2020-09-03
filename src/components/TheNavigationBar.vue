<template>
  <v-app-bar
    :color="backgroundColor"
    app
    clipped-left
    flat
  >
    <v-btn
      to="/"
      class="navbar-logo-btn pa-0"
      active-class="navbar-logo-btn-active"
      text
    >
      <v-img
        id="navbar-logo"
        :src="logoSource"
        height="2rem"
        contain
      />
    </v-btn>

    <v-spacer />

    <v-tabs
      class="hidden-sm-and-down"
      right
      optional
    >
      <v-tab to="/about">
        {{ $t('aboutUs') }}
      </v-tab>
      <v-tab to="/projects">
        {{ $t('projects') }}
      </v-tab>
      <v-tab to="/contact">
        {{ $t('contact') }}
      </v-tab>
      <v-tab to="/blog">
        {{ $t('blog') }}
      </v-tab>
    </v-tabs>

    <v-app-bar-nav-icon
      id="hamburger-icon"
      @click.stop="toggleDrawer"
    />
  </v-app-bar>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
export default {
  name: 'TheNavigationBar',
  props: {
    toggleDrawer: {
      type: Function,
      required: true
    }
  },
  computed: {
    ...mapGetters([
      'backgroundColor'
    ]),
    ...mapState([
      'darkModeEnabled'
    ]),
    logoSource() {
      return this.darkModeEnabled ? require('../assets/images/taller-db-logo-inverted.svg') : require('../assets/images/taller-db-logo.svg');
    }
  },
}
</script>
<style>
#navbar-logo {
  max-width: 10rem;
  margin-top: -1rem;
}

@media only screen and (min-width: 1264px) {
  .navbar-logo-btn {
    margin-left: 12%;
  }
  #hamburger-icon {
    margin-right: 12%;
  }
}
.navbar-logo-btn-active, .navbar-logo-btn-active::before {
  background-color: transparent !important;
}
</style>