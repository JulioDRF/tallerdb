<template>
  <div id="the-navigation-bar">
    <v-container fluid>
      <v-row
        justify="center"
        align="center"
        no-gutters
      >
        <v-col
          md="9"
          class="relative"
        >
          <v-app-bar
            :color="backgroundColor"
            app
            flat
            absolute
            @mouseleave="resetSelectedTab"
          >
            <v-col
              cols="5"
              sm="3"
              lg="2"
              class="pa-0 fill-height"
            >
              <v-img
                id="navbar-logo"
                :src="logoSource"
                contain
                width="100%"
                max-width="10em"
                @click="handleClick"
              />
            </v-col>

            <v-spacer />

            <transition name="slide">
              <v-tabs
                v-show="showMenu"
                id="navbar-tabs"
                :value="selectedTab"
                :slider-color="activeTabsColor"
                :color="activeTabsColor"
                class="hidden-sm-and-down"
                right
                optional
              >
                <v-tab
                  to="/about"
                  @mouseover="setSelectedTab('/about')"
                >
                  {{ $t('aboutUs') }}
                </v-tab>
                <v-tab
                  to="/projects"
                  @mouseover="setSelectedTab('/projects')"
                >
                  {{ $t('projects') }}
                </v-tab>
                <v-tab
                  to="/contact"
                  @mouseover="setSelectedTab('/contact')"
                >
                  {{ $t('contact') }}
                </v-tab>
                <v-tab
                  to="/blog"
                  @mouseover="setSelectedTab('/blog')"
                >
                  {{ $t('blog') }}
                </v-tab>
                <v-tab
                  @mouseover="setSelectedTab(4)"
                >
                  <LanguageSelector />
                </v-tab>
              </v-tabs>
            </transition>

            <v-app-bar-nav-icon
              id="hamburger-icon"
              @click.stop="toggleMenu"
            />
          </v-app-bar>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import {
  mdiCogOutline,
  mdiEarth,
  mdiMoonWaningCrescent
} from '@mdi/js';
import LanguageSelector from '@/components/LanguageSelector'
import { mapActions, mapGetters, mapState } from 'vuex';
export default {
  name: 'TheNavigationBar',
  components: {
    LanguageSelector
  },
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
      },
      selectedTab: 0
    }
  },
  computed: {
    ...mapGetters([
      'activeTabsColor',
      'backgroundColor'
    ]),
    ...mapState([
      'darkModeEnabled'
    ]),
    logoSource() {
      return this.darkModeEnabled ? require('../assets/images/taller-db-logo-inverted.svg') : require('../assets/images/taller-db-logo.svg');
    }
  },
  watch: {
    $route() {
      /* The v-tabs-slider fails to render when the route changes. Setting it to an invalid value forces an update of the internal component of v-tabs */
      this.setSelectedTab(null)
    }
  },
  methods: {
    ...mapActions([
      'toggleDarkMode'
    ]),
    handleClick() {
      if (this.$route.path !== '/') {
        this.$router.push('/');
      }
    },
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    resetSelectedTab() {
      this.selectedTab = this.$route.path
    }
  }
}
</script>
<style>
#navbar-tabs.v-tabs .v-tab:hover::before,
#navbar-tabs.v-tabs .v-tab--active::before {
  opacity: 0;
}
.relative {
  position: relative;
}
#navbar-logo {
  padding: 0;
  cursor: pointer;
}
@media screen and (max-width: 600px) {
  #navbar-logo {
    margin-top: 0rem;
  }
}
.slide-enter-active, .slide-leave-active {
  transition: all 0.5s;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(100px);
  opacity: 0;
}
</style>