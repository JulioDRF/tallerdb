<template>
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
          <v-switch :value="$vuetify.theme.dark"></v-switch>
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
          <v-icon> {{ icons.mdiEarth }}</v-icon>
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
</template>

<script>
import { mdiMoonWaningCrescent, mdiInformation, mdiHome, mdiEarth } from '@mdi/js'

export default {
  name: 'TheNavigationDrawer',
  props: {
    drawerIsVisible: Boolean,
  },
  data() {
    return {
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
  methods: {
    toggleDarkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
}
</script>