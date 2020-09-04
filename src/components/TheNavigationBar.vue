<template>
  <v-app-bar
    :color="backgroundColor"
    app
    clipped-left
    flat
  >
    <v-btn
      id="navbar-logo-btn"
      to="/"
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

    <transition name="slide">
      <v-tabs
        v-show="showMenu"
        :value="selectedTab"
        class="hidden-sm-and-down"
        right
        optional
      >
        <v-tab
          key="about"
          to="/about"
        >
          {{ $t('aboutUs') }}
        </v-tab>
        <v-tab
          key="projects"
          to="/projects"
        >
          {{ $t('projects') }}
        </v-tab>
        <v-tab
          key="contact"
          to="/contact"
        >
          {{ $t('contact') }}
        </v-tab>
        <v-tab
          key="blog"
          to="/blog"
        >
          {{ $t('blog') }}
        </v-tab>
        <v-menu
          transition="scale-transition"
        >
          <template v-slot:activator="{ on }">
            <v-tab
              v-on="on"
            >
              <v-icon small>
                {{ icons.mdiCogOutline }}
              </v-icon>
              {{ $t('settings') }}
            </v-tab>
          </template>
    
          <v-list>
            <v-list-item @click.stop="toggleDarkMode">
              <v-list-item-action>
                <v-switch v-model="darkModeEnabled" />
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  <v-icon small>
                    {{ icons.mdiMoonWaningCrescent }}
                  </v-icon>
                  {{ $t('darkMode') }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item @click.stop>
              <v-list-item-action>
                <v-icon> {{ icons.mdiEarth }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-select
                  :items="locales"
                  :value="locale"
                  :label="$t('language')"
                  @change="setLocale"
                />
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-tabs>
    </transition>

    <v-app-bar-nav-icon
      id="hamburger-icon"
      @click.stop="toggleMenu"
    />
  </v-app-bar>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import {
  mdiCogOutline,
  mdiEarth,
  mdiMoonWaningCrescent
} from '@mdi/js';
export default {
  name: 'TheNavigationBar',
  props: {
    toggleMenu: {
      type: Function,
      required: true
    },
    showMenu: Boolean
  },
  data() {
    return {
      icons: {
        mdiCogOutline,
        mdiEarth,
        mdiMoonWaningCrescent
      }
    }
  },
  computed: {
    ...mapGetters([
      'backgroundColor'
    ]),
    ...mapState([
      'darkModeEnabled',
      'locale',
      'locales'
    ]),
    logoSource() {
      return this.darkModeEnabled ? require('../assets/images/taller-db-logo-inverted.svg') : require('../assets/images/taller-db-logo.svg');
    },
    selectedTab() {
      return this.$route.path.split('/')[1]
    }
  },
  methods: {
    ...mapActions([
      'toggleDarkMode',
      'setLocale'
    ])
  }
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
.slide-enter-active, .slide-leave-active {
  transition: all 0.5s;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(100px);
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