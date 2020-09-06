<template>
  <div id="the-navigation-bar">
    <v-container
      fluid
      fill-height
    >
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
            <v-img
              id="navbar-logo"
              :src="logoSource"
              contain
              min-height="3rem"
              @click="handleClick"
            />

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
                <v-menu
                  transition="scale-transition"
                >
                  <template v-slot:activator="{ on }">
                    <v-tab
                      v-on="on"
                      @mouseover="setSelectedTab(4)"
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
                        <v-switch
                          :input-value="darkModeEnabled"
                          :value="darkModeEnabled"
                        />
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
                        <LanguageSelector />
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
.relative {
  position: relative;
}
#navbar-logo {
  max-width: 10rem;
  margin-top: -1rem;
  padding: 0;
  cursor: pointer;
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