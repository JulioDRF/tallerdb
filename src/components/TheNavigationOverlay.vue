<template>
  <div class="the-navigation-overlay hidden-md-and-up">
    <v-fade-transition>
      <v-overlay
        :value="showMenu"
        opacity="1"
        :color="backgroundColor"
        height="100%"
      >
        <v-btn
          id="close-button"
          :light="!darkModeEnabled"
          text
          large
          @click="toggleMenu"
        >
          <v-icon>{{ icons.mdiClose }}</v-icon>
        </v-btn>
        <v-list
          :light="!darkModeEnabled"
          :color="backgroundColor"
          width="100%"
          rounded
        >
          <v-list-item
            to="/"
            @click.capture="toggleMenu"
          >
            <v-list-item-action>
              <v-icon>{{ icons.mdiHome }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ $t('home') }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
            to="/about"
            @click.capture="toggleMenu"
          >
            <v-list-item-action>
              <v-icon>{{ icons.mdiInformation }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ $t('aboutUs') }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
            to="/projects"
            @click.capture="toggleMenu"
          >
            <v-list-item-action>
              <v-icon>{{ icons.mdiPencilRuler }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ $t('projects') }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
            to="/contact"
            @click.capture="toggleMenu"
          >
            <v-list-item-action>
              <v-icon>{{ icons.mdiMessageOutline }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ $t('contact') }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
            to="/blog"
            @click.capture="toggleMenu"
          >
            <v-list-item-action>
              <v-icon>{{ icons.mdiBookOpenVariant }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ $t('blog') }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="toggleDarkMode">
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
          <v-list-item>
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
      </v-overlay>
    </v-fade-transition>
  </div>
</template>

<script>
import {
  mdiBookOpenVariant,
  mdiClose,
  mdiEarth,
  mdiInformation,
  mdiHome,
  mdiMessageOutline,
  mdiMoonWaningCrescent,
  mdiPencilRuler,
} from '@mdi/js';
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  name: 'TheNavigationOverlay',
  props: {
    toggleMenu: {
      type: Function,
      required: true
    },
    showMenu: Boolean,
  },
  data() {
    return {
      icons: {
        mdiBookOpenVariant,
        mdiClose,
        mdiEarth,
        mdiInformation,
        mdiHome,
        mdiMessageOutline,
        mdiMoonWaningCrescent,
        mdiPencilRuler,
      }
    }
  },
  computed: {
    ...mapState([
      'darkModeEnabled',
      'locale',
      'locales'
    ]),
    ...mapGetters([
      'backgroundColor',
      'localeIndex'
    ])
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
#close-button {
  position: fixed;
  top: 0;
  right: 0;
}
</style>