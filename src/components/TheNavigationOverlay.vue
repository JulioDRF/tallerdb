<template>
  <div class="the-navigation-overlay hidden-md-and-up">
    <v-expand-transition>
      <div
        v-if="showMenu"
        id="the-overlay"
        :style="{backgroundColor}"
      >
        <v-container
          fluid
          class="fill-height"
        >
          <v-btn
            id="close-button"
            :light="!darkModeEnabled"
            text
            large
            @click="toggleMenu"
          >
            <v-icon>{{ mdiClose }}</v-icon>
          </v-btn>
          <v-row
            justify="center"
            align="center"
          >
            <v-col>
              <v-list
                :light="!darkModeEnabled"
                :color="backgroundColor"
                width="100%"
                max-width="100%"
                rounded
              >
                <v-list-item
                  to="/"
                  @click.capture="toggleMenu"
                >
                  <v-list-item-content>
                    <v-list-item-title>{{ $t('home') }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item
                  to="/about"
                  @click.capture="toggleMenu"
                >
                  <v-list-item-content>
                    <v-list-item-title>{{ $t('aboutUs') }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item
                  to="/projects"
                  @click.capture="toggleMenu"
                >
                  <v-list-item-content>
                    <v-list-item-title>{{ $t('projects') }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item
                  to="/contact"
                  @click.capture="toggleMenu"
                >
                  <v-list-item-content>
                    <v-list-item-title>{{ $t('contact') }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item
                  to="/blog"
                  @click.capture="toggleMenu"
                >
                  <v-list-item-content>
                    <v-list-item-title>{{ $t('blog') }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item @click="toggleDarkMode">
                  <v-list-item-content>
                    <v-list-item-title>
                      <v-row
                        justify="center"
                        align="center"
                      >
                        <v-switch
                          :input-value="darkModeEnabled"
                          :value="darkModeEnabled"
                        />
                        {{ $t('darkMode') }}
                      </v-row>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <LanguageSelector />
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-expand-transition>
  </div>
</template>

<script>
import LanguageSelector from '@/components/LanguageSelector'
import { mdiClose } from '@mdi/js';
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  name: 'TheNavigationOverlay',
  components: {
    LanguageSelector
  },
  props: {
    toggleMenu: {
      type: Function,
      required: true
    },
    showMenu: Boolean,
  },
  data() {
    return {
      mdiClose
    }
  },
  computed: {
    ...mapState([
      'darkModeEnabled'
    ]),
    ...mapGetters([
      'backgroundColor'
    ])
  },
  methods: {
    ...mapActions([
      'toggleDarkMode'
    ])
  }
}
</script>
<style scoped>
#close-button {
  position: fixed;
  top: 0;
  right: 0;
}
#the-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  overflow: hidden;
  max-height: 100vh;
}
</style>