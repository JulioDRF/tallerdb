<template>
  <div class="language-selector">
    <v-btn-toggle
      :value="locale"
      group
      active-class="lang-button-active"
    >
      <div
        v-for="lang in locales"
        :key="lang.value"
      >
        <v-btn
          :value="lang.value"
          class="pa-0"
          text
          @click="setLocale(lang.value)"
        >
          {{ lang.text }}
        </v-btn>
        <span
          v-if="locales.findIndex(l => l.value === lang.value) !== locales.length -1"
        >|</span>
      </div>
    </v-btn-toggle>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  name: 'LanguageSelector',
   data() {
    return {
      selectedTab: null
    }
  },
  computed: {
    ...mapState([
      'locale',
      'locales'
    ]),
    localeIndex() {
      return this.locales.findIndex(l => l.value === this.locale)
    }
  },
  mounted() {
    this.resetSelectedTab()
  },
  methods: {
    ...mapActions([
      'setLocale'
    ]),
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    resetSelectedTab() {
      this.selectedTab = this.localeIndex;
    }
  }
}
</script>

<style>

.language-selector .v-btn.lang-button-active {
  font-weight: 700;
  font-size: 0.95rem;
}
.language-selector .v-btn.lang-button-active::before {
  opacity: 0;
}
</style>