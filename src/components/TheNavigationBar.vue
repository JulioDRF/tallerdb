<template>
  <v-app-bar
    :color="backgroundColor"
    app
    clipped-left
    flat
  >
    <v-btn
      to="/"
      id="navbar-logo-btn"
      active-class="navbar-logo-btn-active"
      text
    >
      <v-img
        id="navbar-logo"
        :src="logoSource"
        contain
        min-height="3rem"
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
  margin-bottom: 1rem;
}
#navbar-logo-btn {
  padding: 0;
}
.navbar-logo-btn-active::before {
  background-color: transparent !important;
}
#navbar-logo-btn:hover::before {
  opacity: 0;
}

@media only screen and (min-width: 1264px) {
  #navbar-logo-btn {
    margin-left: 13%;
  }
  #hamburger-icon {
    margin-right: 13%;
  }
}
</style>