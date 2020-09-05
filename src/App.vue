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
            no-gutters
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
    this.restoreSavedState();
  },
  methods: {
    ...mapActions([
      'restoreSavedState'
    ])
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400;500;600;700&display=swap');
#vuetify-app {
  font-family: Raleway, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
