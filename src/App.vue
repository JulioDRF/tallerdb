<template>
  <div id="app">
    <v-app id="vuetify-app"
      :style="stylesOverride"
    >
      <v-navigation-drawer
        v-model="drawerIsVisible"
        app
        clipped
      >
        <v-list dense>
          <v-list-item to="/">
            <v-list-item-action>
              <v-icon>{{ icons.mdiHome }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ $t('home') }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/about">
            <v-list-item-action>
              <v-icon> {{icons.mdiInformation }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ $t('aboutUs') }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="toggleDarkMode">
            <v-list-item-action>
              <v-switch :value="darkModeEnabled"></v-switch>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                <v-icon small>{{ icons.mdiMoonWaningCrescent }}</v-icon>
                {{ $t('darkMode') }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-icon> {{icons.mdiEarth }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-select
                :items="locales"
                v-model="$i18n.locale"
                :label="$t('language')"
              ></v-select>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  
      <v-app-bar
        app
        clipped-left
      >
        <v-app-bar-nav-icon @click.stop="toggleDrawer"></v-app-bar-nav-icon>
        <v-toolbar-title>TallerDB</v-toolbar-title>
      </v-app-bar>
  
      <v-main>
        <v-container
          class="fill-height"
          fluid
        >
          <v-row
            align="center"
            justify="center"
          >
            <v-col>
              <router-view/>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
  
      <v-footer app>
        <span>&copy; {{ new Date().getFullYear() }}</span>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import { mdiMoonWaningCrescent, mdiInformation, mdiHome, mdiEarth } from '@mdi/js'
export default {
  name: 'App',
  data () {
    return {
      drawerIsVisible: false,
      icons: {
        mdiMoonWaningCrescent,
        mdiInformation,
        mdiHome,
        mdiEarth
      },
      locales: [
        {
          text: 'English',
          value: 'en'
        },
        {
          text: 'Español',
          value: 'es'
        }
      ]
    }
  },
  computed: {
    darkModeEnabled() {
      return this.$vuetify.theme.dark;
    },
    theme() {
      return this.darkModeEnabled ? 'dark' : 'light';
    },
    stylesOverride() {
      return { 
        background: this.$vuetify.theme.themes[this.theme].background
      };
    }
  },
  methods: {
    toggleDarkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    toggleDrawer() {
      this.drawerIsVisible = !this.drawerIsVisible;
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
