<template>
  <div id="app">
    <v-app id="vuetify-app"
      :style="stylesOverride"
    >
      <TheNavigationWrapper></TheNavigationWrapper>
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
      <TheFooter></TheFooter>
    </v-app>
  </div>
</template>

<script>
import TheFooter from '@/components/TheFooter';
import TheNavigationWrapper from '@/components/TheNavigationWrapper';

export default {
  name: 'App',
  components: {
    TheNavigationWrapper,
    TheFooter
  },
  computed: {
    stylesOverride() {
      const theme = this.$vuetify.theme.dark ? 'dark' : 'light';
      return { 
        background: this.$vuetify.theme.themes[theme].background
      };
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
