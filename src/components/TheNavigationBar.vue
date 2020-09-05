<template>
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
                      <v-tabs :value="localeIndex">
                        <v-tab
                          v-for="lang in locales"
                          :key="lang.value"
                          @click="setLocale(lang.value)"
                        >
                          {{ lang.text }}
                        </v-tab>
                      </v-tabs>
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
      'backgroundColor',
      'localeIndex'
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
    ]),
    handleClick() {
      if (this.$route.path !== '/') {
        this.$router.push('/');
      }
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