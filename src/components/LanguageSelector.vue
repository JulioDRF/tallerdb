<template>
  <div
    class="language-selector"
    @mouseleave="resetSelectedTab"
  >
    <v-tabs
      :value="selectedTab"
    >
      <v-tab
        v-for="(lang, index) in locales"
        :key="lang.value"
        @mouseover="setSelectedTab(index)"
        @click="setLocale(lang.value)"
      >
        {{ lang.text }}
      </v-tab>
    </v-tabs>
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

</style>template