import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
import api from '@/api'
import Vuetify from '@/plugins/vuetify'
import constants from './constants.js'
import i18n from '@/i18n.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: api.getProjects(),
    misc: api.getMisc(),
    darkModeEnabled: null,
    locale: null,
    locales: [
      {
        text: 'EN',
        value: 'en'
      },
      {
        text: 'ES',
        value: 'es'
      }
    ]
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => Cookies.get(key),
        setItem: (key, value) => Cookies.set(key, value, { expires: 1, secure: true, sameSite: 'strict' }),
        removeItem: (key) => Cookies.remove(key, { secure: true, sameSite: 'strict' })
      },
      paths: ['darkModeEnabled', 'locale']
    })
  ],
  mutations: {
    RESTORE_SAVED_STATE (state, browserSettings) {
      if (state.darkModeEnabled === null) {
        state.darkModeEnabled = browserSettings.darkModeEnabled === true
      }
      Vuetify.framework.theme.dark = state.darkModeEnabled
      if (state.locale === null) {
        state.locale = state.locales.find(l => l.value === browserSettings.locale) || 'en'
      }
      i18n.locale = state.locale
    },
    SET_LOCALE (state, newLocale) {
      i18n.locale = newLocale
      state.locale = i18n.locale
    },
    TOGGLE_DARK_MODE (state) {
      Vuetify.framework.theme.dark = !Vuetify.framework.theme.dark
      state.darkModeEnabled = Vuetify.framework.theme.dark
    },
  },
  actions: {
    restoreSavedState ({ commit }, browserSettings) {
      commit(constants.RESTORE_SAVED_STATE, browserSettings)
    },
    setLocale ({ commit }, newLocale) {
      commit(constants.SET_LOCALE, newLocale)
    },
    toggleDarkMode ({ commit }) {
      commit(constants.TOGGLE_DARK_MODE)
    }
  },
  getters: {
    aboutUsImage: state => state.misc.aboutUsImage,
    project: state => slug => {
      return state.projects.find(p => p.slug.toLowerCase() === slug.toLowerCase())
    },
    sortedProjects: state => {
      return state.projects.slice().sort((a, b) => a.order - b.order);
    },
    backgroundColor: state => {
      const theme = state.darkModeEnabled ? 'dark' : 'light';
      return Vuetify.framework.theme.themes[theme].background;
    },
    activeTabsColor: state => {
      const theme = state.darkModeEnabled ? 'dark' : 'light';
      return Vuetify.framework.theme.themes[theme].activeTabs;
    },
    linkColor: state => {
      const theme = state.darkModeEnabled ? 'dark' : 'light';
      return Vuetify.framework.theme.themes[theme].link;
    },
    spinnerColor: state => {
      const theme = state.darkModeEnabled ? 'dark' : 'light';
      return Vuetify.framework.theme.themes[theme].spinner;
    }
  }
})