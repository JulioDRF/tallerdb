import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg',
  },
  theme: {
    themes: {
      light: {
        primary: colors.blueGrey.darken1,
        secondary: colors.blueGrey.lighten3,
        accent: colors.orange.base,
        background: colors.shades.white,
        activeTabs: colors.grey.base,
        spinner: colors.grey.base
      },
      dark: {
        background: colors.shades.black,
        activeTabs: colors.shades.white,
        spinner: colors.shades.white
      }
    },
  },
});
