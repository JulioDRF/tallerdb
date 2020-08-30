<template>
  <v-navigation-drawer
    v-model="drawerIsVisible"
    app
    clipped-right
    right
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
      <v-list-item to="/projects">
        <v-list-item-action>
          <v-icon> {{icons.mdiPencilRuler }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ $t('projects') }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item to="/contact">
        <v-list-item-action>
          <v-icon> {{icons.mdiMessageOutline }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ $t('contact') }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item to="/blog">
        <v-list-item-action>
          <v-icon> {{icons.mdiBookOpenVariant }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ $t('blog') }}</v-list-item-title>
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
import {
  mdiBookOpenVariant,
  mdiEarth,
  mdiInformation,
  mdiHome,
  mdiMessageOutline,
  mdiMoonWaningCrescent,
  mdiPencilRuler,
} from '@mdi/js';

export default {
  name: 'TheNavigationDrawer',
  props: {
    drawerIsVisible: Boolean,
  },
  data() {
    return {
      icons: {
        mdiBookOpenVariant,
        mdiEarth,
        mdiInformation,
        mdiHome,
        mdiMessageOutline,
        mdiMoonWaningCrescent,
        mdiPencilRuler,
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