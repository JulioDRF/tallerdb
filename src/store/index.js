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
    darkModeEnabled: false,
    locale: 'en',
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
        setItem: (key, value) => Cookies.set(key, value, { expires: 1 }),
        removeItem: (key) => Cookies.remove(key)
      },
      paths: ['darkModeEnabled', 'locale']
    })
  ],
  mutations: {
    RESTORE_SAVED_STATE (state) {
      Vuetify.framework.theme.dark = state.darkModeEnabled
      i18n.locale = state.locale;
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
    restoreSavedState ({ commit }) {
      commit(constants.RESTORE_SAVED_STATE)
    },
    setLocale ({ commit }, newLocale) {
      commit(constants.SET_LOCALE, newLocale)
    },
    toggleDarkMode ({ commit }) {
      commit(constants.TOGGLE_DARK_MODE)
    }
  },
  getters: {
    project: state => slug => {
      return state.projects.find(p => p.slug.toLowerCase() === slug.toLowerCase())
    },
    backgroundColor: state => {
      const theme = state.darkModeEnabled ? 'dark' : 'light';
      return Vuetify.framework.theme.themes[theme].background;
    }
  }
})