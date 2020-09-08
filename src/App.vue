<template>
  <div id="app">
    <v-app
      id="vuetify-app"
      :style="stylesOverride"
    >
      <TheNavigationWrapper />
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
              <router-view />
            </v-col>
          </v-row>
        </v-container>
      </v-main>
      <TheFooter />
    </v-app>
  </div>
</template>

<script>
import TheFooter from '@/components/TheFooter';
import TheNavigationWrapper from '@/components/TheNavigationWrapper';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    TheNavigationWrapper,
    TheFooter
  },
  computed: {
    ...mapGetters([
      'backgroundColor'
    ]),
    stylesOverride() {
      return { 
        background: this.backgroundColor
      }
    }
  },
  created() {
    this.restoreSavedState({
      locale: navigator && navigator.language && navigator.language.split('-')[0],
      darkModeEnabled: window && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    });
  },
  methods: {
    ...mapActions([
      'restoreSavedState'
    ])
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500;600;700&display=swap');
#vuetify-app {
  font-family: Mulish, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
