<template>
  <v-footer
    app
    :color="backgroundColor"
    absolute
  >
    <v-container
      fluid
      class="py-0"
    >
      <v-row
        justify="space-between"
        align="center"
      >
        <div
          @click="toggleDarkMode"
        >
          <v-switch
            :input-value="darkModeEnabled"
            :value="darkModeEnabled"
          >
            <template v-slot:label>
              <v-icon small>
                {{ mdiMoonWaningCrescent }}
              </v-icon>
            </template>
          </v-switch>
        </div>
        <span
          id="copyright-msg"
        >
          &copy; {{ new Date().getFullYear() }} Taller DB
        </span>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import { mdiMoonWaningCrescent } from '@mdi/js'
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
  name: 'TheFooter',
  data() {
    return {
      mdiMoonWaningCrescent
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
#copyright-msg {
  font-size: 12;
  color: gray;
}
</style>
